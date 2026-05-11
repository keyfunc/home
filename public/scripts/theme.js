function initializeTheme() {
	// 读取用户手动选择过的主题
	const theme = localStorage.getItem("theme");

	// 选择深色主题，或未选择主题但系统偏好为深色时，提前启用 dark class
	if (
		theme === "dark" ||
		(!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		// 浅色主题时移除 dark class，避免首屏样式残留
		document.documentElement.classList.remove("dark");
	}
}

// 引入脚本立即执行
initializeTheme();
