# Positioning — matthijshakfoort.nl

Settled in a grilling session on 2026-10-25. This document is the input for the restructure and restyle of the site, which happen in a later session. Terms in bold are defined in [CONTEXT.md](../CONTEXT.md). Where this document and [design-brief.md](./design-brief.md) disagree, this document wins.

The research behind it is in [research/product-engineer-role.md](./research/product-engineer-role.md) and [research/software-types.md](./research/software-types.md). Both files cite their sources. The key sources are at the end of this document.

Copy in quotes is working text. It sets the direction and the register. It is not final copy.

## 1. What changes

The site moves from two pillars (AI Enablement, Fullstack Delivery) to one idea and three pillars.

The idea is the **Product Engineer**: when agents write the code, the work that is left is finding out what to build, defining what "good" means, and deciding what a human must still check. The three pillars are three ways a Buyer can get that work:

1. *I do the work* — **Hands-on Product Engineering**. Matthijs works in the team as its Product Engineer and delivers **Process Support** and **Developer Tooling**.
2. *Your team does the work* — **Forming Product Engineers**. Training, coaching and leading by example.
3. *Educating Juniors* — **Educating Juniors**. Training juniors for the work agents cannot do, and hiring the juniors who will do well at it.

Read together: me, your team, your next hires.

The old content does not disappear. The three failure modes move into pillar 2. Fifteen years of fullstack work becomes the background that makes the rest believable.

## 2. Buyer and the site's job

**Buyer**: an engineering or IT leader (CTO, VP Engineering, IT manager, team lead) at a company with in-house software or IT people, who can sign a contract. Process Support is pitched to this person as work their people do not have the capacity for. It is not pitched to an operations manager directly.

**The site's job**: bring in a few high-quality leads. Availability has grown, so the site may now generate leads, but one good lead beats ten weak ones. The page still filters. It makes the right Buyer recognise their situation and lets everyone else leave.

Many Buyers have not met the Product Engineer idea yet. So the site has to teach a little before it sells. The teaching is the filter: a Buyer who reads the Point of view and thinks "yes, that is what we are missing" is the lead the site wants.

## 3. Point of view: the Product Engineer

The **Point of view** comes directly after the hero. All three pillars rest on it.

### The argument

Agents now write most of the code, and they write it fast. That moved the bottleneck. Writing code is cheap. What is not cheap:

- finding out what users and customers actually need, by talking to them;
- writing that down as a spec an agent can build from;
- writing the gates and evals that define "good" and check it automatically;
- reviewing behaviour before code, where that is possible;
- deciding which parts of the code a human must still read, because a mistake there costs too much.

That work is the **Product Engineer** role. It is neither the classic developer nor the classic product manager. It is one person who does both halves, while agents do the typing.

The main reason the role is needed: without it, a team with agents builds the wrong thing faster. The agent cannot understand what nobody found out from the user.

Working text:

> Agents write the code now. That part got cheap. What did not get cheap is knowing what to build, deciding what "good" means, and knowing which code a person still has to read. That is the work I do, and the work I help teams learn.

### The 15+ years

Laurie Voss frames the role as a return of the 1960s systems analyst: one person who talked to the business and wrote down what the software had to do. That role later split into product manager and developer. With agents doing the typing, the two halves merge back into one job.

This gives the site its experience argument: the work that is left is old work, and Matthijs has done it for fifteen years. Name these techniques, in the background section and where they fit in the pillars:

- requirements interviews: getting a usable spec out of fuzzy input;
- domain modelling;
- deciding which tests are needed, and where the test seams go;
- judging whether something is good, and whether it is delightful.

The experience is also what keeps the advice grounded. The tools change every few months. The judgement about what to build and what to check does not.

### Naming

Use **Product Engineer** as the term, in Voss's sense. Define it in one sentence where it first appears. Two other meanings exist and the definition must rule them out:

- the startup meaning (PostHog and others): an engineer who owns product decisions but still writes most of the code;
- the Dutch industrial meaning: a mechanical or production engineer.

The Dutch page adds a bridge to roles Dutch Buyers know:

> Een senior developer die ook het werk van product owner en informatieanalist doet, terwijl agents de code schrijven.

Do not use forward deployed engineer, agent orchestrator, full stack builder, AI engineer or context engineer on the site. Each one is close but means something else (see the table in the role research).

### Outside support (for this document, not for the site)

The site names no outside people. The names date the page, and they make the thesis look borrowed. A later blog post can credit Voss and link the talk. For reference, the thesis has support from:

- Laurie Voss, "The Rise of the Product Engineer" (AI Engineer NYC, October 2026) and "We are all Product Engineers now" (September 2026). The closing advice is almost the same as the role list above: review only high-blast-radius code, delegate what is cheap to verify, put your best people's judgement into specs, rubrics and evals.
- Andrew Ng (April 2026): AI-native development needs generalists who also do product work.
- LinkedIn replaced its associate PM programme with "Full Stack Builders" (from January 2026).
- Gergely Orosz (January 2026): product-mindedness is becoming a baseline because someone must specify what AI builds.
- On review: Amazon requires senior sign-off on AI-assisted changes (March 2026). METR found that maintainers would merge only about half of agent PRs that pass the tests (March 2026). Both support "decide which code a human reads".

Against: Marty Cagan (SVPG) holds that the product manager, designer and engineer stay three roles. This does not break the thesis. A fair version is: in small and mid-size teams the PM and engineer work merges; large platforms still need specialists.

Do not repeat Voss's unverified numbers ("741% more code", the FDE salary) anywhere.

## 4. Pillar 1 — I do the work

**Hands-on Product Engineering.** Matthijs joins the team as its Product Engineer. The work produces two kinds of software.

### Process Support

**Process Support** is software that automates part of how a company or a team works. Before agents, much of it cost too much or took too long to build. Now agents write most of the code, so it pays back. The expensive part is still the work around the code: finding out what the process really needs, writing the spec, and building the checks. That is the Product Engineer's work.

The main point is software built with AI, not AI built into software. Some of it does use an LLM inside the product, for limited judgement and text comprehension. When it does, it follows **Deterministic first**:

> Plain code does everything plain code can do. The model only gets the part that needs judgement.

Process Support covers business processes and also a team's internal processes. The patch notes system in case sketch 1 is an internal one.

### Developer Tooling

**Developer Tooling** is tooling for the AI coding process: the tools that let a team spend its time on product engineering instead of programming. Examples are automated reviews, quality gates, monitoring, skills, workflows and deployments.

It is always team-specific. The research splits the field like this:

| The team should buy | Matthijs builds or sets up |
|---|---|
| The coding agent itself | Instruction files and project templates |
| A hosted AI review service | Team-specific skills for recurring work (releases, migrations, incident notes) |
| Background agent hosting, sandboxes | Hooks: formatting, blocked commands, protected paths |
| LLM observability | Custom linters and structural tests |
| Preview deployments | The review policy (which code a human reads) and a reviewer that applies it |
| | Eval sets and CI gates |
| | Internal MCP servers and CLIs for the team's own systems |

Developer Tooling is also how the Product Engineer role keeps working after Matthijs leaves. Pillar 2 links back to it for that reason.

### Build or buy

Part of the work is the decision between a bought tool and an in-house one. The site makes one claim here: in-house is viable in many more cases than before, because agents make small tools cheap to build. But owning a tool did not get cheaper. A tool that people depend on still needs an owner, tests and maintenance.

The site gives the Buyer a three-question rule (after Avery Pennarun):

1. Does anyone depend on it?
2. Can it change or expose important data?
3. Would work stop if it disappeared?

If the answer to all three is no, build it in-house, quickly. If the answer to any is yes, it needs a spec, checks and an owner: Product Engineer work.

### Ownership

The strongest objection to cheap in-house software is the cost in year two: maintenance, model changes, the one person who understood it leaving. The copy should answer this objection through the way the offer is written, not in a separate FAQ:

- By default the client's own people own the software after handover. A retainer is an option.
- Handover includes tests, a written spec, documented conventions and, where an LLM is involved, an eval set. That is **Dual maintainability** made concrete: the next person or agent can work in it safely.
- Deterministic first keeps the part that can drift with a model change small.

