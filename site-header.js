// Shared compact menu bar for the portfolio and article.
const WORK_ANCHORS = ["work-episodes", "work-platform", "work-films", "work-progress"];
const HEADER_MENUS = [
 {label:"◰ Calv", section:"about", items:[
  ["Introduction", "about"], ["Timeline", "timeline"], ["Cosigned", "cos"], ["Beyond work", "beyond"]
 ]},
 {label:"Work", section:"work", items:[
  ["Overview", "work"], ["Sachin & Adam", "work", "work-episodes"], ["Kindling platform", "work", "work-platform"],
  ["Films", "work", "work-films"], ["In progress", "work", "work-progress"]
 ]},
 {label:"Thinking", section:"thinking", items:[["Board", "board"], ["Signals", "signals"]]}
];
const articlePage = /\.html$/.test(location.pathname) && !location.pathname.endsWith("index.html");
document.querySelector('.site-header').innerHTML = HEADER_MENUS.map(menu => `<details class="nav-menu" data-section="${menu.section}">
 <summary>${menu.label}</summary><nav class="dropdown" aria-label="${menu.label.replace('◰ ', '')}">
 ${menu.items.map(([label, view, anchor]) => `<a href="${articlePage ? './' : ''}?v=${view}${anchor ? '#' + anchor : articlePage ? '#open' : ''}" data-go="${view}"${anchor ? ` data-anchor="${anchor}"` : ''}>${label}</a>`).join('')}
 ${menu.section === 'about' ? `<hr><a href="mailto:matt@kindlingtech.co">Email ↗</a><a href="https://x.com/0xcalv" target="_blank" rel="noopener">X · @0xcalv ↗</a><a href="https://www.linkedin.com/in/matthewcalvetti/" target="_blank" rel="noopener">LinkedIn ↗</a>` : ''}
 </nav></details>`).join('') + `<a class="nav-right${location.pathname.endsWith('opportunity.html') ? ' current' : ''}" href="opportunity.html">Opportunity</a>`;
const headerMenus = [...document.querySelectorAll('.nav-menu')];
document.addEventListener('click', event => {
 headerMenus.forEach(menu => {
  if (!menu.contains(event.target) || event.target.closest('a')) menu.open = false;
 });
});
document.addEventListener('keydown', event => {
 if(event.key !== 'Escape')return;
 const menu = headerMenus.find(item => item.open);
 if(menu){menu.open = false;menu.querySelector('summary').focus()}
});
// Desktop menu-bar behaviour: hover switches an already-open menu session.
// Touch still uses the native tap-to-toggle disclosure.
headerMenus.forEach(menu => {
 menu.addEventListener('pointerenter', event => {
  if(event.pointerType !== 'mouse' || !headerMenus.some(item => item.open))return;
  headerMenus.forEach(item => { item.open = item === menu; });
 });
});
