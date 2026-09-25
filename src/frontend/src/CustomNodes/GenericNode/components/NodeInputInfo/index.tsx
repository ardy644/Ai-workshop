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

// ⚡ Bolt Performance Optimization
// What: Wrapped component in React.memo()
// Why: ReactFlow passes state downwards frequently. Unmemoized child components cause cascading re-renders during canvas interactions (panning/zooming).
// Impact: Reduces unnecessary re-renders of generic node components during interactions.
export default memo(NodeInputInfo);
