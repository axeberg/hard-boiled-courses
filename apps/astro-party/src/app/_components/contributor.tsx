'use client'

import React from 'react'
import Image from 'next/image'
import config from '@/config'
import { cn } from '@/utils/cn'

export const Contributor: React.FC<{ className?: string }> = ({
	className,
}) => {
	return (
		<div className={cn('flex items-center gap-2 font-medium', className)}>
			<Image
				src={require('../../../public/jason-lengstorf.png')}
				alt={config.author}
				width={40}
				height={40}
				className="bg-primary rounded-full"
			/>
			<span>{config.author}</span>
		</div>
	)
}
