## 2024-07-07 - Memoizing ReactFlow Custom Nodes
**Learning:** In this architecture, ReactFlow custom node components (like GenericNode and NoteNode) must be wrapped with `React.memo()`. Unmemoized custom nodes cause unnecessary and expensive re-renders across the canvas during interactions such as panning and zooming, leading to a rendering bottleneck and poor performance.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure stable performance during canvas interactions.
