import * as React from 'react'
import { User } from '@auth/core/types'

import { ContentResource } from '@coursebuilder/core/types'

import { ResourceChatAssistant } from '../chat-assistant/resource-chat-assistant'
import { ResourceTool } from './edit-resources-tool-panel'

export function EditResourcesToolPanelContents({
	resource,
	activeToolId,
	availableWorkflows,
	children,
	sendResourceChatMessage,
	hostUrl,
	user,
	tools = [],
}: {
	resource: ContentResource & {
		fields: {
			body?: string | null
			title?: string | null
			slug: string
		}
	}
	activeToolId: string
	availableWorkflows?: { value: string; label: string; default?: boolean }[]
	children?: React.ReactNode
	sendResourceChatMessage: (options: {
		resourceId: string
		messages: any[]
		selectedWorkflow?: string
	}) => Promise<void>
	hostUrl: string
	user?: User | null
	tools?: ResourceTool[]
}) {
	console.log({ activeToolId, tools })
	return (
		<>
			{activeToolId === 'assistant' && (
				<ResourceChatAssistant
					resource={resource}
					availableWorkflows={availableWorkflows}
					sendResourceChatMessage={sendResourceChatMessage}
					hostUrl={hostUrl}
					user={user}
				/>
			)}
			{tools.map((tool) => (
				<>{activeToolId === tool.id && tool.toolComponent}</>
			))}
			{children}
		</>
	)
}
