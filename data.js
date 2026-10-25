// Every block: id, sec, title, body, why (ties to thesis), when (timeline), links (thread ids), ph (placeholder?)
// Thesis (v11): THESIS_PICK is shown, quietly, at the top of the Board. All three drafted by Grok Bot for Calv to approve.
const THESES=[
"When everything is buildable, the hard part is choosing what is worth building and which darlings to kill. I'm interested in the few things that hold up long enough to become Lindy, if any do.",
"Almost anything can be built now, so taste mostly comes down to what you choose to make and what you let go of. I want to work on the things that still matter in ten years.",
"Thrive Eternal asks what lasts. With everything buildable, my answer so far is to build less, kill more darlings and keep the few things that stand up over time."];
const THESIS_PICK=0; // v12: locked by Calv, only this one is shown
const BLOCKS=[
// Interested in (order chosen so threads never cross)
{id:"scout",imgs:["img/first-signing.jpg?v=19"],imgCap:"My first player signing, Ashley Maynard-Brewer with Rob Segal at the YMU Group, Apr 2019. <a href=\"https://www.linkedin.com/posts/matthewcalvetti_extremely-proud-to-have-facilitated-the-new-share-6520258237856514048-BRWZ/\" target=\"_blank\" rel=\"noopener\">View on LinkedIn ↗</a>",ev:[["My first player signing, LinkedIn Apr 2019 ↗","https://www.linkedin.com/posts/matthewcalvetti_extremely-proud-to-have-facilitated-the-new-share-6520258237856514048-BRWZ/"]],sec:"Things I'm interested in",title:"Talent scouting",body:"David Booth's framing of the talent scout as a craft. My first business, Immense Talent Group, was scouting too.",why:"I have always liked spotting people early.",when:"Ongoing",links:["cosign","ovitz"]},
{id:"conviction",sec:"Things I'm interested in",title:"Conviction bets",body:"Backing a person before the numbers make it obvious.",why:"I read creators the same way I read a position I hold with my own money.",when:"Ongoing",links:["hyper","scout"]},
{id:"cosign",sec:"Things I'm interested in",title:"How cosigns work",embed:1,art:1,url:"https://www.linkedin.com/feed/update/urn:li:activity:7498919055244947456/",urlLab:"My cosign breakdown on LinkedIn ↗",body:"How the a16z team (Erik Torenberg and co) think about co-signs as a mechanic.",why:"A cosign passes one person's belief in you on to the people who trust them.",when:"Ongoing",links:["article","thrive"]},
{id:"thrive",sec:"Things I'm interested in",title:"Lindy & what lasts",body:"Which things hold up over time. Thrive Eternal's writing on lasting institutions put words to it for me.",why:"If everything can be built, I want to know what is worth keeping.",when:"Ongoing",links:["lps"]},
{id:"fdssig",sec:"Things I'm interested in",title:"#fds-signals",body:"Our internal channel for the signals strategists spot across the creative landscape.",why:"It is where the team's taste gets written down.",when:"Kindling",url:"?v=signals",urlLab:"Open the Signals view ▸",links:["harness"]},
{id:"lps",sec:"Things I'm interested in",title:"LPs and tech media creatives",body:"Sitting between the people with capital and the people who make culture around it.",why:"It is the kind of work I want more of.",when:"Ongoing",links:["dylan","sachadam"]},
{id:"dylan",sec:"Things I'm interested in",title:"The Dylan Abruscato archetype",body:"Brand strategist, then Senior Director of Brand Strategy at Postmates (acquired by Uber), now President of TBPN alongside John Coogan and Jordi Hays.",why:"A north star.",when:"2026",links:["dylanx","brent","sachadam"]},
{id:"brent",sec:"Things I'm interested in",title:"Brent Liang and MTS",body:"Brent helped shape a16z's thinking on new media and backed MTS (Monitoring the Situation), then left to build it himself.",why:"Watching someone go from backing new media to building it.",when:"2026",url:"https://www.a16z.news/p/monitoring-the-situation",urlLab:"a16z: Monitoring the Situation ↗",links:["dylan","cosign","erik"]},
{id:"ovitz",sec:"Things I'm interested in",title:"Ovitz & Ogilvy",body:"Michael Ovitz, the agent as kingmaker, and David Ogilvy, who made persuasion a craft.",why:"The connector and the storyteller have always mattered, and they were both.",when:"Ongoing",links:["dylan","itg"]},
{id:"friction",sec:"Things I'm interested in",title:"Reintroducing friction",body:"Choosing the harder and slower version of something on purpose.",why:"It is how I reset and get room to think.",when:"Ongoing",links:["yala","senescence"]},
{id:"special",sec:"Things I'm interested in",title:"Specialised over general",body:"Tools built for one job usually beat general ones at that job.",why:"I build teams and tools the same way.",when:"Ongoing",links:["harness"]},
{id:"agentsi",sec:"Things I'm interested in",title:"Agents as a team",body:"Treating agents as teammates who each have a job and someone they serve.",why:"I apply the same idea to my own week.",when:"Ongoing",links:["special","agentsw"]},
// Worked on
{id:"itg",imgs:["img/first-signing.jpg?v=19"],imgCap:"My first player signing, Ashley Maynard-Brewer with Rob Segal at the YMU Group, Apr 2019. <a href=\"https://www.linkedin.com/posts/matthewcalvetti_extremely-proud-to-have-facilitated-the-new-share-6520258237856514048-BRWZ/\" target=\"_blank\" rel=\"noopener\">View on LinkedIn ↗</a>",ev:[["My first player signing, LinkedIn Apr 2019 ↗","https://www.linkedin.com/posts/matthewcalvetti_extremely-proud-to-have-facilitated-the-new-share-6520258237856514048-BRWZ/"]],sec:"Things I've worked on",title:"Immense Talent Group",body:"My first business, set up when I got back from the UK just after COVID. We sent young footballers from Australian academies to the UK to trial with clubs for scholarships.",why:"It was talent scouting in the literal sense.",when:"c. 2021",links:["scout","ovitz"]},
{id:"email",sec:"Things I've worked on",title:"The first email to Sachin",body:"The cold email I sent Sachin on 24 Jul 2025, subject “Creative Strategist. Why Here, Why Now?”. It runs from football agent in London to web3, agency campaigns, custom agents and Yala Peak.",why:"This cold email is the one Sachin quotes in his LinkedIn cosign.",when:"Jul 2025",imgs:["img/sachin-email.png?v=17"],imgCap:"The original email, sent 24 Jul 2025. My address is hidden.",ev:[["My first player signing, LinkedIn Apr 2019 ↗","https://www.linkedin.com/posts/matthewcalvetti_extremely-proud-to-have-facilitated-the-new-share-6520258237856514048-BRWZ/"],["Built a network, 3 NFT traders on X ↗","https://x.com/0xCalv/status/1691946700913688744"],["GTM and content, DeGods visual thread on X ↗","https://x.com/0xCalv/status/1687724917150883840"],["Campaigns, 2024 case studies deck ↗","https://docs.google.com/presentation/d/e/2PACX-1vSkF5VNHz0qnwgOOhrKc-BLhobz247boTuJ5cMyTHDaF0buqXEiYyGj2tJdENmf6k0w3wfRcjvGuSE1/pub?start=false&loop=false&delayms=3000"]],links:["itg","scout","hyper","web3","fds","agentsw","agency","yala","sachpost"]},
{id:"hyper",sec:"Things I've worked on",title:"Hyperliquid, a conviction position",body:"I opened a position in Hyperliquid at $30 after using the product, and I was backing its founder, Jeff Yan, as much as the token.",why:"I put my own money behind my read.",when:"Feb 2026",links:["conviction","scout"]},
{id:"agency",sec:"Things I've worked on",title:"Agency campaigns",body:"In Sydney I led multi stream campaigns for WHOOP, Amazon Prime Video and Lion, telling brand, product and platform stories from inside an agency, with three promotions in three years.",why:"It is where I learned to run creative at scale for big brands.",when:"Before Kindling",ev:[["Campaigns, 2024 case studies deck ↗","https://docs.google.com/presentation/d/e/2PACX-1vSkF5VNHz0qnwgOOhrKc-BLhobz247boTuJ5cMyTHDaF0buqXEiYyGj2tJdENmf6k0w3wfRcjvGuSE1/pub?start=false&loop=false&delayms=3000"]],links:["email","fds"]},
{id:"cospost",sec:"Things I've worked on",title:"Why cosigns matter (LinkedIn)",body:"My breakdown of the cosign mechanic, posted before a16z shipped Cosign.",why:"I shared my early thinking on the mechanic in public.",when:"Aug 2026",url:"https://www.linkedin.com/feed/update/urn:li:activity:7498919055244947456/",urlLab:"Open the post on LinkedIn ↗",embed:1,links:["scout"]},
{id:"article",sec:"Things I've worked on",title:"Trust’s Biggest Accelerant (draft article)",body:"My essay on co-signs, from Jaz-O putting on a young Jay-Z to a16z's Cosign and X Money.",why:"I am writing up how I think cosigns work.",when:"2026",url:"article.html",urlLab:"Read the article ▸",links:["dylanx"]},
{id:"distil",sec:"Things I've worked on",title:"Distillation into learnings",body:"How raw material gets distilled into top-line learnings the team can act on.",why:"It is the same habit as scouting, used on information.",when:"Kindling",links:["harness"]},
{id:"fds",sec:"Things I've worked on",title:"FDS at Kindling",body:"Founding team at Kindling and head of FDS, leading a team of soon to be six strategists. FDS runs organic content for B2B tech founders.",why:"It is where taste has to become something a team can repeat.",when:"Since joining Kindling",links:["harness","distil","videos"]},
{id:"platform",sec:"Things I've worked on",title:"The Kindling platform",body:"Kindling's marketing brain and execution system, launching soon at kindling.team. Over the last year I built the product with our co-founders and founding engineer. I started as a strategist and moved into steering product, from the organic strategy it runs on through to briefs, ideas, copy and tone of voice.",why:"It takes what a good strategist does and makes it repeatable for every customer.",when:"2025–2026",url:"https://kindling.team/product",urlLab:"Visit kindling.team ↗",links:["harness","distil","agentsw","fds","videos"]},
{id:"videos",sec:"Things I've worked on",title:"Customer videos",body:"Videos I've run for Kindling customers through the Kindling marketplace, including HEO's first rendezvous mission, Haast's Series A and flagship agents, Haast's team film and building in public with Meridian.",url:"?v=work",urlLab:"Open the Worked on view ▸",why:"The work people actually see.",when:"Kindling",links:["sachadam"]},
{id:"saep",sec:"Things I've worked on",title:"Sachin & Adam episodes",body:"Episodes from our media arm on PsiQuantum, Fortell, Physical Intelligence, Baseten, Chai Discovery and Base Power. I was an internal sounding board alongside Tom, giving feedback on drafts.",why:"Watching how a long form story about a frontier company gets made.",when:"2026",url:"?v=work",urlLab:"See them in Worked on ▸",links:["lps","dylan","brent","sachadam"]},
{id:"senescence",sec:"Things I've worked on",title:"Senescence",body:"An early short film of mine, named for the Latin word for the slow decline that comes with age.",why:"I was telling stories with a camera well before it was my job.",when:"",ph:1,pend:"Video link pending",links:["email"]},
{id:"yala",sec:"Things I've worked on",title:"Yala Peak, Himalayas",body:"Yala Peak (5,600m) in the Himalayas, 11 days on foot, then time in Kathmandu, a city that felt soulful.",why:"I wanted some friction and came back with room to think.",when:"Apr 2025",imgs:["img/yala-1.jpg","img/yala-2.jpg","img/yala-3.jpg"],imgCap:"From my Instagram, April 2025",links:["friction","senescence"]},
{id:"harness",sec:"Things I've worked on",title:"The harness",body:"Chained skills that work like a master prompt for idea generation, plus templates for organic strategy.",why:"It lets the whole team use instincts that used to sit with one person.",when:"Kindling",links:["agentsw"]},
{id:"agentsw",sec:"Things I've worked on",title:"How I work with agents",body:"<ul class=\"jobs\"><li><b>Customer health dashboard</b>, refreshed by scheduled agents reading Slack sentiment.</li><li><b>Ramping a new strategist</b> with morning points and end-of-day check-ins.</li><li><b>Sparring partner</b> for business-model pressure tests.</li><li><b>Overheard</b>, watching Reddit, HN, news and X for customer mentions.</li><li><b>This site</b>, built entirely by voice.</li></ul>",why:"Each agent has one job and one group of people it serves.",when:"2026",links:["agentsi","harness","fds"]},
// Cosigned (reading now lives in the Beyond work "Reading" pane)
{id:"frank",sec:"Who's cosigned me",title:"Frank (DeGods) on X",body:"Frank replied “Was already following you but I unfollowed you to refollow you again” on 4 Jun 2023, then “Forbes type beat” and “stay goated” that September.",why:"This comes from my crypto years, when I was a content contributor to DeGods.",when:"Jun 2023",url:"https://x.com/frankdegods/status/1665250022789873664",links:["degods","dylanx","conviction"]},
{id:"sachpost",sec:"Who's cosigned me",title:"Kindling team profile (Sachin)",body:"Sachin's LinkedIn post featuring me as that week's Kindling team profile.",why:"A public cosign from the founder.",when:"2026",ph:1,url:"https://lnkd.in/p/gjukQpVQ",links:["sachadam","email"]},
{id:"erik",sec:"Who's cosigned me",title:"Erik Torenberg post (via Tom)",body:"Tom Duffy sent me Erik's post on talent “whose range can’t be captured in a single label” and added “this is literally you.”",why:"Tom thought of me when he saw it.",when:"2026",url:"https://x.com/eriktorenberg/status/2109722369556390210",links:["cosign","scout","brent"]},
{id:"dylanx",sec:"Who's cosigned me",title:"Dylan (TBPN) on X",body:"Dylan replied “Few” on 18 Sep 2026, and @_AdamMiller_ added “you guys are leading the pack”. The post is shown above.",why:"A tip of the cap that we are thinking along the same lines.",when:"Sep 2026",url:"https://x.com/DylanAbruscato/status/2100735428131258606",links:["dylan","erik","frank"]},
// Path: timeline-only entries (not on the board). Undated entries show no date label.
{id:"signing",imgs:["img/first-signing.jpg?v=19"],imgCap:"My first player signing, Ashley Maynard-Brewer with Rob Segal at the YMU Group, Apr 2019. <a href=\"https://www.linkedin.com/posts/matthewcalvetti_extremely-proud-to-have-facilitated-the-new-share-6520258237856514048-BRWZ/\" target=\"_blank\" rel=\"noopener\">View on LinkedIn ↗</a>",sec:"Path",title:"Signed my first player",body:"As a football agent in London I helped long time friend Ashley Maynard-Brewer sign with Rob Segal at the YMU Group.",why:"I got my start door knocking into an internship and editing Hudl clips on a borrowed laptop.",when:"Apr 2019",url:"https://www.linkedin.com/posts/matthewcalvetti_extremely-proud-to-have-facilitated-the-new-share-6520258237856514048-BRWZ/",urlLab:"The LinkedIn post ↗",links:["scout","itg"]},
{id:"london",sec:"Path",title:"Back from the UK",body:"",why:"Came home just after COVID.",when:""},
{id:"moon",ev:[["Built a network, 3 NFT traders on X ↗","https://x.com/0xCalv/status/1691946700913688744"]],sec:"Path",title:"Moonlighting in tech",body:"",why:"Working on tech on the side.",when:""},
{id:"web3",ev:[["Built a network, 3 NFT traders on X ↗","https://x.com/0xCalv/status/1691946700913688744"],["GTM and content, DeGods visual thread on X ↗","https://x.com/0xCalv/status/1687724917150883840"]],sec:"Path",title:"Web3, trader first",body:"",why:"Came into crypto as a trader.",when:""},
{id:"degods",ev:[["GTM and content, DeGods visual thread on X ↗","https://x.com/0xCalv/status/1687724917150883840"]],sec:"Path",title:"DeGods content contributor",body:"I was a content contributor to DeGods, and in Dec 2023 I wrote on X, “Last 6 months been wild… From not having a Canva account to now contributing alongside [the DeGods design team].”",why:"Frank cared more about the vibe than about design skills.",when:"c. Jun–Dec 2023",url:"https://x.com/0xCalv/status/1733111650197336336"},
{id:"voicesite",sec:"Path",title:"This site, built by voice",body:"Pulling what I'm interested in, what I've worked on and who has vouched for me into one place. I talked every part of it through with Grok Bot and wrote none of the code by hand.",why:"An experiment in building by voice.",when:"Oct 2026"},
{id:"kindling",sec:"Path",title:"Joined Kindling",body:"",why:"Founding team, and head of FDS.",when:""},
{id:"sachadam",sec:"Who's cosigned me",title:"Sachin & Adam",body:"An existing relationship around their documentary series on emerging tech.",why:"I am a sounding board to them alongside Tom.",when:"2026",ph:1,links:[]}
];
// Threads: interest -> work it shaped. Order of both columns keeps these crossing-free.
const THREADS=[["lps","saep","tech media"],["dylan","saep","new media"],["agentsi","platform","agents in the product"],["special","platform","built for one job"],["agentsi","email","agents in the pitch"],["friction","email","Yala, in the email"],["scout","agency","reading talent"],
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
scout:{t:"I like spotting people before it is obvious. Immense Talent Group was the literal version, and I still do it with founders and creators."},
conviction:{t:"I opened a Hyperliquid position at $30 after using the product, and I was backing Jeff Yan as much as the token. I read people the same way."},
thrive:{t:"When anything can be built, deciding what is worth building gets harder. I want to know what still holds up years after the launch."},
fdssig:{t:"Our strategists pool what they notice across the creative landscape here, and it feeds the ideas we build for founders."},
cospost:{t:"I posted this before Cosign dropped, and Sachin replied that it was “still so early innings for co-signers and lighthouses.”"},
cosign:{t:"I think of a cosign as conviction someone lends you. The part I find most interesting is that a16z gets to see which of its users has an eye for talent."},
lps:{t:"Capital and culture often talk past each other, and I like the seat in the middle that translates both ways."},
dylan:{t:"Dylan is a north star for me. He went from brand strategist to strategy director at Postmates and is now President of TBPN, and I pay close attention to that path."},
brent:{t:"Brent helped shape a16z's thinking on new media and backed the show, then left to build it himself. I respect that a lot."},
dylanx:{t:"When Dylan replied “Few” I read it as a tip of the cap that we are thinking about these things in the same direction."},
ovitz:{t:"Ovitz showed the connector can hold the most powerful seat in the room, and Ogilvy showed persuasion can be learned. I want a bit of both."},
friction:{t:"So much is easy now that I add friction back on purpose. Yala Peak gave me room to reflect."},
special:{t:"Something built for one purpose usually beats a general tool at that purpose, and I build teams the same way."},
email:{t:"I backed Kindling well before it backed me, and the first email I sent Sachin is the record of that."},
hyper:{t:"I opened the position at $30 because the product felt like a step change, and I still hold it. None of this is financial advice."},
distil:{t:"Most raw material is noise, so the skill is finding the couple of lines that change what the team does on Monday."},
article:{t:"This is my draft essay on how co-signs work and why they matter more as making things gets cheap."},
fds:{t:"I lead a team of soon to be six strategists running organic content for B2B tech founders, and my job is turning taste into a system they can repeat."},
videos:{t:"HEO's rendezvous film is the one I'm proudest of. For Haast I ran the Series A video through the marketplace and also led the ANZ media push that took the raise into the national press."},
senescence:{t:"This was an early short film of mine, and looking back it shows the storytelling instinct was there well before it became my job."},
yala:{t:"I summited Yala Peak and then slowed down in Kathmandu, a city that felt soulful. I chose that friction and came back reset."},
agentsi:{t:"I treat agents like a team, so each one gets a clear job and someone it serves."},
agentsw:{t:"These are a handful of narrow agents doing jobs people would let slide, and a person reviews everything they produce."},
harness:{t:"The harness chains skills together for idea generation and has a view on where people do their best work."}
};

