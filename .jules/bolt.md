## $(date +%Y-%m-%d) - React Flow Custom Nodes Rendering Optimization
**Learning:** React Flow custom nodes are highly susceptible to unnecessary re-renders during canvas interactions (like panning and zooming) if they are not properly memoized. The custom nodes re-evaluate on every flow state change, which can bottleneck performance.
**Action:** Always wrap custom node components (`GenericNode`, `NoteNode`, etc.) exported to React Flow with `React.memo()` to utilize shallow prop comparison and prevent these excessive re-renders.
