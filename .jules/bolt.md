## 2024-06-25 - ReactFlow Custom Node Memoization
**Learning:** ReactFlow triggers re-renders on custom nodes during canvas interactions (panning, zooming) or when interacting with other nodes. Not memoizing complex custom nodes like `GenericNode` causes significant performance bottlenecks as the graph scales.
**Action:** Always wrap `reactflow` custom node components with `React.memo()` using `export default memo(NodeComponent)` to ensure shallow prop comparison prevents unnecessary re-renders.
