import { NavData, TagData } from "./data";

function TodoNav() {
	return (
		<div className="w-full h-full p-8">
			<h1 className="text-left text-3xl">Todo</h1>
			<div className="flex flex-col gap-5 pt-8">
				{NavData.map((item) => (
					<div
						key={item.label}
						className="flex gap-6 items-center hover:bg-amber-50"
					>
						<img src={item.iconUrl} alt={item.label} className="w-4 h-4" />
						<span className="flex-1 text-left">{item.label}</span>
						<span className="w-5 h-5 p-1 text-xs rounded-full bg-gray-300 grid place-content-center">
							{item.value}
						</span>
					</div>
				))}
			</div>
			<div className="border border-gray-200 my-8 mx-2"></div>
			<div className="flex flex-col gap-5 pl-1">
				{TagData.map((item) => (
					<div
						key={item.label}
						className="flex gap-5 items-center justify-between hover:bg-amber-50"
					>
						<span className="w-2 h-2 rounded-full bg-black"></span>
						<span className="flex-1 text-left">{item.label}</span>
						<span className="w-5 h-5 p-1 text-xs rounded-full bg-gray-300 grid place-content-center">
							{item.value}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
export default TodoNav;
