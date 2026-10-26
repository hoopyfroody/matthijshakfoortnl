# Research: Process Support and Developer Tooling

Date: 2026-10-25. Input for a grilling session and a positioning document.
Scope: two types of software Matthijs wants to offer to build. Read with [CONTEXT.md](../../CONTEXT.md) and [the design brief](../design-brief.md).

Source markers like [S12] point to the source list at the end. "Vendor claim" means the source sells the product or service it describes. "Not verified" means I could not confirm the claim in a primary source.

## Summary

1. LLM process automation that works in production is narrow and boring: classify, extract, route, draft, with a person on the uncertain cases. Email intake and document-to-record are the most common named cases [S6–S13].
2. Most AI pilots do not reach production. The causes are workflow fit, no measurement and no learning loop, not the model [S3, S4]. External partners do better than internal builds, per MIT NANDA [S3].
3. Custom code beats n8n, Zapier, Make and Copilot Studio when the LLM step needs tests, versioned prompts, evals, idempotency or an audit trail. Low-code wins for low-volume internal glue [S23–S26].
4. Agents build CRUD, auth, integrations with good docs and test scaffolding well. They do badly on concurrency, time logic, multi-tenant boundaries, retries and vague requirements [S47–S49].
5. The economics argument holds for the first build. It does not hold for ownership. Generation got cheap; specification, verification and maintenance did not [S34–S42].
6. In developer tooling, the proven pieces are instruction files, skills, hooks, sandboxes, background agents, AI review, deterministic sensors, evals and observability. The industry name for the set is "harness" [S56, S57, S59].
7. Review is now the bottleneck. Teams answer with risk tiers based on blast radius and reversibility, not diff size [S60, S62].
8. Teams should buy the review bot, the coding agent and the observability platform. A freelancer adds value in the team-specific part: instructions, skills, hooks, custom linters, review policy, eval sets, internal MCP servers.
9. Developer Tooling fits the current Buyer and the three failure modes directly. Process Support has a different buyer (operations, not engineering). That tension needs a decision.
10. Dutch rules: AI Act transparency duties apply now; Annex III high-risk duties from 2 December 2027. GDPR Article 22 needs meaningful human review for decisions about people [S28–S31].

---

## A. Process Support

### A1. What is in production (2025–2026)

Anthropic separates "workflows" (LLM calls in fixed code paths) from "agents" (the model picks its own steps). It advises the simplest solution first. Often one well-built LLM call with retrieval and examples is enough [S1]. Barry Zhang (Anthropic) adds a cost rule: at a budget of about 10 cents per task, use a workflow, not an agent [S2]. Nearly all named production cases below are workflows with one or two LLM steps.

| Category | What the LLM does | Named examples | Notes |
|---|---|---|---|
| Email classification and routing | Reads the email and attachments, picks one of N categories, sends to a queue | Travelers Insurance: Claude on Bedrock, 13 categories, 68% accuracy before prompt work, 91% after [S6]. InterRisk: about 30,000 emails per month, 12 categories, 85% classification accuracy on 750 emails, open-source LLM hosted in the EU for GDPR [S7]. BayernLB: Azure OpenAI with Power Automate, writes to CRM [S8] | S6 is an AWS blog. S7 and S8 are vendor claims |
| Field extraction from emails and documents | Pulls structured fields into a record | InterRisk extraction was weaker than classification: 71% for names, 62% for document dates [S7]. Adaptive Parse on Make: purchase orders from 2–3 days to 5 minutes, 95% accuracy [S10]. Spotify finance: invoice parsing with confidence scores for SOX controls [S14] | Extraction accuracy is the hard part, not classification |
| Logistics quoting | Reads quote requests in many formats, fills shipment fields, checks against rates | Hellmann Worldwide Logistics with Reindeer: Outlook add-in, flags missing data, full audit trail [S11]. A European forwarder, 20,000 requests per year, four queues by confidence and value [S12]. An Indian operator: 88.5% pickup accuracy; most errors were place-name aliases, fixed with an alias table [S13] | All vendor claims. The design pattern repeats across all three |
| Small-business inbox | Classify, draft reply, schedule follow-ups | Australian web agency on n8n: owner inbox time from about 3.5 to 0.5 hours per day; auto-send only for low-risk, high-confidence cases [S9] | Practitioner case study |
| Ticket and lead handling | Resolve or enrich routine requests | Zapier claims Remote.com auto-resolves 27.5% of IT tickets [S18] | Vendor claim |

Wider data:

- MIT NANDA (July 2025): of task-specific GenAI tools, 60% of organisations evaluated them, 20% piloted, 5% reached production. The best return was in back-office automation, not sales and marketing. "External partnerships see twice the success rate of internal builds." Mid-market top performers went from pilot to full use in about 90 days [S3]. The report says its figures are "directionally accurate", based on interviews.
- CBS (Netherlands): in 2025, 33% of companies with 10 or more people used at least one AI technology, up from 23% in 2024. Text mining (22%) and natural language generation (16%) were the most used. Transport and storage, construction and hospitality used AI least (16–21%) [S27]. For MKB (10–249 people) the figure was 29.8% [S27b]. Only 4% of AI-using companies use it for logistics purposes [S27c].
- Not verified: the CBS ICT survey covers sectors C to N and Q [S27b]. Agriculture (sector A) is outside that scope, so I found no Dutch adoption figure for agriculture.

### A2. Build vs buy

