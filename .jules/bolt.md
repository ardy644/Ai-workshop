## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.
## 2024-08-01 - [ReactFlow Re-renders Sub-components Bottleneck]
**Learning:** ReactFlow's re-rendering bottleneck not only impacts the main custom nodes but also heavily hits internal child sub-components (like NodeInputField and NodeOutputfield) which are rendered repeatedly.
**Action:** Ensure that internal, heavily-used sub-components within custom ReactFlow nodes are also wrapped with `React.memo()` to prevent cascading re-renders during canvas interactions.

## 2024-11-20 - [ReactFlow Re-renders Sub-components Bottleneck II]
**Learning:** Just like `NodeInputField` and `NodeOutputfield`, other highly used sub-components of `GenericNode` (such as `NodeDescription`, `NodeStatus`, `NodeName`, `HandleRenderComponent`, `OutputComponent`, `HandleTooltipComponent`, `NodeInputInfo`) can also cause unnecessary cascading re-renders when interacting with ReactFlow canvas (panning/zooming). It is crucial to memoize them using `React.memo()` to optimize ReactFlow performance and minimize overhead in rendering large graphs.
**Action:** Wrapped remaining GenericNode sub-components and NodeToolbarComponent with `React.memo()` and verified format/lint checks pass without introducing new typescript issues.
