## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.

## 2026-07-11 - [ReactFlow Subcomponent Re-renders Bottleneck]
**Learning:** ReactFlow custom node components (e.g., GenericNode) and their heavily used internal child sub-components (e.g., NodeInputField, NodeOutputField) cause significant rendering bottlenecks during canvas interactions like panning and zooming. These sub-components are not just child nodes, they process dynamic edges and data from flowStore/typesStore on mount or state change. Even if the parent node is memoized, un-memoized heavy children can still re-render on prop or context changes.
**Action:** Extend the use of `React.memo()` beyond just the top-level custom nodes to also wrap heavily used internal components like `NodeInputField` and `NodeOutputField`.
