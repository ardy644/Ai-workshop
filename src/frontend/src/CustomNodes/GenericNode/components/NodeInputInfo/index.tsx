import React from "react";

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

// ⚡ Bolt: Wrapped with React.memo to prevent unnecessary re-renders when parent GenericNode state changes.
// Expected Impact: Reduces DOM reconciliation overhead during canvas interactions (panning/zooming).
export default React.memo(NodeInputInfo);
