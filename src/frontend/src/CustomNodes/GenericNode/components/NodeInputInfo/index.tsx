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

// ⚡ Bolt: Memoize heavily used sub-components to prevent unnecessary re-renders during canvas interactions (panning, zooming)
export default memo(NodeInputInfoBase);
