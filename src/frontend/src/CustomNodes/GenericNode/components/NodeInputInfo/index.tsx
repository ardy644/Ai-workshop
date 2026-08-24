import React from "react";

// ⚡ Bolt: Memoize component to prevent unnecessary re-renders during canvas interactions.
// Impact: Reduces React rendering overhead significantly when the canvas contains many nodes.
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

export default React.memo(NodeInputInfo);
