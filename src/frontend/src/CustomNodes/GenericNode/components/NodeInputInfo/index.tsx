import { memo } from "react";
function NodeInputInfo({ info }: { info: string }) {
  return (
    <div className="h-full w-full break-words">
      {info.split("\n").map((line, index) => (
        <p key={index} className="block">
          {line}
        </p>
      ))}
    </div>
  );
}

// ⚡ Bolt: Memoize inner ReactFlow components to prevent cascading re-renders during canvas interactions (panning, zooming)
export default memo(NodeInputInfo);
