import { ImageResponse } from 'next/og'
import { getTip } from '@/lib/tips-query'

export const revalidate = 60

export default async function TipOG({ params }: { params: { slug: string } }) {
	const resource = await getTip(params.slug)

	return new ImageResponse(
		(
			<div
				tw="flex p-10 h-full w-full bg-white flex-col"
				style={{
					...font('sans'),
				}}
			>
				<main tw="flex flex-col gap-5 h-full flex-grow items-start pb-24 justify-center px-16">
					<div tw="text-[60px] text-white">{resource?.fields?.title}</div>
				</main>
			</div>
		),
		{
			width: 1200,
			height: 630,
		},
	)
}

// lil helper for more succinct styles
function font(fontFamily: string) {
	return { fontFamily }
}
