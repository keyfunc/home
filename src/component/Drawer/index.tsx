import type { DrawerProps } from "@/component/Drawer/type.ts";

function Drawer(props: DrawerProps) {
	const { open, width = "400px" } = props;

	return (
		<button
			type="button"
			className="absolute inset-0 bg-black/45 transition-opacity duration-300"
			style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
			onClick={() => props?.onClose?.()}
		>
			<div
				className="absolute top-0 left-0 h-full bg-white shadow-xl transition-transform duration-300"
				style={{
					width,
					transform: open ? "translateX(0)" : "translateX(-100%)",
				}}
			>
				{props?.children}
			</div>
		</button>
	);
}
export default Drawer;
