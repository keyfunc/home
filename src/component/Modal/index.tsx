import type { ModalProps } from "./type";

function Modal(props: ModalProps) {
	const { open, onClose, children, title } = props;

	if (!open) return null;

	return (
		<button
			type="button"
			className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
			onClick={onClose}
		>
			<div className="relative bg-white rounded-md w-[90vw] max-w-md">
				<div className="flex justify-between items-center p-4">
					{title && <span className="text-md font-bold pl-5">{title}</span>}
					<img src="/svg/close.svg" className="w-5 h-5" alt="close-icon" />
				</div>
				<div className="max-h-[80vh] overflow-y-auto">{children}</div>
			</div>
		</button>
	);
}

export default Modal;
