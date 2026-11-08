## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.
## 2024-08-01 - [ReactFlow Re-renders Sub-components Bottleneck]
**Learning:** ReactFlow's re-rendering bottleneck not only impacts the main custom nodes but also heavily hits internal child sub-components (like NodeInputField and NodeOutputfield) which are rendered repeatedly.
**Action:** Ensure that internal, heavily-used sub-components within custom ReactFlow nodes are also wrapped with `React.memo()` to prevent cascading re-renders during canvas interactions.

## 2024-11-08 - ReactFlow Parent Node Renders
**Learning:** While ReactFlow typically handles panning and zooming without node re-renders by using CSS transforms, `GenericNode` acts as a parent for many pieces of node state. Consequently, it re-renders often during dragging, selection, and other updates.
**Action:** Sub-components of `GenericNode` like `NodeName`, `NodeStatus`, and `NodeDescription` should be wrapped in `React.memo()` since they are mostly static or rely only on stable props (like `selected` bools or stable setters like `setBorderColor`), preventing needless reconciliation during parent updates.
