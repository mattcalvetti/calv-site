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

## Unlock gate (passkey)
Tapping the fingerprint triggers a real WebAuthn platform-authenticator prompt (Touch ID / Face ID / Windows Hello). First visit creates a passkey for this hostname and stores its credential id in localStorage; later visits ask for it. If passkeys are unavailable, cancelled, or error, an "Enter without passkey" link appears.

**This is a local-device gate, not access control.** There is no backend, so nothing is verified server-side and anyone can bypass it. Restricting the site to approved emails requires a hosted auth service (e.g. Clerk, Supabase Auth, Auth0, or Cloudflare Access).

## v9
- New **Worked on** view (menu bar + Calv menu). `VIDEOS` and `WORK` in data.js. Video thumbnails are 1-bit placeholder frames.
- **Titles dictated by voice, spellings to confirm:** "HIO RPO mission" (HIO? RPO?), "Pass Series A announcement" (dictated as "past series A"; is the company Pass?), "Behind the scenes of the Meridian launch" (Meridian?).
- Beyond work is a Calv-menu window. Instagram removed everywhere.
- Timeline newest first (`TL` built from `TL_OLDEST` reversed, plus `voicesite` Oct 2026 on top).
- Cosigns: "Cosigned" H1, rounded 1987-dialog cards, all avatars in original colour. Cosign breakdown moved into the "How cosigns work" card. Small cosign cards row removed (duplicated the embeds; Sachin "keep tabs on this guy" had no source and is deleted).
- Tom: drop the real screenshot at `img/tom-whatsapp.png` and it replaces the text bubble automatically.

## v11
- **Thesis** is back, quiet, at the top of the Board. Three drafts in `THESES` (data.js); `THESIS_PICK` chooses which shows.
- **Stacked windows.** "Connected to" opens a new window cascaded on the current one. The trail shows at the top, each window has a close box, closing returns to the one below, Esc closes the top one. Max 5 (oldest drops). On phones only the top window shows, with a "◂ Back" link.
- **Timeline** rows invert on hover and show "open ▸". Hyperliquid dated Feb 2026.
- **Yala photos** are 3 frames from the public Instagram post (Yala Peak summit, Apr 2025) saved in `img/yala-*.jpg`.

## Videos: what Calv needs to provide
Videos play in place on the site, with no link-out. For each video, send:
1. **The original video file** (.mp4, H.264 video + AAC audio). Ideally 1080p, under ~50 MB. A Google Drive/Dropbox share link to the file is fine, and Grok Bot will download it and put it in `/video/`. GitHub won't take files over 100 MB, so bigger ones need compressing or a direct-file host such as Cloudflare R2, S3 or Bunny. YouTube, X, LinkedIn and Instagram links won't work here, because they are pages, not files.
2. **The exact title**, plus one line on what it is.
3. **Optional poster frame.** A still or timestamp you like. Otherwise Grok Bot picks a frame. Posters are shown 1-bit (black and white, high contrast) with a play button.
4. **Rights.** Confirm the customer is happy for it to be on your personal site.

Wiring: in data.js `VIDEOS`, set `src:"video/hio.mp4"` (or a direct `https://…/file.mp4`) and `poster:"video/hio.jpg"`. An empty `src` shows "video coming".
Slots ready: HIO RPO mission, Pass Series A, Meridian launch BTS, Senescence.

## v12
- Entry gate: the passkey/fingerprint gate is **parked**. Landing boots then shows a plain Enter button (Return works). The WebAuthn `passkey()` code stays in app.js, unwired, for a future hosted-auth swap (e.g. Google sign-in against an email allowlist via Clerk/Supabase/Cloudflare Access). Swap point: `unlock()`.
- Thesis locked to THESES[0], shown in the white "Calv" dialog at the top of the Board. No text sits directly on the dithered background.
- Cosigns: row 1 Tom (real WhatsApp screenshot, img/tom-whatsapp.png) beside Erik; row 2 Dylan; row 3 Sachin, Frank.
- Signals carry a `lens`; `LENS_CARD` in data.js links a lens to its Interested-in card, which then lists "Signals through this lens".
