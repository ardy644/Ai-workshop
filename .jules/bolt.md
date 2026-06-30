## 2025-02-18 - [Optimization: ReactFlow Custom Nodes Memoization]
**Learning:** ReactFlow custom node components (e.g., in `src/frontend/src/CustomNodes/`) can become a rendering bottleneck during canvas interactions like panning and zooming because they re-render when they don't need to. Wrapping them with `React.memo()` mitigates this performance issue. This confirms a known issue when dealing with large canvases.
**Action:** Always wrap top-level Custom Nodes in ReactFlow with `React.memo()` to prevent unnecessary re-renders.
