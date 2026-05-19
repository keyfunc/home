import Attr from "./-component/Attr";
import Preview from "./-component/Preview";

function Flex() {
	return (
		<div className="h-full min-h-0 grid grid-cols-[350px_1fr]">
			<aside className="h-full min-h-0 overflow-hidden border-r border-r-gray-200">
				<Attr />
			</aside>
			<main className="h-full min-h-0 overflow-hidden">
				<Preview />
			</main>
		</div>
	);
}
export default Flex;
