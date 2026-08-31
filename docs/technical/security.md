# Security Principles

## Phase 1

The public website has a small attack surface but should still follow secure defaults.

- no secrets in client bundles;
- environment variables managed through deployment platform;
- server-side form submission;
- schema validation;
- rate limiting / abuse controls for forms where appropriate;
- secure headers;
- dependency hygiene;
- minimal third-party scripts;
- no sensitive logs.

## Future health platform

Expected workstreams include:

- threat modelling;
- encryption;
- identity and access management;
- role-based permissions;
- auditability;
- secure account recovery;
- secrets management;
- vulnerability management;
- penetration testing;
- incident response;
- backups and recovery;
- vendor security review;
- data retention and deletion verification.

## Public repo

Never commit:

- `.env` files;
- tokens;
- private keys;
- health records;
- identifiable patient test fixtures.
