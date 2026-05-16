import { useState } from "react";
import type { MoreMenuProps } from "./type";

function MoreMenu(props: MoreMenuProps) {
	const { items } = props;
	const [open, setOpen] = useState(false);

	return (
		<div className="relative ">
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				className="flex size-8 items-center justify-center rounded-lg transition-colors duration-200 cursor-pointer"
			>
				<span className="flex flex-col gap-0.5">
					<span className="size-1 rounded-full bg-slate-500" />
					<span className="size-1 rounded-full bg-slate-500" />
					<span className="size-1 rounded-full bg-slate-500" />
				</span>
			</button>

			{open && (
				<div className="absolute right-5 top-5 z-50 w-25 border rounded-sm border-slate-100 bg-white p-1 shadow-lg">
					{items.map((item) => (
						<button
							key={item.label}
							type="button"
							onClick={() => {
								props?.onItemClick?.(item);
								setOpen(false);
							}}
							className="block w-full px-3 py-1 text-left text-sm transition-colors duration-200 cursor-pointer"
						>
							{item.label}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
export default MoreMenu;
