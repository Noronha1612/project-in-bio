import { RefObject, useEffect } from 'react'

/**
 * Hook that triggers a callback when a click is detected outside of the specified ref element.
 *
 * @param ref - The ref of the element to detect clicks outside of.
 * @param handler - The callback function to execute when a click outside is detected.
 */
export const useOnClickOutside = (
	ref: RefObject<HTMLElement | null>,
	handler: (event: MouseEvent | TouchEvent) => void
) => {
	const listener = (event: MouseEvent | TouchEvent) => {
		if (!ref.current || ref.current.contains(event.target as Node)) {
			return
		}

		handler(event)
	}

	useEffect(() => {
		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [ref, handler])
}
