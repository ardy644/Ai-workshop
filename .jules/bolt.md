## 2024-06-29 - [ReactFlow Custom Nodes Re-render Bottleneck]
**Learning:** ReactFlow custom nodes render frequently during canvas interactions (panning, zooming), creating a performance bottleneck if components like `GenericNode` and `NoteNode` are not memoized, causing unnecessary re-renders across the large canvas.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure a shallow prop comparison prevents these unnecessary rendering bottlenecks.
