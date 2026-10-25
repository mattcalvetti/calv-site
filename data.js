// Every block: id, sec, title, body, why (ties to thesis), when (timeline), links (thread ids), ph (placeholder?)
// THESIS IS A PLACEHOLDER (Calv: current wording "a little cringe", may not ship). [0] is shown.
const THESES=[
"Founder-led storytelling. Backing people early.",
"When intelligence is abundant, value accrues to what can't be replicated: trust, taste, and stories that last. I spend my time helping founders tell theirs.",
"Founder-led storytelling is Lindy. Everything else gets cheaper after AGI; the founder's own voice and the people who believe in it compound.",
"I back what lasts: people before the market sees them, and founder stories built to outlive the feed."];
const BLOCKS=[
// Interested in (order chosen so threads never cross)
{id:"scout",sec:"Things I'm interested in",title:"Talent scouting",body:"David Booth's framing of the talent scout as a craft.",why:"Seeing people before the market does sits at the core of what I believe.",when:"Ongoing",links:["cosign","ovitz"]},
{id:"conviction",sec:"Things I'm interested in",title:"Conviction bets / talent spotting",body:"Backing a person before the numbers make it obvious.",why:"I use the same read on creators that I use with my own money, weighing talent, timeline sentiment and analysis.",when:"Ongoing",links:["hyper","scout"]},
{id:"cosign",sec:"Things I'm interested in",title:"How cosigns work",body:"How the a16z team (Erik Torenberg and co) think about co-signs as a mechanic.",why:"A cosign is how early conviction gets transferred to capital and audiences.",when:"Ongoing",links:["article","thrive"]},
{id:"thrive",sec:"Things I'm interested in",title:"Lindy & what lasts",body:"Longing, Lindy culture, and assets technology can't replicate. Thrive Eternal's thesis on iconic institutions put words to it.",why:"Where I think value accrues in a post-AGI world.",when:"Ongoing",links:["lps"]},
{id:"fdssig",sec:"Things I'm interested in",title:"#fds-signals",body:"Our internal channel for the signals strategists spot across the creative landscape.",why:"This is how raw taste turns into something the team can encode.",when:"Kindling",url:"?v=signals",urlLab:"Open the Signals view ▸",links:["harness"]},
{id:"lps",sec:"Things I'm interested in",title:"LPs and tech media creatives",body:"Being the interconnective tissue between capital and the people who make culture around it.",why:"Put plainly, this is the job I want to be doing.",when:"Ongoing",links:["dylan","sachadam"]},
{id:"dylan",sec:"Things I'm interested in",title:"The Dylan Abruscato archetype",body:"Brand strategist, then Senior Director of Brand Strategy at Postmates (acquired by Uber), now President of TBPN alongside John Coogan and Jordi Hays.",why:"A north star for the shape of my career.",when:"2026",links:["dylanx","brent","sachadam"]},
{id:"brent",sec:"Things I'm interested in",title:"Brent Liang and MTS",body:"Brent helped build a16z's New Media practice, backed MTS (Monitoring the Situation, a live tech show on X) with Erik Torenberg, then left to co-found and run it.",why:"Watching someone go from backing new media to building it.",when:"2026",url:"https://www.a16z.news/p/monitoring-the-situation",urlLab:"a16z: Monitoring the Situation ↗",links:["dylan","cosign","erik"]},
{id:"ovitz",sec:"Things I'm interested in",title:"Forebears, Ovitz & Ogilvy",body:"Michael Ovitz, the agent as kingmaker, and David Ogilvy, who treated advertising as a craft of persuasion.",why:"Both of them show that the connector and the storyteller have always held a seat of real power.",when:"Ongoing",links:["dylan"]},
{id:"friction",sec:"Things I'm interested in",title:"Reintroducing friction",body:"Choosing the harder and slower version of something on purpose.",why:"Friction is where I reset and reflect and where my taste comes back to me.",when:"Ongoing",links:["yala","senescence"]},
{id:"special",sec:"Things I'm interested in",title:"Specialised over general",body:"Systems that do one thing extraordinarily well tend to beat general ones at that thing.",why:"I build teams and tools to be opinionated and made for one purpose.",when:"Ongoing",links:["harness"]},
{id:"agentsi",sec:"Things I'm interested in",title:"Agents as a team",body:"Treating agents as teammates who each have a job and someone they serve.",why:"This is my preference for specialised tools applied to my own week.",when:"Ongoing",links:["special","agentsw"]},
// Worked on
{id:"email",sec:"Things I've worked on",title:"The first email to Sachin",body:"The cold email that landed the Kindling job.",why:"This was day zero, when I cosigned Kindling before it cosigned me.",when:"",ph:1,links:["fds"]},
{id:"hyper",sec:"Things I've worked on",title:"Hyperliquid, a conviction position",body:"I opened a position in Hyperliquid at $30 after using the product, and I underwrote both it and its founder, Jeff Yan.",why:"Talent spotting and analysis with my own money in the game.",when:"",links:["conviction","scout"]},
{id:"cospost",sec:"Things I've worked on",title:"Why cosigns matter (LinkedIn)",body:"My breakdown of the cosign mechanic, reposting the a16z team's Cosign launch. Scattered cosigns, scarcity, and a16z seeing who has the talent-spotting eye.",why:"I shared my early thinking on the mechanic in public.",when:"Aug 2026",url:"https://www.linkedin.com/feed/update/urn:li:activity:7498919055244947456/",urlLab:"Open the post on LinkedIn ↗",embed:1,links:["scout"]},
{id:"article",sec:"Things I've worked on",title:"The cosigns article (draft)",body:"An essay on cosigns and how conviction travels between people.",why:"I am writing down the mechanic I practise every day.",when:"2026",ph:1,links:["dylanx"]},
{id:"distil",sec:"Things I've worked on",title:"Distillation into learnings",body:"How raw material gets distilled into top-line learnings the team can act on.",why:"Spotting signal early is scouting applied to information instead of people.",when:"Kindling",links:["harness"]},
{id:"fds",sec:"Things I've worked on",title:"FDS at Kindling",body:"I am Head of FDS at Kindling and lead five strategists. FDS is the content and organic marketing function for B2B tech founders, and it complements their go-to-market motion.",why:"This is where I turn taste into a repeatable system for founders.",when:"Since joining Kindling",links:["harness","distil","videos"]},
{id:"videos",sec:"Things I've worked on",title:"Customer videos",body:"Videos made for Kindling customers.",why:"This is the storytelling side of my work, out in the world.",when:"Kindling",ph:1,links:["sachadam"]},
{id:"senescence",sec:"Things I've worked on",title:"Senescence",body:"My year 12 short film, named for the Latin word for the slow decline that comes with age.",why:"It was the first time I told a story with a camera, long before it was my job.",when:"Year 12",ph:1,links:["email"]},
{id:"yala",sec:"Things I've worked on",title:"Yala Peak, Himalayas",body:"A solo summit of Yala Peak followed by time in Kathmandu, a city that felt soulful.",why:"I went to reintroduce friction into my life and came back with room to reflect.",when:"Apr 2025",ph:1,imgs:[],url:"https://www.instagram.com/mattcalvetti/",urlLab:"Photos on Instagram ↗",links:["friction","senescence"]},
{id:"harness",sec:"Things I've worked on",title:"The harness",body:"Idea generation built from chained skills that together work like a master prompt, along with templates for thinking about organic strategy. It takes a view on where people do their best work and where they get leverage.",why:"It takes a scout's instinct and makes it something the whole team can use.",when:"Kindling",links:["agentsw"]},
{id:"agentsw",sec:"Things I've worked on",title:"How I work with agents",body:"<ul class=\"jobs\"><li><b>Customer health dashboard</b>, kept fresh by scheduled agents that run daily Slack sentiment reads, weekday freshness checks, a Friday refresh opened as PRs for review. Serves the founding team.</li><li><b>Ramping a new strategist</b> with morning points and end-of-day check-ins. Serves the FDS team.</li><li><b>Sparring partner</b> for business-model pressure tests and founding-team TLDRs.</li><li><b>Overheard</b>, a separate bot watching Reddit, HN, news and X for mentions, set up to serve Kindling's customers.</li><li><b>This site</b>, built entirely by voice.</li></ul>",why:"Each agent has one job and one group of people it serves.",when:"2026",links:["agentsi","harness","fds"]},
// Cosigned (reading now lives in the Beyond work "Reading" pane)
{id:"frank",sec:"Who's cosigned me",title:"Frank (DeGods) on X",body:"Frank replied to my profile post on 4 Jun 2023 with “Was already following you but I unfollowed you to refollow you again,” and later added “Forbes type beat” on 2 Sep 2023 and “stay goated” on 5 Sep 2023. The post is shown above.",why:"This comes from my crypto years, when I was a content contributor to DeGods.",when:"Jun 2023",url:"https://x.com/frankdegods/status/1665250022789873664",links:["degods","dylanx","conviction"]},
{id:"sachpost",sec:"Who's cosigned me",title:"Kindling team profile (Sachin)",body:"Sachin's LinkedIn post featuring me as that week's Kindling team profile.",why:"A public cosign from the founder.",when:"2026",ph:1,url:"https://lnkd.in/p/gjukQpVQ",links:["sachadam"]},
{id:"erik",sec:"Who's cosigned me",title:"Erik Torenberg post (via Tom)",body:"Tom Duffy sent me Erik's post about “a list of talent with great taste whose range can’t be captured in a single label” and added “this is literally you.” The post is shown above.",why:"A peer pointed at the role and said it was me.",when:"2026",url:"https://x.com/eriktorenberg/status/2109722369556390210",links:["cosign","scout","brent"]},
{id:"dylanx",sec:"Who's cosigned me",title:"Dylan (TBPN) on X",body:"Dylan replied “Few” on 18 Sep 2026, and @_AdamMiller_ added “you guys are leading the pack”. The post is shown above.",why:"A tip of the cap that we are thinking along the same lines, and he followed me back.",when:"Sep 2026",url:"https://x.com/DylanAbruscato/status/2100735428131258606",links:["dylan","erik","frank"]},
{id:"sachin",sec:"Who's cosigned me",title:"Sachin on LinkedIn",body:"Sachin's “keep tabs on this guy” message.",why:"The cosign from the person who hired me.",when:"",ph:1,links:["sachpost"]},
// Path: timeline-only entries (not on the board). Undated entries show no date label.
{id:"london",sec:"Path",title:"Back from London",body:"",why:"Moved home from London.",when:""},
{id:"agency",sec:"Path",title:"Started my own agency",body:"",why:"It failed, and it taught me what I didn't know.",when:""},
{id:"moon",sec:"Path",title:"Moonlighting in tech",body:"",why:"Working on tech on the side.",when:""},
{id:"web3",sec:"Path",title:"Web3, trader first",body:"",why:"Came into crypto as a trader.",when:""},
{id:"degods",sec:"Path",title:"DeGods content contributor",body:"I was a content contributor to DeGods, and in Dec 2023 I wrote on X, “Last 6 months been wild… From not having a Canva account to now contributing alongside [the DeGods design team].”",why:"Frank backed the wavelength and vibe over graphic-design know-how.",when:"c. Jun–Dec 2023",url:"https://x.com/0xCalv/status/1733111650197336336"},
{id:"kindling",sec:"Path",title:"Joined Kindling",body:"",why:"Head of FDS.",when:""},
{id:"sachadam",sec:"Who's cosigned me",title:"Sachin & Adam",body:"An existing relationship around their documentary series on emerging tech.",why:"I am already plugged in to the people making this kind of work.",when:"2026",ph:1,links:[]}
];
// Threads: interest -> work it shaped. Order of both columns keeps these crossing-free.
const THREADS=[
["scout","email","backing Kindling before it backed me"],["scout","hyper","underwriting the founder"],
["conviction","hyper","a conviction bet"],["conviction","cospost","who has the eye"],
["cosign","cospost","the mechanic, early"],["cosign","article","the essay's subject"],
["thrive","distil","signal that lasts"],["fdssig","distil","signals → distillation"],["fdssig","fds","the team's inputs"],
["lps","fds","founders ↔ capital ↔ story"],["dylan","fds","advisor / agency shape"],["brent","fds","building new media"],
["ovitz","videos","persuasion as craft"],["ovitz","senescence","the storyteller instinct"],
["friction","senescence","slow, made by hand"],["friction","yala","friction on purpose"],
["special","harness","opinionated, purpose-built"],["agentsi","harness","chained skills"],["agentsi","agentsw","one job, one person served"]];

