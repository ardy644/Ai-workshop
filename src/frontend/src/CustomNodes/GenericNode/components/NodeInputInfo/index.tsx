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

// ⚡ Bolt Performance Optimization
// What: Wrapped ReactFlow sub-component with React.memo()
// Why: ReactFlow passes state changes to all nodes. Un-memoized sub-components cause extreme overhead during canvas interactions.
// Impact: Drastically reduces unnecessary re-renders of Generic Node components when panning or zooming.
export default memo(NodeInputInfoBase);
