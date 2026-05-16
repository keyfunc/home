// 防抖函数
export function debounce<T extends (...args: any[]) => void>(
	fn: T,
	delay = 300,
	immediate = false,
) {
	let timer: ReturnType<typeof setTimeout> | null = null;

	return (...args: Parameters<T>) => {
		const shouldCallNow = immediate && !timer;

		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			timer = null;

			if (!immediate) {
				fn(...args);
			}
		}, delay);

		if (shouldCallNow) {
			fn(...args);
		}
	};
}

// 原生的 Toast
export function toast(message: string, duration = 2000) {
	const el = document.createElement("div");

	el.innerText = message;

	Object.assign(el.style, {
		position: "fixed",
		top: "20px",
		left: "50%",
		transform: "translateX(-50%)",
		padding: "10px 16px",
		background: "rgba(0, 0, 0, 0.75)",
		color: "#fff",
		borderRadius: "8px",
		fontSize: "14px",
		zIndex: "9999",
		opacity: "0",
		transition: "opacity 0.2s ease, transform 0.2s ease",
		pointerEvents: "none",
	});

	document.body.appendChild(el);

	requestAnimationFrame(() => {
		el.style.opacity = "1";
		el.style.transform = "translateX(-50%) translateY(8px)";
	});

	setTimeout(() => {
		el.style.opacity = "0";
		el.style.transform = "translateX(-50%) translateY(0)";

		setTimeout(() => {
			el.remove();
		}, 200);
	}, duration);
}
