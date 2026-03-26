---
title: Specification Authoring Process
version: 1.0
date_created: 2026-03-26
last_updated: 2026-03-26
owner: mizoamin
tags: process, documentation, specification, ai-ready
---

# Introduction

This specification defines the process, structure, and requirements for authoring specification documents within the mizo-universe repository. It governs how new or updated specification files are created, formatted, and maintained so that they are unambiguous, machine-readable, and suitable for use by Generative AI systems.

## 1. Purpose & Scope

**Purpose**: Define a standardised, AI-ready process for producing specification documents that describe the requirements, constraints, and interfaces of any system component, feature, or process within the mizo-universe digital ecosystem.

**Scope**: All specification documents stored under the `/spec/` directory of the repository. This includes documents created for new functionality, updates to existing functionality, and architectural or design decisions.

**Intended Audience**: Human engineers, AI coding assistants (e.g., GitHub Copilot), and automated tooling that consumes specifications to generate, review, or validate code.

**Assumptions**:
- Authors have read-access to the repository and understand Markdown syntax.
- AI consumers expect self-contained documents with no reliance on external context.
- The `/spec/` directory is the single source of truth for all specifications.

## 2. Definitions

| Term | Definition |
|------|-----------|
| **Specification** | A structured document that defines requirements, constraints, and interfaces for a solution component. |
| **AI-Ready** | Formatted and worded such that a Generative AI can parse and act on the document without additional context. |
| **REQ** | Prefix denoting a functional or non-functional requirement. |
| **SEC** | Prefix denoting a security-specific requirement. |
| **CON** | Prefix denoting a constraint (non-negotiable boundary condition). |
| **GUD** | Prefix denoting a guideline (recommended but not mandatory practice). |
| **PAT** | Prefix denoting a pattern that must be followed. |
| **AC** | Acceptance Criterion — a testable condition that confirms a requirement is met. |
| **Front Matter** | YAML metadata block at the top of a Markdown file, delimited by `---`. |
| **Mizo Universe** | The official digital ecosystem of Captain Mizo Amin; the repository this specification governs. |

## 3. Requirements, Constraints & Guidelines

### Functional Requirements

- **REQ-001**: Every specification document **must** reside in the `/spec/` directory of the repository root.
- **REQ-002**: Every specification file **must** be named according to the pattern `spec-[a-z0-9-]+.md`, where the leading segment after `spec-` describes the high-level purpose category (one of: `schema`, `tool`, `data`, `infrastructure`, `process`, `architecture`, or `design`).
- **REQ-003**: Every specification file **must** include a valid YAML front matter block containing at minimum: `title`, `version`, `date_created`, and `tags`.
- **REQ-004**: Every specification file **must** contain all eleven numbered sections defined in the canonical template (Introduction, §1–§10, §11).
- **REQ-005**: All requirement identifiers (REQ, SEC, CON, GUD, PAT, AC) **must** be globally unique within a single specification file and follow the pattern `[3 UPPERCASE LETTERS]-[zero-padded three-digit number]` (e.g., `REQ-001`).
- **REQ-006**: Acceptance criteria **must** be expressed in Given-When-Then format or as declarative "The system shall…" statements.

### Security Requirements

- **SEC-001**: Specification documents **must not** contain secrets, credentials, API keys, or personally identifiable information (PII).
- **SEC-002**: External URLs referenced in specifications **must** use HTTPS.

### Constraints

- **CON-001**: Specification files **must** be valid, well-formed Markdown compatible with standard Markdown parsers.
- **CON-002**: File names **must** use only lowercase letters (`a-z`), digits (`0-9`), and hyphens (`-`). No underscores, spaces, or uppercase letters are permitted.
- **CON-003**: The front matter block **must** be the very first content in the file, starting at line 1.
- **CON-004**: Sections **must** appear in the order defined by the canonical template; no sections may be omitted or reordered.

### Guidelines

