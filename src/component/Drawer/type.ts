import type { CSSProperties, ReactNode } from "react";

export interface DrawerProps {
	open: boolean;
	placement?: "top" | "bottom" | "left" | "right";
	mask?: boolean;
	maskClosable?: boolean;
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	width?: string;
	height?: string;
	onClose?: () => void;
}