| Option | What it is | Good for | Limits |
|---|---|---|---|
| Zapier (AI by Zapier, Zapier Agents) | Hosted automation across about 8,000–9,000 apps. AI steps summarise, draft and classify. Agents work from instructions. Slack approval steps for human review [S18, S19] | Non-engineers wiring SaaS tools together | Same limits as other canvases (see below) |
| Make (Make AI Agents) | Visual automation, about 2,000 apps and 30,000 actions. AI agents launched in beta April 2025, with a choice of model [S20] | Same as Zapier, more control over data flow | Same |
| n8n | Workflow engine, self-hostable, AI agent and LLM nodes. Source-available under its own Sustainable Use License, which limits offering it as a hosted service [S23] | Prototypes and internal glue. Self-hosting helps with data control | No prompt diff history, no eval gates, no built-in dev/prod split, error handling for LLM failures is manual [S24, S25] |
| Microsoft Copilot Studio and Power Automate | Agent flows with AI actions (prompts, document processing), human-in-the-loop approval actions and Microsoft 365 connectors. Billed in Copilot Credits: packs of 25,000 credits at $200 per month, or pay-as-you-go. Document processing costs 8 credits per page [S21] | Companies already deep in Microsoft 365 and Dynamics. BayernLB is an example [S8] | Usage cost per action and page. Vendor lock-in |
| UiPath (Maestro, Agent Builder) | Enterprise platform that orchestrates agents, RPA robots and people in BPMN processes. Maestro GA on 30 April 2025 [S22] | Large firms that already run UiPath RPA | Not verified, my judgement: too heavy for most SMEs |
| Custom code | A small service: prompts and schemas in the repo, tests and evals in CI, queue, retries, audit log | LLM steps that need tuning, high volume, money or customer impact, sensitive data | Needs an engineer who owns it over time [S26] |

Where custom work still wins. Practitioner sources agree on the signals:

- Pykero's test: score five questions. Does a customer see the output? Will it run more than a few hundred times a day? Does it have an LLM step you will keep tuning? Does a failed or duplicate run cost money or trust? Does it touch sensitive data? Three or more "yes" means code. Two means a hybrid: n8n for triggers, a small code service for prompts and business rules [S23].
- A prompt inside a canvas node is "a string in a database": no diff, no review, no eval suite. Retries, idempotency and dead-letter handling are possible in n8n but turn the canvas into a tangle [S23, S24, S25].
- Production plumbing (prompt versioning, retry and backoff, state, dead-letter queue, monitoring, audit log, eval harness) takes 1–3 weeks before the first workflow. Later workflows on the same base take days [S26]. This is an agency blog, not measured data.
- All major platforms now ship agents and MCP. The difference is control of orchestration, testability and cost at volume, not "AI or no AI" [S24, and Bitontree comparison, not individually verified].

### A3. Failure modes and what makes these projects succeed

Failure modes:

1. Pilots that never reach production. Gartner predicts over 40% of agentic AI projects will be cancelled by end of 2027, due to cost, unclear value or weak risk control. It estimates only about 130 of thousands of "agentic" vendors are real ("agent washing") [S4]. Gartner also says agents suit cases where "several outcomes may be acceptable and the impact of errors can be contained" [S5].
2. No measurement. Hamel Husain: teams that succeed "obsess over measurement and iteration", not tools. Generic metrics such as "helpfulness" mislead [S32].
3. Trusting the model's own confidence. Verbalised confidence from vision-language models separates right from wrong fields poorly (AUROC 0.54–0.74). Under a 10% error budget it let only 0.1–7% of fields pass without review [S15]. A combined approach with OCR, layout and validation signals reached 49–72% auto-approval at the same error budget [S15]. A production invoice system auto-validated 73% of 11,253 invoices at 0.96% field-level false positives [S16]. Both are preprints or papers on specific data sets.
4. Silent quality drift. A wrong answer is not an error to the workflow engine. Model updates change output without warning [S24].
5. Duplicate actions and lost runs. Retries without idempotency send the email or payment twice [S23, S62f].
6. Prompt injection. An inbox is untrusted input: "an attacker can literally email your LLM and tell it what to do." The risk is highest when one system has private data, untrusted content and a way to send data out. Removing one of the three legs stops the data-theft attack [S33].
7. No learning loop. MIT NANDA names the "learning gap": tools that do not adapt to the workflow get dropped [S3].
8. No owner after go-live. See A5.

What the successful cases have in common:

- One inbox or one document type first, a hand-labelled seed set, a baseline, then a staged rollout [S9, S12].
- Error analysis before metrics: read at least 30 traces, write notes, group them into a failure taxonomy, count. A domain expert does the reading [S32b]. A simple custom data viewer is the most useful investment [S32].
- Confidence routing to several outcomes, not pass/fail: accepted, needs review, missing data, failed. Thresholds set per document type against labelled data, and revisited [S17]. The forwarder case uses four queues: auto-approve, incomplete, high-value, discard [S12].
- A review screen that shows the value next to its source, sorted by lowest confidence first. Store every human correction as evaluation data [S17]. Datsugi and Reindeer both feed corrections back into extraction [S11, S12].
- An audit trail of who created, edited, approved or rejected each item [S11].
- Rules that the business owns: "Nothing is auto-sent that the team hasn't defined as safe to auto-send. The thresholds are theirs." [S12]
- Structured output against a schema is now a sensible default (Thoughtworks Radar, Adopt) [S59c].

EU and Dutch rules relevant to a Dutch freelancer (this is research, not legal advice):

