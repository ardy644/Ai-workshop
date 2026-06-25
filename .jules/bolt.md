## 2024-06-25 - Prevent Unnecessary Re-renders in CustomNodes
**Learning:** ReactFlow custom node components (like GenericNode, NoteNode) re-render heavily during canvas interactions (panning, zooming) if not properly memoized.
**Action:** Always wrap custom node components passed to ReactFlow with `React.memo()` to optimize rendering performance, ensuring nodes only update when their props change.
