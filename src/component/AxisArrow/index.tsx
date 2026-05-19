import Icon from "@/component/Icon";
import type { AxisArrowProps } from "./type";

const arrowRotateMap = {
	right: "0deg",
	left: "180deg",
	down: "90deg",
	up: "-90deg",
};

// 水平箭头组件
function HorizontalAxisArrow(props: AxisArrowProps) {
	const { direction = "right", length = "100%", dashed = true } = props;
	const color = props.color || "#000000";
	const reverse = direction === "left";
	const lineStyle: React.CSSProperties = {
		width: length,
		borderTopWidth: "2px",
		borderStyle: dashed ? "dashed" : "solid",
		borderColor: color,
	};

	return (
		<div className="inline-flex items-center">
			{reverse && (
				<Icon
					name="chevronRight"
					size={16}
					color={color}
					style={{ rotate: arrowRotateMap[direction] }}
					className="h-4 w-4 shrink-0 translate-x-1"
				/>
			)}

			<div style={lineStyle} className="relative">
				{props.title && (
					<div
						className="absolute bottom-4 font-bold left-1/2 -translate-x-1/2 text-xs text-black"
						style={{
							color,
							letterSpacing: "2px",
						}}
					>
						{props.title}
					</div>
				)}
			</div>

			{!reverse && (
				<Icon
					name="chevronRight"
					size={16}
					color={color}
					style={{ rotate: arrowRotateMap[direction] }}
					className="h-4 w-4 shrink-0 -translate-x-1"
				/>
			)}
		</div>
	);
}

// 垂直箭头组件
function VerticalAxisArrow(props: AxisArrowProps) {
	const { direction = "down", length = "100%", dashed = true } = props;
	const color = props.color || "#000000";
	const reverse = direction === "up";

	const lineStyle: React.CSSProperties = {
		height: length,
		borderLeftWidth: "2px",
		borderStyle: dashed ? "dashed" : "solid",
		borderColor: color,
	};

	return (
		<div className="inline-flex flex-col items-center">
			{reverse && (
				<Icon
					name="chevronRight"
					size={16}
					color={color}
					style={{ rotate: arrowRotateMap[direction] }}
					className="h-4 w-4 shrink-0 translate-y-1"
				/>
			)}

			<div style={lineStyle} className="relative">
				{props.title && (
					<div
						className="absolute top-1/2 right-4 -translate-y-1/2 text-xs text-black"
						style={{
							color,
							writingMode: "vertical-rl",
							letterSpacing: "2px",
						}}
					>
						{props.title}
					</div>
				)}
			</div>

			{!reverse && (
				<Icon
					name="chevronRight"
					size={16}
					color={color}
					style={{ rotate: arrowRotateMap[direction] }}
					className="h-4 w-4 shrink-0 -translate-y-1"
				/>
			)}
		</div>
	);
}

function AxisArrow(props: AxisArrowProps) {
	const { direction = "right" } = props;

	if (direction === "up" || direction === "down") {
		return <VerticalAxisArrow {...props} />;
	}

	return <HorizontalAxisArrow {...props} />;
}

export default AxisArrow;
