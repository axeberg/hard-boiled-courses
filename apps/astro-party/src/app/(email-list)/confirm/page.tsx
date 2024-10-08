import { Suspense } from 'react'
import { Metadata } from 'next/types'
import { Email } from '@/app/(email-list)/_components/email'
import { Signature } from '@/app/(email-list)/_components/signature'
import { Layout } from '@/components/layout'

export const metadata: Metadata = {
	title: 'Confirm your subscription',
}

export default async function ConfirmSubscriptionPage() {
	return (
		<Layout withBackground={false} withBorder={false}>
			<div className="mx-auto flex max-w-xl flex-col items-center justify-center py-24 text-center font-light">
				<Image />
				<h1 className="font-text font-heading mx-auto w-full max-w-lg py-8 text-3xl font-bold sm:text-4xl">
					Check Your Email
				</h1>
				<div className="prose sm:prose prose-p:font-medium prose-sm prose-p:text-balance mx-auto">
					<p>
						We sent an email to{' '}
						<Suspense>
							<Email />
						</Suspense>{' '}
						with a confirmation link. Click the link to finish your
						subscription.
					</p>
					<p>
						Didn&apos;t get an email? Check your spam folder or other filters
						and add <strong>{process.env.NEXT_PUBLIC_SUPPORT_EMAIL}</strong> to
						your contacts.
					</p>
					<p>
						Thanks, <br />
						<Signature />
					</p>
				</div>
			</div>
		</Layout>
	)
}

