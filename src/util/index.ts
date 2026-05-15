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