// Signals: my own posts from our team's #fds-signals channel, paraphrased. Links are the public posts I flagged.
const SIGNALS=[
{d:"4 Sep 2026",src:"OpenAI · X",u:"https://x.com/OpenAI/status/2095595741528125780",lens:"Creative",title:"OpenAI's GPT-6 Astra launch",why:"My favourite launch video in a while. It opens on the MIT “Put That There” archive clip, then shows the speed instead of telling you about it, with soft set dressing and handheld push-ins."},
{d:"18 Sep 2026",src:"@seyong · X",u:"https://x.com/seyong/status/2100245041440559208",lens:"Founder-led",title:"Founder vlogs are coming back",why:"I think 3 to 5 minute vlogs are the next step after lo-fi statics and carousels, and we're still early to it."},
{d:"23 Sep 2026",src:"Anthropic · X",u:"https://x.com/claudeai/status/2102435511222890900",lens:"Talent scouting",title:"Who made Anthropic's Opus 5.5 video",why:"A few internal hires working with the agency Mother, which tells you how seriously the labs now take creative."},
{d:"15 Sep 2026",src:"Runway · X",u:"https://x.com/runwayml/status/2099571028649271462",lens:"AI tooling",title:"Runway breaks down HORSE",why:"A step-by-step look at their workflow, useful for how we storyboard and work with editors."},
{d:"3 Sep 2026",src:"Anthropic · X",u:"https://x.com/claudeai/status/2094848572143407483",lens:"Creative",title:"Anthropic's 5.1 marquee film",why:"Their signature match cut paired with a nature motif in the animation."},
{d:"3 Sep 2026",src:"a16z · X",u:"https://x.com/a16z/status/2094806532999553311",lens:"New media",title:"a16z reads the zeitgeist",why:"Built around an Adam22 podcast segment, it shows they know their audience and the stigma they're up against, in a distinct new media edit."},
{d:"3 Sep 2026",src:"Runway · X",u:"https://x.com/runwayml/status/2092970864916693498",lens:"AI tooling",title:"Runway flexes on purpose",why:"Storyboarded to show off what AI video can do while staying aware that people are tired of AI video."},
{d:"3 Sep 2026",src:"@alexabraham · X",u:"https://x.com/alexabraham/status/2094800998338531692",lens:"Product storytelling",title:"A clean feature demo",why:"Elegant product demo that shows and never tells."},
{d:"3 Sep 2026",src:"@IterIntellectus · X",u:"https://x.com/IterIntellectus/status/2094761595217850387",lens:"Timing",title:"Newsjacking a launch",why:"A demo and one static image dropped into a trending conversation as live commentary."},
{d:"13 Oct 2026",src:"Notion · LinkedIn",u:"https://lnkd.in/p/gSFi2wSb",lens:"Episodic series",title:"Notion APAC's First Block",why:"An episodic series from Notion APAC, and I wanted to know how they approached set dressing and production."},
{d:"11 Sep 2026",src:"LinkedIn",u:"https://lnkd.in/p/g9tBqXmJ",lens:"Algorithm",title:"LinkedIn's algorithm changes",why:"Seven points worth knowing for anyone posting for founders."},
{d:"8 Oct 2026",src:"Observation",lens:"Algorithm",title:"Collab posts are getting buried",why:"It feels like the algorithm is quietly suppressing collab posts right now."}
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
const TL_OLDEST=["senescence","signing","london","itg","moon","web3","degods","frank","yala","agency","email","kindling","fds","fdssig","distil","harness","hyper","agentsw","platform","videos","sachpost","cospost","dylanx","dylan","brent","sachadam","saep","erik","article"];
// Timeline renders newest first.
const TL=["voicesite",...TL_OLDEST.slice().reverse()];
// v13: Customer videos, only work Calv made. li = LinkedIn embed URN (plays in situ), u = clean post URL, src = self-hosted mp4.
// m = public counts read off the LinkedIn post itself on 25 Oct 2026 (reactions/comments only; LinkedIn shows no view counts publicly).
const BOOK="https://kindlingtech.notion.site/Kindling-Select-Case-Study-Book-3f291912df02802489b5fd68cfb5081a";
const VIDEOS=[
{spot:1,t:"HEO's first rendezvous mission",c:"HEO",date:"Aug 2026",d:"Hero launch film for HEO's first rendezvous and proximity operations mission.",src:"video/heo.mp4?v=20",poster:"video/heo.jpg?v=20",u:"https://www.linkedin.com/posts/heos-first-rendezvous-proximity-operations-ugcPost-7493444930556743680-2TuO/",m:"162 reactions · 18 comments",x:"HEO is High Earth Orbit Robotics. The mission uses the Continuum-1 satellite, and the film has a motion graphic overlay. Kindling uses it as the lead example of its hero launch format."},
{t:"Haast Series A announcement",c:"Haast",date:"Apr 2026",d:"Kunal Vankadara announcing Haast's $12M Series A, led by Peak XV.",src:"video/haast-seriesa.mp4?v=20",poster:"video/haast-seriesa.jpg?v=20",u:"https://www.linkedin.com/posts/kunal-vankadara-97a19b112_haast-has-raised-a-12m-series-a-led-by-ugcPost-7448104671497490432-V3-L/",m:"433 reactions · 93 comments",x:"I also led the ANZ media strategy for the raise. We reframed AI in legal away from job replacement and toward amplifying in-house teams, coordinated with Haast's global agencies on a simultaneous worldwide announcement, and landed features in the AFR, The Australian, Capital Brief, The Daily Telegraph and SmartCompany."},
{t:"Review and Monitor",c:"Haast",date:"Nov 2025",d:"Liam King introducing Haast's two new flagship agents.",src:"video/haast-agents.mp4?v=20",poster:"video/haast-agents.jpg?v=20",u:"https://www.linkedin.com/feed/update/urn:li:activity:7394144533225115648/",m:"147 reactions · 7 comments"},
{t:"The people behind Haast",c:"Haast",date:"Dec 2025",d:"An end of year team film.",src:"video/haast-team.mp4?v=20",poster:"video/haast-team.jpg?v=20",u:"https://www.linkedin.com/posts/as-we-wrap-up-the-year-we-wanted-to-shine-ugcPost-7407618480004358144--kDi/",m:"58 reactions · 5 comments"},
{t:"Building in public",c:"Meridian",date:"2026",d:"A vlog style build in public film with the Meridian team.",src:"video/meridian-bip.mp4?v=13",poster:"video/meridian-bip.jpg?v=13"}];
const INPROG=[
{t:"An ownable episodic series with HEO",k:"In development",d:"A recurring series for HEO that it can own. This is the moodboard we are ideating from.",img:"img/heo-ideation.jpg?v=13",cap:"Moodboard · ideation in progress"},
{t:"An episodic series with Everlab",k:"In development",d:"An ongoing series I'm pitching creative for, working with Eugene on the genomic testing side."}];
// Worked on view is canonical: same items and order as the Board's right column (videos have their own row above).
const WORK=BLOCKS.filter(b=>b.sec==="Things I've worked on"&&b.id!=="videos").map(b=>b.id);
// v12: lens -> Interested-in card it belongs to (only where one exists)
const LENS_CARD={"Talent scouting":"scout","New media":"brent"};

// v22: Worked on spotlight for the Kindling platform. Only claims the public site or existing cards support.
const PLATFORM={img:"img/kindling-product.jpg?v=22",u:"https://kindling.team/product",
 line:"Kindling is the marketing brain and execution system we're launching soon. Over the last year I built the product with our co-founders and founding engineer. I started as a strategist and moved into steering product.",
 flow:[
 ["Strategy","An opinionated view of what organic marketing for a B2B tech company should look like, written down so it holds for every customer."],
 ["Partners","How we vet and bid preferred partners on the marketplace, and how those relationships are set up."],
 ["Briefs","Briefs written in platform from what Kindling knows about the company, the way a strategist would write them."],
 ["Distillation","Raw company knowledge distilled into the few lines that matter."],
 ["Ideas","Those learnings turned into ideas worth pursuing."],
 ["Harness","Ideas run through the harness of chained skills our strategists use."],
 ["Copy","Copywriting that comes out of the same flow."],
 ["Tone of voice","Ongoing work to make the copy sound more like each founder."]]};

// v25: Sachin & Adam episodes. Calv was an internal sounding board alongside Tom, giving feedback on drafts. No production credit.
// YouTube views are the rounded public counts shown on the channel, read 25 Oct 2026. X views are public impression counts, read 25 Oct 2026.
const SA=[
{c:"PsiQuantum",yt:"2jshwfW6b4Q",t:"Why NVIDIA & BlackRock Are Betting $2.3B on This Startup",date:"Jul 2026",v:"288K",x:"https://x.com/Sachin_and_Adam/status/2077151149153812734",xv:"9.5K"},
{c:"Fortell",yt:"rCJhlCZVTZQ",t:"Why Billionaires & Celebrities Are Lining Up for This $700M AI Startup",date:"Aug 2026",v:"230K",x:"https://x.com/Sachin_and_Adam/status/2087524509276401802",xv:"251K"},
{c:"Physical Intelligence",yt:"b8BDUa-xbyA",t:"Inside the $5.6B Startup Building Robot Brains",date:"Jan 2026",v:"205K"},
{c:"Baseten",yt:"LILsOOG0Z1o",t:"The Smartest Team in AI You've Never Heard Of",date:"Oct 2026",v:"140K",x:"https://x.com/Sachin_and_Adam/status/2105784970090578355",xv:"109K"},
{c:"Chai Discovery",yt:"3-12R_POwi4",t:"Inside The $4B Startup Where AI Designs Drugs in 24 Hours",date:"Jul 2026",v:"50K",x:"https://x.com/Sachin_and_Adam/status/2082224589493723456",xv:"98K"},
{c:"Base Power",yt:"_fTPLRf1cnA",t:"How A SpaceX Engineer & Zach Dell Built Their $4B Empire",date:"May 2026",v:"44K",x:"https://x.com/Sachin_and_Adam/status/2055045494880034883",xv:"68K"}];
