## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.

## 2024-07-21 - Memoizing CustomNode Sub-components in ReactFlow
**Learning:** ReactFlow's generic node heavily relies on deeply nested child components like NodeInputField and NodeOutputField. Because these nodes are continually subject to canvas-level state updates from panning and zooming interactions, failing to memoize these sub-components can cause substantial rendering bottlenecks that drag down the performance of the entire canvas.
**Action:** Always verify if complex, heavily nested components in `CustomNodes` (such as `NodeInputField` and `NodeOutputField`) are wrapped in `React.memo()`. The main `GenericNode` might be memoized, but its internal fields also need memoization to skip re-renders if their specific props don't change.