### Example engagement and CTA

> One or two days a week for three to six months. I build one process tool from the first user conversation to handover, and your people own it after that.

CTA line, pointing to the shared email: "Tell me which process eats your team's time."

## 5. Pillar 2 — Your team does the work

**Forming Product Engineers.** Training, coaching and leading by example, so that the team's own people grow into the role. It follows from pillar 1: leading by example happens while doing the job.

### The three failure modes

The old Point of view moves here as supporting material. All three still hold. Two are wider than before.

1. **Shared understanding** — now the whole chain user → spec → agent. The old scenario (the agent builds a good thing, just not what you had in mind) stays, but it starts earlier: the developer never found out what the user needed, so no prompt could have fixed it. On the page: *Getting the agent to understand*.
2. **AFK or human-in-the-loop** — now also covers review after the run. The old scenario (two hours lost to a wrong turn, or an hour spent approving a task the agent would have done right) stays. The new half: some teams review every line an agent writes and drown; others review nothing and ship a disaster. The answer is deciding by blast radius which code a human reads. On the page: *AFK or Human-in-the-loop?*.
3. **Dual maintainability** — unchanged. Code that both people and agents can keep working in, with conventions written down as they appear. On the page: *Maintainability for humans and agents*.

The current page text for these three can be reused, with the widened scenarios added.

### What a team lead also needs to hear

Not every developer wants this role. Some want to stay specialists, and a team still needs them. Part of the coaching is helping the team lead decide who moves into the role and who stays where they are. The research flags this as a real worry for leaders; one honest sentence about it builds trust.

### Example engagement and CTA

> One or two days a week with one team for three months. First I do the work while they watch, then they do it while I coach.

CTA line: "Tell me about your team and how it uses agents now."

## 6. Pillar 3 — Educating Juniors

**Educating Juniors.** The most contrarian pillar, and the one that signals foresight: it names a problem many teams have only just started to feel.

### The argument

For decades, juniors learned by writing code from strictly defined tickets, and by having their code reviewed. Agents now do exactly that work. Training juniors that way trains them for the job agents already do.

Juniors should start with the work agents cannot do: talking to users and customers, writing specs, choosing test seams, judging blast radius. That is the same work a senior Product Engineer does. The junior path and the senior role mirror each other.

They do not skip code. They read and run code from day one, through the spec they wrote and the tests that check it. The goal is that they become very good at spotting problems in code without first having to be good at writing it. Hand-coding skills for the critical parts come later.

### Two Buyer pains, in this order

1. "We stopped hiring juniors. Where do our seniors come from in five years?" This is the main one. It opens the hiring offer.
2. "We have juniors and nothing useful to give them now that agents do the tickets."

### The offer

- Train juniors directly.
- Shape the team environment so that this way of working makes sense: what a junior's first tasks are, who they talk to, how their specs are reviewed.
- Help with hiring juniors who will do well in it.

Signals to look for when hiring:

- they ask "why" and "for whom" before "how";
- they write clearly;
- they notice when something feels wrong in a demo;
- they are comfortable talking to people who are not developers;
- they read code critically.

The interview assignment tests that work instead of coding speed: a 20-minute conversation with a "user", played by a team member; then a one-page spec and test cases; then a review of code an agent built from that spec.

### Evidence, stated honestly

Matthijs has mentored 10–20 juniors, sat on hiring panels both as the technical interviewer and as team lead, designed interview assignments and run onboarding programmes. Most of that was before agents. Recently Matthijs took a few juniors along the Product Engineer route, with promising early results. The site says exactly that and no more. No "proven programme".

> I have mentored somewhere between ten and twenty juniors. Recently I took a few of them along this route instead of the old one. The early results are promising.

### Example engagement and CTA

> Your next junior hiring round. I design the assignment and sit on the panel, then I coach the new hire one day a week through their first three months.

CTA line: "Tell me when you last hired a junior, or why you stopped."

## 7. Case sketches

**Case sketches** are short and anonymised: sector, problem, what was built, result. No client names, no logos, no testimonials. They support the Point of view; they do not replace it. Working drafts:

