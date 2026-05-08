/**
 * @description 主题切换组件
 */
import { useEffect, useMemo, useState } from "react";

export default function ThemeToggle() {
	const prefersDark = useMemo(
		() => window.matchMedia("(prefers-color-scheme: dark)").matches,
		[],
	);

	const [isDark, setIsDark] = useState<boolean>(() => {
		try {
			const saved = localStorage.getItem("theme");
			if (saved === "dark") return true;
			if (saved === "light") return false;
			return prefersDark;
		} catch {
			return prefersDark;
		}
	});

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", isDark);
		try {
			localStorage.setItem("theme", isDark ? "dark" : "light");
		} catch { }
	}, [isDark]);

	return (
		<button
			type="button"
			role="switch"
			aria-checked={isDark}
			aria-label={isDark ? "切换到浅色模式" : "切换到深色模式"}
			onClick={() => setIsDark((v) => !v)}
			className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/70 px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200 shadow-sm hover:shadow transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
		>
			{!isDark ? (
				<svg
					className="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					role="img"
					aria-label="深色图标"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			) : (
				<svg
					className="h-4 w-4"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
					role="img"
					aria-label="浅色图标"
				>
					<circle cx="12" cy="12" r="4" />
					<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
				</svg>
			)}
			<span>{!isDark ? "深色模式" : "浅色模式"}</span>
		</button>
	);
}
