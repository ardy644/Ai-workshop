## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.

## 2024-07-23 - [ReactFlow Re-renders Bottleneck in Internal Sub-components]
**Learning:** Langflow's custom nodes (like GenericNode) were re-rendering heavily on every canvas interaction. While wrapping the main custom nodes in `React.memo()` helps, it's also critical to memoize heavily used internal child sub-components (like `NodeInputField` and `NodeOutputField`). Because ReactFlow explicitly passes state changes to all nodes, any un-memoized nested components inside nodes cause extreme overhead and performance degradation when rendering complex UIs with many nodes.
**Action:** Always wrap custom node components in ReactFlow, as well as their heavily used internal child sub-components, with `React.memo()` to ensure shallow prop comparison.
