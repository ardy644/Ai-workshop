## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.

## 2024-07-26 - [ReactFlow Re-renders Bottleneck - Child Sub-Components]
**Learning:** Even if the top-level custom nodes (like GenericNode and NoteNode) are wrapped in `React.memo()`, heavily used internal child sub-components (such as `NodeInputField` and `NodeOutputField`) can still cause significant rendering bottlenecks during canvas interactions like panning and zooming. These internal components also need to be memoized.
**Action:** Always wrap both top-level custom node components AND their heavily used child sub-components with `React.memo()` to prevent unnecessary rendering bottlenecks.
