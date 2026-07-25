## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.

## 2024-07-26 - [ReactFlow Re-renders Bottleneck in Sub-components]
**Learning:** Similar to root custom nodes, heavily used internal child sub-components (like `NodeInputField`, `NodeOutputField`, and `HandleRenderComponent` in `GenericNode`) also suffer from rendering bottlenecks during canvas interactions (panning, zooming) if they are not memoized. Even if the parent is memoized, deeply nested re-renders can still cause lag.
**Action:** Always wrap heavily used ReactFlow custom node internal child components with `React.memo()` to prevent unnecessary rendering overhead.
