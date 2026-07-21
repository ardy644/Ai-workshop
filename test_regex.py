import re
pattern = r"^([\w\-]+)(\([\w\-]+\))?!?: [\w\s:\-]+$"
tests = [
    "⚡ Bolt: [improvement]",
    "perf: Bolt improvement",
    "perf(ui): Bolt improvement",
    "Bolt: performance improvement",
    "perf: Bolt memoize generic node subcomponents",
]
for t in tests:
    print(f"{t}: {bool(re.match(pattern, t))}")
