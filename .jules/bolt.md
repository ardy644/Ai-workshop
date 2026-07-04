## 2024-06-25 - ReactFlow Node Performance
**Learning:** Custom nodes in ReactFlow (like GenericNode and NoteNode) render continuously during canvas interaction (panning/zooming) if not wrapped in `React.memo()`. This causes significant UI lag when the flow graph grows large.
**Action:** Always wrap custom node components exported to ReactFlow in `memo()` to skip unnecessary re-renders when node data/selection state hasn't changed.