// Matt's read: first-person takes. All written by Grok Bot for Calv to approve (see README).
const READS={
scout:{t:"Cosigns tend to be scattered across a timeline, with the explicit ones sitting in replies and quote posts and the quieter ones showing up in follows and mutuals, so unless you already follow the right people the signal fades before it has a chance to compound. Catching people early is a craft in its own right, and I wrote my thinking on it up on LinkedIn before a16z shipped Cosign."},
conviction:{t:"I opened a Hyperliquid position at $30 after using the product and feeling that it was a step change, and I was underwriting Jeff Yan as much as the token. It is the same read I use on people, where I weigh talent, timeline sentiment and my own analysis before I commit. I expect we will see more funds spun out of people who are native to the timeline and understand signal, power laws and social graphs."},
thrive:{t:"When intelligence becomes abundant I think the things that can't be replicated become more valuable, and that includes tradition, identity, shared experience and the other things people long for. Those compound through cultural resonance over a long time, and I count a founder telling their own story among them."},
fdssig:{t:"We use this channel internally to pool the signals our strategists notice across the creative landscape, and then we go away and encode them. Everything that lands there feeds our idea distillation, where we boil raw material down to the line that matters. The inputs we value most sit at an altitude that is high enough to apply across several founders and still concrete enough to turn into an idea on Monday."},
cospost:{t:"I posted this before Cosign dropped, and Sachin replied that it was “still so early innings for co-signers and lighthouses.”"},
cosign:{t:"I think of a cosign as conviction someone lends you. Cosign's question count adds scarcity so the signal concentrates, although there is a risk that known names simply float to the top. The effect I find most interesting is that a16z gets to see who among its users has the eye for talent and taste, which is something I broke down on LinkedIn before Cosign shipped."},
lps:{t:"Capital and culture often talk past each other, and the seat I find most useful is the one in the middle where you can translate in both directions."},
dylan:{t:"Dylan is a north star for the shape of my career. He went from brand strategist to strategy director at Postmates, which Uber acquired, and he is now President of TBPN and, as far as I can tell, the brains behind John and Jordi. I haven't studied him formally, but I have paid close attention to the archetype he represents and to his run rate."},
brent:{t:"I look up to the way Brent is building out MTS. He helped shape a16z's thinking on new media and backed the show, and then he left to build it himself, which is about as visible a form of conviction as I can think of."},
dylanx:{t:"When Dylan replied “Few” I read it as a tip of the cap that we are thinking about these things in the same direction, and he followed me back around the same time."},
ovitz:{t:"Ovitz showed that the person connecting everyone can hold the most powerful seat in the room, and Ogilvy showed that persuasion is a craft you can actually learn. I would like to carry a bit of both."},
friction:{t:"So much has become easy that I now add friction back into my life on purpose. Being solo on Yala Peak and then moving at the slower pace of Kathmandu is where I reset and actually had room to reflect."},
special:{t:"I find that something built for a single purpose usually beats a general tool at that purpose, and I think the same holds for the teams I put together and the tools we use."},
email:{t:"I backed Kindling well before it backed me, and the first email I sent Sachin is the record of that."},
hyper:{t:"I opened the position at $30 because using the product felt like a step change, so I underwrote both the product and Jeff Yan, and I still hold it with high conviction. Please don't read this as advice, since I share it as a receipt for how I read people."},
distil:{t:"Most raw material turns out to be noise, and the real skill is pulling out the couple of lines that change what the team does on Monday."},
article:{t:"I'm still finishing the cosigns article, and it will live here once it's done."},
fds:{t:"I lead five strategists who run organic content for B2B tech founders, and most of my job is turning taste into a system the team can repeat."},
videos:{t:"The customer videos will be added here soon."},
senescence:{t:"This was my year 12 short film, and looking back it shows the storytelling instinct was there well before it became my job."},
yala:{t:"I summited Yala Peak solo and then spent time in Kathmandu, where I got to connect with nature and with a city that felt soulful. It was friction I chose for myself, and it gave me the reset I was after."},
agentsi:{t:"I think about agents the same way I think about a team, which means each one gets a clear job, someone it serves and a regular rhythm of check-ins, and I keep it deliberately boring."},
agentsw:{t:"There's nothing exotic in here. It's a handful of narrow agents doing jobs that people would otherwise let slide, and a person reviews everything they produce."},
harness:{t:"The harness chains skills together for idea generation, and it has clear opinions on where people do their best work and where the machine gives them leverage."}
};

