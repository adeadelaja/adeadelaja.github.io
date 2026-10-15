/* ============================================================================
   PORTFOLIO CONTENT, THIS IS THE ONLY FILE YOU EDIT
   ============================================================================
   Everything on the site is generated from the object below.

   ADD A PROJECT ....... add an object to `work` (give it a `pillar`)
   ADD A PHOTO ......... put it in /images with the name used below (any extension)
   ADD A SCREENSHOT .... put it in /evidence with the name used below
   ADD A ROLE .......... add an object to `timeline`
   ADD A CREDENTIAL .... add an object to `credentials` (img and url optional)

   Pictures that do not exist yet are simply left out while meta.hideEmpty is true.
   Step 3, October 2026: every project rewritten as a full story, rotating hero
   photos, journey photos, certificate previews, AI section, GitHub case studies.
   ========================================================================== */

const GH = "https://github.com/adeadelaja/case-studies/tree/main/";

const PORTFOLIO = {

  /* ------------------------------------------------------------------ META */
  meta: {
    name:      "Ade Adelaja",
    eyebrow:   "Technical Business Analyst · Data Analyst",
    tagline:   "I take messy business problems to a clear answer, and back every recommendation with a model and a number.",
    about: [
      "I'm a technical business analyst who works close to the data. I came to the UK four years ago. Since then I've helped raise £180k for Cancer Research UK in a single quarter, turned feedback from a 10,000 student faculty into a timetable change, spent twelve months in revenue operations at SAP Emarsys, and graduated with a First in Computer Science.",
      "Now I take businesses from an idea to something they can act on: the research, the data, the requirements, the numbers and the prototype.",
      "There will always be bottlenecks. What I bring is asking the right questions and building the right structures, so the systems talk to each other and problems get solved one step after another. I use AI to do it at speed, so a small team can produce the analytical output of a much larger one."
    ],
    location: "London, UK",
    email:    "adesegunadelaja28@gmail.com",
    phone:    "+44 7823 657149",
    linkedin: "https://www.linkedin.com/in/adesegun-adelaja-0364aa266",
    github:   "https://github.com/adeadelaja",
    caseStudies: "https://github.com/adeadelaja/case-studies",
    cv:       "",   /* drop a CV PDF in the repo root, then put its filename here */
    updated:  "October 2026",
    hideEmpty: true,  /* true: pictures that are not there yet are left out */
    heroInterval: 4500,
    heroPhotos: [
      { src: "images/hero-1.jpg", alt: "Ade Adelaja at SAP Emarsys, London" },
      { src: "images/hero-2.jpg", alt: "Ade Adelaja at graduation, Coventry University" },
      { src: "images/hero-3.jpg", alt: "Ade Adelaja in London" },
      { src: "images/hero-4.jpg", alt: "Ade Adelaja" }
    ]
  },

  labels: { problem: "The ask", system: "What I did", outcome: "What came out of it" },

  /* --------------------------------------------------------------- WHAT I DO */
  doing: [
    { title: "Revenue & business operations",
      body:  "CRM governance, pipeline integrity, forecasting and the reporting rhythm a commercial team plans around." },
    { title: "Business analysis & delivery",
      body:  "Requirements out of stakeholders, into documents, models and systems that actually ship." },
    { title: "Data analytics",
      body:  "Raw data structured into Excel and SQL models and dashboards that change what a team does next." },
    { title: "AI enabled delivery",
      body:  "AI wired into the work to automate, check and move at speed, so a small team delivers like a larger one." }
  ],

  pillars: [
    { key: "revops", name: "Revenue & Operations" },
    { key: "ba",     name: "Business Analysis" },
    { key: "data",   name: "Data Analytics" },
    { key: "ai",     name: "AI Enabled Delivery" }
  ],

  /* ---------------------------------------------------------------- METRICS */
  metricsTitle: "Measured impact",
  metricsIntro: "Every number here comes from a file I built or a result I can talk you through in an interview.",
  metrics: [
    { tag: "Commercial", figure: "£180<em>k</em>", what: "Raised for Cancer Research UK in a single quarter",
      caption: "Fundraising Ambassador on CauseLed field campaigns" },
    { tag: "Revenue Operations", figure: "711", what: "Global pipeline records audited",
      caption: "693 accounts, 51 owners, 7 SAP regions and 9 fiscal quarters, checked against D&B Hoovers on every refresh" },
    { tag: "CRM Governance", figure: "+5<em>%</em>", what: "Global pipeline hygiene",
      caption: "Comparing the 2022 Salesforce admin file with the one I rebuilt from scratch" },
    { tag: "Sales Leadership", figure: "Daily", what: "Forecast files for sales leadership",
      caption: "Plus the forecast notes: one week covered 49 live deals across 5 regions" },
    { tag: "Funding", figure: "£10<em>k</em>", what: "Pre seed committed to SkinMatch AI",
      caption: "Against the research, survey, requirements and prototype I built" },
    { tag: "Speed", figure: "6<em>wks</em>", what: "From an idea to an investor pack",
      caption: "SkinMatch AI: market research, survey, plan, model, architecture and deck" },
    { tag: "Primary Research", figure: "70<em>/100</em>", what: "Ready to buy before launch",
      caption: "The survey behind a £100k restaurant investment case" },
    { tag: "Market Intelligence", figure: "1.83<em>M</em>", what: "Visa applications mapped",
      caption: "2,616 Home Office records across 4 Africa to UK trade corridors, under a 29 variable data dictionary" },
    { tag: "Data Analytics", figure: "183", what: "Bank transactions turned into a budget",
      caption: "5 monthly statements, 13 scanned pages, reconciled to the penny" },
    { tag: "Stakeholder Analytics", figure: "10,000<em>+</em>", what: "Students' feedback turned into evidence",
      caption: "The timetable changed and students' union engagement rose 20%" },
    { tag: "AI Enabled Delivery", figure: "241", what: "Automated tests on a working prototype",
      caption: "Scoring engine, API and app, built through an AI assisted workflow I directed" },
    { tag: "Academic", figure: "First", what: "Class BSc Computer Science",
      caption: "Coventry University, Statistics & Mathematics for CS 98%" }
  ],

  /* ----------------------------------------------------------------- METHOD */
  method: {
    intro: "Every piece of work runs the same loop. The domain changes: an enterprise pipeline, a trade corridor, a restaurant, a skincare app. The loop doesn't.",
    steps: [
      { title: "Question",  sub: "what's really being asked" },
      { title: "Structure", sub: "schema, fields, sources" },
      { title: "System",    sub: "build it, automate it" },
      { title: "Decision",  sub: "someone acts on it" },
      { title: "Loop",      sub: "it holds itself up" }
    ],
    caption: "Most people skip the first step. Most people never reach the last one, and that's the one that turns a piece of analysis into something a business keeps using.",
    note: "Delivery runs in short cycles against agreed goals, with every requirement in one controlled document and the work tracked on a board. That is how a three to five person team ships the output of a much larger one."
  },

  /* ------------------------------------------------------------------- WORK
     Timeline order, newest first. Each card links to its full case study. */
  workIntro: "Newest first. Four projects at Harize Global, two pieces of work I owned at SAP Emarsys, then Coventry University and Transfuse Analytics. Each one is the ask, what I did and what came out of it. The full story, with every file, is on GitHub.",
  work: [
    /* ================= HARIZE GLOBAL ================= */
    {
      id: "skinmatch", pillar: "ba", org: "SkinMatch AI", discipline: "Business Analysis · Product",
      context: "Harize Global", when: "2026",
      title: "From an idea to a funded build",
      summary: "A skincare idea, a long AI chat and no data. I built everything the business needed to get to a working prototype and pre seed funding.",
      problem: "The founders had a strong idea: help people buy skincare that actually works for their skin, especially darker skin tones that most tools get wrong. What they had was one long AI conversation. No market data, no customer evidence, no product definition, and nothing an investor could check.",
      steps: [
        { t: "Market.", d: "I sized the market from published sources: UK skincare at US$4.59B in 2025, growing to US$6.27B by 2031. I mapped five competitors and found the gap none of them covered: recommendations that are neutral across retailers and built for every skin tone." },
        { t: "Customers.", d: "I designed the user survey from scratch and grew it to 100 organic responses. Nearly 8 in 10 had bought skincare that reacted badly or didn't work, and most said reviews weren't personal to them. That was the problem, in their words." },
        { t: "Requirements.", d: "I turned the research and the founders' meetings into requirements: five working parts, from skin profiling and compatibility scoring to retailer neutral recommendations, profile based reviews and in store scanning." },
        { t: "Architecture.", d: "I designed the technical architecture in four layers and wrote it up so an engineer could pick it up, with every part traced back to the business need it serves." },
        { t: "Prototype.", d: "I directed the build of a working prototype through an AI assisted workflow: an explainable scoring engine, a REST API and a mobile app, covered by 241 automated tests." },
        { t: "Plan and pitch.", d: "I pulled it into one business plan, a 36 month financial model and a 13 slide pitch deck, with every figure owned by one document so they never contradicted each other." }
      ],
      outcome: "£10k of pre seed was committed to the engineering build. One analyst with AI as the working layer, doing what would normally take a research team, a product team and a finance team.",
      evidence: [
        { src: "evidence/sm-2-survey.png", alt: "Survey results", caption: "The survey results in the pitch deck, taken at 64 of the 100 responses." },
        { src: "evidence/sm-4-architecture.png", alt: "Four layer architecture", caption: "The four layer architecture I designed for the build." },
        { src: "evidence/sm-5-api.png", alt: "Prototype API", caption: "The working prototype's API, documented from a hand written contract." },
        { src: "evidence/sm-7-competition.png", alt: "Competitor map", caption: "Nobody else was both retailer neutral and built for every skin tone." }
      ],
      caseStudy: GH + "skinmatch-ai",
      stack: ["Market research", "Survey design", "Customer analysis", "Requirements", "Solution architecture", "Prototyping", "Business planning", "AI assisted delivery"]
    },
    {
      id: "naija", pillar: "ba", org: "Naija Delight", discipline: "Business Analysis · Investment Case",
      context: "Harize Global · client engagement", when: "2026",
      title: "A restaurant, taken apart before a pound was spent",
      summary: "A founder needed £100,000 to open an African restaurant in Coventry. I built the evidence an investor could check, line by line.",
      problem: "The founder had run a hospitality business before and could see the demand. Students and young professionals wanted good African food, and the only real option charged £14 a plate. But instinct doesn't raise £100,000. It needed a proven customer, a site that made sense, a compliance position and numbers that agreed with each other.",
      steps: [
        { t: "Customers.", d: "We surveyed 100 people in the target market and 70 said they would buy now. One in two said they couldn't get quality African food at a fair price and settled for other cuisines. A live waitlist page collected over 100 sign ups within days." },
        { t: "Price.", d: "That set the position: £10 a plate against £14. 29% cheaper, and still a healthy margin on every plate." },
        { t: "Site.", d: "I assessed the unit: a 1,296 sq ft former coffee chain unit beside the city's main bus station, kitchen already fitted, with a 1,700 room student building directly above and 38,430 university students within a ten minute walk." },
        { t: "Catchment.", d: "I built the catchment into the financial model: 46,285 people in the market, 23,143 within realistic reach, and a target of 1,410 regular customers. That's one person in sixteen." },
        { t: "Council.", d: "I approached Coventry City Council before the numbers were final, separately to Licensing and to Food and Safety. Licensing confirmed the fees and rules in writing, and I turned that into a compliance budget." },
        { t: "Investment pack.", d: "A ten tab financial model with three planning scenarios, an investment memorandum written for a non specialist investor, and an investor deck. Before it went out, I audited every slide against the model and fixed what didn't match." }
      ],
      outcome: "A £100,000 investment case where every number traces back to a source: the survey, the site, the council or the model. An investor can question any line and get an answer.",
      evidence: [
        { src: "evidence/nd-1-validation.png", alt: "Survey validation slide", caption: "70 of 100 ready to buy, from the investor deck." },
        { src: "evidence/nd-3-site-map.png", alt: "Site map", caption: "The site and what surrounds it, from the investment memorandum." },
        { src: "evidence/nd-2-market.png", alt: "Market funnel", caption: "From 46,285 people to 1,410 regular customers." },
        { src: "evidence/nd-5-compliance.png", alt: "Council compliance budget", caption: "Compliance budget. Fees confirmed by the council's Licensing team in green." }
      ],
      caseStudy: GH + "naija-delight",
      stack: ["Primary research", "Pricing", "Location analysis", "Financial modelling", "Regulatory compliance", "Investment memorandum", "Deck audit"]
    },
    {
      id: "hexpres", pillar: "data", org: "Hexpres", discipline: "Data Analysis · Market Intelligence",
      context: "Harize Global", when: "2026",
      title: "A trade corridor model you only build once",
      summary: "Hexpres connects verified African manufacturers with UK buyers. I built the data structure every new trade corridor runs through.",
      problem: "Hexpres works one trade corridor at a time: Nigeria to the UK first, then Ghana, Kenya and Pakistan. Every new corridor was turning into a new research project from zero, and the platform being built on top needed numbers it could trust.",
      steps: [
        { t: "Schema first.", d: "I wrote a 29 variable data dictionary in two layers, demand signals and corridor risk. Every variable has a definition, a source (ONS, OECD, UN, World Bank, IMF, HMRC) and the model it feeds." },
        { t: "Data.", d: "I pulled 2,616 Home Office records, 1.83 million visa applications from Nigeria, South Africa, Ghana and Kenya between 2022 and 2025, and built them into a demand model and an activation model that turns diaspora population into likely buyers." },
        { t: "Team.", d: "I wrote the briefs the team worked from: an analyst brief to run four new corridors through the same structure, an operations brief for warehousing, and a design handover with a locked design system." },
        { t: "Platform.", d: "I led the MVP website build in VS Code with an AI coding agent, one task per session, and wrote the company's AI usage policy." }
      ],
      outcome: "A new corridor became a data refresh instead of a research project. The analysts were briefed to replicate the logic, not reinvent it.",
      evidence: [
        { src: "evidence/hx-1-dictionary.png", alt: "Data dictionary", caption: "The 29 variable data dictionary." },
        { src: "evidence/hx-2-corridors.png", alt: "Corridor summary", caption: "Applications by corridor and year, with issued visas and grant rate. Public Home Office data." },
        { src: "evidence/hx-3-site.png", alt: "Hexpres website", caption: "The MVP website, built in VS Code." }
      ],
      caseStudy: GH + "hexpres-corridor-model",
      stack: ["Data modelling", "Data dictionary", "Home Office & ONS data", "Excel", "Briefs & handover", "AI usage policy"]
    },
    {
      id: "orion", pillar: "ba", org: "Orion FC", discipline: "Business Analysis · Requirements",
      context: "Harize Global · client project",
      title: "Building what the club actually asked for",
      summary: "A football club wanted its first website and had no brief. I turned what the manager knew into something a designer could build.",
      problem: "The club's manager knew what the club stood for and who it served. But there was no brief, no page list and no design direction, so the designer had nothing to work from.",
      steps: [
        { t: "Discovery.", d: "I ran the discovery with the manager and collected the club's mission, vision, values and history." },
        { t: "Requirements.", d: "I wrote the website requirements: 12 sections and 49 requirements, each with a priority, in language both sides could check." },
        { t: "Scope.", d: "I agreed a first build of 10 must have sections and moved 2 to a later phase." },
        { t: "Design brief.", d: "I briefed the UI and UX designer with the page list, the brand palette and the club's content, and traced every requirement through to the prototype." },
        { t: "Review.", d: "I ran the prototype review with the manager and turned the feedback into tasks for the designer." }
      ],
      outcome: "A clickable prototype the club reviewed and directed, with 12 of the 49 requirements already in it and the rest briefed. The launch stopped when the club merged into a larger organisation, so the requirements and the prototype are the delivered work.",
      evidence: [
        { src: "evidence/or-1-requirements.png", alt: "Website requirements document", caption: "The website requirements document." },
        { src: "evidence/or-2-matrix.png", alt: "Requirements matrix", caption: "All 49 requirements traced to their section, priority and prototype status." },
        { src: "evidence/or-3-prototype.png", alt: "Prototype home page", caption: "The prototype home page the club reviewed." }
      ],
      caseStudy: GH + "orion-fc-website",
      links: [ { label: "View the prototype in Figma", href: "https://www.figma.com/proto/SYXzT3MBEUSkhEs4Te6b5S/Shegs-Coventry-Club?page-id=0%3A1&node-id=2-2&viewport=306%2C120%2C0.25&t=HsAmrJUgzu6F23SR-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A2&show-proto-sidebar=1" } ],
      stack: ["Stakeholder discovery", "Requirements", "Scope prioritisation", "Traceability", "Design briefing", "Figma"]
    },

    /* ================= SAP EMARSYS ================= */
    {
      id: "sap-admin", pillar: "revops", org: "SAP Emarsys", discipline: "Revenue Operations",
      context: "Salesforce admin dashboard", when: "Oct 2024 to Oct 2025",
      title: "The file leadership used to check Salesforce, rebuilt from scratch",
      summary: "Sales leadership used one file to check how clean Salesforce was. It was built in 2022 and had stopped keeping up. I rebuilt it.",
      problem: "Leadership needed to know, region by region, whether the pipeline in Salesforce could be trusted. The 2022 file couldn't keep up, so the checks either took a manual sweep or didn't happen.",
      system: [
        "I rebuilt it from scratch.",
        "It pulls the open opportunities for the quarter and checks the five things leadership kept asking about: forecast category, forecast MRR, billing address, BP ID and close dates that had already passed. Every region comes out as one word. REVIEW or FAIR.",
        "Around 3,000 formulas sit behind it, built on COUNTIFS, VLOOKUP, ISBLANK and AND, and the whole file moves to a new quarter from one cell."
      ],
      highlight: { label: "Around the files",
        body: "Every day I delivered the forecast files sales leadership worked from, and I wrote the forecast notes from the weekly calls. One week's notes covered 49 live deals across five regions. I supported deal teams and worked with sales and operations on everything revenue operations touched." },
      outcome: "Leadership could see straight away which region needed attention, without reading exports. Compared with the 2022 file, global pipeline hygiene went up 5%. Before I left, I wrote the handover guide, so it kept running after me.",
      evidence: [
        { src: "evidence/sap-a1-summary.png", alt: "Regional summary with REVIEW and FAIR", caption: "Five checks, seven regions, one verdict each. Rebuilt with synthetic data." },
        { src: "evidence/sap-a2-handover.png", alt: "Handover guide", caption: "The handover guide I wrote for the next owner." }
      ],
      caseStudy: GH + "sap-salesforce-admin-dashboard",
      stack: ["Salesforce", "Advanced Excel", "COUNTIFS", "Dashboard design", "Data quality", "Handover documentation"]
    },
    {
      id: "sap-pipeline", pillar: "revops", org: "SAP Emarsys", discipline: "Revenue Operations · Data Quality",
      context: "Pipeline compliance file", when: "Oct 2024 to Oct 2025",
      title: "A pipeline compliance file that updates itself",
      summary: "I owned the file that kept the global pipeline honest: every new business record checked against the source everyone trusted.",
      problem: "After the SAP and Emarsys merger, the same pipeline lived in two systems that didn't always agree. Account names, SIC codes and DUNS numbers drifted away from D&B Hoovers, the trusted source, and new opportunities kept arriving every week.",
      system: [
        "I owned the pipeline compliance file and built it so it updated itself.",
        "Every refresh pulls the rolling pipeline and matches each opportunity against the existing compliance file with advanced Excel formulas: XLOOKUP brings back the audited account data, and ISNA flags anything new that hasn't been audited yet.",
        "Each record is then checked for account name, SIC code and DUNS number against D&B, and its close date against today."
      ],
      outcome: "711 records across 693 accounts, 51 opportunity owners, 7 SAP regions and 9 fiscal quarters, kept in one place. New records flagged themselves for audit instead of waiting for someone to notice, and the refresh steps were written into the file so anyone could run it.",
      evidence: [
        { src: "evidence/sap-p1-formula.png", alt: "Compliance checks with formula bar", caption: "Every record checked against D&B for name, SIC and DUNS. Synthetic records, real structure." }
      ],
      caseStudy: GH + "sap-pipeline-compliance",
      stack: ["Advanced Excel", "XLOOKUP / ISNA", "D&B Hoovers", "Salesforce", "Data reconciliation", "Process documentation"]
    },

    /* ================= COVENTRY UNIVERSITY ================= */
    {
      id: "coventry", pillar: "data", org: "Coventry University", discipline: "Data Analysis · Stakeholders",
      context: "Student rep and faculty data analyst", when: "2023 to 2024",
      title: "The question nobody had asked",
      problem: "Students kept saying the timetable was why they couldn't get in on time. That's an anecdote. Anecdotes don't change timetables.",
      system: [
        "I collected feedback across a faculty of more than 10,000 students, from surveys, course evaluations and meeting notes, and structured it into categorised datasets.",
        "With a team of course reps, I segmented it by department and year group and tested the timetable claim against the evidence, not against how loudly it was made."
      ],
      outcome: "The pattern held. I presented it to the Head of School and course directors, and the timetable changed. Students' union engagement rose 20% over the year, and I completed the Rep Development Pathway with the students' union Leadership Award.",
      evidence: [ { src: "evidence/cov-1-award.png", alt: "Leadership Award certificate", caption: "Leadership Award, Rep Development Pathway, 2023/24." } ],
      caseStudy: GH + "coventry-student-feedback",
      stack: ["Survey analysis", "Segmentation", "Excel", "Presenting to leadership", "Stakeholder management"]
    },

    /* ================= TRANSFUSE ANALYTICS ================= */
    {
      id: "transfuse", pillar: "data", org: "Transfuse Analytics", discipline: "Data Analysis",
      context: "Remote", when: "2021 to 2022",
      title: "From a paper bank statement to a budget",
      problem: "An accountancy team needed to budget from a client's business account. All they had was five monthly paper statements: 13 scanned pages, 183 transactions. Nobody could filter it, total it or ask it a question.",
      system: [
        "I rebuilt the statements in Excel, one row per transaction, with a running balance and a total for every statement period.",
        "Then I reconciled each of the five periods to the closing balance printed on the statement, so the team knew every number was right before they used it."
      ],
      outcome: "The accountancy team budgeted and made decisions from it. Getting the structure right first is what made automating it possible later.",
      evidence: [
        { src: "evidence/tf-1-reconciliation.png", alt: "Statement reconciliation", caption: "Five statement periods, each one reconciled. Synthetic transactions, same structure." },
        { src: "evidence/tf-2-budget.png", alt: "Budget by category", caption: "Spend by category and period against a proposed budget." }
      ],
      caseStudy: GH + "transfuse-bank-to-budget",
      stack: ["Advanced Excel", "Data structuring", "Reconciliation", "SUMIFS", "Budget reporting"]
    }
  ],

  /* -------------------------------------------------------------------- AI */
  ai: {
    title: "How I work with AI",
    intro: "I use AI as a working layer, not a chatbot. It does the heavy lifting. The judgement stays with me.",
    items: [
      { title: "AI as the operating layer",
        body: "Research, modelling, documents and decks all run through Claude over shared working files. My prompts say which numbers to pull from which model, so the deck and the model can't disagree.",
        proof: "Naija Delight investment pack · SkinMatch AI" },
      { title: "Scope the agent",
        body: "When an AI agent builds, it gets one task per session and one rule: don't touch any other file or section. I cut one agent's instruction file from 424 lines to 219 so it stopped drifting.",
        proof: "Hexpres website build" },
      { title: "Set the rules",
        body: "I wrote a company AI usage policy: six gates any AI supported work has to pass before it counts, and every final decision owned by a person.",
        proof: "Hexpres AI usage policy" },
      { title: "Structure the data first",
        body: "AI is only as good as what it's given. A data dictionary, one owner for every figure, files that agree with each other. Then the AI has something real to work with.",
        proof: "Hexpres corridor model · SkinMatch AI" },
      { title: "Check everything",
        body: "Nothing goes out unchecked. Decks audited against the model, prototypes covered by automated tests, and no invented evidence.",
        proof: "241 tests on the SkinMatch prototype · Naija deck audit" },
      { title: "Direct the build",
        body: "I can take a business need to a working prototype by directing AI, then hand it to an engineer with the documentation they need.",
        proof: "SkinMatch AI prototype" }
    ],
    note: "This is what companies now hire AI business analysts for: finding where AI fits, designing the workflow around it, setting the guardrails, and proving it works."
  },

  /* ----------------------------------------------------------------- SKILLS */
  skills: {
    intro: "The tools are the easy half. The second list is what decides whether the first list produces anything.",
    technical: [
      { title: "Revenue & CRM systems",
        items: ["Salesforce", "CRM data governance", "Pipeline hygiene & auditing", "Forecast management", "Deal support", "Territory reassignment", "Quarterly business reviews"] },
      { title: "Data & analytics",
        items: ["Advanced Excel", "XLOOKUP / INDEX MATCH", "Power Query", "PivotTables", "SQL", "Python", "Power BI", "ETL", "Data dictionary design", "Financial modelling", "Market sizing"] },
      { title: "AI & automation",
        items: ["Claude (advanced)", "AI workflow design", "Agent scoping", "AI usage policy", "Output checking", "Process automation", "AI ready data structuring", "OCI AI Services"] },
      { title: "Engineering & build",
        items: ["C# / .NET", "REST API design", "Relational database design", "SQLite", "Node.js", "React", "Git", "Figma", "Trello", "Jira"] }
    ],
    soft: [
      { title: "Stakeholder communication",
        body: "Presented feedback analysis to a Head of School that changed a university timetable. Drew requirements out of a football club's manager who had no brief to give me." },
      { title: "Requirements",
        body: "Surveys, interviews and research, written down as requirements in one controlled document rather than left in people's heads." },
      { title: "Reporting to leadership",
        body: "Delivered the daily forecast files sales leadership worked from, across seven regions." },
      { title: "Systems thinking",
        body: "I always ask what a change affects. Move the customer definition and the route to market, the cost to acquire and the P&L all have to move with it." },
      { title: "Documentation & handover",
        body: "Refresh steps, failure points, a README. I build things so they keep working after I leave." },
      { title: "Ownership",
        body: "Joined SAP mid merger with two systems disagreeing. Then joined a consultancy at founding stage, where nothing has a process until someone writes one." }
    ],
    values: [
      { title: "Resilience",
        body: "Four years, five roles, a First Class degree and a company, most of it at the same time. The SAP placement ran alongside final year coursework, and Harize Global started before the degree finished." },
      { title: "Innovation",
        body: "I'd rather change the shape of a problem than work harder inside it. Fix the schema instead of repeating the study. Cut an AI instruction file back so the agent stops drifting." },
      { title: "Creativity",
        body: "Most of what I build has no template. A catchment that feeds a financial model. A column that turns seven regions of raw data into one word each. Finding the structure nobody has drawn yet." }
    ]
  },

  /* --------------------------------------------------------------- TIMELINE */
  timelineIntro: "Four years in the UK, in the order it happened.",
  timeline: [
    { when: "Oct 2025 → now", role: "Technical Business Analyst", org: "Harize Global, Birmingham",
      detail: "Business analysis, data and AI enabled delivery for SkinMatch AI, Naija Delight, Hexpres and Orion FC",
      photos: [
        { src: "images/harize-1.jpg", alt: "Presenting market sizing", caption: "Presenting the market sizing at the startup bootcamp" },
        { src: "images/harize-2.jpg", alt: "Business Start Up Bootcamp certificate", caption: "Certificate of Excellence, Business Start Up Bootcamp" }
      ] },
    { when: "2026", role: "BSc (Hons) Computer Science, First Class", org: "Coventry University",
      detail: "Statistics & Mathematics for CS 98%, Programming & Algorithms 87%",
      photos: [
        { src: "images/graduation-1.jpg", alt: "Graduation day", caption: "Graduation day, Coventry" },
        { src: "images/graduation-2.jpg", alt: "Graduation gown and hood", caption: "" },
        { src: "images/graduation-3.jpg", alt: "First Class degree certificate", caption: "BSc (Hons) Computer Science, First Class", fit: "contain" }
      ] },
    { when: "Oct 2024 → Oct 2025", role: "Revenue Operations Analyst (12 month placement)", org: "SAP Emarsys, London",
      detail: "Daily forecast files for sales leadership, forecast notes, deal support, the pipeline compliance file and the Salesforce admin dashboard",
      photos: [
        { src: "images/sap-1.jpg", alt: "SAP office, London", caption: "SAP, London office" },
        { src: "images/sap-2.jpg", alt: "SAP Emarsys placement", caption: "Placement year at SAP Emarsys" }
      ] },
    { when: "Sep 2023 → Jul 2024", role: "Student Rep & Faculty Data Analyst", org: "Coventry University",
      detail: "Feedback analytics for a 10,000+ student faculty; Leadership Award, Rep Development Pathway",
      photos: [
        { src: "images/coventry-1.jpg", alt: "Student rep", caption: "Student rep" },
        { src: "images/coventry-3.jpg", alt: "Leadership Award certificate", caption: "Leadership Award, Rep Development Pathway", fit: "contain" }
      ] },
    { when: "Jan → May 2023", role: "Fundraising Ambassador", org: "CauseLed, Birmingham",
      detail: "Field campaigns for Cancer Research UK, Alzheimer's Society and others; £180k raised for Cancer Research UK in a single quarter",
      photos: [
        { src: "images/causeled-1.jpg", alt: "Field fundraising campaign", caption: "Out on a field campaign" },
        { src: "images/causeled-2.jpg", alt: "CauseLed employment reference", caption: "Employment reference from CauseLed", fit: "contain" }
      ] },
    { when: "2021 → 2022", role: "Data Analyst", org: "Transfuse Analytics, remote",
      detail: "ETL, data cleansing and client analysis, including the bank statement to budget model. Where the analytical habits started" },
    { when: "Where it started", role: "Best Overall Graduating Student in Data Processing", org: "Global Tech Ltd",
      detail: "Secondary school. My first encounter with databases, records and the relationships between them" }
  ],
  timelineNote: "The thread isn't the job titles. It's <strong>structure</strong>, at every scale. A schoolboy prize for data processing, then a First in the subject, then the reconciliation logic holding an enterprise pipeline together through a merger, then a 29 variable data dictionary for a trade corridor, then a venture whose market model, financial model and prototype all agree. The same question every time: <em>what is the right structure, and what does it have to agree with?</em>",

  /* ------------------------------------------------------------ CREDENTIALS
     img: certificate picture shown on hover. url: verification link. Both optional. */
  credentials: [
    { name: "BSc (Hons) Computer Science, First Class", issuer: "Coventry University", date: "Jul 2026", img: "images/certs/bsc.jpg", url: "" },
    { name: "Forward Program, learner", issuer: "McKinsey.org", date: "", img: "images/certs/mckinsey-forward.jpg", url: "" },
    { name: "OCI 2025 Certified Generative AI Professional", issuer: "Oracle", date: "Nov 2025 to Nov 2027", img: "images/certs/oci-genai.jpg", url: "" },
    { name: "OCI 2025 Certified AI Foundations Associate", issuer: "Oracle", date: "Oct 2025 to Oct 2027", img: "images/certs/oci-ai-foundations.jpg", url: "" },
    { name: "Leadership Award, Rep Development Pathway", issuer: "Coventry University Group", date: "Jun 2024", img: "images/certs/leadership-award.jpg", url: "" },
    { name: "Certificate of Excellence, Business Start Up Bootcamp", issuer: "Coventry University", date: "2025", img: "images/certs/startup-bootcamp.jpg", url: "" },
    { name: "Salesforce Essential Training", issuer: "LinkedIn Learning", date: "Oct 2024", img: "", url: "" },
    { name: "Python in Excel", issuer: "LinkedIn Learning", date: "Sep 2023", img: "", url: "" },
    { name: "Introduction to Python", issuer: "Cisco Networking Academy", date: "2024", img: "", url: "" },
    { name: "Market Awareness Badge", issuer: "Coventry SU", date: "Feb 2024", img: "images/certs/market-awareness.jpg", url: "" },
    { name: "Public Speaking Badge", issuer: "Coventry SU", date: "Feb 2024", img: "images/certs/public-speaking.jpg", url: "" },
    { name: "Self Reflection Badge", issuer: "Coventry SU", date: "", img: "images/certs/self-reflection.jpg", url: "" },
    { name: "Best Overall Graduating Student in Data Processing", issuer: "Global Tech Ltd", date: "the origin point", img: "", url: "" }
  ],

  /* ---------------------------------------------------------------- CLOSING */
  closing: {
    heading: "Technical business analysis, data and revenue operations, with AI built into how the work gets done.",
    body: "If you have a problem that keeps coming back every reporting cycle, that's the kind I like most. I'm happy to walk you through any of the work above, or open the actual files and show you how they were built."
  }
};
