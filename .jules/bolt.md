## 2024-07-03 - ReactFlow Node Re-renders
**Learning:** Custom node components in ReactFlow (like `GenericNode` and `NoteNode` in `src/frontend/src/CustomNodes/`) re-render aggressively during canvas interactions like panning and zooming, which can cause significant jank in complex flows.
**Action:** Always wrap top-level exported ReactFlow custom nodes in `React.memo()` to prevent unnecessary re-renders when node data/selection props have not changed.
