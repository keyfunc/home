import type { CSSProperties } from "react";
import type { IconName } from "./data";

export interface IconProps {
	/** 图标名称 */
	name: IconName;
	/** 图标尺寸 */
	size?: number | string;
	/** 图标颜色 */
	color?: string;
	/** 图标无障碍标题 */
	title?: string;
	/** 图标 className */
	className?: string;
	/** 图标内联样式 */
	style?: CSSProperties;
}
