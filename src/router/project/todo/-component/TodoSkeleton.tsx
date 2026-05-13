const todoSkeletonRows = ["first", "second", "third"];

function TodoSkeleton() {
	return (
		<div className="divide-y divide-neutral-200 dark:divide-white/10">
			{todoSkeletonRows.map((row) => (
				<div
					key={row}
					className="flex min-h-14 animate-pulse items-center gap-3 px-4 py-3 sm:min-h-16 sm:gap-4 sm:px-5"
				>
					<span className="size-5 rounded bg-neutral-200 sm:size-6 dark:bg-neutral-700" />
					<span className="h-4 w-36 rounded bg-neutral-200 sm:h-5 sm:w-52 dark:bg-neutral-700" />
				</div>
			))}
		</div>
	);
}

export default TodoSkeleton;
