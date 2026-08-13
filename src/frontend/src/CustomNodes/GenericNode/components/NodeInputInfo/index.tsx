import { memo } from "react";

// Wrap with React.memo to prevent unnecessary re-renders during canvas interactions (panning/zooming)
const NodeInputInfo = memo(function NodeInputInfo({ info }: { info: string }) {
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

export default NodeInputInfo;
