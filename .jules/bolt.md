## 2024-06-26 - [ReactFlow Custom Node Re-renders]
**Learning:** ReactFlow custom node components (e.g. GenericNode, NoteNode) re-render heavily during canvas interactions like panning and zooming, causing significant rendering bottlenecks if not memoized.
**Action:** Always wrap custom ReactFlow node components with `React.memo()` to prevent unnecessary re-renders when node data/props haven't actually changed.
