## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.
## 2024-03-24 - ReactFlow Sub-component Renders
**Learning:** ReactFlow custom nodes (`GenericNode`) can trigger numerous unnecessary re-renders of their children (`NodeInputField`, `NodeOutputField`) during canvas interactions.
**Action:** Always wrap heavy child components of custom nodes with `React.memo` to prevent re-rendering when props haven't changed.