const Image = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="183"
			height="100"
			fill="none"
			viewBox="0 0 183 100"
		>
			<path
				fill="#00934E"
				d="M16.001 25.074a2 2 0 0 1 2-2.074h146.924a2 2 0 0 1 2 2v59.548c0 3.767-2.997 6.86-6.762 6.992-56.12 1.97-79.726 1.927-135.204-.01a7.006 7.006 0 0 1-6.757-6.735l-2.2-59.721Z"
			/>
			<path
				fill="#F5D000"
				stroke="#000"
				strokeWidth="3"
				d="M16.73 23.992a5 5 0 0 1 5-5h140a5.002 5.002 0 0 1 5 5v58a4.998 4.998 0 0 1-5 5h-140a5 5 0 0 1-5-5v-58Z"
			/>
			<path
				fill="#DDBC00"
				d="M89.346 55.781 19.76 22.896c-.965-.456-.64-1.904.427-1.904H162.82c1.065 0 1.392 1.443.432 1.902L94.498 55.77a6 6 0 0 1-5.152.011Z"
			/>
			<path
				fill="#F5D000"
				stroke="#000"
				strokeWidth="3"
				d="M89.92 50.632 20.7 20.912c-1-.43-.694-1.92.394-1.92h139.413c1.081 0 1.393 1.476.405 1.914L93.92 50.608a5 5 0 0 1-4 .024Z"
			/>
			<path
				fill="#EB5228"
				stroke="#000"
				strokeWidth="3"
				d="m160.73 6 5.291 6.727 8.497-1.016-1.015 8.498 6.727 5.291-6.727 5.29 1.015 8.499-8.497-1.016L160.73 45l-5.291-6.727-8.498 1.016 1.016-8.498-6.727-5.291 6.727-5.29-1.016-8.499 8.498 1.016L160.73 6Z"
			/>
			<path
				fill="#000"
				d="M161.558 32.47c-.686 0-1.166-.137-1.44-.411-.275-.274-.412-.761-.412-1.46v-10.72c0-.685.137-1.165.412-1.44.274-.274.761-.411 1.46-.411.686 0 1.166.144 1.44.432.275.275.412.76.412 1.46v10.7c0 .686-.137 1.166-.412 1.44-.274.274-.761.41-1.46.41Zm-2.057-8.64c-.467.412-.892.61-1.276.597-.37-.014-.775-.254-1.214-.72-.452-.48-.665-.933-.637-1.358.027-.425.315-.877.864-1.357l2.612-2.346c.453-.411.871-.596 1.255-.555.398.027.809.274 1.234.74.439.467.638.913.597 1.338-.027.41-.315.864-.864 1.357l-2.571 2.304Z"
			/>
			<path
				fill="#fff"
				stroke="#000"
				strokeWidth="3"
				d="M24.925 63a2 2 0 0 1 2-2h128a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-128a2 2 0 0 1-2-2V63Z"
			/>
			<path
				fill="#000"
				d="M78.419 68.746h-1.4a1.366 1.366 0 0 0-.157-.483 1.227 1.227 0 0 0-.303-.364 1.338 1.338 0 0 0-.428-.23 1.64 1.64 0 0 0-.521-.08c-.34 0-.634.084-.886.253a1.62 1.62 0 0 0-.585.728c-.138.318-.207.703-.207 1.157 0 .467.069.859.207 1.176.141.318.337.558.589.72.25.161.542.242.872.242.185 0 .357-.024.515-.073a1.234 1.234 0 0 0 .732-.563c.083-.136.14-.291.172-.466l1.4.006a2.612 2.612 0 0 1-.85 1.614c-.241.218-.529.39-.863.518a3.172 3.172 0 0 1-1.128.189 3.088 3.088 0 0 1-1.566-.397 2.814 2.814 0 0 1-1.087-1.147c-.264-.5-.396-1.107-.396-1.819 0-.714.134-1.32.402-1.822.269-.5.633-.882 1.093-1.144.46-.264.978-.396 1.554-.396.379 0 .73.053 1.054.16.326.106.615.262.866.466a2.4 2.4 0 0 1 .614.745c.16.294.262.63.307 1.01Zm3.185 4.35c-.497 0-.926-.106-1.288-.317a2.166 2.166 0 0 1-.834-.888c-.196-.381-.294-.824-.294-1.326 0-.507.098-.95.294-1.33a2.14 2.14 0 0 1 .834-.888c.362-.213.791-.32 1.288-.32.496 0 .924.106 1.284.32.363.21.642.507.838.888.196.38.294.823.294 1.33 0 .502-.098.945-.294 1.326a2.15 2.15 0 0 1-.838.888c-.36.211-.788.317-1.284.317Zm.006-1.055a.846.846 0 0 0 .566-.192 1.19 1.19 0 0 0 .342-.53c.079-.224.118-.478.118-.764 0-.286-.04-.54-.118-.764-.077-.224-.19-.4-.342-.53a.837.837 0 0 0-.566-.195.867.867 0 0 0-.575.195c-.154.13-.27.306-.349.53a2.349 2.349 0 0 0-.115.764c0 .286.039.54.115.764.08.224.195.4.349.53a.876.876 0 0 0 .575.192Zm4.657-1.88V73h-1.362v-4.91h1.298v.867h.057a1.37 1.37 0 0 1 .547-.677c.255-.169.566-.253.93-.253.34 0 .638.075.892.224.253.149.45.362.59.639.142.275.212.603.212.984V73h-1.362v-2.883c.002-.3-.074-.535-.23-.703-.155-.17-.37-.256-.642-.256a.977.977 0 0 0-.486.119.824.824 0 0 0-.326.345 1.19 1.19 0 0 0-.118.54Zm6.877-2.07v1.023h-3.03V68.09h3.03ZM90.807 73v-5.264c0-.356.07-.65.208-.885.14-.234.333-.41.576-.528.242-.117.518-.175.827-.175.21 0 .4.016.572.048.175.032.305.06.39.086l-.243 1.023a1.706 1.706 0 0 0-.198-.048 1.237 1.237 0 0 0-.236-.023c-.2 0-.34.047-.419.141-.079.092-.118.22-.118.387V73h-1.358Zm3.168 0v-4.91h1.362V73h-1.362Zm.684-5.542a.74.74 0 0 1-.52-.201.653.653 0 0 1-.215-.49.64.64 0 0 1 .214-.482.733.733 0 0 1 .521-.204c.203 0 .375.068.518.204a.648.648 0 0 1 0 .971.728.728 0 0 1-.517.202ZM96.428 73v-4.91h1.32v.857h.05c.09-.304.24-.534.451-.69.211-.158.454-.236.73-.236a2.064 2.064 0 0 1 .427.047v1.209a2.385 2.385 0 0 0-.575-.073c-.2 0-.38.043-.537.13a.965.965 0 0 0-.505.889V73h-1.361Zm3.682 0v-4.91h1.298v.867h.057a1.36 1.36 0 0 1 .512-.68c.238-.167.524-.25.856-.25.337 0 .624.084.86.252.237.167.394.392.473.678h.051c.1-.281.281-.506.544-.674.264-.17.576-.256.936-.256.458 0 .83.146 1.115.438.288.29.432.7.432 1.233V73h-1.358v-3.033c0-.273-.073-.477-.218-.614a.762.762 0 0 0-.543-.204c-.247 0-.44.079-.579.236-.138.156-.207.361-.207.617V73h-1.32v-3.062c0-.24-.07-.432-.208-.575a.711.711 0 0 0-.54-.214.75.75 0 0 0-.409.115.792.792 0 0 0-.285.316 1.01 1.01 0 0 0-.105.473V73h-1.362Z"
			/>
		</svg>
	)
}
