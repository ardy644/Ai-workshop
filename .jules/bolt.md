## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.

## 2024-08-01 - [ReactFlow Re-renders Bottleneck for Node Parameters]
**Learning:** ReactFlow custom node components contain many heavily used internal sub-components, such as `NodeInputField` and `NodeOutputfield`, which handle parameters and handles. Since parent nodes re-render during canvas interactions, these sub-components also re-render excessively, creating a performance bottleneck, especially on nodes with many inputs/outputs.
**Action:** Always wrap heavily used internal child sub-components (like `NodeInputField` and `NodeOutputfield`) of ReactFlow custom nodes with `React.memo()` to prevent unnecessary re-rendering bottlenecks during canvas interactions like panning and zooming.
