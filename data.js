// Every block: id, sec, title, body, why (ties to thesis), when (timeline), links (thread ids), ph (placeholder?)
// THESIS IS A PLACEHOLDER (Calv: current wording "a little cringe", may not ship). [0] is shown.
// PARKED (v10): thesis removed from the Board. Options kept for later, unused.
const THESES=[
"Founder-led storytelling. Backing people early.",
"When intelligence is abundant, value accrues to what can't be replicated: trust, taste, and stories that last. I spend my time helping founders tell theirs.",
"Founder-led storytelling is Lindy. Everything else gets cheaper after AGI; the founder's own voice and the people who believe in it compound.",
"I back what lasts: people before the market sees them, and founder stories built to outlive the feed."];
const BLOCKS=[
// Interested in (order chosen so threads never cross)
{id:"scout",sec:"Things I'm interested in",title:"Talent scouting",body:"David Booth's framing of the talent scout as a craft. My first business, Immense Talent Group, was scouting too.",why:"Seeing people before the market does sits at the core of what I believe.",when:"Ongoing",links:["cosign","ovitz"]},
{id:"conviction",sec:"Things I'm interested in",title:"Conviction bets / talent spotting",body:"Backing a person before the numbers make it obvious.",why:"I use the same read on creators that I use with my own money, weighing talent, timeline sentiment and analysis.",when:"Ongoing",links:["hyper","scout"]},
{id:"cosign",sec:"Things I'm interested in",title:"How cosigns work",embed:1,url:"https://www.linkedin.com/feed/update/urn:li:activity:7498919055244947456/",urlLab:"My cosign breakdown on LinkedIn ↗",body:"How the a16z team (Erik Torenberg and co) think about co-signs as a mechanic.",why:"A cosign is how early conviction gets transferred to capital and audiences.",when:"Ongoing",links:["article","thrive"]},
{id:"thrive",sec:"Things I'm interested in",title:"Lindy & what lasts",body:"Longing, Lindy culture, and assets technology can't replicate. Thrive Eternal's thesis on iconic institutions put words to it.",why:"Where I think value accrues in a post-AGI world.",when:"Ongoing",links:["lps"]},
{id:"fdssig",sec:"Things I'm interested in",title:"#fds-signals",body:"Our internal channel for the signals strategists spot across the creative landscape.",why:"This is how raw taste turns into something the team can encode.",when:"Kindling",url:"?v=signals",urlLab:"Open the Signals view ▸",links:["harness"]},
{id:"lps",sec:"Things I'm interested in",title:"LPs and tech media creatives",body:"Being the interconnective tissue between capital and the people who make culture around it.",why:"Put plainly, this is the job I want to be doing.",when:"Ongoing",links:["dylan","sachadam"]},
{id:"dylan",sec:"Things I'm interested in",title:"The Dylan Abruscato archetype",body:"Brand strategist, then Senior Director of Brand Strategy at Postmates (acquired by Uber), now President of TBPN alongside John Coogan and Jordi Hays.",why:"A north star.",when:"2026",links:["dylanx","brent","sachadam"]},
{id:"brent",sec:"Things I'm interested in",title:"Brent Liang and MTS",body:"Brent helped shape a16z's thinking on new media and backed MTS (Monitoring the Situation), then left to build it himself.",why:"Watching someone go from backing new media to building it.",when:"2026",url:"https://www.a16z.news/p/monitoring-the-situation",urlLab:"a16z: Monitoring the Situation ↗",links:["dylan","cosign","erik"]},
{id:"ovitz",sec:"Things I'm interested in",title:"Ovitz & Ogilvy, the people who did this first",body:"Michael Ovitz, the agent as kingmaker, and David Ogilvy, who made persuasion a craft.",why:"Both of them show that the connector and the storyteller have always held a seat of real power.",when:"Ongoing",links:["dylan","itg"]},
{id:"friction",sec:"Things I'm interested in",title:"Reintroducing friction",body:"Choosing the harder and slower version of something on purpose.",why:"Friction is where I reset and reflect and where my taste comes back to me.",when:"Ongoing",links:["yala","senescence"]},
{id:"special",sec:"Things I'm interested in",title:"Specialised over general",body:"Systems that do one thing extraordinarily well tend to beat general ones at that thing.",why:"I build teams and tools to be opinionated and made for one purpose.",when:"Ongoing",links:["harness"]},
{id:"agentsi",sec:"Things I'm interested in",title:"Agents as a team",body:"Treating agents as teammates who each have a job and someone they serve.",why:"This is my preference for specialised tools applied to my own week.",when:"Ongoing",links:["special","agentsw"]},
// Worked on
{id:"itg",sec:"Things I've worked on",title:"Immense Talent Group",body:"My first business, set up when I got back from the UK just after COVID. We sent young footballers from Australian academies to the UK to trial with clubs for scholarships.",why:"Talent scouting in its most literal form.",when:"c. 2021",links:["scout","ovitz"]},
{id:"email",sec:"Things I've worked on",title:"The first email to Sachin",body:"The cold email that landed the Kindling job.",why:"This was day zero, when I cosigned Kindling before it cosigned me.",when:"",ph:1,links:["fds"]},
{id:"hyper",sec:"Things I've worked on",title:"Hyperliquid, a conviction position",body:"I opened a position in Hyperliquid at $30 after using the product, and I underwrote both it and its founder, Jeff Yan.",why:"Talent spotting and analysis with my own money in the game.",when:"",links:["conviction","scout"]},
{id:"cospost",sec:"Things I've worked on",title:"Why cosigns matter (LinkedIn)",body:"My breakdown of the cosign mechanic, posted before a16z shipped Cosign.",why:"I shared my early thinking on the mechanic in public.",when:"Aug 2026",url:"https://www.linkedin.com/feed/update/urn:li:activity:7498919055244947456/",urlLab:"Open the post on LinkedIn ↗",embed:1,links:["scout"]},
{id:"article",sec:"Things I've worked on",title:"The cosigns article (draft)",body:"An essay on cosigns and how conviction travels between people.",why:"I am writing down the mechanic I practise every day.",when:"2026",ph:1,links:["dylanx"]},
{id:"distil",sec:"Things I've worked on",title:"Distillation into learnings",body:"How raw material gets distilled into top-line learnings the team can act on.",why:"Spotting signal early is scouting applied to information instead of people.",when:"Kindling",links:["harness"]},
{id:"fds",sec:"Things I've worked on",title:"FDS at Kindling",body:"Founding team at Kindling and head of FDS, leading a team of soon to be six strategists. FDS runs organic content for B2B tech founders.",why:"This is where I turn taste into a repeatable system for founders.",when:"Since joining Kindling",links:["harness","distil","videos"]},
{id:"videos",sec:"Things I've worked on",title:"Customer videos",body:"Videos I've made for Kindling customers, including the HIO RPO mission, the Pass Series A announcement and behind the scenes of the Meridian launch. See the Worked on view.",url:"?v=work",urlLab:"Open the Worked on view ▸",why:"This is the storytelling side of my work, out in the world.",when:"Kindling",ph:1,links:["sachadam"]},
{id:"senescence",sec:"Things I've worked on",title:"Senescence",body:"My year 12 short film, named for the Latin word for the slow decline that comes with age.",why:"It was the first time I told a story with a camera, long before it was my job.",when:"Year 12",ph:1,links:["email"]},
{id:"yala",sec:"Things I've worked on",title:"Yala Peak, Himalayas",body:"A solo summit of Yala Peak followed by time in Kathmandu, a city that felt soulful.",why:"I went to reintroduce friction into my life and came back with room to reflect.",when:"Apr 2025",ph:1,imgs:[],links:["friction","senescence"]},
{id:"harness",sec:"Things I've worked on",title:"The harness",body:"Chained skills that work like a master prompt for idea generation, plus templates for organic strategy.",why:"It takes a scout's instinct and makes it something the whole team can use.",when:"Kindling",links:["agentsw"]},
{id:"agentsw",sec:"Things I've worked on",title:"How I work with agents",body:"<ul class=\"jobs\"><li><b>Customer health dashboard</b>, refreshed by scheduled agents reading Slack sentiment.</li><li><b>Ramping a new strategist</b> with morning points and end-of-day check-ins.</li><li><b>Sparring partner</b> for business-model pressure tests.</li><li><b>Overheard</b>, watching Reddit, HN, news and X for customer mentions.</li><li><b>This site</b>, built entirely by voice.</li></ul>",why:"Each agent has one job and one group of people it serves.",when:"2026",links:["agentsi","harness","fds"]},
// Cosigned (reading now lives in the Beyond work "Reading" pane)
{id:"frank",sec:"Who's cosigned me",title:"Frank (DeGods) on X",body:"Frank replied “Was already following you but I unfollowed you to refollow you again” on 4 Jun 2023, then “Forbes type beat” and “stay goated” that September.",why:"This comes from my crypto years, when I was a content contributor to DeGods.",when:"Jun 2023",url:"https://x.com/frankdegods/status/1665250022789873664",links:["degods","dylanx","conviction"]},
{id:"sachpost",sec:"Who's cosigned me",title:"Kindling team profile (Sachin)",body:"Sachin's LinkedIn post featuring me as that week's Kindling team profile.",why:"A public cosign from the founder.",when:"2026",ph:1,url:"https://lnkd.in/p/gjukQpVQ",links:["sachadam"]},
{id:"erik",sec:"Who's cosigned me",title:"Erik Torenberg post (via Tom)",body:"Tom Duffy sent me Erik's post on talent “whose range can’t be captured in a single label” and added “this is literally you.”",why:"A peer pointed at the role and said it was me.",when:"2026",url:"https://x.com/eriktorenberg/status/2109722369556390210",links:["cosign","scout","brent"]},
{id:"dylanx",sec:"Who's cosigned me",title:"Dylan (TBPN) on X",body:"Dylan replied “Few” on 18 Sep 2026, and @_AdamMiller_ added “you guys are leading the pack”. The post is shown above.",why:"A tip of the cap that we are thinking along the same lines, and he followed me back.",when:"Sep 2026",url:"https://x.com/DylanAbruscato/status/2100735428131258606",links:["dylan","erik","frank"]},
// Path: timeline-only entries (not on the board). Undated entries show no date label.
{id:"london",sec:"Path",title:"Back from the UK",body:"",why:"Came home just after COVID.",when:""},
{id:"moon",sec:"Path",title:"Moonlighting in tech",body:"",why:"Working on tech on the side.",when:""},
{id:"web3",sec:"Path",title:"Web3, trader first",body:"",why:"Came into crypto as a trader.",when:""},
{id:"degods",sec:"Path",title:"DeGods content contributor",body:"I was a content contributor to DeGods, and in Dec 2023 I wrote on X, “Last 6 months been wild… From not having a Canva account to now contributing alongside [the DeGods design team].”",why:"Frank backed the wavelength and vibe over graphic-design know-how.",when:"c. Jun–Dec 2023",url:"https://x.com/0xCalv/status/1733111650197336336"},
{id:"voicesite",sec:"Path",title:"This site, built by voice",body:"Triangulating disparate threads, from what I'm interested in to what I've worked on and who has vouched for me, into one place. Every part of it was talked through with Grok Bot and none of it was written by hand.",why:"Pulling the threads together in one place.",when:"Oct 2026"},
{id:"kindling",sec:"Path",title:"Joined Kindling",body:"",why:"Founding team, and head of FDS.",when:""},
{id:"sachadam",sec:"Who's cosigned me",title:"Sachin & Adam",body:"An existing relationship around their documentary series on emerging tech.",why:"I am already plugged in to the people making this kind of work.",when:"2026",ph:1,links:[]}
];
// Threads: interest -> work it shaped. Order of both columns keeps these crossing-free.
const THREADS=[
["scout","itg","my first business"],["scout","email","backed Kindling early"],["scout","hyper","backing the founder"],
["conviction","hyper","a conviction bet"],["conviction","cospost","who has the eye"],
["cosign","cospost","the mechanic, early"],["cosign","article","the essay's subject"],
["thrive","distil","signal that lasts"],["fdssig","distil","signals to lessons"],["fdssig","fds","the team's inputs"],
["lps","fds","capital and story"],["dylan","fds","the advisor shape"],["brent","fds","building new media"],
["ovitz","videos","persuasion as craft"],["ovitz","senescence","the storyteller"],
["friction","senescence","slow, by hand"],["friction","yala","friction on purpose"],
["special","harness","purpose-built"],["agentsi","harness","chained skills"],["agentsi","agentsw","one job each"]];

