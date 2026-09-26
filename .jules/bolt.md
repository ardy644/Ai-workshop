## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.
## 2024-08-01 - [ReactFlow Re-renders Sub-components Bottleneck]
**Learning:** ReactFlow's re-rendering bottleneck not only impacts the main custom nodes but also heavily hits internal child sub-components (like NodeInputField and NodeOutputfield) which are rendered repeatedly.
**Action:** Ensure that internal, heavily-used sub-components within custom ReactFlow nodes are also wrapped with `React.memo()` to prevent cascading re-renders during canvas interactions.
## 2024-05-18 - [ReactFlow GenericNode Sub-components Memoization]
**Learning:** Extending on previous learnings, ReactFlow's extreme re-renders during canvas interactions severely hit sub-components inside custom nodes. I found that components like NodeDescription, NodeName, NodeStatus, and NodeInputInfo were not memoized. However, HandleRenderComponent shouldn't be memoized because it takes complex referentially unstable props like `nodes` and `edges`, which would defeat the shallow compare.
**Action:** Always wrap leaf and simple prop sub-components in CustomNodes with `React.memo()` to prevent cascading re-renders, but avoid doing so for components that pass down complex arrays/objects like `nodes` from store.
