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

// ⚡ Bolt: Wrapped component with React.memo() to prevent unnecessary re-renders during ReactFlow canvas interactions (panning/zooming).
// Expected impact: Significant reduction in render cycles for nodes heavily utilizing this sub-component.
export default memo(NodeInputInfo);
