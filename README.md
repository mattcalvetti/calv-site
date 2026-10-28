# Calv

Static portfolio with a Mac-inspired interface. No build step or dependencies.

Run `python3 -m http.server 8765` and open http://localhost:8765.

## Navigation

- **Calv dropdown**: Introduction, Timeline, Cosigned, Beyond work (including Reading), then Email, X and LinkedIn.
- **Work dropdown**: Overview (default landing), Sachin & Adam, Films, Kindling platform, In progress and Ideas. Work items jump to anchored sections of the same page. The active dropdown item and URL follow scrolling using history replacement, so scrolling does not fill browser history.
- **Thinking dropdown**: Board (ideas connected to work) and Signals.

Open menus switch on mouse hover between titles; closed menus stay closed until clicked. All navigation lives in the compact menu bar. There is no separate About menu or in-page navigation row.

`site-header.js` defines the shared dropdown contents on both pages. `navigation.js` owns routes, active states and section visibility. URLs use `?v=work`, `?v=board`, `?v=signals`, `?v=about`, `?v=timeline`, `?v=cos`, or `?v=beyond`. Browser back/forward restores the selected view. Legacy `interested`, `read`, `?about=1` and `?card=id` links still resolve; unknown views fall back to Work.

## Entry and authentication

The startup log and plain Enter button are retained. Return also enters. A session remembers entry; `#open` skips startup for direct previews. Enter respects a linked destination.

The original WebAuthn prototype and its caveats are preserved in **auth-draft.js**, intentionally not loaded. It uses the original placeholder UI bindings and calls `unlock()`; it is a reference for future integration, not a drop-in production gate. Real access control needs hosted authentication and server-side verification. The live site remains public static content.

## Files and ownership

- `index.html`: shell and static content sections.
- `data.js`: cards, projects, signals, readings and connections.
- `app.js`: rendering, startup, media and detail-reader behaviour.
- `navigation.js`: routing and navigation configuration.
- `site-header.js`: menu definitions and dismissal behaviour for the native dropdowns, shared with the article.
- `foundations.css`: shared tokens, baseline rules, compact header and dropdowns.
- `style.css`: portfolio components and responsive layouts.
- `article.html` / `article.css`: long-form article, using the shared header and foundations.
- `auth-draft.js`: unloaded authentication prototype.

Cards open one native dialog. Connected cards replace its contents and retain a back trail (up to five cards). Escape or Close exits the reader; native dialog behaviour contains keyboard focus and restores it on close.

## CSS approach

Apply relevant [Good CSS](https://good-css.com/) practices incrementally: shared spacing tokens, bounded fluid gutters and headings, intrinsic grids, logical properties, stable scrollbar space, and defensive text wrapping. Preserve bitmap accents, monochrome framing and the original startup experience. Component-specific layout stays in `style.css`; shared values belong in `foundations.css`.

## Content and history

Existing content and draft claims have not been editorially approved by this refactor. `ph:1` marks placeholders. Earlier version notes, content verification questions, video handoff guidance and authentication history are preserved in [development-history.md](docs/development-history.md). Connection rationale remains in [THREADS.md](THREADS.md); design principles are in [HIG.md](HIG.md).

## Manual verification

Check startup with Enter and Return; all seven section views; active nav state; back/forward and reload; legacy and invalid URLs; detail opening, related-card Back and Escape; Work-to-Board links; video playback; the article return link; and narrow layouts at 375px. Third-party embeds depend on their hosts and network access.
