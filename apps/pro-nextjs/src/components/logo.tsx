import { cn } from '@/utils/cn'

export const Logo: React.FC<{ className?: string; onDark?: boolean }> = ({
	className,
	onDark = false,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={cn(className)}
			width={className ? undefined : 212}
			height={className ? undefined : 49}
			fill="none"
			viewBox="0 0 212 49"
		>
			<path
				fill={className ? 'currentColor' : onDark ? '#fff' : '#000'}
				fillRule="evenodd"
				d="m44.785 4.847 9.188 15.915a7.715 7.715 0 0 1 0 7.692L49.95 35.42 30.08 1h8.044a7.716 7.716 0 0 1 6.662 3.847ZM10.215 44.37 1.027 28.454a7.715 7.715 0 0 1 0-7.692l4.023-6.967 19.871 34.42h-8.044a7.714 7.714 0 0 1-6.662-3.846Zm38.695-7.164a7.033 7.033 0 0 1-3.33.83 7.111 7.111 0 0 1-6.137-3.542L22.017 4.315A6.565 6.565 0 0 0 16.274 1a6.562 6.562 0 0 0-5.742 3.315L6.089 12.01a7.039 7.039 0 0 1 3.33-.83 7.114 7.114 0 0 1 6.137 3.541l17.427 30.177a6.564 6.564 0 0 0 5.742 3.314 6.562 6.562 0 0 0 5.741-3.314l4.444-7.693Zm144.444 4.937c.838-.756 1.256-1.969 1.256-3.643V18.07h-3.533V38.5c0 .64-.15 1.1-.45 1.38-.3.278-.811.418-1.535.418h-1.209v2.976h1.829c1.591 0 2.805-.378 3.642-1.132Zm-2.744-28.599c0 .642.217 1.178.651 1.613.435.434.972.65 1.612.65.621 0 1.147-.216 1.582-.65.434-.435.651-.971.651-1.613 0-.64-.217-1.178-.651-1.611a2.157 2.157 0 0 0-1.582-.652c-.641 0-1.177.218-1.612.652-.434.433-.651.971-.651 1.611Zm-57.783 21.608h-3.533l-10.634-16.09v16.09h-3.534V13.575h3.534l10.633 16.058V13.575h3.534v21.576ZM79.29 23.123c-.516.971-1.344 1.762-2.48 2.37-1.136.61-2.593.915-4.37.915h-3.906v8.742H65V13.606h7.44c1.654 0 3.055.284 4.202.853 1.147.568 2.005 1.338 2.573 2.31.567.972.852 2.056.852 3.254 0 1.096-.26 2.129-.776 3.1Zm-3.843-.512c.661-.61.992-1.473.992-2.589 0-2.356-1.333-3.534-4-3.534h-3.905v7.037h3.906c1.344.002 2.345-.303 3.007-.914Zm13.593-4.092c.856-.484 1.875-.728 3.054-.728v3.659h-.899c-1.384 0-2.433.352-3.147 1.053-.712.703-1.07 1.922-1.07 3.659v8.99h-3.533V18.07h3.534v2.48a5.55 5.55 0 0 1 2.06-2.03Zm6.278 12.71c.744 1.335 1.766 2.368 3.068 3.1 1.303.734 2.759 1.101 4.371 1.101 1.633 0 3.126-.367 4.48-1.1a8.149 8.149 0 0 0 3.208-3.115c.786-1.344 1.179-2.883 1.179-4.62s-.383-3.275-1.147-4.62c-.765-1.343-1.809-2.376-3.131-3.1-1.323-.723-2.8-1.085-4.433-1.085s-3.112.362-4.434 1.085c-1.323.724-2.366 1.757-3.13 3.1-.766 1.345-1.148 2.885-1.148 4.62 0 1.757.373 3.302 1.117 4.635Zm11.934-1.472c-.496.869-1.142 1.519-1.938 1.953a5.274 5.274 0 0 1-2.557.652c-1.426 0-2.609-.5-3.55-1.503-.94-1.003-1.41-2.424-1.41-4.264 0-1.24.227-2.289.682-3.147.454-.858 1.07-1.503 1.845-1.937a5.078 5.078 0 0 1 2.526-.651c.91 0 1.757.216 2.543.65.785.435 1.415 1.082 1.891 1.938.475.858.712 1.907.712 3.147 0 1.24-.248 2.294-.744 3.162Zm32.705-1.829h13.051a11.13 11.13 0 0 0 .124-1.735c0-1.654-.351-3.117-1.054-4.387a7.444 7.444 0 0 0-2.945-2.961c-1.262-.701-2.698-1.054-4.31-1.054-1.673 0-3.156.362-4.448 1.086-1.292.723-2.294 1.751-3.007 3.084-.714 1.333-1.07 2.878-1.07 4.634 0 1.757.366 3.302 1.1 4.635.734 1.334 1.747 2.367 3.038 3.1 1.292.733 2.754 1.1 4.387 1.1 2.005 0 3.685-.5 5.038-1.503 1.354-1.002 2.289-2.289 2.806-3.86h-3.813c-.786 1.592-2.13 2.388-4.031 2.388-1.322 0-2.438-.414-3.347-1.24-.91-.826-1.417-1.923-1.519-3.287Zm8.09-5.983c.91.786 1.375 1.829 1.396 3.131h-9.456c.165-1.323.682-2.372 1.55-3.147.868-.774 1.912-1.162 3.131-1.162 1.344 0 2.47.392 3.379 1.178Zm15.873 4.557 5.518 8.649h-3.999l-3.689-5.797-3.472 5.797h-3.689l5.517-8.4-5.517-8.681h3.998l3.69 5.797 3.472-5.797h3.689l-5.518 8.432Zm12.276 3.907v-9.457h4.156V18.07h-4.155v-4.248h-3.565v4.248h-2.015v2.884h2.015v9.455c0 1.673.422 2.883 1.27 3.627.849.744 2.068 1.116 3.659 1.116h2.79v-2.945h-2.171c-.724 0-1.235-.14-1.535-.418-.299-.28-.449-.739-.449-1.38Zm7.223 4.309c-.434-.435-.651-.972-.651-1.612 0-.64.217-1.18.651-1.612.435-.435.972-.652 1.612-.652.621 0 1.147.217 1.582.652.434.434.651.971.651 1.612 0 .641-.217 1.178-.651 1.612a2.153 2.153 0 0 1-1.582.65c-.641 0-1.177-.217-1.612-.65Zm18.429-.016c-1.065-.485-1.907-1.147-2.526-1.984a4.937 4.937 0 0 1-.992-2.806h3.658c.062.724.407 1.329 1.037 1.814.631.486 1.422.729 2.371.729.993 0 1.762-.191 2.31-.574.547-.382.821-.873.821-1.473 0-.64-.304-1.116-.914-1.426-.609-.31-1.576-.651-2.898-1.023-1.282-.351-2.325-.692-3.131-1.023a5.48 5.48 0 0 1-2.092-1.52c-.589-.681-.884-1.58-.884-2.696 0-.91.268-1.74.805-2.496.538-.754 1.308-1.349 2.31-1.782 1.003-.434 2.154-.651 3.457-.651 1.942 0 3.508.49 4.696 1.472 1.189.982 1.824 2.321 1.906 4.015h-3.534c-.062-.765-.372-1.374-.93-1.828-.558-.455-1.312-.682-2.263-.682-.93 0-1.643.176-2.138.527-.496.352-.745.817-.745 1.394 0 .456.166.838.496 1.147.331.311.733.554 1.209.729.475.176 1.178.397 2.108.665 1.24.331 2.258.666 3.054 1.008a5.691 5.691 0 0 1 2.061 1.503c.579.662.879 1.54.9 2.635 0 .972-.269 1.84-.807 2.604-.537.765-1.297 1.363-2.279 1.798-.981.434-2.134.651-3.456.651-1.342.001-2.545-.242-3.61-.727Z"
				clipRule="evenodd"
			/>
		</svg>
	)
}

