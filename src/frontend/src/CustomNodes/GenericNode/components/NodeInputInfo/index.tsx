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

// ⚡ Bolt: Memoized NodeInputInfo to prevent unnecessary re-renders during canvas interactions (like panning/zooming).
// Expected Impact: Reduces ReactFlow rendering overhead for heavily used sub-components.
export default memo(NodeInputInfo);
