import type { ReactNode } from "react";

export interface ModalProps {
	open: boolean;
	title?: ReactNode | string;
	children?: ReactNode;
	onClose?: () => void;
}