export const LogoMark: React.FC<{ className?: string; onDark?: boolean }> = ({
	className,
	onDark = false,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={cn(className)}
			width={className ? undefined : 30}
			height={className ? undefined : 26}
			fill="none"
			viewBox="0 0 30 26"
		>
			<path
				fill={className ? 'currentColor' : onDark ? '#fff' : '#000'}
				d="m.56 15.002 5.012 8.696A4.205 4.205 0 0 0 9.206 25.8h4.388L2.754 6.99.56 10.8a4.222 4.222 0 0 0 0 4.203Zm28.88-4.203-5.012-8.697A4.206 4.206 0 0 0 20.794 0h-4.388l10.84 18.809L29.44 15a4.221 4.221 0 0 0 0-4.202Zm-2.762 8.984a3.835 3.835 0 0 1-1.817.454 3.877 3.877 0 0 1-3.346-1.936l-9.506-16.49A3.578 3.578 0 0 0 8.877 0a3.579 3.579 0 0 0-3.132 1.812L3.322 6.017a3.837 3.837 0 0 1 1.817-.454c1.375 0 2.657.742 3.346 1.936l9.506 16.49a3.579 3.579 0 0 0 3.132 1.811 3.578 3.578 0 0 0 3.132-1.812l2.423-4.205Z"
			/>
		</svg>
	)
}