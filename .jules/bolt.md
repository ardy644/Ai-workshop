## 2024-07-08 - [ReactFlow Re-renders Bottleneck]
**Learning:** Langflow's custom nodes (like GenericNode and NoteNode) were re-rendering heavily on every canvas interaction (panning, zooming) because they were not memoized. ReactFlow explicitly passes state changes to all nodes, meaning un-memoized custom nodes cause extreme overhead when rendering complex UIs.
**Action:** Always wrap custom node components in ReactFlow with `React.memo()` to ensure shallow prop comparison.

## 2024-07-09 - [ReactFlow Internal Components Bottleneck]
**Learning:** Even if the parent ReactFlow custom node (e.g., GenericNode) is memoized, heavily used internal child components like NodeInputField, NodeOutputField, and HandleRenderComponent will still re-render excessively if they receive new props (like callback functions or objects created inline in the parent) or if they are not themselves memoized when the parent renders. This causes major performance degradation during simple interactions like panning/zooming due to the sheer number of input/output fields and handles across all nodes.
**Action:** When memoizing a custom ReactFlow node, also systematically wrap its frequently instantiated child components (especially input fields, output fields, and handles) with `React.memo()` to effectively block unnecessary render propagation down the tree.
