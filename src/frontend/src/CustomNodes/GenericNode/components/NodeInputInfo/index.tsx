// ⚡ Bolt Optimization: Wrapped with React.memo() to prevent unnecessary re-renders
// ⚡ during canvas interactions (panning/zooming) when props have not changed.
// 📊 Impact: Reduces CPU usage and improves canvas smoothness by skipping redundant renders.

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

export default memo(NodeInputInfo);
