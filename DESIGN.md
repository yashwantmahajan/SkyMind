# Hover members

## Mission
Create implementation-ready, token-driven UI guidance for Hover members that is optimized for consistency, accessibility, and fast delivery across dashboard web app.

## Brand
- Product/brand: Hover members
- URL: https://skiper-ui.com/v1/skiper6
- Audience: authenticated users and operators
- Product surface: dashboard web app

## Style Foundations
- Visual style: structured, tokenized, content-first
- Main font style: `font.family.primary=Inter`, `font.family.stack=Inter, sans-serif`, `font.size.base=15px`, `font.weight.base=400`, `font.lineHeight.base=22.5px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=15px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=20px`, `font.size.3xl=430.08px`
- Color palette: `color.text.primary=#ededed`, `color.text.secondary=oklab(0.946099 0.0000428557 0.0000189543 / 0.5)`, `color.text.tertiary=#ffffff`, `color.text.inverse=oklch(0.685 0.169 237.323)`, `color.surface.base=#000000`, `color.surface.muted=#121212`, `color.surface.raised=#080808`, `color.surface.strong=oklab(0.685 -0.0912435 -0.142252 / 0.1)`, `color.border.default=oklch(1 0 0 / 0.1)`, `color.border.muted=oklab(0.946099 0.0000428557 0.0000189543 / 0.05)`
- Spacing scale: `space.1=4px`, `space.2=6px`, `space.3=8px`, `space.4=12px`, `space.5=16px`, `space.6=20px`, `space.7=116.4px`
- Radius/shadow/motion tokens: `radius.xs=12px`, `radius.sm=16px`, `radius.md=26843500px` | `shadow.1=rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.03) 0px 7.2563px 14.5126px 0px inset, rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.25px 0.25px 0px inset, rgba(0, 0, 0, 0.37) 0px 14.2111px 20.2815px -5.47742px` | `motion.duration.instant=150ms`, `motion.duration.fast=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (111), buttons (11), tables (2), navigation (1), lists (1).


## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
