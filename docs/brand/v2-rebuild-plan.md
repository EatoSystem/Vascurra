# Vascurra V2 visual rebuild

PR #9 was rejected after visual review.

## Hard reset rules

- The original luminous holding-page hero is Canonical Brand Reference 01.
- The holding page is a hard release gate and must fail closed. Missing password configuration must never expose unfinished V2 work.
- V2 is rebuilt one approved section at a time. Each section must be visually compared against its approved reference before the next section is implemented.
- The old/legacy homepage sections are not approved V2 design and must not be used as the visual model for the rebuild.
- White is the dominant canvas; deep navy is the primary ink; the original luminous cyan → aqua → green gradient is locked.
- Maximum three distinct rendered font sizes per section per breakpoint; two preferred.
- No generic SaaS card grids, darkened brand gradients, compressed whitespace, or implementation-led art direction.
- Approved illustration assets are treated as art direction and/or decorative media; meaningful copy remains accessible HTML.
- Production remains on the holding page until explicit V2 launch approval.

## Build order

1. Section 01 — existing hero / holding-page reference: preserve.
2. Section 02 — Origin: implement against approved reference and review.
3. Section 03 — Mission: only after Section 02 approval.
4. Section 04 — Patient 0: only after Section 03 approval.
5. Continue later sections only after the first four-section sequence establishes the approved visual grammar.
