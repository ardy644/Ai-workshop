## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.
## 2024-08-01 - [ReactFlow Re-renders Sub-components Bottleneck]
**Learning:** ReactFlow's re-rendering bottleneck not only impacts the main custom nodes but also heavily hits internal child sub-components (like NodeInputField and NodeOutputfield) which are rendered repeatedly.
**Action:** Ensure that internal, heavily-used sub-components within custom ReactFlow nodes are also wrapped with `React.memo()` to prevent cascading re-renders during canvas interactions.

## 2026-07-31 - [ReactFlow Sub-components Bottleneck]
**Learning:** ReactFlow's re-rendering bottleneck heavily impacts deeply nested child sub-components within custom nodes (like NodeDescription, NodeStatus, HandleRenderComponent, etc.) which are rendered repeatedly during canvas interactions.
**Action:** Ensure that all internal sub-components within custom ReactFlow nodes are wrapped with `React.memo()` to prevent cascading re-renders during canvas interactions.
