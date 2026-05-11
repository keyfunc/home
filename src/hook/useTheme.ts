import { useEffect, useState } from "react";

/** 主题模式 */
export type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

/** 主题切换状态 */
export interface UseThemeResult {
	/** 当前主题是否为深色模式 */
	isDark: boolean;
	/** 当前主题模式 */
	theme: ThemeMode;
	/** 切换深浅主题 */
	toggleTheme: () => void;
}

function getInitialTheme(): ThemeMode {
	const saved = localStorage.getItem(THEME_STORAGE_KEY);
	if (saved === "dark" || saved === "light") return saved;

	// 没有保存主题时，跟随系统深色模式偏好
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}

	return "light";
}

/** 深浅主题切换 hook */
export function useTheme(): UseThemeResult {
	const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
	const isDark = theme === "dark";

	useEffect(() => {
		// 同步 html 的 dark class，用于触发 Tailwind 深色样式
		document.documentElement.classList.toggle("dark", isDark);
		localStorage.setItem(THEME_STORAGE_KEY, theme);
	}, [isDark, theme]);

	const toggleTheme = () => {
		setTheme((currentTheme) => {
			if (currentTheme === "dark") {
				return "light";
			}

			return "dark";
		});
	};

	return {
		isDark,
		theme,
		toggleTheme,
	};
}
