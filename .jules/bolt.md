## 2026-07-06 - [ReactFlow Node Memoization]
**Learning:** Custom nodes in ReactFlow (like `GenericNode` and `NoteNode`) need to be wrapped in `React.memo` to prevent significant rendering bottlenecks. When the canvas is interacted with (panning, zooming), ReactFlow updates its internal state which can cause all unmemoized nodes to re-render, tanking performance.
**Action:** Always wrap custom ReactFlow node components with `React.memo()` during their export to ensure they only re-render when their props (data, selected, etc) actually change.
