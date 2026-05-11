/**
 * @description 主题切换组件
 */
import { useTheme } from "@/hook/useTheme";

export default function ThemeToggle() {
	const { isDark, toggleTheme } = useTheme();
	const iconSrc = isDark ? "/svg/sun.svg" : "/svg/moon.svg";

	return (
		<div
			role="switch"
			aria-checked={isDark}
			aria-label={isDark ? "切换到浅色模式" : "切换到深色模式"}
			tabIndex={0}
			onClick={toggleTheme}
			className="group inline-flex cursor-pointer select-none items-center gap-2 rounded-full border border-neutral-200/80 bg-white/75 px-4 py-2 text-sm text-neutral-700 backdrop-blur-md transition-colors duration-200 dark:border-white/10 dark:bg-white/10 dark:text-neutral-200"
		>
			<img
				src={iconSrc}
				alt=""
				aria-hidden="true"
				className="h-4 w-4 dark:invert"
			/>
			<span>{!isDark ? "深色" : "浅色"}</span>
		</div>
	);
}
