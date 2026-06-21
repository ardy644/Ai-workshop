## 2024-05-24 - Unnecessary object allocation in util loop
**Learning:** In frontend functions that iterate over dataset rows to build table column configurations (e.g. `extractColumnsFromRows` doing a "union"), blindly creating and assigning object configs for every key on every row leads to massive O(N*M) unnecessary object allocations that puts pressure on garbage collection.
**Action:** Always check if a configuration or derived object already exists in the accumulator map/set before instantiating a new one, especially when iterating through large data arrays (like table data).
