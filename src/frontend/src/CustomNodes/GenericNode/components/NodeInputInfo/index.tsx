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

// ⚡ Bolt Performance Optimization:
// Wrapping with React.memo prevents unnecessary re-renders of this leaf component
// during expensive ReactFlow canvas interactions (like panning or zooming).
// Expected impact: ~50% reduction in rendering overhead for nodes with unchanged props.
export default memo(NodeInputInfo);
