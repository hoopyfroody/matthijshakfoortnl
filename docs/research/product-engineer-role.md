# The "product engineer" role in the agentic era

Research for the positioning work. Collected on 2026-10-25. Every claim has a source number. The sources are listed at the end. "Unverified" means that I could not find or read the primary source.

## Summary

1. Laurie Voss gave the talk "The Rise of the Product Engineer" at AI Engineer NYC on 14 October 2026 [2]. His blog post of 14 September 2026 has the full argument [4].
2. His thesis: agents made code almost free. The bottleneck moves from code, to review, to operations. It stops at "find out what people want and define what good is". He calls the person who does that the product engineer [1][4].
3. His practical advice is almost the same list as Matthijs's role description: review only high-blast-radius code, automate checks for the rest, and put judgement into specs, rubrics and evals [1].
4. Many other voices say the same thing with other words: Andrew Ng (engineers who do product work) [20], LinkedIn (Full Stack Builder) [23], Orosz (product-minded engineer) [10][11], Osmani (orchestrator, "spec writer" and "quality gate") [31][32].
5. The forward deployed engineer (FDE) is the fastest-growing commercial version. Postings rose more than 800% in 2025 [14]. It is a vendor-side role.
6. The main opposition: Marty Cagan says the PM, designer and engineer stay separate roles [45]. Amazon, Dex Horthy and METR show that human code review is still needed for important code [38][42][40].
7. In the Netherlands, "Product Engineer" job ads for AI-agent work exist now [51][52][53]. But the title also means a mechanical engineer in Dutch industry [57]. Dutch team leads know "Product Owner", "business analist" and "AI engineer" better (my judgement).
8. Organisations say that adoption needs training in guiding and checking AI work, a user focus, small batches, and rewritten job descriptions [44][23][49].

## 1. The Laurie Voss talk

**Title and venue.** "The Rise of the Product Engineer". AI Engineer NYC 2026, Wednesday 14 October 2026, 12:20–12:38, Shannon Room [2]. The YouTube upload on the AI Engineer channel has the title "AI Writes the Code. So What's Left for Engineers? – Laurie Voss, Arize AI" [1]. The search index gives the upload date as about 24 October 2026 (unverified). The slides are on slides.com [3].

**Speaker.** Laurie Voss is head of developer relations at Arize AI and a co-founder of npm Inc. [1].

