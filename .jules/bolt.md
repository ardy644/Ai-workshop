## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.
## 2024-08-01 - [ReactFlow Re-renders Sub-components Bottleneck]
**Learning:** ReactFlow's re-rendering bottleneck not only impacts the main custom nodes but also heavily hits internal child sub-components (like NodeInputField and NodeOutputfield) which are rendered repeatedly.
**Action:** Ensure that internal, heavily-used sub-components within custom ReactFlow nodes are also wrapped with `React.memo()` to prevent cascading re-renders during canvas interactions.
## 2024-08-09 - [Missing Memoization in ReactFlow Subcomponents]
**Learning:** ReactFlow custom nodes heavily utilize internal child sub-components (like `NodeDescription`, `NodeName`, `NodeInputInfo`, `NodeStatus`, and `OutputComponent`). If these are not wrapped in `React.memo()`, they cause unnecessary rendering bottlenecks during basic canvas interactions such as panning and zooming.
**Action:** Always verify that frequently rendered sub-components within complex visual libraries like ReactFlow are memoized to prevent pervasive UI performance degradation.
