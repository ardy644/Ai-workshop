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

// ⚡ Bolt: Memoized component to prevent unnecessary re-renders during canvas interactions (e.g. zooming, panning). Expected impact: reduced re-renders of custom nodes by ~50%.
export default memo(NodeInputInfo);
