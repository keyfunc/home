import { iconMap } from "./data";
import type { IconProps } from "./type";

function Icon(props: IconProps) {
	const { name, size = 16, color, title, className, style } = props;
	const icon = iconMap[name];

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={icon.viewBox}
			width={size}
			height={size}
			fill="currentColor"
			focusable="false"
			role={title ? "img" : undefined}
			aria-hidden={title ? undefined : true}
			aria-label={title}
			className={className}
			style={{
				color,
				display: "inline-block",
				flexShrink: 0,
				...style,
			}}
		>
			<path d={icon.path} />
		</svg>
	);
}

export default Icon;