// Matt's read: first-person takes. All written by Grok Bot for Calv to approve (see README).
const READS={
itg:{t:"Immense Talent Group was my first business. I was spotting young footballers early and getting them in front of UK clubs, which is the same instinct I bring to people in tech and media now."},
scout:{t:"Cosigns are scattered across replies, quote posts and follows, so the signal fades unless you know where to look. I wrote about it on LinkedIn before a16z shipped Cosign."},
conviction:{t:"I opened a Hyperliquid position at $30 after using the product, and I was backing Jeff Yan as much as the token. I read people the same way."},
thrive:{t:"When intelligence is abundant, the things that can't be copied get more valuable. A founder telling their own story is one of them."},
fdssig:{t:"Our strategists pool what they notice across the creative landscape here, and it feeds the ideas we build for founders."},
cospost:{t:"I posted this before Cosign dropped, and Sachin replied that it was “still so early innings for co-signers and lighthouses.”"},
cosign:{t:"I think of a cosign as conviction someone lends you. The part I find most interesting is that a16z gets to see which of its users has an eye for talent."},
lps:{t:"Capital and culture often talk past each other, and I like the seat in the middle that translates both ways."},
dylan:{t:"Dylan is a north star for me. He went from brand strategist to strategy director at Postmates and is now President of TBPN, and I pay close attention to that path."},
brent:{t:"Brent helped shape a16z's thinking on new media and backed the show, then left to build it himself. I find that kind of conviction rare."},
dylanx:{t:"When Dylan replied “Few” I read it as a tip of the cap that we are thinking about these things in the same direction, and he followed me back around the same time."},
ovitz:{t:"Ovitz showed the connector can hold the most powerful seat in the room, and Ogilvy showed persuasion can be learned. I want a bit of both."},
friction:{t:"So much is easy now that I add friction back on purpose. Climbing Yala Peak solo gave me room to reflect."},
special:{t:"Something built for one purpose usually beats a general tool at that purpose, and I build teams the same way."},
email:{t:"I backed Kindling well before it backed me, and the first email I sent Sachin is the record of that."},
hyper:{t:"I opened the position at $30 because the product felt like a step change, and I still hold it. Read it as a receipt for how I back people, never as advice."},
distil:{t:"Most raw material is noise, so the skill is finding the couple of lines that change what the team does on Monday."},
article:{t:"I'm still finishing the cosigns article, and it will live here once it's done."},
fds:{t:"I lead a team of soon to be six strategists running organic content for B2B tech founders, and my job is turning taste into a system they can repeat."},
videos:{t:"The customer videos will be added here soon."},
senescence:{t:"This was my year 12 short film, and looking back it shows the storytelling instinct was there well before it became my job."},
yala:{t:"I summited Yala Peak solo and then slowed down in Kathmandu, a city that felt soulful. I chose that friction and came back reset."},
agentsi:{t:"I treat agents like a team, so each one gets a clear job and someone it serves."},
agentsw:{t:"These are a handful of narrow agents doing jobs people would let slide, and a person reviews everything they produce."},
harness:{t:"The harness chains skills together for idea generation and has a view on where people do their best work."}
};