- **GUD-001**: Use precise, explicit, and unambiguous language. Avoid idioms, metaphors, and context-dependent references.
- **GUD-002**: Clearly distinguish between requirements (must), constraints (non-negotiable), and guidelines (recommended).
- **GUD-003**: Define all acronyms and domain-specific terms in Section 2 (Definitions) before use.
- **GUD-004**: Include concrete examples and known edge cases in Section 9.
- **GUD-005**: Keep sentences short and focused on a single idea.
- **GUD-006**: Use tables and code blocks rather than prose for schemas, data contracts, and interface definitions.
- **GUD-007**: Avoid specifying library versions in Section 8 unless they represent architectural constraints.

### Patterns

- **PAT-001**: Use the canonical eleven-section template for every specification document without deviation.
- **PAT-002**: Prefix all requirement-like entries with the appropriate three-letter code followed by a dash and a zero-padded three-digit number.
- **PAT-003**: When referencing another specification document, link to it using a relative Markdown link within the repository (e.g., `[spec name](./spec-process-example.md)`).

## 4. Interfaces & Data Contracts

### Specification File Structure

Every specification file **must** conform to the following structure:

```
[YAML Front Matter]
# Introduction
## 1. Purpose & Scope
## 2. Definitions
## 3. Requirements, Constraints & Guidelines
## 4. Interfaces & Data Contracts
## 5. Acceptance Criteria
## 6. Test Automation Strategy
## 7. Rationale & Context
## 8. Dependencies & External Integrations
## 9. Examples & Edge Cases
## 10. Validation Criteria
## 11. Related Specifications / Further Reading
```

### Front Matter Schema

```yaml
---
title: string          # Required. Concise title describing the specification's focus.
version: string        # Required. Semantic version (e.g., "1.0") or ISO date.
date_created: string   # Required. ISO 8601 date (YYYY-MM-DD).
last_updated: string   # Optional. ISO 8601 date (YYYY-MM-DD).
owner: string          # Optional. Team or individual responsible.
tags: string           # Required. Comma-separated list of relevant categories.
---
```

### File Naming Convention

```
spec-<category>-<descriptor>.md

<category>  := schema | tool | data | infrastructure | process | architecture | design
<descriptor> := one or more hyphen-separated lowercase alphanumeric tokens
```

**Examples of valid names:**
- `spec-process-specification-authoring.md`
- `spec-architecture-solar-system-rendering.md`
- `spec-schema-planet-data-model.md`

**Examples of invalid names:**
- `Spec-Process.md` (uppercase letters)
- `spec_process_authoring.md` (underscores)
- `spec-mySpec.md` (uppercase letters)

## 5. Acceptance Criteria

- **AC-001**: Given a new specification file, when the file name is checked, then it must match the regex pattern `^spec-[a-z0-9-]+\.md$`.
- **AC-002**: Given a specification file, when its front matter is parsed, then the fields `title`, `version`, `date_created`, and `tags` must be present and non-empty.
- **AC-003**: Given a specification file, when its sections are enumerated, then all eleven numbered sections must be present in the correct order.
- **AC-004**: Given a specification file, when scanned for secrets or credentials, then no API keys, passwords, or PII must be found.
- **AC-005**: Given all requirement identifiers within a specification file, when checked for uniqueness, then no two identifiers with the same prefix must share the same numeric suffix.
- **AC-006**: Given a specification file placed outside the `/spec/` directory, when validated, then it must be rejected or flagged as non-conformant.
- **AC-007**: Given a specification file with an external URL, when validated, then all URLs must use the `https://` scheme.

## 6. Test Automation Strategy

- **Test Levels**: Linting (static analysis of Markdown structure and front matter), Integration (CI pipeline validation of all `/spec/` files on every pull request).
- **Frameworks**: Markdown linting tools (e.g., markdownlint), YAML parsers for front matter validation, regex-based filename checkers.
- **Test Data Management**: Sample valid and invalid specification files maintained in a `/spec/fixtures/` subdirectory for linting tests.
- **CI/CD Integration**: A GitHub Actions workflow step validates all files in `/spec/` on every pull request targeting the main branch. Failures block merging.
- **Coverage Requirements**: 100% of specification files in `/spec/` must pass all validation checks before merge.
- **Performance Testing**: Not applicable for static documentation files.

