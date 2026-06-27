## 2024-06-27 - ReactFlow Custom Nodes Optimization
**Learning:** Wrapping ReactFlow custom node components (e.g., GenericNode, NoteNode) with `React.memo()` is a critical optimization pattern in this codebase. Without it, panning and zooming the canvas triggers unnecessary re-renders of every node, causing noticeable bottlenecks.
**Action:** Always wrap custom node components in `src/frontend/src/CustomNodes/` with `React.memo()` to improve canvas interaction performance.