// Signals: my own posts from our team's #fds-signals channel, paraphrased. Links are the public posts I flagged.
const SIGNALS=[
{d:"4 Sep 2026",src:"OpenAI · X",u:"https://x.com/OpenAI/status/2095595741528125780",title:"OpenAI's GPT-6 Astra launch",why:"My favourite launch video in a while. It opens on the MIT “Put That There” archive clip, then shows the speed instead of telling you about it, with soft set dressing and handheld push-ins."},
{d:"18 Sep 2026",src:"@seyong · X",u:"https://x.com/seyong/status/2100245041440559208",title:"Founder vlogs are coming back",why:"I think 3 to 5 minute vlogs are the next step after lo-fi statics and carousels, and we're still early to it."},
{d:"23 Sep 2026",src:"Anthropic · X",u:"https://x.com/claudeai/status/2102435511222890900",title:"Who made Anthropic's Opus 5.5 video",why:"A few internal hires working with the agency Mother, which tells you how seriously the labs now take creative."},
{d:"15 Sep 2026",src:"Runway · X",u:"https://x.com/runwayml/status/2099571028649271462",title:"Runway breaks down HORSE",why:"A step-by-step look at their workflow, useful for how we storyboard and work with editors."},
{d:"3 Sep 2026",src:"Anthropic · X",u:"https://x.com/claudeai/status/2094848572143407483",title:"Anthropic's 5.1 marquee film",why:"Their signature match cut paired with a nature motif in the animation."},
{d:"3 Sep 2026",src:"a16z · X",u:"https://x.com/a16z/status/2094806532999553311",title:"a16z reads the zeitgeist",why:"Built around an Adam22 podcast segment, it shows they know their audience and the stigma they're up against, in a distinct new media edit."},
{d:"3 Sep 2026",src:"Runway · X",u:"https://x.com/runwayml/status/2092970864916693498",title:"Runway flexes on purpose",why:"Storyboarded to show off what AI video can do while staying aware that people are tired of AI video."},
{d:"3 Sep 2026",src:"@alexabraham · X",u:"https://x.com/alexabraham/status/2094800998338531692",title:"A clean feature demo",why:"Elegant product demo that shows and never tells."},
{d:"3 Sep 2026",src:"@IterIntellectus · X",u:"https://x.com/IterIntellectus/status/2094761595217850387",title:"Newsjacking a launch",why:"A demo and one static image dropped into a trending conversation as live commentary."},
{d:"13 Oct 2026",src:"Notion · LinkedIn",u:"https://lnkd.in/p/gSFi2wSb",title:"Notion APAC's First Block",why:"An episodic series from Notion APAC, and I wanted to know how they approached set dressing and production."},
{d:"11 Sep 2026",src:"LinkedIn",u:"https://lnkd.in/p/g9tBqXmJ",title:"LinkedIn's algorithm changes",why:"Seven points worth knowing for anyone posting for founders."},
{d:"8 Oct 2026",src:"Observation",title:"Collab posts are getting buried",why:"It feels like the algorithm is quietly suppressing collab posts right now."}
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
const TL_OLDEST=["senescence","london","itg","moon","web3","degods","frank","hyper","yala","kindling","email","fds","fdssig","distil","harness","agentsw","videos","sachpost","cospost","dylanx","dylan","brent","sachadam","erik","article"];
// Timeline renders newest first.
const TL=["voicesite",...TL_OLDEST.slice().reverse()];
// Worked on view. Video titles were dictated by voice; spellings to confirm (see README). thumb:null = 1-bit placeholder frame.
const VIDEOS=[
{t:"HIO RPO mission",k:"Customer video · Kindling",d:"A customer video on HIO's RPO mission.",chk:"Confirm spelling of 'HIO RPO'"},
{t:"Pass Series A announcement",k:"Customer video · Kindling",d:"The Series A announcement video.",chk:"Dictated as 'past series A'. Is the company Pass?"},
{t:"Behind the scenes of the Meridian launch",k:"Customer video · Kindling",d:"A behind-the-scenes cut from the Meridian launch.",chk:"Confirm 'Meridian'"},
{t:"More coming",k:"Slot",empty:1},{t:"More coming",k:"Slot",empty:1},{t:"More coming",k:"Slot",empty:1}];
// Worked on view is canonical: same items and order as the Board's right column (videos have their own row above).
const WORK=BLOCKS.filter(b=>b.sec==="Things I've worked on"&&b.id!=="videos").map(b=>b.id);
