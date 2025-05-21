'use client'

import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import {
	useRef,
	useState,
	PropsWithChildren,
	createContext,
	useContext,
} from 'react'
import { createPortal } from 'react-dom'

interface ModalTriggerProps {
	content: React.ReactNode
}

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

export const ModalTrigger = ({
	children,
	content,
}: PropsWithChildren<ModalTriggerProps>) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div onClick={() => setIsOpen(true)}>{children}</div>

			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
				{content}
			</Modal>
		</>
	)
}

interface ModalContextProps {
	onClose: () => void
}

const ModalContext = createContext({} as ModalContextProps)

export const Modal = ({
	children,
	isOpen,
	onClose,
}: PropsWithChildren<ModalProps>) => {
	const ref = useRef<HTMLDivElement>(null)

	useOnClickOutside(ref, onClose)

	if (!isOpen || typeof window === 'undefined') {
		// If the modal is not open or if the window is not defined (SSR), return null
		// to prevent rendering the modal on the server side.
		return null
	}

	return createPortal(
		<ModalContextProvider onClose={onClose}>
			<div className='fixed inset-0 z-50 flex items-center justify-center bg-[#787878]/10 backdrop-blur-xs'>
				<div ref={ref}>{children}</div>
			</div>
		</ModalContextProvider>,

		document.body
	)
}

const ModalContextProvider = ({
	children,
	onClose,
}: PropsWithChildren<{
	onClose: () => void
}>) => {
	return (
		<ModalContext.Provider value={{ onClose }}>
			{children}
		</ModalContext.Provider>
	)
}

export const useModalContext = () => useContext(ModalContext)
