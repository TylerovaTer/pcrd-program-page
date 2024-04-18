import { Roboto } from 'next/font/google'

/**
 * @see: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
 */
const robotoFont = Roboto({
	weight: ['500', '700'],
	style: ['normal'],
	subsets: ['latin'],
})

export const bodyFont = robotoFont
