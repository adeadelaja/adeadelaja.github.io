/* ============================================================================
   PORTFOLIO CONTENT, THIS IS THE ONLY FILE YOU EDIT
   ============================================================================
   Everything on the site is generated from the object below.
   You never touch index.html, style.css or render.js.

   ADD A PROJECT ....... add an object to `work` (give it a `pillar`)
   ADD A PHOTO ......... drop the file in /images, see images/DROP-PHOTOS-HERE.md
   ADD A SCREENSHOT .... drop the file in /evidence
   ADD A ROLE .......... add an object to `timeline`
   ADD A CREDENTIAL .... add an object to `credentials`

   IMAGES: filenames are forgiving, any extension, any case, number prefix
   optional. If no file matches you get a labelled placeholder. Nothing breaks.
   ========================================================================== */

const PORTFOLIO = {

  /* ------------------------------------------------------------------ META */
  meta: {
    name:      "Ade Adelaja",
    eyebrow:   "Revenue & Business Operations · Business Analysis · AI Systems · Venture Intelligence",
    tagline:   "I build the systems that let a business see itself clearly.",

    about: "I am a business and revenue operations analyst, and founding business analyst at Harrize. Four years ago I arrived in the UK; since then I have worked a charity campaign floor, run feedback analytics for a 10,000-student faculty, spent a twelve-month placement inside SAP Emarsys' revenue engine through a post-merger integration, and graduated with First Class Honours in Computer Science. Today I build ventures end to end: the market model, the financial model, the go-to-market and the software architecture. I use AI as the working layer that makes a small team produce like a large one. The thread through all of it is <strong>structure</strong>. Most companies do not have a data problem. They have a question problem, and a structure problem underneath it.",

    location: "London, UK",
    email:    "adesegunadelaja28@gmail.com",
    phone:    "+44 7823 657149",
    linkedin: "https://www.linkedin.com/in/adesegun-adelaja-0364aa266",
    github:   "https://github.com/adeadelaja",
    cv:       "",   /* drop a CV PDF in the repo root, then put its filename here */
    updated:  "August 2026",

    heroPhoto: { src: "images/00-hero.jpg", alt: "Ade Adelaja", caption: "" }
  },

  /* --------------------------------------------------------------- WHAT I DO
     Four lines. These match the four pillars used to filter the work below. */
  doing: [
    { title: "Revenue & business operations",
      body:  "CRM governance, pipeline integrity and the reporting rhythm a commercial team plans around." },
    { title: "Business analysis & delivery",
      body:  "Requirements out of stakeholders, into documents, into systems that actually ship." },
    { title: "AI & systems engineering",
      body:  "AI wired into real processes, and the backend code underneath it." },
    { title: "Market & venture intelligence",
      body:  "Market sizing, financial models and go-to-market that reconcile with each other." }
  ],

  /* --------------------------------------------------------------- PILLARS
     `key` links a case study to a filter button. Keep to four. */
  pillars: [
    { key: "revops",  name: "Revenue & Operations" },
    { key: "ba",      name: "Business Analysis" },
    { key: "ai",      name: "AI & Engineering" },
    { key: "venture", name: "Venture Intelligence" }
  ],

  /* ---------------------------------------------------------------- METRICS */
  metricsTitle: "Measured impact",
  metricsIntro: "Every number here traces back to a file I built and can open in front of you. Nothing is rounded up for effect.",
  metrics: [
    { tag: "Revenue Operations", figure: "711", what: "Opportunity records audited",
      caption: "Across 693 accounts, 51 owners and 7 SAP regions, validated against D&B Hoovers" },
    { tag: "CRM Governance", figure: "+5<em>%</em>", what: "Global pipeline hygiene",
      caption: "Reported improvement once the validation guardrails were in place" },
    { tag: "Funding", figure: "£10<em>k</em>", what: "Pre-seed R&D funding supported",
      caption: "Research, survey design and market analysis behind the successful application" },
    { tag: "Market Intelligence", figure: "2,617", what: "Rows structured into a demand model",
      caption: "UK Home Office visa records across four Africa–UK trade corridors" },
    { tag: "Venture", figure: "36<em>mo</em>", what: "Financial model built",
      caption: "8 sheets, 225 formulas, LTV/CAC with base, downside and upside cases" },
    { tag: "Stakeholders", figure: "10,000<em>+</em>", what: "Student faculty analysed",
      caption: "Feedback data that changed a university timetable" },
    { tag: "Commercial", figure: "1,700", what: "Room catchment secured",
      caption: "Prime restaurant site inside a student accommodation, walking distance to campus and city centre" },
    { tag: "Primary Research", figure: "70<em>/100</em>", what: "Surveyed buyers ready to pay",
      caption: "Primary survey validating demand for a £50k restaurant venture before launch" },
    { tag: "Academic", figure: "First", what: "Class BSc Computer Science",
      caption: "Coventry University, Statistics & Mathematics for CS 98%" }
  ],

  /* ----------------------------------------------------------------- METHOD */
  method: {
    intro: "Every engagement I have had runs the same loop. The domain changes: enterprise pipeline, cross-border trade, a restaurant launch, student welfare. The loop does not.",
    steps: [
      { title: "Question",  sub: "what's really being asked" },
      { title: "Structure", sub: "schema, fields, sources" },
      { title: "System",    sub: "build it, automate it" },
      { title: "Decision",  sub: "someone acts on it" },
      { title: "Loop",      sub: "it holds itself up" }
    ],
    caption: "The step most people skip is the first one. The step most people never reach is the last, and that is the one that turns a piece of analysis into an asset.",
    note: "AI is where that loop got fast. I run analysis end to end through Claude: survey design, data structuring, market modelling, financial modelling, GTM strategy, investor deck. That is how a three-to-five person team ships the analytical output of a much larger one. The discipline is not prompting. It is structuring data cleanly enough that a system has something real to act on, and knowing which judgement stays human."
  },

  /* ------------------------------------------------------------------- WORK */
  workIntro: "Filtered by the four things I do. Every one is the same shape: the problem, the system I built for it, and what changed.",
  work: [
    /* ---------- REVENUE & OPERATIONS ---------- */
    {
      pillar: "revops", org: "SAP Emarsys", discipline: "Revenue Operations",
      title: "A pipeline reconciliation that audits itself",
      problem: "Post-merger, opportunity records lived in two systems that quietly disagreed with each other. Every reporting cycle meant a manual sweep for mismatches, and the forecast inherited every error nobody caught in time.",
      system: "A compliance audit layer covering <strong>711 new-business opportunity records across 693 accounts, 51 opportunity owners and 7 SAP regions</strong>, cross-validating account name, industry, US SIC and DUNS against D&amp;B Hoovers as the trusted source. Roughly 800 XLOOKUP validations with ISNA exception trapping flag misalignment automatically; conditional formatting surfaces it at a glance; the file refreshes against the live rolling pipeline so newly created business enters the audit on its own. Coverage spans nine fiscal quarters, Q1-2024 to Q1-2026.",
      outcome: "A self-updating audit tool replaced a recurring manual sweep, and shipped with a refresh procedure documented well enough that the next owner could run it without me.",
      stack: ["Salesforce", "Advanced Excel", "XLOOKUP / ISNA", "D&B Hoovers", "Audit design"],
      evidence: [ { src: "evidence/e2-validation-formula.png", alt: "Validation formula anatomy",
        caption: "Evidence E2: XLOOKUP against a trusted source, ISNA exception trapping, the computed flag. Synthetic records; formula bar visible." } ]
    },
    {
      pillar: "revops", org: "SAP Emarsys", discipline: "CRM Governance",
      title: "Hygiene as a guardrail, not a clean-up",
      problem: "A multi-million-pound global pipeline, more than 100 reps across EMEA, APJ and APAC, and data quality degrading faster than anyone could repair by hand: missing forecast categories, absent MRR values, blank billing addresses, close dates already in the past.",
      system: "Validation rules and data-quality checks built inside Salesforce so lead routing and account hygiene held under scale. These are the guardrails that keep attribution honest. Paired with them, a <strong>14-sheet admin dashboard tracking four integrity dimensions across all 7 SAP regions</strong>, built on roughly 2,500 ISBLANK, AND, VLOOKUP and COUNTIFS validations over a live opportunity feed. Every region resolves to a single triage verdict of REVIEW or FAIR, rather than another raw export nobody opens.",
      highlight: { label: "The operating rhythm",
        body: "I also owned a fixed weekly cadence of six recurring deliverables that sales leadership planned around: pipeline, forecast and admin dashboard on Monday; forecast and pipeline coverage on Tuesday; forecast and forecast notes on Wednesday; pipeline compliance on Thursday; pipeline and BP ID summaries on Friday." },
      outcome: "Global pipeline hygiene reported up 5%, and the dashboard became the checkpoint other teams measured their own data against. Handed over with tab architecture, refresh sequence, failure modes and maintenance guardrails written down.",
      stack: ["Salesforce validation rules", "Dashboard design", "Data governance", "Lead routing", "SQL", "Handover documentation"],
      evidence: [ { src: "evidence/e1-sfdc-dashboard-summary.png", alt: "Regional data-quality summary with triage column",
        caption: "Evidence E1: 7 regions, four integrity dimensions, REVIEW/FAIR triage, global roll-up. Rebuilt with synthetic data." } ]
    },
    {
      pillar: "revops", org: "Synergy Accountancy", discipline: "Data Structuring",
      title: "Before there was any automation",
      problem: "An accounting firm had clients whose expenses were untrackable. The raw material was bank statement data: the right information in the wrong shape, so nobody could answer a question with it or make a decision from it.",
      system: "On two client engagements I migrated the statement data into a structured Excel model by hand, because no automation existed to do it. Deciding what a row was, what a column meant and how the categories had to work was the whole job. It is the same decision I have made on every dataset since. Once the structure held, I built the validation and consolidation on top with INDEX-MATCH, XLOOKUP, pivot tables and conditional formatting.",
      outcome: "The firm's clients could finally track expenses against something. The automation layer cut reporting effort by 50% and removed a recurring source of manual error, but the structure was what made the automation possible.",
      stack: ["Advanced Excel", "INDEX-MATCH / XLOOKUP", "PivotTables", "SQL", "Data structuring"],
      evidence: [ { src: "evidence/e9-synergy-dataset.png", alt: "Structured dataset",
        caption: "Evidence E9: the structured dataset. Replace client names and figures with invented ones before publishing." } ]
    },

    /* ---------- BUSINESS ANALYSIS ---------- */
    {
      pillar: "ba", org: "Harrize · Leadline Solutions", discipline: "Client Requirements",
      title: "Building what the coaches actually asked for",
      problem: "Orion FC needed a website. The head coaches knew what the club was for and who it served; they did not have a specification, and nobody had translated what they wanted into something a developer could build.",
      system: "I ran the client process. Sat with the head coaches, drew out how they wanted the site to work and what it had to do for the club, and turned that into a <strong>build document</strong>: the requirements written down in one place, in language both sides could check. Then a <strong>website prototype</strong> they could react to rather than imagine. Their feedback drove the direction; my job was making sure what got built was what they meant.",
      outcome: "A documented specification and a working prototype, agreed with the people who had to live with it, instead of a site built from a guess.",
      stack: ["Requirements gathering", "Stakeholder interviews", "Build documentation", "Prototyping", "Client management"],
      evidence: [
        { src: "evidence/e7-orion-build-document.png", alt: "Orion FC build document", caption: "Evidence E7: the build document: requirements captured from the head coaches." },
        { src: "evidence/e8-orion-prototype.png", alt: "Orion FC website prototype", caption: "Evidence E8: the prototype they reviewed and directed." }
      ]
    },
    {
      pillar: "ba", org: "Harrize", discipline: "Delivery & Process",
      title: "How the work actually gets run",
      problem: "A three-to-five person team running several ventures at once will drift. Requirements get remembered differently by different people, and effort pools where it is comfortable rather than where it is needed. Nothing fails loudly, the work just quietly stops matching what the business asked for.",
      system: "Delivery runs in <strong>fixed cycles against agreed business-process KPIs</strong>: a timeline is set, the requirements inside it are met, the cycle closes, we move on. <strong>User stories live in one controlled requirements document</strong> rather than in people's heads, and each is validated against the business plan and model before it is built, through business surveys, customer surveys, stakeholder interviews and institutional research, so a requirement traces back to a real user need rather than an assumption. Sprint work is tracked in Jira.",
      highlight: { label: "The change that made the difference",
        body: "We stopped allocating work by fixed role boundaries. Each cycle, tasks and roles are reassigned against wherever the business requirement is most pressing or user needs have shifted. It costs a conversation at the start of every cycle and it buys back the weeks normally lost to one person being the bottleneck while another waits." },
      outcome: "Requirements survive contact with the team, and capacity moves to where it matters rather than to where the org chart put it.",
      stack: ["Cycle-based delivery", "User stories", "Requirements documentation", "Business & customer surveys", "Stakeholder research", "Jira"],
      evidence: [ { src: "evidence/e6-jira-sprint.png", alt: "Jira sprint board",
        caption: "Evidence E6: sprint tracked in Jira. Rename issue titles to something generic before screenshotting if any client name appears." } ]
    },
    {
      pillar: "ba", org: "Coventry University", discipline: "Stakeholder Analytics",
      title: "The question nobody had asked",
      problem: "Students kept saying the timetable was why they could not get in on time. That is an anecdote. Anecdotes do not change timetables.",
      system: "Collected and structured feedback across a faculty of more than 10,000 students, survey responses, course evaluations, meeting notes, into categorised datasets. Worked with a team of course reps to segment by department and year group, prioritise by frequency and impact, and test the timetabling claim against the attendance evidence rather than against how loudly it was made.",
      outcome: "The pattern held. I presented it to the Head of School and course directors, and the timetable changed. Students' union engagement rose 20% over the academic year; I was awarded the Student Leadership Award.",
      stack: ["Survey analysis", "Segmentation", "Excel", "Executive reporting", "Stakeholder management"],
      evidence: [ { src: "images/03-leadership-award-a.jpg", alt: "Student leadership award",
        caption: "Student Leadership Award, Coventry University Students' Union." } ]
    },

    /* ---------- AI & ENGINEERING ---------- */
    {
      pillar: "ai", org: "Harrize · Leadline Solutions", discipline: "Backend Engineering",
      title: "The campaign API, written and documented",
      problem: "MarketIQ needed to send campaigns to MSMEs over SMS. The obvious build is one file that calls the SMS provider and hopes. That version fails the first time a campaign has 400 recipients, or the provider rejects one number and takes the whole batch down with it.",
      system: "A Node.js and Express backend with the concerns separated into entry point, routes, controllers and utilities, so the SMS provider can be swapped without touching campaign logic. Credentials load from environment variables and the service <strong>fails fast at startup</strong> with a readable error if they are missing, rather than failing silently on the first send. Recipients are batched in chunks of 100, and each recipient's result is captured individually so one bad number returns an error for that number instead of killing the campaign.",
      highlight: { label: "The bit I'd point at",
        body: "I flagged a <strong>ReDoS vulnerability in <code>validate.js</code></strong>, a dependency two levels down, pulled in by the provider SDK, recorded that it does not affect sandbox testing, and documented the mitigation path before production. I also wrote the whole thing up as a living technical document: stack, folder structure, request flow, debugging lessons and next steps, explicitly for future developers and technical audits." },
      outcome: "A backend another developer can pick up from the documentation alone, and a security note in writing before it could become a production problem.",
      tree: { label: "Folder structure", body: `marketiq-backend/
├── server.js                    # entry point, middleware, route mounting
├── routes/
│   └── campaignRoutes.js        # POST /api/campaigns
├── controllers/
│   └── campaignController.js    # validation, UUID, dispatch, per-recipient results
├── utils/
│   └── sendSMS.js               # Africa's Talking integration, batching
└── .env                         # credentials, never committed` },
      code: { file: "utils/sendSMS.js", lang: "Node.js", body: `const africastalking = require('africastalking');

const AT_USERNAME = process.env.AFRICASTALKING_USERNAME;
const AT_API_KEY  = process.env.AFRICASTALKING_API_KEY;

if (!AT_USERNAME || !AT_API_KEY) {
  throw new Error('AfricasTalking credentials missing: set ' +
    'AFRICASTALKING_USERNAME and AFRICASTALKING_API_KEY in .env');
}

const at  = africastalking({ username: AT_USERNAME, apiKey: AT_API_KEY });
const sms = at.SMS;

// Africa's Talking accepts multiple recipients per request.
// Batch in chunks so one large campaign can't blow the request limit.
const CHUNK_SIZE = 100;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}`,
        caption: "Real source. Credentials come from the environment, never the repository, which is why this code is safe to publish as-is." },
      stack: ["Node.js", "Express", "Africa's Talking SDK", "dotenv", "UUID", "Thunder Client", "VS Code"],
      evidence: []
    },
    {
      pillar: "ai", org: "Harrize · Hexpres", discipline: "AI Engineering Workflow",
      title: "Scoping the AI so it stays on task",
      problem: "I was building the Hexpres platform in VS Code with AI assistance, and hit the failure mode everyone hits: give a coding agent a large, unfocused instruction file and it reads too much, drifts across files you did not ask it to touch, and burns context producing changes you then have to unpick.",
      system: "I treated the agent's instruction file as a system to design rather than a document to fill. I cut my <code>CLAUDE.md</code> back deliberately, my own note at the time was that it was <em>\"carrying all this information, too much and not targeted, which may lead to too much reading, burning token\"</em>, and replaced the sprawl with a scoped session block: name the one file being worked on, state the task in a single sentence, and add the constraint <strong>\"do not touch any other file or section.\"</strong> The build itself is a proper front-end architecture: modular CSS split across <code>base.css</code>, <code>index.css</code> and <code>components.css</code>, with the palette held as custom properties in <code>:root</code> so a colour change propagates everywhere instead of being hunted down file by file.",
      highlight: { label: "Why this is the AI skill that matters",
        body: "Most people asking an AI for code are optimising the prompt. The leverage is upstream of that, in how much context the model is given, how tightly the task is bounded, and what it is explicitly forbidden from touching. That is the same discipline as scoping a requirement or fixing a schema: decide what is in the frame before anything gets built. It is also why a change like <code>--purple: #6B0AC9 → #5B0EA6</code> lands in one place and takes effect across the site." },
      outcome: "A shipped MVP front-end, and a repeatable way of working with a coding agent that does not drift. The same scoping discipline now runs every AI-assisted build I do.",
      stack: ["VS Code", "CLAUDE.md context design", "Modular CSS architecture", "CSS custom properties", "HTML", "Design systems", "MVP scoping"],
      evidence: [ { src: "evidence/e13-hexpres-site.png", alt: "Hexpres site",
        caption: "Evidence E13: the Hexpres MVP front-end, built in VS Code." } ]
    },
    {
      pillar: "ai", org: "Harrize · Leadline Solutions", discipline: "Applied AI",
      title: "An AI prototype that had to produce something real",
      problem: "Plenty of teams can demo an AI feature. Far fewer can point at one that survived contact with a real workflow and a real quality bar, which is the gap most companies investing in AI are stuck in.",
      system: "Led the design and implementation of an AI-powered SaaS prototype on <strong>Oracle Cloud Infrastructure AI Services</strong>, Speech, Vision, Language and Generative AI, including LLM fine-tuning and evaluating model output against defined quality guidelines rather than against whether it looked impressive. Alongside it I run the analysis loop for every venture end to end through Claude: survey design, data structuring, market model, financial model, GTM, investor deck.",
      highlight: { label: "Where the judgement stays human",
        body: "The model does assembly. I own the assumptions. On the SkinMatch financial model that distinction is the whole difference between a plausible-looking spreadsheet and one that survives an assessor pulling on it, and it is the answer I give when someone asks what I actually do with AI." },
      outcome: "A working prototype on enterprise AI services, and a repeatable analysis loop that lets a three-to-five person team ship the output of a much larger one.",
      stack: ["OCI AI Services", "LLM fine-tuning", "Claude", "Prompt engineering", "AI workflow design", "Output evaluation"],
      evidence: [ { src: "evidence/e10-ai-workflow.png", alt: "AI operating loop",
        caption: "Evidence E10: the engagement flow with AI-run steps and human-judgement steps marked separately." } ]
    },

    /* ---------- VENTURE INTELLIGENCE ---------- */
    {
      pillar: "venture", org: "Harrize · SkinMatch AI", discipline: "Venture Systems Architecture",
      title: "Five layers that had to agree with each other",
      problem: "A venture only works if the market research, the customer it is built for, the route to that customer, the money and the software all describe the same business. Most plans are assembled by different hands and quietly contradict each other, a target customer the go-to-market cannot reach, a revenue model the architecture cannot support. An endorsement assessor reads for exactly those seams.",
      system: "I built all five layers and made them reconcile. <strong>Market:</strong> UK skincare sized at £4.59B in 2025 growing to £6.27B by 2031 at 5.34% CAGR, every figure sourced, TAM/SAM/SOM boundaries stated rather than assumed. <strong>Customer:</strong> two segments defined against a documented failure, women 22–40 with specific concerns, and Black, South Asian, East Asian and mixed-heritage users underserved by tools carrying the MIT-documented 30% subgroup performance gap; the profiling system uses a more inclusive scale than the six-point Fitzpatrick standard because the customer definition demanded it. <strong>Route:</strong> UK-only launch, London and English metros first, deliberately narrow so acquisition spend follows evidence rather than ambition. <strong>Money:</strong> a 36-month formula-driven model, eight sheets, 225 formulas, colour-coded inputs, a README so someone else can drive it. <strong>Software:</strong> an eight-layer technical architecture I designed.NET MAUI cross-platform front-end, OAuth identity with UK-hosted consent management, profile and catalogue services, a compatibility engine shipping rule-based in v1 with a hybrid-ML path in v2, review and optional vision services, privacy-preserving analytics.",
      highlight: { label: "The constraints that shaped the build",
        body: "Two decisions came from outside engineering and shaped everything downstream. The image service is scoped to read skin tone and visible texture but <strong>never a clinical condition</strong>, that boundary keeps the product on the non-regulated side of UK medical-device law, and it was set before a line of that service was specified. And catalogue accuracy is a <strong>release gate, not a backlog item</strong>: a recommendation engine is only as good as the data underneath it. That is the same principle as the pipeline hygiene work at SAP, applied to a product instead of a CRM." },
      outcome: "Five layers that move together. Change the customer definition and the route to market shifts; shift the route and acquisition cost moves; move acquisition cost and the P&L moves with it. The plan is a system rather than a document, which is why it holds when an assessor pulls on any one thread.",
      stack: ["Systems architecture", "ICP definition", "GTM sequencing", "Financial modelling", "TAM / SAM / SOM", "UK GDPR & medical-device boundary", ".NET MAUI"],
      evidence: [ { src: "evidence/e5-skinmatch-architecture.png", alt: "Eight-layer technical architecture",
        caption: "Evidence E5: the architecture table: layer, function, technology direction." } ]
    },
    {
      pillar: "venture", org: "Harrize · Hexpres", discipline: "Market Intelligence",
      title: "A market analysis you only build once",
      problem: "Hexpres analyses cross-border trade corridors, Africa to the UK live, Pakistan to the UK next, more after that, against a $250B+ global African export and diaspora import opportunity. Each new corridor threatened to become a fresh research project starting from zero.",
      system: "I fixed the schema instead of the study. An eight-sheet model governed by a <strong>37-variable data dictionary</strong>, every variable carrying its definition, its source and what it feeds downstream, drawing on ONS, OECD, UN, World Bank and IMF, with extract dates stamped so any figure can be re-derived. Underneath it, <strong>2,617 rows of UK Home Office visa records</strong> structured into a corridor demand model, and an activation funnel converting diaspora population into addressable buyers, retail operators and importing retailers.",
      outcome: "The second corridor became a replication rather than a rebuild. Analysis that compounds across markets instead of resetting at each one.",
      stack: ["Schema design", "Data dictionary", "ONS / OECD / UN / World Bank", "Excel", "SQL", "Python"],
      evidence: [
        { src: "evidence/e4-hexpres-data-dictionary.png", alt: "37-variable data dictionary", caption: "Evidence E4: variable, definition, source, downstream dependency. Public data, publishable as-is." },
        { src: "evidence/e4b-hexpres-corridor-chart.png", alt: "Corridor demand chart", caption: "Evidence E4b: visa grants by corridor: Nigeria 1,079,372 · South Africa 366,496 · Ghana 274,976 · Kenya 107,805." }
      ]
    },
    {
      pillar: "venture", org: "Harrize · Naija Delight", discipline: "Venture Consulting",
      title: "A restaurant, taken apart before a pound was spent",
      problem: "A client with four years of hospitality management experience had spotted demand for an African restaurant around Coventry and Leamington Spa, and needed £50,000 to act on it. He had the instinct and the sector experience. What he did not have was evidence an investor would accept, a defined customer, a defensible site, a compliance position, and numbers that reconciled.",
      system: "I ran the whole engagement. <strong>Primary research first:</strong> we surveyed 100 people in the target catchment and <strong>70 said they would pay now</strong>, against a documented complaint that one in two African consumers locally cannot get quality African food at a reasonable price and default to other cuisines. That produced a price position of <strong>£9 against the £14</strong> the single incumbent charges. <strong>Then location, because for a restaurant the site is the strategy:</strong> I viewed premises in person and we secured a prime unit inside a student accommodation of roughly <strong>1,700 rooms</strong>, a former Starbucks, so structurally already a food-service site, with the university, city centre, bus station and college all within walking distance. I built a location-intelligence dashboard from proximity and catchment data, and that dashboard is what feeds the financial model rather than the other way round.",
      highlight: { label: "The part most consultants skip",
        body: "I wrote to <strong>Coventry City Council</strong> before the model was finished, two separate approaches, one to Food Safety and one to Licensing, because they hold different jurisdictions. Licensing came back with the real constraints: the 28-day statutory consultation, the notice that must be displayed on pale blue paper, the newspaper advertisement within ten working days, the personal licence conditions, and that outside seating has to be cleared with planning first. I turned that into a <strong>lean compliance budget</strong>, one-off costs and recurring costs as separate tables, so the compliance position was a known number in the plan rather than a surprise after signature." },
      outcome: "A venture case an investor can interrogate: a customer proven by primary survey data, a site secured and evidenced, a compliance cost known in writing from the council itself, and a financial model driven by location intelligence rather than optimism. The engagement was structured and priced in two phases against delivery.",
      stack: ["Primary survey design", "Location intelligence", "Competitive analysis", "Financial modelling", "Regulatory compliance", "Investor pitch deck", "Client engagement"],
      evidence: [
        { src: "evidence/e11-naija-location-dashboard.png", alt: "Location intelligence dashboard", caption: "Evidence E11: the location dashboard: catchment, proximity and the metrics that feed the financial model." },
        { src: "evidence/e12-naija-compliance-budget.png", alt: "Compliance budget", caption: "Evidence E12: one-off and recurring compliance costs, built from the council's own response." }
      ]
    }
  ],

  /* ----------------------------------------------------------------- SKILLS */
  skills: {
    intro: "The tools are the easy half. The second list is the one that decides whether the first list produces anything.",
    technical: [
      { title: "Revenue & CRM systems",
        items: ["Salesforce", "CRM data governance", "Validation rules", "Pipeline hygiene & auditing", "Forecast management", "Deal desk support", "Lead routing", "Territory reassignment", "Quarterly business reviews"] },
      { title: "Data & analytics",
        items: ["Advanced Excel", "XLOOKUP / INDEX-MATCH", "Power Query", "PivotTables", "SQL", "Python", "Power BI", "ETL", "Schema & data-dictionary design", "Financial modelling", "TAM / SAM / SOM", "Sensitivity analysis"] },
      { title: "AI & automation",
        items: ["OCI AI Services", "LLM fine-tuning", "Claude (advanced)", "AI workflow design", "Prompt engineering", "Output evaluation", "Process automation", "AI-ready data structuring", "NLP"] },
      { title: "Engineering & build",
        items: ["Node.js", "Express", "REST API design", "Relational database design", "Normalisation & ERD", "SQLite", "Django", "React", "Git", "C++", "Jira"] }
    ],
    soft: [
      { title: "Stakeholder communication",
        body: "Presented feedback analysis to a Head of School and course directors that changed a university timetable; drew requirements out of club head coaches who had no specification to give me." },
      { title: "Requirements elicitation",
        body: "Business surveys, customer surveys, stakeholder interviews and institutional research, captured as user stories in one controlled document rather than in people's heads." },
      { title: "Executive reporting",
        body: "Owned a weekly cadence of six recurring deliverables that sales leadership planned their reviews around, across seven regions." },
      { title: "Systems thinking",
        body: "The habit of asking what a change propagates into. Move the customer definition and the go-to-market, the acquisition cost and the P&L all have to move with it." },
      { title: "Documentation & handover",
        body: "Refresh procedures, tab architecture, failure modes, a README, a living technical document. Three separate times I have built something so it kept working after I left." },
      { title: "Ownership under ambiguity",
        body: "Joined SAP mid-merger with two systems disagreeing and no obvious owner. Then joined a consultancy at founding stage, where nothing has a process until someone writes one. Neither came with instructions." }
    ],
    values: [
      { title: "Resilience",
        body: "Four years, five roles, a First Class degree and a company, most of it running at the same time. The SAP placement ran alongside final-year coursework; Harrize started before the degree finished. Nothing here was handed over, and none of it happened in a straight line." },
      { title: "Innovation",
        body: "I would rather change the shape of a problem than work harder inside it. Fixing the corridor schema instead of repeating the study. Making catalogue accuracy a release gate instead of a backlog item. Cutting an AI instruction file back so the agent stops drifting. The gain is almost always upstream of the effort." },
      { title: "Creativity",
        body: "Most of what I build has no template. A location dashboard that feeds a financial model, a triage column that turns seven regions of raw data into one word per region, a venture plan where the software architecture and the market sizing have to agree. Creativity here is not decoration, it is finding the structure nobody has drawn yet." }
    ]
  },

  /* --------------------------------------------------------------- TIMELINE */
  timelineIntro: "Four years in the UK, in the order it happened.",
  timeline: [
    { when: "Oct 2025 → now", role: "Founding Business Analyst", org: "Harrize, Birmingham",
      detail: "Business systems, market intelligence, GTM and venture analysis across several ventures",
      photos: [
        { src: "images/02-startup-bootcamp-a.jpg", alt: "Startup bootcamp", caption: "University startup bootcamp, certificated" },
        { src: "images/02-startup-bootcamp-b.jpg", alt: "Startup bootcamp (second)", caption: "" }
      ] },
    { when: "Aug 2024 → Oct 2025", role: "Revenue Operations Analyst (12-month placement)", org: "SAP Emarsys, London",
      detail: "Global pipeline, Salesforce governance, leadership dashboards, deal desk",
      photos: [
        { src: "images/04-sap-emarsys-a.jpg", alt: "At SAP Emarsys", caption: "SAP Emarsys, London" },
        { src: "images/04-sap-emarsys-b.jpg", alt: "At SAP Emarsys (second)", caption: "" }
      ] },
    { when: "Sep 2023 → Jul 2024", role: "Student Rep & Faculty Data Analyst", org: "Coventry University",
      detail: "Feedback analytics for a 10,000+ student faculty; Student Leadership Award",
      photos: [
        { src: "images/03-leadership-award-a.jpg", alt: "Student leadership award", caption: "Student Leadership Award" },
        { src: "images/03-leadership-award-b.jpg", alt: "Rep work / badges", caption: "" }
      ] },
    { when: "May → Sep 2023", role: "Data Administrator (Summer Internship)", org: "Synergy Accountancy, Birmingham",
      detail: "Client financial models, expense restructuring, 50% reporting-efficiency gain", photo: null },
    { when: "May → Sep 2023", role: "Lead Sales Ambassador", org: "CauseLed, Birmingham",
      detail: "Field campaigns for Cancer Research UK, Alzheimer's Society and others",
      photos: [
        { src: "images/05-causeled-campaign-a.jpg", alt: "Field campaign", caption: "Field fundraising, West Midlands" },
        { src: "images/05-causeled-campaign-b.jpg", alt: "Field campaign (second)", caption: "" }
      ] },
    { when: "2021 → 2022", role: "Data Analyst", org: "Transfuse Analytics, remote",
      detail: "ETL, data cleansing and client analysis; where the analytical habits started", photo: null },
    { when: "2026", role: "BSc (Hons) Computer Science, First Class", org: "Coventry University",
      detail: "Statistics & Mathematics for CS 98%, Programming & Algorithms 87%",
      photos: [
        { src: "images/01-graduation-a.jpg", alt: "Graduation", caption: "First Class Honours, July 2026" },
        { src: "images/01-graduation-b.jpg", alt: "Graduation (second)", caption: "" }
      ] },
    { when: "Where it started", role: "Best Overall Graduating Student in Data Processing", org: "Global Tech Ltd",
      detail: "Secondary school. First encounter with databases, records and the relationships between them", photo: null }
  ],
  timelineNote: "The through-line is not the job titles. It is <strong>structure</strong>, the same instinct at every scale. A schoolboy prize for data processing became relational database theory, became a First Class degree in the subject, became the reconciliation logic holding an enterprise pipeline together through a merger, became a 37-variable data dictionary for a trade corridor, became an eight-layer architecture for a venture that had not been built yet. Different sizes of the same question: <em>what is the right structure, and what does it have to agree with?</em>",

  /* ------------------------------------------------------------ CREDENTIALS */
  credentials: [
    { name: "BSc (Hons) Computer Science, First Class", issuer: "Coventry University", date: "2026", url: "" },
    { name: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle", date: "Nov 2025 – Nov 2027", url: "" },
    { name: "OCI 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "Nov 2025 – Nov 2027", url: "" },
    { name: "Best Overall Graduating Student in Data Processing", issuer: "Global Tech Ltd", date: "the origin point", url: "" },
    { name: "Student Leadership Award", issuer: "Coventry University", date: "2024", url: "" },
    { name: "Salesforce Essential Training", issuer: "LinkedIn Learning", date: "Oct 2024", url: "" },
    { name: "Python in Excel", issuer: "LinkedIn Learning", date: "Sep 2023", url: "" },
    { name: "Introduction to Python", issuer: "Cisco Networking Academy", date: "2024", url: "" },
    { name: "Market Awareness Badge", issuer: "Coventry SU", date: "Feb 2024", url: "" },
    { name: "Public Speaking Badge", issuer: "Coventry SU", date: "Feb 2024", url: "" },
    { name: "Rep Development Pathway", issuer: "Coventry University", date: "Jun 2024", url: "" },
    { name: "Startup Bootcamp", issuer: "Coventry University", date: "2025", url: "" }
  ],

  /* ---------------------------------------------------------------- CLOSING */
  closing: {
    heading: "Revenue operations, business analysis, AI enablement, business systems, wherever the job is making systems talk to each other.",
    body: "If you have an operational problem that keeps coming back every reporting cycle, that is the kind I like most. Happy to walk through any of the work above in detail, or to open the actual files and show you how they were built."
  }
};