- EU AI Act timeline after the AI Omnibus (in force 27 July 2026): AI literacy duties apply since 2 February 2025. Transparency duties (Article 50, for example telling people they deal with an AI system) apply since 2 August 2026. High-risk rules for Annex III uses apply from 2 December 2027 [S28].
- Annex III high-risk uses include employment (for example CV sorting), credit scoring and access to essential services [S28b]. My reading, not verified with a lawyer: invoice extraction, email routing and quote intake are not high-risk. HR screening and credit decisions are.
- SME exemptions in the AI Act now also cover small mid-caps [S28c].
- Not verified: when a freelancer builds a system and the client uses it under its own name, who is the "provider" and who the "deployer" under the AI Act. Get legal advice before taking high-risk work.
- GDPR Article 22: a decision with legal or similarly significant effect on a person may not be fully automated, except in three cases (contract, explicit consent, law), and then with safeguards [S31]. Human intervention must be meaningful, not symbolic. Time pressure or an unclear system make it less meaningful [S29].
- The Autoriteit Persoonsgegevens published a self-check tool on generative AI and the GDPR (July 2026). It asks organisations to check for individual decisions in AI-assisted processes, to make sure staff know the system, may deviate from its output and have time to do so, and to re-assess the use of generative AI periodically [S30].
- One case kept data in the EU by self-hosting an open-source model [S7]. Another kept rate sheets on the client's own servers and let the model query them through MCP without receiving copies [S12].

### A4. Suited to being built with AI coding agents

Evidence on what agents build well and badly:

- Mercor tested eight frontier models building 12 SaaS clones from a spec (August 2026). Pass rates by test type: authentication 79%, validation 63%, CRUD 53%, concurrency 50%, time logic 43%, UX 32%. Concurrent checkout in the Shopify clone passed 8%. Two concurrent orders for the last item both succeeded in 22 of 24 runs [S47].
- A developer built a social media tool with 12 API integrations in three weeks. Agents did Django CRUD, well-documented APIs, layouts and tests well. They failed on a poorly documented API, leaked data across tenants in code that passed the tests, and needed manual work for OAuth edge cases and retry and rate-limit logic [S48].
- Monstarlab (consultancy, October 2026): agents are good at "boring, well-defined work" and at mapping unfamiliar code. They fail on ambiguous requirements. On legacy code without tests, an agent "finished" tasks that broke unwritten behaviour. Their fix: characterisation tests first. Estimates got worse, not better, which is a risk for fixed-bid work [S49].
- PACE-Bench (preprint, October 2026): on 43 enterprise tasks, the best configuration fully delivered 14% of product requirement documents. Missing integration was a main cause. Better harnesses raised scores with the same model [S50].
- Martin Alderson (December 2025): an internal CRUD tool that took a month now takes a week. "The thinking time is roughly the same" [S36].

So: process software of the type "trigger, fetch, one LLM step with a schema, validate, write to a system, put the rest in a review queue" plays to agent strengths, if the dangerous parts (idempotency, concurrency, permissions, retries) are designed and reviewed by a person. See the table in section C.

### A5. The economics argument

The argument for:

- Avery Pennarun (Fast Company, August 2026): many small programs were "simply too expensive to make". Now "a program only needs to save more time than it takes to build". He adds three questions to decide how much engineering a tool needs: does anyone depend on it, can it change or expose important data, would work stop if it disappeared [S34].
- Chris Ford (Thoughtworks Chief Architect) frames it as a Jevons paradox: cheaper code means more niche software. "If you can automate something by asking an agent to make it, that may now be worth doing when it wasn't before." He also says the bottleneck moves "from building to validating" [S35].
- A University of Utah preprint (October 2026): benchmark task length that agents can finish doubles about every 129 days. The cost of a fixed Aider benchmark result fell 39 times in eight months. 32% of respondents in one organisational survey said they skipped at least one software purchase because they could build it. The authors say these self-reports do not show spend displaced or the reliability of the tools [S37].

The argument against, or its limits:

- Only one input got cheap. "If generation was 40% of the bundle and fell 90%, the bundle fell 36%, not 90%." Specification and verification become the larger share [S38]. This is a personal research vault, low authority, but the arithmetic is sound.
- The year-two bill: maintenance, security patches, dependency updates, bus factor and rework arrive after the tool becomes load-bearing [S39, S40]. Aaron Levie (Box CEO): agentic coding is less great for "casually building complex software that you have to maintain on an ongoing basis and take on all the risk for" [S41].
- Retool's 2026 survey: 60% of builders built something outside IT oversight in the past year. Maintenance burden is a blocker for 26% [S42]. Retool sells an internal-tool platform.
- Productivity evidence is mixed. METR's 2025 trial found experienced developers 19% slower with AI. Its 2026 follow-up says they are likely faster now, but selection effects make the data weak [S43]. DORA 2025: AI now raises delivery throughput, but still raises instability [S44].

Net: the argument holds for the first version. It is weak if the offer stops at delivery. An offer that includes ownership (owner, monitoring, eval set, retirement plan) uses the argument honestly.

---

## B. Developer Tooling for agentic development

### B1. What is proven useful

The common frame is the "harness": everything around the model. Birgitta Böckeler (Thoughtworks) splits it into guides (feedforward, steer before the agent acts) and sensors (feedback, let the agent correct itself). Each can be computational (tests, linters, type checks) or inferential (AI review, LLM as judge) [S57]. If a prose rule gets ignored repeatedly, promote it to a linter rule or test [S67]. OpenAI built a product of about one million lines with no hand-written code. Their conclusion: the hard work is "designing environments, feedback loops, and control systems" [S56]. The Thoughtworks Radar (April 2026) calls this "putting coding agents on a leash" and warns of "cognitive debt" [S59].

