import type { SliderProps } from "./type";

function Slider(props: SliderProps) {
	const {
		value,
		min = 0,
		max = 100,
		step = 1,
		showValue = true,
		onChange,
		className = "",
		disabled,
		...inputProps
	} = props;
	const currentValue = Math.round(value);
	const percent = max === min ? 0 : ((currentValue - min) / (max - min)) * 100;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(Math.round(Number(event.target.value)));
	};

	return (
		<div
			className={`flex w-full items-center gap-3 ${disabled ? "opacity-50" : ""} ${className}`}
		>
			<div className="relative h-5 flex-1">
				<div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-neutral-200 dark:bg-neutral-800" />
				<div
					className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-neutral-950 dark:bg-white"
					style={{ width: `${percent}%` }}
				/>
				<input
					{...inputProps}
					type="range"
					value={currentValue}
					min={min}
					max={max}
					step={step}
					disabled={disabled}
					onChange={handleChange}
					className="absolute inset-0 h-5 w-full cursor-pointer appearance-none bg-transparent disabled:cursor-not-allowed [&::-moz-range-thumb]:size-3 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-neutral-950 [&::-moz-range-thumb]:shadow-sm [&::-moz-range-thumb]:shadow-neutral-950/20 [&::-moz-range-track]:h-1 [&::-moz-range-track]:appearance-none [&::-moz-range-track]:bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:appearance-none [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-neutral-950 [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:shadow-neutral-950/20 dark:[&::-moz-range-thumb]:border-neutral-950 dark:[&::-moz-range-thumb]:bg-white dark:[&::-webkit-slider-thumb]:border-neutral-950 dark:[&::-webkit-slider-thumb]:bg-white"
				/>
			</div>

			{showValue && (
				<div className="min-w-10 rounded border border-neutral-200 bg-white px-2 py-1 text-center text-xs tabular-nums text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
					{currentValue}
				</div>
			)}
		</div>
	);
}

export default Slider;
