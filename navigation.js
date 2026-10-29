// Route ownership and legacy destinations. Shared dropdown contents live in site-header.js.
const SECTIONS = {
 work: {label: "Work", description: "", views: ["work"]},
 thinking: {label: "Thinking", description: "The ideas I follow, the signals I collect, and how they connect to my work.", views: ["board", "signals"]},
 about: {label: "Calv", description: "A little about me, my path, and what I spend time on.", views: ["about", "timeline", "cos", "beyond"]}
};
const ROUTES = {
 work: {section: "work", element: "work", label: "Work"},
 board: {section: "thinking", element: "board", label: "Board"},
 signals: {section: "thinking", element: "signals", label: "Signals"},
 about: {section: "about", element: "about", label: "Introduction"},
 timeline: {section: "about", element: "timeline", label: "Timeline"},
 cos: {section: "about", element: "cosTop", label: "Cosigned"},
 beyond: {section: "about", element: "beyond", label: "Beyond work"}
};
const ALIASES = {thinking: "board", interested: "board", read: "beyond"};
let currentView = null;
let activeWorkAnchor = "";
function normalizeView(view) {
 const key = ALIASES[view] || view;
 return Object.hasOwn(ROUTES, key) ? key : "work";
}
function go(view, {historyMode = "push", moveFocus = true, anchor = ""} = {}) {
 view = normalizeView(view);
 const route = ROUTES[view], section = SECTIONS[route.section];
 pop(0);
 // Stop media when leaving its section, including embedded YouTube playback.
 if(currentView && currentView !== view) {
  const old = document.getElementById(ROUTES[currentView].element);
  old.querySelectorAll("video").forEach(video => video.pause());
  old.querySelectorAll(".yt.playing").forEach(frame => {
   frame.replaceChildren();frame.classList.remove("playing");
   frame.innerHTML = `<img class="poster" src="https://i.ytimg.com/vi/${frame.dataset.yt}/hqdefault.jpg" alt=""><span class="fl">Play ▸</span>`;
  });
 }
 Object.values(ROUTES).forEach(item => document.getElementById(item.element).hidden = item !== route);
 document.querySelectorAll(".nav-menu").forEach(menu => {
  menu.classList.toggle("current", menu.dataset.section === route.section);
  menu.querySelectorAll("[data-go]").forEach(link => {
   const active = link.dataset.go === view && (link.dataset.anchor || "") === anchor;
   if(active)link.setAttribute("aria-current", "page");else link.removeAttribute("aria-current");
  });
 });
 document.getElementById("page-title").textContent = section.label;
 document.getElementById("page-description").textContent = section.description;
 document.getElementById("page-description").hidden = !section.description;
 document.querySelector(".page-heading").hidden = section === SECTIONS.about && view !== "about";
 document.title = `${section.label}${section.views.length > 1 ? " · " + route.label : ""} · Matt Calvetti`;
 const changed = currentView !== view;
 currentView = view;
 if(view === "work")activeWorkAnchor = WORK_ANCHORS.includes(anchor) ? anchor : "";
 if(historyMode !== "none") {
  const url = new URL(viewPath(view), location.origin);
  url.hash = anchor;
  if(url.href !== location.href)history[historyMode === "replace" ? "replaceState" : "pushState"]({}, "", url);
 }
 if(view === "board")requestAnimationFrame(draw);
 if(moveFocus && (changed || view === "work")) {
  window.scrollTo(0, 0);
  document.getElementById("main").focus({preventScroll: true});
 }
 if(view === "work" && WORK_ANCHORS.includes(anchor))requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({block:"start"}));
}
// Clean paths: /calv-site/work/, /calv-site/signals/?card=id. Legacy ?v= links are rewritten in place.
const ROOT_PATH = typeof SITE_ROOT === "string" ? SITE_ROOT : "/calv-site/";
function viewPath(view) {return ROOT_PATH + view + "/"}
function pathView() {
 const seg = location.pathname.startsWith(ROOT_PATH) ? location.pathname.slice(ROOT_PATH.length).split("/")[0] : "";
 return seg && seg !== "index.html" ? seg : null;
}
function restoreLocation() {
 const query = new URLSearchParams(location.search);
 const asked = query.has("about") ? "about" : (query.get("v") || pathView());
 const anchor = location.hash.startsWith("#open") ? "" : location.hash.slice(1);
 go(asked, {historyMode: "none", anchor});
 const card = query.get("card");
 if(card)card.split(",").forEach((id, index) => open(T(id), index > 0));
 if(asked) {
  const clean = new URL(viewPath(currentView), location.origin);
  if(card)clean.search = "?card=" + card;
  clean.hash = anchor;
  if(clean.href !== location.href)history.replaceState(history.state, "", clean);
 } else if(location.search) {
  history.replaceState(history.state, "", ROOT_PATH + location.hash);
 }
}
window.addEventListener("popstate", () => {if(unlocked)restoreLocation()});

// Keep the Work menu in step with reading position, without adding history entries.
let workScrollFrame = 0;
function syncWorkPosition() {
 workScrollFrame = 0;
 if(currentView !== "work" || !unlocked)return;
 const readingLine = document.querySelector('.site-header').getBoundingClientRect().bottom + 24;
 let anchor = "";
 WORK_ANCHORS.forEach(id => {
  if(document.getElementById(id).getBoundingClientRect().top <= readingLine)anchor = id;
 });
 if(anchor === activeWorkAnchor)return;
 activeWorkAnchor = anchor;
 document.querySelectorAll('.nav-menu[data-section="work"] [data-go]').forEach(link => {
  if((link.dataset.anchor || "") === anchor)link.setAttribute('aria-current', 'location');
  else link.removeAttribute('aria-current');
 });
 const url = new URL(viewPath('work'), location.origin);
 url.hash = anchor;
 history.replaceState(history.state, '', url);
}
function scheduleWorkPosition() {
 if(!workScrollFrame)workScrollFrame = requestAnimationFrame(syncWorkPosition);
}
window.addEventListener('scroll', scheduleWorkPosition, {passive:true});
window.addEventListener('resize', scheduleWorkPosition);
