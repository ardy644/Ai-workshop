import { memo } from "react";

// ⚡ Bolt Performance Optimization:
// Wrapped in React.memo() to prevent unnecessary re-renders of this sub-component during canvas interactions (e.g., panning, zooming).
export default memo(function NodeInputInfo({ info }: { info: string }) {
  return (
    <div className="h-full w-full break-words">
      {info.split("\n").map((line, index) => (
        <p key={index} className="block">
          {line}
        </p>
      ))}
    </div>
  );
});
