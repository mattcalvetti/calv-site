# Calv — one opinion, demonstrated (v0 draft)
Static site, no build step. Run: `python3 -m http.server 8765` then open http://localhost:8765 (add `#open` to skip the boot screen).
Files: index.html, style.css, data.js (all content — edit blocks here), app.js.
## Auth (stub)
Press-and-hold fingerprint is UI only. Plan: hosted auth (Clerk or Supabase) with passkeys (WebAuthn: Touch ID/Face ID) for allowlisted emails, magic-link first then passkey enrolment. Replace `unlock()` in app.js. GitHub Pages can't enforce access alone. Needs Vercel/Netlify or similar.
## Placeholders
All blocks flagged `ph:1` in data.js.
## Thesis = PLACEHOLDER
The shown thesis ("Founder-led storytelling. Backing people early.") is a placeholder; Calv found earlier drafts cringe. Alternatives live in `THESES` in data.js ([0] is shown).
## Embeds
X posts use the official widgets.js blockquote (blockquote text is the static fallback). LinkedIn uses the official /embed/feed/update iframe with a static fallback card shown if it doesn't load within 8s.
## Review
See THREADS.md to sense-check each interest → work link.

## v6
Reading pane (books + FDS required reading from the Notion FDS Team Memo, public links only) lives in Beyond work. Timeline order is `TL` in data.js; entries with an empty `when` show no date. See HIG.md for what was taken from the 1987 Apple HIG.

## Reads written by Grok Bot for Calv to approve
Every "Matt's read" was drafted by Grok Bot in Calv's voice from his voice notes, and none has been approved yet:
scout, conviction, thrive, fdssig, cospost, cosign, lps, dylan, brent, dylanx, ovitz, friction, special, email, hyper, distil, article, fds, videos, senescence, yala, agentsi, agentsw, harness.
The card "why" lines, the board intro, the About text and the Bullish-on note were also rewritten by Grok Bot (v8).

Still to confirm: 1000x podcast hosts (Avi Felman & Jonah Van Bourg), and whether Overheard can be described as serving Kindling's customers.
Cosign X posts are static cards (avatars in img/, pulled from public X profiles) so they render identically everywhere; LinkedIn posts use LinkedIn's iframe with a text fallback.