### 1. Patch notes (pillar 1, Process Support)

> A software company with frequent releases: about 30 developers, a release every one or two weeks. Each developer wrote patch notes for their own changes, in their own format and at their own level of quality. Someone then spent about four hours per release turning them into one list.
>
> I built a system that reviews each developer's notes and gives feedback, which the developer uses to improve them. A second part compiles the notes into a list that is either the release notes as they are, or a short step to them. It uses an LLM for the review, with as much plain code around it as possible, so the model only does what it is good at.
>
> Assembly went from about four hours to about one. The notes the developers delivered got much better. And the developers had to think about what they had actually changed, and for whom.

The last sentence is the Product Engineer idea in miniature. Keep it as the closing line.

### 2. AI coding in a development team (pillar 2)

> As software architect at a previous employer, I researched how the team could use AI coding agents well. That led to presentations, to being the person colleagues came to with questions, and to tooling: an editor workflow, ways of working with tests, and shared skills.
>
> The editor workflow is still in daily use. The skills have since been replaced by newer ones, which is how it should be: skills need constant tuning.

The second paragraph doubles as a point about Developer Tooling: it is maintained, not delivered once.

### 3. Juniors (pillar 3)

The evidence paragraph in section 6. No separate sketch is needed until there is a finished story with a result.

## 8. Background

Placed after the pillars and the case sketches, as corroboration. Built on the "the work that's left is old work" frame from section 3. Working text:

> I have built software for fifteen years, most recently as software architect, mostly in TypeScript, mostly in teams of five to fifteen. The parts of that work agents do not do — requirements interviews, domain modelling, deciding which tests a change needs, judging whether something is good and whether it is delightful — are the parts I have always cared about most. They are also what keeps me grounded when the tools change every few months.

The current background paragraph (automation of the boring parts, so developers can do the hard and creative work) still holds and can be merged in.

The capability group *Fullstack engineering* is removed. The stack appears only in the background line. No other tool or model names on the site.

## 9. Not a fit

All of these are hard lines. Only the first three appear on the site, as a short "probably not a fit if…" list near the contact block:

- fixed-price work without a discovery phase (agents made estimates less reliable, not more);
- "make my developers ten times faster" (the productivity evidence is mixed, and the site makes no multiplier promises);
- small no-code glue jobs (an operations person or a cheaper freelancer does these well).

Kept in this document only:

- autonomous agents that read untrusted input and can also act or send data out;
- EU AI Act high-risk uses (HR screening, credit scoring) unless the client is ready for the high-risk duties that apply from December 2027.

Workshop the wording when writing the copy.

## 10. Site structure

- **Home page**: hero → Point of view (short) → three pillars (short, each with its CTA line) → case sketches → background → not a fit → contact.
- **One deeper page per pillar**, with the full argument, the example engagement and the related case sketch. The Point of view may get its own page too if the short form on the home page does not hold the teaching.
- **Blog**: wanted later, on this site or linked from it. Out of scope here, but the structure must leave room for it.

Consequence: four or five pages in two languages, plus a blog later. [ADR 0001](./adr/0001-two-static-pages-for-language.md) accepted duplicated markup "at one page" and not "at ten". This structure probably needs the build step that ADR names as the escape hatch. Decide that, and record it as a new ADR, in the implementation session. The language decisions (two real URLs per page, the redirect on `/` only, an explicit choice always wins) stay.

Both languages stay. The Dutch page keeps *je*, the English terms where the earlier Dutch revision kept them, and adds the Product Engineer bridge sentence.

## 11. Tone of voice

- Plain first person. "I", never "we". The mark is a company; the prose is a person.
- Sober. Especially for a Dutch audience, nothing flashy and no overpromising. Under-claim and let the specifics carry the weight. "Promising early results" is better than "proven".
- Explain before selling. The idea is new to many Buyers. Short concrete scenarios teach better than definitions, as the current failure-mode blocks do.
- Short declarative sentences, concrete nouns, no adjectives doing sales work. No hype words, no multipliers, no statistics the site cannot source.
- A little edge stays, but it comes from clear claims, not from provocation. "Training juniors on tickets trains them for the job agents already do" is edge enough.
- No tool, model or vendor names, and no outside names. Both date the page.

