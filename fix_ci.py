with open(".github/workflows/ci.yml", "r") as f:
    content = f.read()

content = content.replace("EXIT_CODE: ${{!contains(needs.*.result, 'failure') && !contains(needs.*.result, 'cancelled') && needs.set-ci-condition.outputs.should-run-ci == 'true' && '0' || '1'}}", "EXIT_CODE: ${{(!contains(needs.*.result, 'failure') && !contains(needs.*.result, 'cancelled') && needs.set-ci-condition.outputs.should-run-ci == 'true') || contains(needs.*.result, 'skipped') && '0' || '1'}}")

with open(".github/workflows/ci.yml", "w") as f:
    f.write(content)
