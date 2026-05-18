import { containerAttr, itemAttr } from "./-data";

function Flex() {
  return (
    <div className="h-full grid grid-cols-[200px_1fr]">
      <aside className="h-full min-h-0 overflow-y-auto border-r border-r-gray-200 text-xs">
        <div>
          <div className="text-blue-600"> Container 属性</div>
          <div>
            {containerAttr.map((i) => (
              <div key={i.name}>
                <span>{i.name}</span>
                <span>{i.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-blue-600"> Item 属性</div>
          <div>
            {itemAttr.map((i) => (
              <div key={i.name}>
                <span>{i.name}</span>
                <span>{i.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <main className="grid place-content-center">预览区域</main>
    </div>
  );
}
export default Flex;