// Signals: how I read creative. All placeholders until real picks are pasted in.
const SIGNALS=[
{src:"#fds-signals",title:"[PLACEHOLDER] Creative pick 1",why:"Why it jumped out: [one line]"},
{src:"#fds-signals",title:"[PLACEHOLDER] Creative pick 2",why:"Why it jumped out: [one line]"},
{src:"#fds-signals",title:"[PLACEHOLDER] Creative pick 3",why:"Why it jumped out: [one line]"},
{src:"X · liked",title:"[PLACEHOLDER] Liked post",why:"What I saw in it: [one line]"},
{src:"X · liked",title:"[PLACEHOLDER] Liked post",why:"What I saw in it: [one line]"},
{src:"X · replied",title:"[PLACEHOLDER] Conversation I contributed to",why:"My reply: [link]"},
{src:"X · replied",title:"[PLACEHOLDER] Conversation I contributed to",why:"My reply: [link]"},
{src:"X · follows",title:"[PLACEHOLDER] 5 accounts I follow",why:"Why each: [one line]"}
];

// Beyond work. [check] = couldn't confirm from the voice note.
const BEYOND=[
{h:"Reading",items:[
 {t:"Becoming the Product: The Critical Internet Researcher as a Virtual Intellectual",a:"Morgane Billuart",u:"https://www.setmargins.press/books/becoming-the-product/"},
 {t:"The Score Takes Care of Itself",a:"Bill Walsh"},
 {t:"Creative Selection",a:"Ken Kocienda"},
 {t:"Do Things That Don't Scale",a:"Paul Graham",u:"https://paulgraham.com/ds.html"},
 {sub:"FDS required reading, the shared bibliography our team works from"},
 {t:"Who Is Michael Ovitz?",a:"Michael Ovitz",u:"https://www.amazon.com.au/dp/0753553384"},
 {t:"David Senra × Michael Ovitz",a:"Founders episode",u:"https://open.spotify.com/episode/6HvtypJ9FzLjl7r0s5904m"},
 {t:"What Is New Media?",a:"a16z",u:"https://a16z.com/what-is-new-media/"},
 {t:"New Media, One Year In",a:"Erik Torenberg",u:"https://x.com/eriktorenberg/status/2067627331532042599"},
 {t:"Ogilvy on Advertising",a:"David Ogilvy",u:"https://www.amazon.com.au/dp/1853756156"}]},
{h:"Listening",items:[
 {t:"Founders",a:"David Senra",u:"https://www.founderspodcast.com/"},
 {t:"1000x",a:"Avi Felman & Jonah Van Bourg",u:"https://podcasts.apple.com/us/podcast/1000x/id1791150637"}]},
{h:"Off the clock",items:[
 {t:"Mountaineering"},{t:"Running & Hyrox"},{t:"Weight training"},{t:"Eating clean"},{t:"Catching up with friends"}]},
{h:"Bullish on",note:"I think we will pay to get back the things we have grown tired of losing, which is a kind of friction maxing.",items:[
 {t:"Sound healing"},{t:"Going from digital back to analog",a:"agency over what we consume"},{t:"Online identity"},{t:"Jazz"},{t:"Wine"},{t:"Community, and things going local"},{t:"Hardware"},{t:"Financial markets"}]}
];
// Timeline order (oldest → newest). Entries with no "when" render without a date label.
const TL=["senescence","london","agency","moon","web3","degods","frank","hyper","yala","kindling","email","fds","fdssig","distil","harness","agentsw","videos","sachpost","cospost","dylanx","dylan","brent","sachadam","erik","article"];