## 12. Visual direction

Keep the identity. It is two months old, and changing it again would weaken it:

- the Codecraft logo as the primary mark, the person secondary;
- dark monochrome palette, warm off-white on near-black;
- system font stacks, with mono for labels, section markers and the background line;
- the Tetris background;
- no webfonts and no external requests.

The refresh is in the layout, so that it carries several pages and three pillars. Possible new elements, if they stay in this direction:

- a simple shared layout for the pillar pages, with a mono label marking each pillar (01 / 02 / 03), so that the "me, your team, your next hires" sequence is visible;
- a distinct, quiet treatment for case sketches (for example a mono header line with sector, size and result) so that they read as evidence, not as marketing;
- at most one accent colour, used only for calls to action.

## 13. Calls to action and contact

- One CTA: email `codecraft@matthijshakfoort.nl`, with a short prompt that asks for context: "Tell me about your team, the problem and your timeline." Asking for context filters on its own.
- Each pillar has its own CTA line (sections 4–6) that points to the same email.
- LinkedIn stays as the secondary contact.
- No booking link. It brings more leads of lower quality.
- No availability line and no dates. A stale date does damage.
- Location line in the contact block: "Based in the Arnhem, Apeldoorn, Deventer region. Remote anywhere; on site or hybrid in the east of the Netherlands."
- KvK number and trading name stay with the contact details, as now.

## 14. For the implementation session

- Write the final copy from the working texts above, English first, then Dutch rewritten by Matthijs.
- Decide on the build step and record the ADR (section 10).
- Update the meta description and page title. They still describe AI Enablement.
- Check every claim on the site against this document. Anything not here comes from Matthijs, never invented.

## Key sources

Full lists, with dates and unverified items marked, are in the two research files.

- Laurie Voss, "AI Writes the Code. So What's Left for Engineers?" (AI Engineer NYC, 2026-10-14). https://www.youtube.com/watch?v=kspZP5BgkEU
- Laurie Voss, "We are all Product Engineers now", 2026-09-14. https://seldo.com/posts/we-are-all-product-engineers-now/
- Andrew Ng, "AI-Native Software Development Needs Generalists", The Batch, 2026-04-17. https://www.deeplearning.ai/the-batch/ai-native-software-development-needs-generalists
- Lenny's Newsletter, "Why LinkedIn is replacing PMs with AI-powered 'full-stack builders'", 2025-12-04. https://www.lennysnewsletter.com/p/why-linkedin-is-replacing-pms
- Gergely Orosz, "When AI writes almost all code, what happens to software engineering?", 2026-01-06. https://newsletter.pragmaticengineer.com/p/when-ai-writes-almost-all-code-what
- Marty Cagan, "A Vision For Product Teams", SVPG, 2025-02-25. https://www.svpg.com/a-vision-for-product-teams/
- The Decoder, Amazon senior sign-off on AI-generated code, 2026-03-10. https://the-decoder.com/amazon-makes-senior-engineers-the-human-filter-for-ai-generated-code-after-a-series-of-outages/
- METR, "Many SWE-bench-Passing PRs Would Not Be Merged into Main", 2026-03-10. https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/
- IBM Think, "The bottom rung returns as AI reshapes entry-level jobs", 2026-03-02. https://www.ibm.com/think/news/entry-level-roles-get-reset-ai
- DORA, "State of AI-assisted Software Development 2025". https://dora.dev/research/2025/dora-report/
- Avery Pennarun, "AI coding tools unlock small software", Fast Company, 2026-08-18. https://www.fastcompany.com/91590966/ai-coding-tools-unlock-small-software
- Thoughtworks (Chris Ford), "Cheaper code won't kill software development". https://www.thoughtworks.com/insights/articles/cheaper-code-wont-kill-software-development
- Birgitta Böckeler, "Harness engineering for coding agent users", 2026-04-02. https://martinfowler.com/articles/harness-engineering.html
- METR, developer productivity study 2025 and update 2026. https://metr.org/blog/2026-02-24-uplift-update/
