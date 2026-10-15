import { memo } from "react";
function NodeInputInfoBase({ info }: { info: string }) {
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

// Bolt Optimization: Wrap component in React.memo to prevent unnecessary re-renders
// during ReactFlow canvas interactions (panning/zooming) when props are stable.
export default memo(NodeInputInfoBase);
