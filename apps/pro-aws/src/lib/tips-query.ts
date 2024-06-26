'use server'

import { revalidatePath, revalidateTag } from 'next/cache'
import { courseBuilderAdapter, db } from '@/db'
import {
	contentContributions,
	contentResource,
	contentResourceResource,
	contributionTypes,
} from '@/db/schema'
import { Tip, TipSchema, type NewTip, type TipUpdate } from '@/lib/tips'
import { getServerAuthSession } from '@/server/auth'
import { guid } from '@/utils/guid'
import slugify from '@sindresorhus/slugify'
import { and, asc, desc, eq, like, or, sql } from 'drizzle-orm'
import { z } from 'zod'

export async function deleteTip(id: string) {
	const { session, ability } = await getServerAuthSession()
	const user = session?.user
	if (!user || !ability.can('delete', 'Content')) {
		throw new Error('Unauthorized')
	}

	const tip = await db.query.contentResource.findFirst({
		where: eq(contentResource.id, id),
		with: {
			resources: true,
		},
	})

	if (!tip) {
		throw new Error(`Tip with id ${id} not found.`)
	}

	await db
		.delete(contentResourceResource)
		.where(eq(contentResourceResource.resourceOfId, id))

	await db.delete(contentResource).where(eq(contentResource.id, id))

	revalidateTag('tips')
	revalidateTag(id)
	revalidatePath('/tips')

	return true
}

export async function getTip(slug: string): Promise<Tip | null> {
	const tip = await db.query.contentResource.findFirst({
		where: and(
			or(
				eq(sql`JSON_EXTRACT (${contentResource.fields}, "$.slug")`, slug),
				eq(contentResource.id, slug),
			),
			eq(contentResource.type, 'tip'),
		),
		with: {
			resources: {
				with: {
					resource: true,
				},
				orderBy: asc(contentResourceResource.position),
			},
		},
	})

	const tipParsed = TipSchema.safeParse(tip)
	if (!tipParsed.success) {
		console.error('Error parsing tip', tipParsed)
		return null
	}

	return tipParsed.data
}

export async function getTipsModule(): Promise<Tip[]> {
	const tips = await db.query.contentResource.findMany({
		where: eq(contentResource.type, 'tip'),
		orderBy: desc(contentResource.createdAt),
	})

	const tipsParsed = z.array(TipSchema).safeParse(tips)
	if (!tipsParsed.success) {
		console.error('Error parsing tips', tipsParsed)
		return []
	}

	return tipsParsed.data
}

export async function createTip(input: NewTip) {
	const { session, ability } = await getServerAuthSession()
	const user = session?.user

	if (!user || !ability.can('create', 'Content')) {
		throw new Error('Unauthorized')
	}

	const newTipId = `tip_${guid()}`

	const videoResource = await courseBuilderAdapter.getVideoResource(
		input.videoResourceId,
	)

	if (!videoResource) {
		throw new Error('🚨 Video Resource not found')
	}

	const tip = TipSchema.parse(
		await courseBuilderAdapter.createContentResource({
			id: newTipId,
			type: 'tip',
			createdById: user.id,
			fields: {
				title: input.title,
				state: 'draft',
				visibility: 'unlisted',
				slug: slugify(`${input.title}~${guid()}`),
			},
		}),
	)

	if (tip) {
		await db
			.insert(contentResourceResource)
			.values({ resourceOfId: tip.id, resourceId: input.videoResourceId })

		const contributionType = await db.query.contributionTypes.findFirst({
			where: eq(contributionTypes.slug, 'author'),
		})

		if (contributionType) {
			const contentContributionValues = {
				id: `cc-${guid()}`,
				userId: user.id,
				contentId: tip.id,
				contributionTypeId: contributionType.id,
			}
			await db.insert(contentContributions).values(contentContributionValues)
		}

		revalidatePath('/tips')

		return tip
	} else {
		throw new Error('🚨 Error creating tip: Tip not found')
	}
}

export async function updateTip(input: TipUpdate) {
	const { session, ability } = await getServerAuthSession()
	const user = session?.user
	if (!user || !ability.can('update', 'Content')) {
		throw new Error('Unauthorized')
	}

	const currentTip = await getTip(input.id)

	if (!currentTip) {
		throw new Error(`Tip with id ${input.id} not found.`)
	}

	let tipSlug = currentTip.fields.slug

	if (input.fields.title !== currentTip.fields.title) {
		const splitSlug = currentTip?.fields.slug.split('~') || ['', guid()]
		tipSlug = `${slugify(input.fields.title)}~${splitSlug[1] || guid()}`
	}

	return courseBuilderAdapter.updateContentResourceFields({
		id: currentTip.id,
		fields: {
			...currentTip.fields,
			...input.fields,
			slug: tipSlug,
		},
	})
}
