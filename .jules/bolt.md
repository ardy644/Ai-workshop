## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.
## 2024-08-01 - [ReactFlow Re-renders Sub-components Bottleneck]
**Learning:** ReactFlow's re-rendering bottleneck not only impacts the main custom nodes but also heavily hits internal child sub-components (like NodeInputField and NodeOutputfield) which are rendered repeatedly.
**Action:** Ensure that internal, heavily-used sub-components within custom ReactFlow nodes are also wrapped with `React.memo()` to prevent cascading re-renders during canvas interactions.
## 2024-05-19 - [Performance] Node text components re-render during canvas interactions
**Learning:** Heavily used child components of CustomNodes in ReactFlow, such as `NodeName` and `NodeDescription`, can cause rendering bottlenecks during canvas interactions like panning and zooming if they are not memoized. The constant prop propagation from parent node updates triggers re-renders even when the local state/props (like the node's name or description text) haven't actually changed.
**Action:** Always wrap standard, frequently instanced inner generic node sub-components (like NodeName, NodeDescription) with `React.memo()` to prevent unnecessary re-rendering in the ReactFlow canvas.
