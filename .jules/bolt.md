## 2024-06-15 - [Python Exception Overhead]
**Learning:** Python's `issubclass()` function throws a `TypeError` if the first argument is not a class. When used inside recursive loops or frequent type-checking utilities (like serializers), falling back to exception handling for normal control flow (EAFP) is a severe performance bottleneck.
**Action:** Use `isinstance(obj, type)` before calling `issubclass(obj, TargetClass)` when the object could frequently be a primitive value, ensuring LBYL (Look Before You Leap) to avoid costly exceptions.