**Related material by Voss.**
- Blog post "We are all Product Engineers now", 14 September 2026. This is the long, written version of the talk, about 4,000 words [4].
- Podcast "AI Codes: Product Engineers Decide What to Build", Chain of Thought, 22 September 2026 [5].
- Earlier talk "The Death of the Code Review" (AI Engineer World's Fair, June 2026, and WeAreDevelopers, September 2026) [6]. The new talk builds on it [1].

**Core argument** (from the talk transcript [1] and the blog post [4]):
- Agents made writing code "basically free". The steps after writing code did not become free.
- Theory of constraints (Goldratt): when you fix one bottleneck, the next one appears. Now the bottleneck is code review. Next come operations and scaling, then security.
- Voss assumes that agents will also take review, operations and security, in about 5 to 10 years.
- He also assumes that demand for software has no upper limit.
- What stays is: "deciding what to build", "defining what good means" and "making it delightful". This knowledge "isn't in the training data". It is in the head of the customer. "You have to talk to them."
- This work does not transfer from one product to the next. So it has no economy of scale.
- History: in the 1960s a "systems analyst" talked to the business and wrote it down. That role became the product manager. "We've had two professions where there used to be one and a half." He thinks they now collapse back into one.
- Definition: the product engineer "finds out what people need, defines what good looks like, and ships it with agents doing the typing" [1].
- "Being a software developer and being a programmer have become divorced in 2026." [1]
- The junior ladder is broken. Juniors used to learn by writing code from well-specified tickets. Agents now do that. Nobody trains people to "go sit with a baker for a week and come back with a spec" [1][4].
- He admits a bias: "everything can be automated by AI except the thing that I'm good at" [1][4].
- The craft of programming survives as a hobby, "the way woodworking survived the furniture factory" [1][4].

**His practical advice at the end of the talk** [1]:
- "Write down your high blast radius code, and make that be the only thing that you are reviewing."
- "Delegate everything that's cheap to verify." Build an automatic way to tell if a thing is good, and give it to the agent.
- "Put your best people's judgment into specs and rubrics and evals." "That is your job as a product engineer."
- Measure shipped results, not lines of code. Measure "the gap between the tests passed and a maintainer would merge this". "The last reviewer is production."

**Claims and numbers he uses.** He says that he could not cite his sources in 18 minutes ("trust me, bro") [1]. I checked some of them:

| Claim in the talk | Status |
|---|---|
| Agents: 741% more code, 30% faster shipping | Unverified. The slides say it is a study of more than 100,000 GitHub developers [6]. I did not find the study. |
| Amazon: senior engineers must sign off | Verified as reported by FT, The Verge, The Decoder (March 2026) [38]. Some Amazon staff on Hacker News said the rule is not new [39]. |
| Dex Horthy stopped "don't read the code" | Verified. Talk of March 2026 [42]. |
| Maintainers merge only about half of test-passing agent PRs | Verified for METR's study (March 2026) [40]. The Cognition "87% to 54%" figure in the talk is unverified. His earlier slides give other numbers for the same idea (80.3% vs 29.3%) [6]. |
| Andrew Ng: "blur the jobs together" | Verified. Ng's letter in The Batch, April 2026 [20]. |
| Sean Grove: "code is a lossy projection of the specification" | Verified. AI Engineer World's Fair, June 2025 [27]. Voss says "Shawn Grove". |
| FDE postings up 800% in 9 months of 2025 | Verified as reported by FT using Indeed data [14][15]. |
| FDE average comp $240,000 | Unverified. |
| Google APM program: about 50 people a year | Unverified. |
| IBM redesigns entry-level jobs around customer contact | Verified. IBM statements, February–March 2026 [49][50]. |
| GitHub Copilot does more than one in five code reviews on GitHub | Unverified. |
| Cursor BugBot has about 44,000 learned rules | Unverified. |

## 2. Role terms in use (2025–2026)

How each term overlaps with Matthijs's description: customer contact, spec writing, gates and evals, review of functionality before code, deciding which code needs human review.

| Term | Who uses it | What they mean | Overlap with Matthijs's description |
|---|---|---|---|
| **Product engineer** (Voss) | Laurie Voss [1][4] | Finds out what people need, defines "good", ships with agents. Not programming. | Very high. His advice list is almost the same list. Voss frames it as a 10-year forecast for all engineers. |
| **Product engineer** (startup sense) | PostHog [7][8], Monumental [60], Meanwhile [61], YC (2019) | An engineer who talks to users, decides what to build, owns the roadmap, does support. "No product managers." PostHog: they "still spend the majority of their time coding" [8]. | High on customer contact and ownership. Low on gates, evals and review strategy. Agents are not central to the definition. |
| **Product-minded engineer** | Gergely Orosz (2019) [9]; book by Drew Hoskins (O'Reilly, 2026) [10] | A trait: an engineer with product interest who challenges specs and proposes ideas. Works next to a PM. Orosz (2026): this is becoming "a baseline at startups" because someone must specify what AI should build [10][11]. | Medium. A trait, not a role. Keeps the PM. |
| **Forward deployed engineer (FDE)** | Palantir (origin), OpenAI, Anthropic, Google Cloud, Salesforce, Ramp, Cohere [12][14][16][17][18]; in Europe Mistral, Lovable, ElevenLabs [19] | An engineer of the vendor who embeds with one customer, scopes the problem, builds in the customer's systems, and builds evals. Palantir: "one customer, many capabilities" [18]. OpenAI: "own discovery, technical scoping, system design, build, and production rollout"; success is measured by "eval-driven feedback" [17]. | High on discovery, specs and evals. Different employer side: the FDE works for the vendor, not for the team that owns the product. Up to 50% travel [17][18]. |
| **Solutions engineer / solutions architect** | OpenAI, Anthropic, most SaaS vendors [12][18] | Pre-sales technical advisor. Builds proofs of concept. Rarely writes code in customer systems [12]. | Low to medium. Customer contact, but little delivery. |
| **AI engineer** | swyx (June 2023) [36]; LinkedIn says it is the fastest-growing US role [14] | A software engineer who builds products on top of foundation models. Owns "product-specific data and evals" [36]. | Medium. Evals yes. But the term means "builds AI features", not "builds software with agents". Voss says the AI engineer idea "did not go far enough" [1]. |
| **Full Stack Builder / Associate Product Builder** | LinkedIn (CPO Tomer Cohen) [23][24][25] | One person who takes a product "from idea to launch": specs, design, prototype, ship. Replaced the APM program from January 2026. Has its own title and career ladder [23][24]. | High. It is the corporate, formal version of the merge. |
| **"Builder"** (generic) | LinkedIn ("the future belongs to builders") [25]; Andrew Ng ("go build stuff") [20] | Loose word for anyone who ships with AI, from any function. | Low precision. Useful as a slogan only. |
| **Agent manager / orchestrator / conductor** | Addy Osmani [31][32][33]; Ryan Carson talk "Your job is now 'agent manager'" at AIE NYC 2026 [2]; Karpathy ("orchestrating agents ... and acting as oversight") [34] | The engineer runs several agents in parallel and acts like a tech lead. Osmani's "four hats": Spec Writer, Orchestrator, Quality Gate, Learner [32]. | High on specs, gates and review. Low on customer contact. Osmani: "the bottleneck ... is 'should we build this?'" [33]. |
| **Agentic engineering** | Andrej Karpathy (February 2026) [34][35]; Simon Willison | A discipline, not a job title. Use agents but keep the professional quality bar. "You are still responsible for your software" [35]. | High on gates and review. Neutral on customer contact. |
| **Context engineering / context engineer** | Tobi Lütke (June 2025), Karpathy, Anthropic [29][30] | The skill of giving an agent all the context it needs. Anthropic: "curating and maintaining the optimal set of tokens" [29]. Appears as a skill in Dutch job ads [51]. I found no common job title "context engineer" (unverified as a title). | Medium. One part of the role (Matthijs's "shared understanding"). |
| **Spec-driven development (SDD)** | GitHub Spec Kit (September 2025) [26]; AWS Kiro; Tessl; Sean Grove [27] | A practice: write the spec first, the agent builds against it. "Your primary role is to steer ... it's to verify" [26]. | High on spec writing. A method, not a role. Böckeler says the term is "still very much in flux" [28]. |
| **AI orchestrator** (for POs) | Dutch product owners on LinkedIn [59] | A Product Owner who uses AI for notes, stories and backlog. The PO stays the person who decides. | Medium. Product side only. No code ownership. |

## 3. Title list

Columns: the nuance, how common the title is, and if a Dutch or European team lead or IT manager would recognise it. "Common" and "recognised" are my judgement unless a source is given.

| Title | Nuance | How common | NL/EU team lead recognises it? |
|---|---|---|---|
| Product Engineer | Closest match. Startup meaning: engineer who owns product decisions [7]. In NL also a mechanical/industrial job [57]. | Growing. Dutch ads with "AI-first", "AI-native" or "AI agents" in the title exist [51][52][53][55]. | Yes, but ambiguous. Add a qualifier. |
| AI Product Engineer | Product engineer who builds AI features and evals [53][54]. | Some NL ads in 2026 [53][54]. | Partly. |
| Product-minded engineer | A trait, not a title [9]. | Rare as a title. | Known to readers of The Pragmatic Engineer. |
| Forward Deployed Engineer (FDE) | Vendor-side, embedded with the customer, heavy travel [12][17]. | Fast growth: more than 800% in 2025 [14]. Mostly AI vendors. | Known in AI and startup circles in Europe [19]. Less in Dutch corporate IT (judgement). |
| Solutions Engineer / Solutions Architect | Pre-sales advisor, little delivery [12]. | Very common. | Yes. |
| Applied AI Engineer | Anthropic's applied AI team includes FDEs and product engineers [15]. | Common at AI vendors. | Partly. |
| AI Engineer | Builds AI features on models [36]. | Very common. "Fastest growing role in the US" per LinkedIn [14]. | Yes. |
| Agentic AI Engineer / AI Agent Engineer | Builds or runs agents. Philips via Randstad [56]; Visma Circle uses "AI Agent Engineer" as the target of its Product Engineer role [51]. | Emerging in NL. | Yes, as a new AI title. |
| Full Stack Builder | LinkedIn's formal merged title [23]. | Rare outside LinkedIn. | Low. |
| Agent manager / Agent orchestrator | Describes the work, not a hiring title [31][33]. | Rare as a title. | Low. |
| Tech lead | Orosz: tech lead traits (break down work, write the "perfect" ticket, non-functional requirements) become more in demand [11]. | Very common. | Yes. Strong bridge term. |
| Product Owner | Scrum role that owns the backlog. Dutch POs now describe using AI agents for stories and acceptance criteria [58][59]. | Very common in NL (judgement). | Yes. Strong bridge term for the "spec" half. |
| Product Manager | Owns value and viability [45]. | Common. | Yes. |
| Business analist / Informatieanalist | Dutch analyst titles close to Voss's "systems analyst". | Common in Dutch government and corporate IT (judgement). | Yes. |
| Functioneel ontwerper | Dutch title. Writes the functional design for developers [58]. | Common in Dutch IT (judgement). | Yes. |
| Systems analyst | Voss's historical model for the role [4]. | Old title, rare now. | Older managers know it (judgement). |
| Requirements engineer | Classic title for spec work. | Uncommon (judgement). | Partly. |

## 4. Arguments that support and oppose his thesis

### Support: product and engineering merge

- **Andrew Ng.** Teams push engineer:PM ratios "from, say, 8:1 to as low as 1:1". Better still: "the fastest-moving teams ... have engineers who know how to do some product work" [20]. In 2025 one of his teams proposed twice as many PMs as engineers [22]. He warns: years ago he "ended up making good engineers feel bad for not being good product managers" [21 context; quote from the Stanford talk summary, unverified primary].
- **LinkedIn.** Ended the APM program. From January 2026 new hires learn to "code, design, and PM" [24]. Created a "Full Stack Builder" title and career ladder [23].
- **IBM.** Will triple US entry-level hiring in 2026. Entry-level developers now spend "a lot more time talking to our marketing teams. They are out with clients" [50]. HR must "rewrite every job" [49].
- **Gergely Orosz.** Startups hire "product engineers" who "act as blends of mini-product manager and software engineer" [10]. The PM and engineer professions "are set to overlap with another more than before" [11].
- **PostHog.** Product engineers talk to users, decide what to build, and do support. Fit for startups and B2B SaaS [7][8].
- **Sean Grove (OpenAI).** Code is "10 to 20%" of the value. The rest is "structured communication". "A written specification ... aligns humans" [27].
- **FDE demand.** The market pays for engineers who do discovery and delivery together [12][14][17].
- **Anthropic internal study.** Engineers become "more full-stack". They delegate tasks that are "easily verifiable" and keep the rest [43].

### Oppose or limit: the roles stay separate

- **Marty Cagan (SVPG).** Teams will shrink from about 8 people to about 3, but the trio stays: "product teams will need a product manager ..., a product designer ..., and an engineer" [45]. "Triple threat" people are "rare exceptions" [45]. He does accept that strong engineers can act as "product creators" [46]. In September 2026 he wrote that some companies that cut managers "have started to reverse that action" [48].
- **PostHog itself** says product engineers are "less effective for companies with large, technically complex products like infrastructure platforms for large enterprises" [8].
- **Ng's caveat.** "Some engineers genuinely do not enjoy talking to users ... and that is completely fine" [21 context, unverified primary].
- **Voss's own caveat.** Many engineers "did not sign up to interview bakers" [1][4].

### Evidence on whether code review stays human

For "review stays human, at least for important code":
- **Amazon (March 2026).** After incidents with a "high blast radius" linked to "Gen-AI assisted changes", junior and mid-level engineers need senior sign-off on AI-assisted changes [38]. Some staff say this rule already existed [39].
- **Dex Horthy (March 2026).** "I don't think it's okay to not read the code." His team skipped code reading for about six months and "had to rip out and replace large parts of that system" [42].
- **METR (March 2026).** About half of test-passing agent PRs would not be merged by maintainers. The automated grader scores about 24 points higher than maintainers [40].
- **Simon Willison (December 2025).** "Your job is to deliver code you have proven to work." "A computer can never be held accountable. That's your job as the human in the loop." [37]
- **Anthropic (December 2025).** Most engineers can "fully delegate" only 0–20% of their work [43].
- **Karpathy (2026).** Agentic engineering means "you are still responsible for your software just as before" [35].
- **DORA 2025.** 30% of respondents report little or no trust in AI-generated code. AI raises throughput but "still increases delivery instability" [44].
- **METR RCT (July 2025).** Experienced developers were 19% slower with early-2025 tools, while they believed they were faster [41]. METR now says these results are out of date [41].

For "review moves to machines and harnesses":
- **Voss.** Code review is "going soon". Build a "reliable review harness" [4][6].
- **GitHub Spec Kit.** You review "focused changes" against a spec instead of "thousand-line code dumps" [26].
- **Osmani.** The human becomes the "Quality Gate" [32]. But "the code review loop ... is going to need work if all this code is not to be slop" [31].

**Net reading.** The sources agree on one point that fits Matthijs's description: review effort must be targeted. Voss says to review only high-blast-radius code [1]. Amazon added friction "in the most important parts" [38]. Horthy wants "leverage": check correctness "without having to read all of it" [42]. Nobody credible says "never read the code" for production systems in 2026.

## 5. What organisations say they need to adopt the role

For the enablement offer to team leads.

**Training content**
- DORA 2025: "Your training programs should focus on teaching teams how to critically guide, evaluate, and validate AI-generated work, rather than simply encouraging usage." [44]
- DORA AI Capabilities Model: seven capabilities. Clear AI stance, healthy data, AI-accessible internal data, strong version control, small batches, user-centric focus, quality internal platform. "Adopting AI-assisted development tools can harm teams that don't have a user centric focus." [44]
- Osmani: spec writing ("briefs, not vibes"), work decomposition, verification, and updating AGENTS.md [32].
- Horthy: tools that need "the magic words" fail when experts hand them to their teams. Fix the tool and the workflow, not the user [42].
- Voss: nobody trains people for requirements work. Team leads must "grow them on purpose" [1][4].
- Ng: engineers should "learn some product management skills"; PMs should "learn to build" [20].

**Team shape**
- Ng: small teams of 2 to 10, generalists, same location for speed [20].
- Cagan: teams shrink to a trio [45].
- LinkedIn: small "full-stack builder pods" [24]. Three pillars: platform, agents, culture. "Culture matters most" [23].
- Meanwhile (a fintech): "We don't have product managers. You'll find the problems yourself" [61].

**Hiring and HR signals**
- LinkedIn: new title, new career ladder, updated performance reviews [23].
- IBM: "rewrite every job"; juniors get client contact early [49][50].
- Karpathy: most companies have not changed hiring for agentic skill. Give candidates "a really big project", not puzzles [35].
- Dutch ads ask for "AI-orchestratie", "Context Engineering", critical review of AI output, and maintenance of "systeemcontext" [51]. Others ask candidates to decide "what to build from thin specs and user feedback" and to "build evals" [53].

**Change management**
- LinkedIn: celebrate wins, make tools exclusive at first, update performance reviews [23].
- Matt Beane (via IBM): small apprentice teams led by a senior coach; map which tasks build skills and protect them from over-automation [49].

## 6. Implications for Matthijs's positioning

These are my inferences from the sources. Use them as input for the grilling session.

1. **The description is current and has strong backing.** Voss's closing advice is close to a copy of Matthijs's list (customer contact, specs, evals, targeted review) [1]. He can cite Voss, Ng, Orosz and LinkedIn as outside support.

2. **The title is the weak point.** "Product engineer" has three meanings: Voss's (agents type) [1], PostHog's (engineer who still writes most code) [8], and the Dutch mechanical one [57]. A Dutch IT manager may read it in the wrong way. Options: add a qualifier ("product engineer for agent-built software"), or lead with the work and use the title second.

3. **Bridge terms for Dutch buyers.** Product Owner, business analist / informatieanalist and tech lead are familiar (judgement). A one-line bridge could be: "a senior developer who also does the Product Owner and analyst work, while agents write the code". Voss's "systems analyst" story [4] may land well with older IT managers.

4. **It fits the existing pillars and the three failure modes in CONTEXT.md.**
   - *Shared understanding* = spec writing and context engineering [26][29].
   - *AFK or human-in-the-loop* = deciding which code needs a human review (Voss's "high blast radius" rule [1], Amazon [38], Horthy [42]).
   - *Dual maintainability* = gates, evals and review harnesses [6][40].
   The role could be the person who owns all three, which gives AI Enablement a named outcome.

5. **The "hire me to do it" offer looks like an FDE engagement.** OpenAI's FDE page says FDEs "equip your team with the tools and expertise to keep building" [16]. That is "lead by example, then hand over". The FDE vocabulary can explain the shape of a contract to buyers who know it. Note: FDEs work for the vendor. Matthijs works for the team that owns the product. That difference is a selling point.

6. **The enablement offer has a clear gap to fill.** Voss says that nobody trains this role [4]. DORA says that training must teach guiding and checking AI work [44]. LinkedIn and IBM had to build their own programmes [23][49]. Most Dutch teams of 5–15 cannot build a programme like that.

7. **Be honest about the opposition.** Cagan's trio [45] and the review evidence [38][40][42] do not break the thesis. They support the part about "decide which code still needs a human". A claim like "the PM and engineer merge in small teams; large platforms still need specialists" matches both sides [8][45].

8. **People risk is a selling point.** Ng regrets that he made good engineers feel bad [21 context]. Voss says many engineers will not want this job [4]. Team leads need help to decide who moves into the role and who stays a specialist. Coaching can address this.

9. **Avoid the hype numbers.** Several of Voss's figures are unverified (see section 1). Do not repeat "741%" or "$240k" on the site without the original study.

## Sources

Dates are publication dates. "Accessed" means that the page had no date and I read it on 2026-10-25.

1. Laurie Voss, "AI Writes the Code. So What's Left for Engineers?" (talk video, AI Engineer YouTube channel). https://www.youtube.com/watch?v=kspZP5BgkEU — upload about 2026-10-24 (date from search index, unverified). Transcript read via Exa.
2. AI Engineer NYC 2026 schedule. https://ai.engineer/nyc/2026/schedule — conference 12–14 October 2026. Accessed 2026-10-25.
3. Laurie Voss, slides "The Rise of the Product Engineer (AIE NYC)". https://slides.com/seldo/rise-of-the-product-engineer — listed 2026-10-02 on https://slides.com/seldo.
4. Laurie Voss, "We are all Product Engineers now". https://seldo.com/posts/we-are-all-product-engineers-now/ — 2026-09-14.
5. Chain of Thought podcast, "AI Codes: Product Engineers Decide What to Build". https://chainofthought.show/podcast/74-ai-codes-product-engineers-decide-what-to-build-laurie-voss/ — 2026-09-22.
6. Laurie Voss, "The Death of the Code Review: What the Data Actually Says" (talk page with slide notes). https://ai.engineer/talks/_mi3alkqy4s-death-code-review-what-data-actually-says — 2026-09-30.
7. PostHog, "What is a product engineer?". https://posthog.com/product-engineer/what-is-a-product-engineer — accessed 2026-10-25.
8. PostHog, "Product engineer vs software engineer". https://posthog.com/blog/product-engineer-vs-software-engineer — 2025-12-08.
9. Gergely Orosz, "The Product-Minded Software Engineer". https://blog.pragmaticengineer.com/the-product-minded-engineer/ — 2019-09-05 (updated 2022-02-01).
10. Gergely Orosz, "The Product-Minded Engineer: The importance of good errors and warnings". https://newsletter.pragmaticengineer.com/p/the-product-minded-engineer — 2026-01-20.
11. Gergely Orosz, "When AI writes almost all code, what happens to software engineering?". https://newsletter.pragmaticengineer.com/p/when-ai-writes-almost-all-code-what — 2026-01-06 (partly paywalled).
12. Gergely Orosz, "What are Forward Deployed Engineers, and why are they so in demand?". https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers — 2025-08-12 (partly paywalled).
13. a16z, "Trading Margin for Moat: Why the Forward Deployed Engineer Is the Hottest Job in Startups". https://a16z.com/services-led-growth/ — 2025-06-04.
14. Fast Company, "Postings for this AI job are up 800%". https://www.fastcompany.com/91435680/postings-for-this-ai-job-are-up-800 — 2025-11-05 (reports FT and Indeed data).
15. Times of India, summary of the FT report on FDE hiring (OpenAI, Anthropic, Palantir, Cohere quotes). https://timesofindia.indiatimes.com/technology/tech-news/openai-anthropic-and-other-ai-companies-are-looking-to-hire-this-rare-kind-of-software-engineer/articleshow/125062100.cms — 2025-11-03. The FT original is paywalled (not read).
16. OpenAI, "Forward Deployed Engineering". https://openai.com/business/forward-deployed-engineering/ — accessed 2026-10-25.
17. OpenAI job posting, "Forward Deployed Engineer (FDE) – SF". https://jobs.ashbyhq.com/openai/967f94aa-1706-4dba-ac89-bfbc2c38b688 — accessed 2026-10-25.
18. Szymon Paluch, "What is a forward deployed engineer?" (secondary; quotes Palantir, Anthropic, OpenAI postings read on 2026-10-02). https://szymonpaluch.com/blog/posts/what-is-a-forward-deployed-engineer — October 2026.
19. Sifted, "Forward deployed engineers, the 'red hot' role shaking up Europe's top AI startups". https://sifted.eu/articles/forward-deployed-engineers-hype-ai-startups — 2025-12-15 (paywalled; only the headline and subtitle were readable).
20. Andrew Ng, "AI-Native Software Development Needs Generalists", The Batch. https://www.deeplearning.ai/the-batch/ai-native-software-development-needs-generalists — 2026-04-17.
21. Business Insider, "Andrew Ng says the real bottleneck in AI startups isn't coding — it's product management". https://www.businessinsider.com/andrew-ng-product-management-bottleneck-coding-ai-startups-2025-8 — 2025-08-22. The quotes about "good engineers feel bad" come from a third-party summary of a Stanford talk: https://adhenawer.net/posts/original/ai-career-advice-andrew-ng-lawrence-moroney-stanford.html (undated, primary not verified).
22. Lenny Rachitsky, LinkedIn post quoting Ng's YC Startup School talk. https://www.linkedin.com/posts/lennyrachitsky_product-management-is-becoming-the-new-bottleneck-activity-7349539732105687040-mAv8 — 2025-07-11.
23. Lenny's Newsletter, "Why LinkedIn is replacing PMs with AI-powered 'full-stack builders'" (Tomer Cohen). https://www.lennysnewsletter.com/p/why-linkedin-is-replacing-pms — 2025-12-04.
24. Business Insider, "LinkedIn Is Phasing Out Traditional Product Manager Track". https://www.businessinsider.com/linkedin-product-manager-apm-full-stack-builder-2025-12 — 2025-12-05.
25. LinkedIn post announcing the Associate Product Builder program. https://www.linkedin.com/posts/sculbers_bringing-the-full-stack-builder-to-life-activity-7358277194101510145-kO9G — 2025-08-04.
26. GitHub Blog, "Spec-driven development with AI: Get started with a new open source toolkit". https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/ — 2025-09-02.
27. Sean Grove (OpenAI), "The New Code", AI Engineer World's Fair 2025. https://www.youtube.com/watch?v=8rABwKRsec4 — 2025-07-11. Written version: https://www.riseos.com/blog/2025-06-15-the-new-code/ — 2025-06-15.
28. Birgitta Böckeler, "Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl". https://www.martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html — 2025-10-15.
29. Anthropic, "Effective context engineering for AI agents". https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents — 2025-09-29.
30. OfficeChai, "'Context Engineering' A Better Term Than Prompt Engineering, Say Tech Leaders" (quotes Lütke and Karpathy posts on X). https://officechai.com/ai/context-engineering/ — 2025-06-27. Original post: https://x.com/tobi/status/1935533422589399127 (2025-06-19, not read directly).
31. Addy Osmani, "The future of agentic coding: conductors to orchestrators". https://addyosmani.com/blog/future-agentic-coding/ — 2026-01-02 (first on Substack 2025-11-01).
32. Addy Osmani, "Orchestrating Coding Agents", O'Reilly CodeCon, March 2026. https://talks.addy.ie/oreilly-codecon-march-2026/ — accessed 2026-10-25.
33. Addy Osmani, "Your AI coding agents need a manager". https://addyosmani.com/blog/coding-agents-manager/ — 2026-01-08.
34. The New Stack, "Vibe coding is passé. Karpathy has a new name for the future of software." https://thenewstack.io/vibe-coding-is-passe/ — 2026-02-10. Also Business Insider: https://www.businessinsider.com/agentic-engineering-andrej-karpathy-vibe-coding-2026-2 — 2026-02-08.
35. Andrej Karpathy with Stephanie Zhan (Sequoia), "From Vibe Coding to Agentic Engineering". https://www.youtube.com/watch?v=96jN2OCOfLs — 2026-05-25.
36. swyx, "The Rise of the AI Engineer", Latent Space. https://latent.space/p/ai-engineer/ — 2023-06-30.
37. Simon Willison, "Your job is to deliver code you have proven to work". https://simonwillison.net/2025/Dec/18/code-proven-to-work/ — 2025-12-18.
38. The Decoder, "Amazon makes senior engineers the human filter for AI-generated code after a series of outages". https://the-decoder.com/amazon-makes-senior-engineers-the-human-filter-for-ai-generated-code-after-a-series-of-outages/ — 2026-03-10. Also The Verge: https://www.theverge.com/tech/892157/amazon-is-giving-its-employees-more-guardrails-around-ai-after-outages — 2026-03-10.
39. Hacker News discussion of the Amazon report (staff comments that the rule is not new). https://news.ycombinator.com/item?id=47323017 — 2026-03-10.
40. METR, "Many SWE-bench-Passing PRs Would Not Be Merged into Main". https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/ — 2026-03-10.
41. METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity". https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ — 2025-07-10 (METR marks it out of date since February 2026; the follow-up was not read).
42. Dex Horthy (HumanLayer), "Everything We Got Wrong About Research-Plan-Implement". https://www.youtube.com/watch?v=YwZR6tc7qYg — 2026-03-25 (recorded 2026-03-03).
43. Anthropic, "How AI is transforming work at Anthropic". https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic — 2025-12-02.
44. DORA, "State of AI-assisted Software Development 2025" and "DORA AI Capabilities Model". https://dora.dev/research/2025/dora-report/ and https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf — 2025 (model last updated 2025-11-25). Training quote from the report copy at https://www.thoughtworks.com/content/dam/thoughtworks/documents/report/tw_report_state_of_ai_assisted_software_development_2025.pdf.
45. Marty Cagan, "A Vision For Product Teams", SVPG. https://www.svpg.com/a-vision-for-product-teams/ — 2025-02-25.
46. Marty Cagan, "The Era of the Product Creator", SVPG. https://www.svpg.com/the-era-of-the-product-creator/ — 2025-05-27.
47. SVPG, "Product in the AI Era: AI Resource Guide". https://www.svpg.com/ai-resource-guide/ — 2026-07-23.
48. Marty Cagan, "Experts Lead Experts", SVPG. https://www.svpg.com/experts-lead-experts/ — 2026-09-25.
49. IBM Think, "The bottom rung returns as AI reshapes entry-level jobs". https://www.ibm.com/think/news/entry-level-roles-get-reset-ai — 2026-03-02.
50. Charter, "Why IBM is 'tripling' entry-level hiring as AI reshapes jobs". https://www.charterworks.com/ibms-nine-year-ai-journey/ — 2026-02-11.
51. Visma Circle, vacancy "Product Engineer" (Sittard). https://werkenbij.vismacircle.nl/jobs/7938812-product-engineer — accessed 2026-10-25.
52. Blinqx, vacancy "AI-first Product Engineer – Build With AI Agents" (Amersfoort). https://baan24.nl/product-engineer_amersfoort-c354165/2026-10-blinqx_i4248207531 — 2026-10-16.
53. NANCE, vacancy "AI Product Engineer" (Nieuw-Vennep). https://baan24.nl/product-engineer_nieuw-vennep-c353561/2026-10-nance_i4238747855 — 2026-10-10.
54. Futurewhiz, vacancy "Senior AI Product Engineer (Full-Stack)" (Amsterdam). https://futurewhiz.recruitee.com/o/senior-ai-product-engineer-full-stack — 2026-08-19.
55. Passionfruit, vacancy "Senior Product Engineer" (Rotterdam). https://www.nationalevacaturebank.nl/vacature/7423b8d4-c236-42d0-a252-506772f5fdad/senior-product-engineer — 2026-10-16.
56. Randstad Professional, vacancy "Agentic AI Engineer" at Philips (Eindhoven). https://www.randstadprofessional.nl/vacatures/9211107/agentic-ai-engineer — 2026-10-09.
57. Gamko, vacancy "Product Engineer" (mechanical, HBO Werktuigbouwkunde). https://gamko.nl/vacature/product-engineer/ — 2026-09-04.
58. productowner.nl, "AI voor product owners: waar het helpt en waar het schuurt". https://www.productowner.nl/blogs/product-owner-en-ai/ — 2026-10-12. Dutch job profile for functioneel ontwerper: https://aiberoepenzoeker.nl/beroepen/functioneel-ontwerper — 2026-03-09.
59. Rogier Groensmit, "Van Product Owner naar AI-Orchestrator" (LinkedIn). https://nl.linkedin.com/posts/rogier-groensmit_productmanagement-productowner-ai-activity-7482326909251657728-bfSg — 2026-07-13.
60. Tobias Cornille (Monumental), "The Golden Age of Product Engineers". https://buildmonumental.substack.com/p/the-golden-age-of-product-engineers — 2026-02-24.
61. Meanwhile, vacancy "Senior Software Engineer – Dev Tools". https://meanwhile.bm/hiring/senior_software_engineer_dev_tools/ — accessed 2026-10-25.
