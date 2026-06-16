## 2024-06-16 - Prevent Unnecessary Re-renders in ReactFlow Nodes
**Learning:** ReactFlow graph nodes re-render frequently during drag/drop or general updates. Complex child components within nodes, such as `NodeInputField` and `NodeOutputField`, are prime candidates for memoization.
**Action:** Always consider wrapping inner node components with `React.memo` when working with highly dynamic diagramming libraries like ReactFlow to prevent performance degradation from widespread prop cascading.