| Category | What it does | Examples and status | Evidence |
|---|---|---|---|
| Instruction files | A Markdown file in the repo with build steps, conventions and rules for agents | AGENTS.md (OpenAI, August 2025; 60,000+ projects; donated to the Linux Foundation's Agentic AI Foundation, December 2025) [S52]. CLAUDE.md. Thoughtworks "Adopt": put curated instructions into service templates so new repos inherit them [S59c] | Widely adopted |
| Agent Skills | A folder with SKILL.md plus scripts and references. The agent loads only name and description at start and reads the rest when relevant | Anthropic, October 2025. Open standard December 2025. Donated to the Agentic AI Foundation on 22 October 2026. 70+ platforms integrate it [S51] | Radar: "Trial" [S59b] |
| Hooks | Shell commands the agent runtime runs at fixed points, for example before a tool call (can block it) or after a file edit | Claude Code hooks: "deterministic control: certain actions always happen rather than relying on the LLM" [S53] | Primary docs |
| MCP servers | Standard protocol to connect agents to tools and data | 10,000+ published servers at the time of the AAIF launch [S52] | Security risk: the lethal trifecta [S33] |
| Sandboxes | OS-level limits on files and network for agent commands | Claude Code sandbox cut permission prompts by 84% in Anthropic's internal use [S54]. Radar: sandboxed execution is "table stakes" [S59] | Primary |
| Background or cloud agents | Agent works on an issue in its own environment and opens a pull request | GitHub Copilot coding agent, GA September 2025, runs in GitHub Actions and requests review when done [S55] | CI workflows do not run on its pushes until a person approves [S55b] |
| AI code review | Bot comments on pull requests | Anthropic Code Review: preview March 2026, GA 15 October 2026. At Anthropic, PRs with substantive review comments went from 16% to 54%; under 1% of findings marked incorrect. It never approves or blocks; instructions come from REVIEW.md on the base branch [S60] | Benchmarks conflict, see below |
| Quality gates and sensors | Tests, type checks, custom linters, structural tests, mutation testing in the agent loop and in CI | OpenAI: custom linters and structural tests for layer rules, periodic "garbage collection" agents [S56]. Radar mentions mutation testing as a feedback control [S59] | Practitioner and primary |
| Evals for LLM features | Test sets for prompt changes, run in CI | promptfoo GitHub Action can fail a PR below a pass threshold and repeat flaky tests [S65]. Method: error analysis first [S32] | Primary docs |
| Observability | Traces of LLM calls with model, tokens, cost, inputs, outputs | Langfuse accepts OpenTelemetry traces with GenAI attributes [S64] | Primary docs |
| Preview deployments | A live URL per pull request | Vercel creates one for every PR [S66] | Primary docs |
| Spec-driven development | Write a spec first; the agent works from it | Kiro (requirements, design, tasks), GitHub Spec Kit (constitution, specify, plan, tasks), Tessl (spec as source, beta) [S58] | Böckeler: overkill for small changes; a lot of Markdown to review. Status after October 2025 not verified |
| Delivery metrics | Lead time, deploy frequency, restore time, change failure rate, rework rate | Radar: DORA metrics "Adopt"; lines of AI code as a measure is a "Caution" [S59c] | — |

AI code review benchmarks disagree. Greptile measured 82% catch rate for itself in its own test. Augment measured Greptile at 45% on the same repositories [S61]. "In every case, the organization running the test happened to win" [S61c]. A small independent test (30 real bugs, May 2026) found CodeRabbit, Claude Code Review and Copilot review caught 42% on average. All three missed 12 of 30 bugs, mostly race conditions and N+1 queries [S61d]. Conclusion: AI review adds coverage but does not replace a person on runtime, concurrency and cross-module bugs.

### B2. Where human review remains necessary

The pressure: code output per Anthropic engineer grew 200% in a year, and review became the bottleneck [S60]. Monstarlab reports the same [S49]. Stack Overflow 2025: 46% of developers distrust AI output accuracy; 66% name "almost right, but not quite" as the top frustration [S45]. Veracode found a known security flaw in 45% of generated code samples, with no improvement in newer or larger models [S46].

How teams decide:

- Grade every change on reversibility, blast radius and verification strength. Diff size is not a risk signal [S62a, S62e].
- Rootly moved the safety boundary from merge to rollout: significant features ship behind a flag [S62d].
- Mews built a bot on Claude Code that labels each PR low to critical risk. The change that mattered was the policy: reviewers may skip line-by-line reading on low-risk PRs. The bot alone changed nothing [S62c].
- Rewind lets its bot approve, but approve is not merge. High-risk paths (locking migrations, IAM scope, tenant boundaries) go to a human regardless of size [S62f].
- Cortex: all PRs still get a human sign-off, with effort scaled by risk. GitHub required reviewers can be set per path, for example for auth code [S62b].
- Markus Eisele (O'Reilly, October 2026): agree on intended behaviour and blast radius before the agent starts. Example: an agent adds retries to a refund call, which can pay a refund twice. A reviewer focused on the requested feature can miss it [S62g].
- Always-human areas named across sources: authentication and authorisation, money, data migrations, public contracts, shared infrastructure, concurrency, deployment permissions [S62a–g].

### B3. What a freelancer can build or set up, and what teams should buy

| Teams should buy | A freelancer can build or set up |
|---|---|
| The coding agent itself (Claude Code, Codex, Cursor, Copilot) | Instruction files and service templates that carry them [S59c] |
| A hosted AI review service (Claude Code Review, CodeRabbit, Greptile, others) [S60, S61] | Team-specific skills for recurring workflows (release, migration, incident notes) [S51] |
| Background agent hosting (Copilot coding agent, cloud sessions) [S55] | Hooks for formatting, blocked commands and protected paths [S53] |
| LLM observability platform (Langfuse or similar) [S64] | Custom linters, structural tests and other computational sensors [S56, S57, S67] |
| Preview deployment platform [S66] | REVIEW.md and review guidance; a risk-labelling reviewer and the written review policy behind it [S60, S62c] |
| Sandbox runtime [S54] | Eval sets and CI gates for the team's own LLM features [S32, S65] |
| | Internal MCP servers and CLIs for the team's own systems, with a trifecta check [S33] |
| | Measurement before and after (DORA metrics including rework rate) [S59c] |

Anthropic's docs list "your own reviewer, as a subagent or skill" as an option next to its paid service [S60c]. Mews, Rootly and Rewind each built their own review bot on top of bought models [S62c, S62d, S62f]. That is the gap a freelancer fits: the bought tools are generic; the risk rules, paths and conventions are team-specific.

---

## C. Suited to AI-built vs not

| Suited | Why | Poorly suited | Why |
|---|---|---|---|
| CRUD screens and APIs on a known stack | High pass rates; clear spec [S47, S48, S36] | Concurrency, inventory, booking, payments | 50% and lower pass rates; double orders and double bookings [S47] |
| Integrations with well-documented APIs | Agents handle them well [S48] | Poorly documented or unusual APIs | "Wrong code confidently, over and over" [S48] |
| One LLM step with a strict schema and a labelled test set | Testable; the eval set is the spec [S17, S32] | Open-ended agents with write access and untrusted input | Prompt injection; Gartner says errors must be containable [S5, S33] |
| Test scaffolding, characterisation tests, docs | Strong agent area [S48, S49] | Multi-tenant boundaries and auth flows | Leaks that pass tests [S48] |
| Internal tools with a small user group and a revert path | Low blast radius [S34, S62a] | Retry, backoff, idempotency, job orchestration | Needed hand work [S48]; double refunds [S62g] |
| Legacy changes after characterisation tests exist | Tests make the work checkable [S49] | Legacy changes with no tests | Agents "finished" tasks that broke unwritten behaviour [S49] |
| Work with a clear owner and acceptance criteria | Merge rates follow ticket clarity (practitioner report, not verified) | Vague or political requirements | Agents build the wrong thing fast [S49] |
| | | Annex III uses (HR screening, credit) | High-risk duties from 2 December 2027 [S28] |

---

## D. Near-future outlook (2026–2028)

- Anthropic expects single agents to become coordinated teams, oversight to scale through agent-based quality control, and non-engineers to build their own tools. It also reports developers use AI in about 60% of their work but "fully delegate" only 0–20% of tasks [S63]. Vendor source.
- Thoughtworks (Radar Vol. 34, April 2026): a return to fundamentals (testability, zero trust, DORA metrics), sandboxing as table stakes, harnesses with skills and spec-driven development as guides and mutation testing as a sensor. Also: so many quick developer tools that judging their staying power is hard [S59].
- Gartner: 40% of agentic AI projects cancelled by end of 2027; at least 15% of day-to-day work decisions made by agents by 2028; 33% of enterprise apps include agentic AI by 2028. "Reliability before autonomy" [S4, S5].
- Standards are consolidating under the Agentic AI Foundation: MCP, AGENTS.md and Agent Skills. A skills roadmap with versioned releases and security guidance is proposed [S51c, S52]. Skills and instructions written now should port across tools.
- Review stays the bottleneck. AI review moves from "comment" to "risk label and route", with humans on the high tiers [S60, S62].
- Measurement gets harder. METR could not get a clean signal in 2026 because developers refuse to work without AI [S43].
- Regulation: Article 50 transparency applies now; Annex III high-risk from December 2027 [S28].
- Benchmarks of complete delivery stay low (14% for the best configuration on PACE-Bench), and harness changes move scores with the same model [S50]. The harness is where the gains are.

---

## E. Implications for positioning

Fit with the current site:

- Developer Tooling is AI Enablement made concrete. Shared understanding maps to guides (instructions, skills, specs). AFK or human-in-the-loop maps to sandboxes, risk tiers and review policy. Dual maintainability maps to sensors (linters, structural tests) and "promote prose rules into code". Same Buyer: an engineering leader with a team.
- Process Support has a different buyer: an operations lead, COO or owner at an SME, often without a development team. The current Buyer definition excludes this person. Decide: a second buyer, or Process Support only for companies with a team (for example "your team owns it after handover").
- The site has no case studies by design. Process Support buyers in the sources respond to concrete before/after numbers [S7, S9, S12]. That conflicts with the "no case studies" rule.

What to offer:

1. Process Support, bounded: inbox or document intake to structured records in the client's existing systems. One LLM step with a schema, validation against business data, confidence routing to several queues, a review screen, an audit trail, corrections stored as eval data. Start with one inbox or one document type.
2. Ownership as part of the offer: a named owner, an eval set in the repo, monitoring of quality and cost, a model-change procedure, a retirement plan. This answers the year-two objection [S39–S41].
3. A hybrid option: n8n or Power Automate at the edges, a small TypeScript service for the LLM core [S23].
4. Developer Tooling as a harness: instruction files and templates, team skills, hooks, custom linters and structural tests, REVIEW.md tuning, a risk-label reviewer plus the written review policy, eval gates for LLM features, internal MCP servers with a security check, before/after DORA metrics.

What to avoid:

- Autonomous agents that read untrusted input and can also act or send data out [S33].
- HR screening, credit and other Annex III uses, unless ready for high-risk duties [S28].
- Customer-facing auto-send without thresholds the client owns [S12].
- Pure low-code glue. An ops person or a cheaper freelancer can do it, and the sources say so [S23].
- Building a competitor to bought tools (a general AI review product, a general coding agent).
- Heavy spec-driven process for all changes [S58].
- Productivity multiplier claims. The evidence is mixed and measurement is hard [S43, S44].
- Fixed-bid pricing without a discovery phase. Estimates got less reliable with agents [S49].

Questions for the grilling session:

1. Who is the Process Support buyer, and does the site address them or not?
2. Does Process Support require a client team to take ownership, or does Matthijs run it after delivery?
3. Which past sectors (agriculture, logistics, e-commerce, consultancy) give a concrete first use case? Logistics quoting has the most public examples.
4. Is the "no case studies" rule still right if Process Support is on the page?
5. Is Developer Tooling a separate offer, or the delivery form of AI Enablement?
6. Which items in "what to avoid" are hard lines?

---

## Sources

Dates are publication dates where shown; otherwise "undated, accessed 2026-10-25".

- S1. Anthropic, "Building effective agents", 2024-12-19. https://www.anthropic.com/research/building-effective-agents
- S2. Barry Zhang (Anthropic), "How We Build Effective Agents", AI Engineer talk, 2025-04-04. https://www.youtube.com/watch?v=D7_ipDqhtwk
- S3. MIT NANDA, "The GenAI Divide: State of AI in Business 2025", July 2025. https://21464181.fs1.hubspotusercontent-na1.net/hubfs/21464181/v0.1_State_of_AI_in_Business_2025_Report.pdf ; Fortune coverage 2025-08-18: https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/
- S4. Gartner press release, 2025-06-25. https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
- S5. Gartner, "AI Agent Success Requires Reliability Before Autonomy", undated. https://www.gartner.com/en/articles/ai-agent-reality-check
- S6. AWS ML Blog, Travelers email classification, 2025-01-31. https://aws.amazon.com/blogs/machine-learning/how-travelers-insurance-classified-emails-with-amazon-bedrock-and-prompt-engineering/
- S7. deepsense.ai, InterRisk case study, 2025-12-17 (vendor). https://deepsense.ai/case-studies/cutting-response-time-by-95-in-customer-service/
- S8. adesso, BayernLB email triage reference, undated (vendor). https://www.adesso.de/en/adesso-branch-solutions/banken-finanzdienstleister/referenzen/reference-bayernlb-email-triage.jsp
- S9. Noah Hailegiorgis, n8n email triage case, 2025-08-07. https://noahhaile.com/articles/automating-emails/ ; also UK SME 14-day case, 2025-11-02: https://youraiconsultant.london/posts/november2025/from-inbox-to-resolution-in-14-days-a-uk-sme-case-study-of-ai-email-triage
- S10. Make, Adaptive Parse success story, 2025-07-03 (vendor). https://www.make.com/en/success-stories/adaptive-parse-reduces-order-processing-with-make-ai
- S11. Reindeer, Hellmann Worldwide Logistics case, undated (vendor). https://reindeer.ai/case-studies/hellmann-worldwide-logistics
- S12. Datsugi, "Managing 20k quote requests / year with Claude", undated (vendor). https://datsugi.com/portfolio/20k-quote-requests ; https://datsugi.com/case-studies/ai-agent-quoting-tool
- S13. FasterQuotes case study, December 2025 (vendor). https://fasterquotes.io/case-studies/freight-quote-automation
- S14. Spotify Engineering, confidence scores for GenAI invoice parsing, 2024-12-12. https://engineering.atspotify.com/2024/12/building-confidence-a-case-study-in-how-to-create-confidence-scores-for-genai-applications
- S15. Yichao Jin, "Perception, Layout, and Validation", arXiv preprint, 2026-09-17. https://arxiv.org/pdf/2609.20110v1.pdf
- S16. "Safe Invoice Data Extraction: FPR-Constrained Validation with VLM Denoising", ACM, undated. https://dl.acm.org/doi/pdf/10.1145/3820755.3821480
- S17. Elson Tan, "LLM extraction confidence scores and human review", 2026-01-27. https://elsontan.com/blog/confidence-scores-and-human-review/
- S18. Zapier, AI orchestration platform launch, 2025-04-29 (vendor). https://zapier.com/blog/zapier-ai-orchestration-platform/
- S19. Zapier Agents, 2025-01-22 and 2025-05-26 (vendor). https://zapier.com/blog/introducing-zapier-ai-agents/ ; https://zapier.com/blog/zapier-agents-pods-dashboards/
- S20. Make AI Agents press release, 2025-04-14 (vendor). https://www.make.com/make-ai-agents-press-release
- S21. Microsoft Learn: Agent flows overview (undated); Billing rates, 2026-10-01; Copilot Studio pricing page. https://learn.microsoft.com/en-us/microsoft-copilot-studio/flows-overview ; https://learn.microsoft.com/en-us/microsoft-copilot-studio/requirements-messages-management ; https://www.microsoft.com/en-us/copilot/pricing/copilot-studio
- S22. UiPath agentic automation launch, 2025-04-30 (vendor). https://www.uipath.com/newsroom/uipath-launches-first-enterprise-grade-platform-for-agentic-automation
- S23. Pykero, "n8n vs custom code for AI automation", 2026-10-25 (agency). https://dev.to/pykero/n8n-vs-custom-code-for-ai-automation-what-to-buy-what-to-build-5c8j
- S24. Coverge, "n8n AI agents: building, limitations…", 2026-04-14 (vendor). https://coverge.ai/blog/n8n-ai-agents ; Bitontree comparison, undated: https://www.bitontree.com/n8n-vs-zapier-vs-make-vs-custom
- S25. Orange ITS, "n8n AI Agents: The Honest Pros and Cons", 2026-05-23 (agency). https://www.orange-its.ch/en/insights/n8n-ai-agents-pros-cons
- S26. SolvSpot, "When to build vs buy AI automation", 2026-04-29 (agency). https://solvspot.com/blog/build-vs-buy-ai-automation
- S27. CBS, "Digitalisering en kenniseconomie 2025", ch. 3, 2026-02-10. https://www.cbs.nl/nl-nl/longread/rapportages/2026/digitalisering-en-kenniseconomie-2025/3-ict-gebruik-bij-bedrijven ; S27b CBS, "Gebruik van AI-technologie door Nederlandse microbedrijven", 2026: https://www.cbs.nl/nl-nl/longread/rapportages/2026/gebruik-van-ai-technologie-door-nederlandse-microbedrijven?onepage=true ; S27c CBS news, 2025-12-12: https://www.cbs.nl/nl-nl/nieuws/2025/50/bedrijven-gebruiken-ai-vaakst-voor-marketing-of-verkoop
- S28. EU AI Act Service Desk timeline, undated. https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act ; S28b European Commission AI Act page, 2026-10-19: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai ; S28c European Parliament press release, 2026-06-16: https://www.europarl.europa.eu/news/en/press-room/20260611IPR45207/ai-act-ep-approves-simplification-measures-and-nudifier-app-ban
- S29. Autoriteit Persoonsgegevens, "Meaningful human intervention in algorithmic decision-making", 2025-07-23. https://www.autoriteitpersoonsgegevens.nl/en/current/meaningful-human-intervention-in-algorithmic-decision-making
- S30. Autoriteit Persoonsgegevens, "Hulpmiddel generatieve AI en de AVG", July 2026. https://www.autoriteitpersoonsgegevens.nl/system/files?file=2026-07%2FHulpmiddel+generatieve+AI+en+de+AVG_Autoriteit+Persoonsgegevens.pdf
- S31. Autoriteit Persoonsgegevens, "Automatisch besluit", undated. https://www.autoriteitpersoonsgegevens.nl/themas/algoritmes-ai/algoritmes-uitgelegd/automatisch-besluit
- S32. Hamel Husain, "A Field Guide to Rapidly Improving AI Products", 2025-03-24. https://hamel.dev/blog/posts/field-guide/ ; S32b Husain and Shankar, error analysis FAQ, 2025-06-27, updated 2026-09-01: https://hamel.dev/blog/posts/evals-faq/why-is-error-analysis-so-important-in-llm-evals-and-how-is-it-performed.html
- S33. Simon Willison, "The lethal trifecta for AI agents", 2025-06-16. https://simonwillison.net/2025/jun/16/the-lethal-trifecta/
- S34. Avery Pennarun, "AI coding tools unlock small software", Fast Company, 2026-08-18. https://www.fastcompany.com/91590966/ai-coding-tools-unlock-small-software
- S35. Thoughtworks (Chris Ford), "Cheaper code won't kill software development", undated. https://www.thoughtworks.com/insights/articles/cheaper-code-wont-kill-software-development
- S36. Martin Alderson, "Has the cost of building software just dropped 90%?", 2025-12-08. https://martinalderson.com/posts/has-the-cost-of-software-just-dropped-90-percent/
- S37. University of Utah, "The Customer Is the Builder", arXiv preprint, October 2026. https://arxiv.org/html/2610.30307
- S38. "Jevons for Software", personal research vault, undated (low authority). https://chrisaacson69.github.io/Vault/research/economics/jevons-software-demand.html
- S39. TuniCyberLabs, "The Year-Two Bill of AI-Generated Internal Tools", 2026-08-17. https://tunicyberlabs.com/en/blog/year-two-bill-ai-generated-internal-tools-maintenance
- S40. Predictap, "The Ongoing Maintenance Trap of Internal Builds", 2026-07-23 (vendor). https://blog.predictap.com/the-ongoing-maintenance-trap-of-internal-builds
- S41. Ardoq, "The 100x Problem", quoting Aaron Levie, 2026-07-28 (vendor). https://www.ardoq.com/blog/governing-ai-generated-software
- S42. Retool, "AI build vs buy report 2026", 2026-02-17 (vendor). https://retool.com/blog/ai-build-vs-buy-report-2026
- S43. METR, early-2025 study, 2025-07-10: https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ ; update, 2026-02-24: https://metr.org/blog/2026-02-24-uplift-update/
- S44. Google DORA, 2025 report announcement, 2025-09-23. https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report
- S45. Stack Overflow Developer Survey 2025, AI section. https://survey.stackoverflow.co/2025/ai
- S46. Veracode, 2025 GenAI Code Security Report (July 2025, October 2025 update). https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/
- S47. Mercor, "SWE-Marathon-Ext", 2026-08-11. https://www.mercor.com/blog/swe-marathon-ext-can-ai-build-a-whole-saas-product/
- S48. Hacker News post, Brightbean Studio build report, undated (2026). https://news.ycombinator.com/item?id=47749688
- S49. Monstarlab Engineering, "Agentic Coding in a Consultancy", 2026-10-20. https://engineering.monstar-lab.com/en/post/2026/10/20/Agentic-Coding-in-a-Consultancy/
- S50. PACE-Bench, arXiv preprint, 2026-10-19. https://arxiv.org/html/2610.26394
- S51. Anthropic, "Equipping agents for the real world with Agent Skills", 2025-10-16: https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills ; agentskills.io: https://agentskills.io/home ; S51c "Donating Agent Skills to the AAIF", 2026-10-22: https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation
- S52. Linux Foundation, AAIF formation, 2025-12-09. https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation ; OpenAI: https://openai.com/index/agentic-ai-foundation/
- S53. Claude Code docs, hooks guide. https://code.claude.com/docs/en/hooks-guide
- S54. Anthropic, "Making Claude Code more secure and autonomous with sandboxing", 2025-10-20. https://www.anthropic.com/engineering/claude-code-sandboxing ; "How we contain Claude across products", 2026-05-25: https://www.anthropic.com/engineering/how-we-contain-claude
- S55. GitHub Changelog, Copilot coding agent GA, 2025-09-25. https://github.blog/changelog/2025-09-25-copilot-coding-agent-is-now-generally-available/ ; S55b troubleshooting docs: https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/troubleshoot-coding-agent
- S56. OpenAI (Ryan Lopopolo), "Harness engineering", 2026-02-11. https://openai.com/index/harness-engineering/
- S57. Birgitta Böckeler, "Harness engineering for coding agent users", martinfowler.com, 2026-04-02. https://martinfowler.com/articles/harness-engineering.html
- S58. Birgitta Böckeler, "Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl", 2025-10-15. https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html
- S59. Thoughtworks, Technology Radar Vol. 34 press release, 2026-04-15. https://www.thoughtworks.com/about-us/news/2026/combat-ai-cognitive-debt-radar-v34 ; S59b Tools quadrant: https://www.thoughtworks.com/radar/tools ; S59c Techniques quadrant: https://www.thoughtworks.com/en-us/radar/techniques/summary/team-of-coding-agents
- S60. Anthropic, "Bringing Code Review to Claude Code", 2026-03-09: https://claude.com/resources/articles/code-review ; GA, 2026-10-15: https://claude.com/resources/articles/code-review-is-now-generally-available ; S60c docs: https://code.claude.com/docs/en/code-review
- S61. Greptile benchmark, July 2025 (vendor): https://www.greptile.com/ai-code-review-evaluation ; Augment benchmark, 2025-12-11 (vendor): https://www.augmentcode.com/blog/we-benchmarked-7-ai-code-review-tools-on-real-world-prs-here-are-the-results ; S61c Git AutoReview overview, 2026-04-14 (vendor): https://gitautoreview.com/blog/ai-code-review-benchmark-2026 ; S61d Qiita independent test (Japanese), 2026-05-17: https://qiita.com/kenimo49/items/7699e4d2289e48521e0f
- S62. Review policy sources: S62a "Programming the Loop", ch. 8, undated: https://programmingtheloop.com/guides/programming-the-loop/review-merging-risk/ ; S62b Cortex, 2026-08-06: https://www.cortex.io/post/risk-based-code-review ; S62c Mews, 2026-06-05: https://developers.mews.com/code-generation-is-cheap-review-remains-costly/ ; S62d Rootly, 2026-05-20: https://rootly.com/blog/why-we-got-rid-of-our-small-pr-rule ; S62e SaaS Production, undated: https://saasproduction.com/blog/human-review-ai-code ; S62f Rewind, 2026-06-01: https://rewind.com/blog/ai-approve-pull-requests-safely/ ; S62g Markus Eisele, O'Reilly Radar, 2026-10-16: https://www.oreilly.com/radar/code-review-after-code-gets-cheap/
- S63. Anthropic, "2026 Agentic Coding Trends Report", 2026-01-21 (vendor). https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf
- S64. Langfuse docs, OpenTelemetry integration, undated. https://langfuse.com/docs/opentelemetry/example-opentelemetry-collector
- S65. promptfoo docs, GitHub Action and CI/CD, undated. https://www.promptfoo.dev/docs/integrations/github-action/ ; https://github.com/promptfoo/promptfoo-action
- S66. Vercel docs, Vercel for GitHub and Environments, 2026-09-17. https://vercel.com/docs/git/vercel-for-github ; https://vercel.com/docs/deployments/environments
- S67. Thoughtworks, "Engineering the harness", 2026-09-29. https://www.thoughtworks.com/insights/blog/architecture/engineering-the-harness-a-practical-pattern-for-reliable-coding-agents

### Not verified

- Provider vs deployer role under the AI Act for a freelancer who builds a system a client runs.
- Whether invoice extraction, email routing and quote intake fall outside Annex III in every case. This is my reading.
- Current status of Kiro, Spec Kit and Tessl after October 2025.
- Dutch AI adoption figures for agriculture (outside the CBS survey scope).
- Bitontree's claim that Zapier, Make and n8n all ship first-class agents and MCP as of mid-2026 (one vendor source).
- The claim that merge rates follow ticket clarity (one practitioner blog, not in the source list).
- All vendor case-study figures (S7–S13, S18) are self-reported.
