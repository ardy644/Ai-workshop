## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.

## 2024-07-13 - [ReactFlow Child Component Re-renders Bottleneck]
**Learning:** Even if parent custom nodes (like GenericNode) are memoized, heavily used child sub-components (like NodeInputField and NodeOutputField) can still cause significant rendering bottlenecks during canvas interactions if their internal state changes or if they are re-mounted. Memoizing these granular, frequently rendered components provides a substantial performance boost.
**Action:** When optimizing ReactFlow custom nodes, always check if heavily utilized internal child components (like input/output fields or handles) are also wrapped in `React.memo()`.