## 7. Rationale & Context

The mizo-universe project uses Generative AI tools extensively for code generation, review, and maintenance. AI systems perform best when given structured, unambiguous input. Ad-hoc documentation formats create ambiguity that reduces AI accuracy and increases the risk of misinterpretation.

By mandating a consistent, eleven-section template with explicit requirement prefixes and acceptance criteria, this specification ensures that every document produced is:

1. **Parseable** by AI without additional context.
2. **Verifiable** by automated tooling.
3. **Traceable** from requirement to acceptance criterion to test.

The `spec-` file-naming prefix and `/spec/` directory isolation make it trivial for both humans and automated tools to locate, enumerate, and validate all specifications in the repository.

## 8. Dependencies & External Integrations

### External Systems
- **EXT-001**: GitHub Repository (`mizoamin/mizo-universe`) — stores all specification files; pull request workflow enforces validation.

### Third-Party Services
- **SVC-001**: GitHub Actions — executes CI/CD pipelines that validate specification files on every pull request.

### Infrastructure Dependencies
- **INF-001**: Git version control — all specification files must be committed to the repository; no specification exists only on a local file system.

### Data Dependencies
- None. Specification files are self-contained Markdown documents.

### Technology Platform Dependencies
- **PLT-001**: Markdown-compatible renderer — all files must render correctly in standard Markdown renderers (e.g., GitHub's web interface).

### Compliance Dependencies
- **COM-001**: Repository content policy — specification files must comply with GitHub's acceptable use policy and must not contain copyrighted material without proper attribution.

**Note**: This section focuses on architectural and business dependencies, not specific package implementations.

## 9. Examples & Edge Cases

### Valid Specification File (Minimal)

```markdown
---
title: Example Schema Specification
version: 1.0
date_created: 2026-03-26
tags: schema, example
---

# Introduction

A minimal example specification demonstrating correct structure.

## 1. Purpose & Scope

...

## 2. Definitions

...

## 3. Requirements, Constraints & Guidelines

- **REQ-001**: Example requirement.

## 4. Interfaces & Data Contracts

...

## 5. Acceptance Criteria

- **AC-001**: Given ..., When ..., Then ...

## 6. Test Automation Strategy

...

## 7. Rationale & Context

...

## 8. Dependencies & External Integrations

...

## 9. Examples & Edge Cases

...

## 10. Validation Criteria

...

## 11. Related Specifications / Further Reading

None.
```

### Edge Cases

| Scenario | Expected Behaviour |
|----------|-------------------|
| File placed in `/spec/subfolder/` | Treated as non-conformant; must be moved to `/spec/` root. |
| Front matter contains an extra unknown field | Permissible; validators must ignore unknown fields. |
| Section heading uses a different case (e.g., `## 1. purpose & scope`) | Treated as non-conformant; headings must match the canonical template exactly. |
| Requirement identifier gap (e.g., REQ-001, REQ-003, missing REQ-002) | Permissible; identifiers need not be sequential, only unique. |
| Two specifications define the same identifier (e.g., both have REQ-001) | Permissible; identifiers need only be unique within a single file. |

## 10. Validation Criteria

The following checks must all pass for a specification file to be considered conformant:

1. **Filename check**: File name matches `^spec-[a-z0-9-]+\.md$`.
2. **Location check**: File resides directly in the `/spec/` directory (not a subdirectory).
3. **Front matter check**: YAML front matter is valid and contains `title`, `version`, `date_created`, and `tags`.
4. **Section presence check**: All eleven numbered sections are present and in the correct order.
5. **Requirement identifier check**: All requirement identifiers within the file are unique (no duplicate prefix+number combinations).
6. **Secret scan**: File contains no API keys, passwords, tokens, or PII.
7. **URL scheme check**: All external URLs use `https://`.
8. **Markdown lint**: File passes standard Markdown linting rules (no broken links, proper heading hierarchy).

## 11. Related Specifications / Further Reading

- [GitHub Markdown documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [YAML specification](https://yaml.org/spec/1.2.2/)
