/* =========================================================================
   Gatito Labs - Careers & Open Roles Configuration
   =========================================================================
   Edit this file to add, update, pause, hide, or remove job listings on
   careers.html. No build step required - save and push to publish.

   QUICK START:
   1. Add an object to the `roles` array below.
   2. Every field except `title` is optional - leave out anything you don't
      need and the layout adapts cleanly.
   3. Want to draft a role without publishing it? Set `hidden: true`.
   4. Want to preview sample layouts? Open `careers.html?preview=demo`.
   ========================================================================= */

window.GATITO_CAREERS = {
    // Default inbox for applications (can be overridden per role).
    email: "careers@gatito.tech",

    // Default subject line for email applications.
    // Supported placeholders: {title}, {id}, {department}, {location}, {type}
    subjectTemplate: "[Application] {title}",

    // Default starter message pre-filled when a candidate clicks "Apply via email".
    // Set to "" if you prefer a blank email body.
    defaultBodyTemplate: [
        "Hi Gatito Labs team,",
        "",
        "I'd love to apply for the {title} role.",
        "",
        "A little about me:",
        "- ",
        "",
        "Links to my work (portfolio, GitHub, projects, or resume):",
        "- ",
        "",
        "Timezone & availability:",
        "- ",
    ].join("\n"),

    // Automatically show search & department/type filters when open roles exist.
    showFilters: true,

    // Copy shown when there are no visible open roles in `roles`.
    emptyState: {
        badge: "Always open to introductions",
        heading: "No specific roles listed right now.",
        body: "We're a small, independent team and open new positions as our products grow. If you care about free, privacy-first software and want to help build it, we'd still love to hear from you.",
        ctaLabel: "Send an open application",
        subject: "[General Application] Saying hello",
    },

    // Spontaneous / general application settings (used in the bottom CTA & helper).
    generalApplication: {
        email: "careers@gatito.tech",
        subject: "[General Application] Your Name - Area of Interest",
        bodyTemplate: [
            "Hi Gatito Labs team,",
            "",
            "I don't see an exact open role listed, but I'd love to introduce myself.",
            "",
            "What I love working on:",
            "- ",
            "",
            "Links to my work (GitHub, portfolio, projects, or resume):",
            "- ",
            "",
            "How I think I could help Gatito Labs:",
            "- ",
        ].join("\n"),
    },

    /* ---------------------------------------------------------------------
       OPEN ROLES
       Add your job objects inside this array. Order here = display order
       (featured roles are gently highlighted and pinned to the top).
       --------------------------------------------------------------------- */
    roles: [
        {
            id: "quality-assurance",
            title: "Quality Assurance",
            hidden: false,
            featured: true,
            status: "open",
            statusLabel: "Open role",
            accent: "gold",
            department: "QA",
            team: "Gatita AI",
            location: "Remote (Worldwide)",
            type: "Part-time",
            compensation: "Competitive (Percentage-based)",
            experience: "Flexible",
            posted: "Nov 2026",
            deadline: "Open until filled",
            summary:
                "Help us ship polished, reliable, user-friendly releases by testing early model staging, spotting bugs, and sharpening Gatita AI and future Gatito Labs tools.",
            description: [
                "We care deeply about how software feels in your hands. You'll work directly with the founder and small team to test early builds and model staging, catch rough edges before users ever see them, and make sure every release feels snappy and respectful.",
                "No endless sprint ceremonies - we write clear notes, ship iteratively, and stay close to the everyday people using our products.",
            ],
            tags: [
                { label: "Quality", tone: "gold" },
                { label: "Model Staging", tone: "sage" },
                "Collaborative",
                "Accessibility",
            ],
            meta: [
                { label: "Pay structure", value: "Competitive, percentage-based" },
                { label: "Schedule", value: "Asynchronous, flexible" },
                { label: "Focus", value: "Early model staging & release QA" },
            ],
            responsibilities: [
                "Test early model staging builds, UI flows, and edge cases across Gatita AI and upcoming Gatito Labs tools.",
                "Spot, reproduce, and write clear reports on bugs, regressions, inconsistencies, and accessibility issues.",
                "Collaborate directly with the founder and small team to verify fixes and refine user-facing polish before launch.",
                "Help shape the roadmap for future releases with practical feedback on reliability and user experience.",
            ],
            requirements: [
                "Experience with quality assurance, software or AI testing, or careful UX evaluation.",
                "Familiarity with web technologies, browsers, and writing clear, reproducible bug reports.",
                "Strong attention to detail and genuine care for polished, user-friendly software.",
            ],
            niceToHave: [
                "Experience with accessibility standards (WCAG) and browser testing tools.",
                "Familiarity with evaluating AI outputs, prompt edge cases, or staging environments.",
                "Previous experience working asynchronously on a small, independent team.",
            ],
            benefits: [
                "Competitive, percentage-based compensation tied directly to what we grow together.",
                "Work from anywhere on a flexible, async-friendly schedule.",
                "Direct influence over product quality with zero investor pressure or ad-tech compromises.",
            ],
            customSections: [
                {
                    heading: "Your first 30 days",
                    type: "steps",
                    items: [
                        "Get familiar with our stack, early model staging workflow, and self-hosted setup.",
                        "Run end-to-end QA on an upcoming Gatita AI release and log actionable improvements.",
                        "Help establish lightweight, repeatable quality checks for future launches.",
                    ],
                },
                {
                    heading: "How we hire for this role",
                    type: "text",
                    body: "No whiteboard trivia or trick exams. After reviewing your email, we'll have a relaxed chat and walk through a short, real-world testing exercise.",
                },
            ],
            application: {
                email: "careers@gatito.tech",
                subject: "[Application] Quality Assurance - Your Name",
                prompt:
                    "Send a short note on what caught your eye, your background in QA or testing, and examples of bug reports, products you've tested, or projects you've helped polish.",
                attachmentsNote:
                    "Resume optional - sharp observation and clear writing carry the most weight.",
                ctaLabel: "Apply for this role",
            },
        },

        {
            id: "community-lead",
            title: "Community Lead",
            hidden: false,
            featured: false,
            status: "open",
            statusLabel: "Open role",
            accent: "sky",
            department: "Community",
            team: "Gatita AI & Gatita Bote",
            location: "Remote (Worldwide)",
            type: "Part-time",
            compensation: "Competitive (Percentage-based)",
            experience: "Flexible",
            posted: "Nov 2026",
            deadline: "Open until filled",
            summary:
                "Nurture a welcoming, safe, and active community around Gatito Labs - keeping users heard, spaces healthy, and feedback flowing straight back into our products.",
            description: [
                "Gatito Labs is built by normal internet users for normal internet users, and our community is at the center of that promise. You'll lead our day-to-day community spaces across Gatita AI, Gatita Bote, and future launches so people always feel welcomed, respected, and genuinely heard.",
                "You won't be reading from corporate scripts. You'll speak plainly, keep spaces safe from spam and abuse, and act as the bridge between our users and the team building the software.",
            ],
            tags: [
                { label: "Community", tone: "sky" },
                { label: "Discord & Safety", tone: "sage" },
                "User Advocacy",
                "Writing",
            ],
            meta: [
                { label: "Pay structure", value: "Competitive, percentage-based" },
                { label: "Schedule", value: "Flexible, async-friendly" },
                { label: "Scope", value: "Community growth, support & safety" },
            ],
            responsibilities: [
                "Own the day-to-day tone, health, and warmth of Gatito Labs' community channels (Discord, feedback hubs, and announcements).",
                "Answer user questions plainly, triage recurring issues, and turn common questions into clear guides or FAQs.",
                "Gather structured product feedback and feature ideas from real users and bring them directly into roadmap discussions.",
                "Set and uphold fair, human-centered moderation standards - and help inform safety features in Gatita Bote.",
                "Coordinate community events, beta tester groups, and release announcements alongside the founder.",
            ],
            requirements: [
                "Proven experience leading, growing, or moderating an online community (Discord, forums, or open-source/product communities).",
                "Warm, plainspoken written communication and calm judgment in tricky or high-emotion situations.",
                "Self-directed reliability and a genuine alignment with privacy-first, non-extractive software.",
            ],
            niceToHave: [
                "Experience managing Discord bots, verification flows, or anti-abuse tooling.",
                "Comfort writing release notes, lightweight documentation, or community spotlights.",
                "Interest in AI tools and helping newcomers understand how to get the most out of them.",
            ],
            benefits: [
                "Competitive, percentage-based compensation that grows alongside Gatito Labs.",
                "Work remotely on a flexible schedule with direct access to the founder and product roadmap.",
                "Freedom to build a genuinely human community without manipulative growth hacks.",
            ],
            customSections: [
                {
                    heading: "Your first 30 days",
                    type: "steps",
                    items: [
                        "Get to know our products, community members, and moderation setup.",
                        "Organize a clean feedback loop so user bugs and ideas reach the team quickly.",
                        "Lead communications for our next feature rollout and help welcome new members.",
                    ],
                },
                {
                    heading: "How we hire for this role",
                    type: "text",
                    body: "We'll read your note, look at communities or writing you've shared, and have a casual conversation about how you think about healthy online spaces.",
                },
            ],
            application: {
                email: "careers@gatito.tech",
                subject: "[Application] Community Lead - Your Name",
                prompt:
                    "Tell us about a community you've built, led, or moderated, what makes an online space feel genuinely safe and welcoming, and any relevant links or handles.",
                attachmentsNote:
                    "Resume optional - real community experience and clear, human writing matter most.",
                ctaLabel: "Apply for this role",
            },
        },

        {
            id: "marketing-manager",
            title: "Marketing Manager",
            hidden: false,
            featured: false,
            status: "open",
            statusLabel: "Open role",
            accent: "sage",
            department: "Marketing",
            team: "Gatito Labs",
            location: "Remote (Worldwide)",
            type: "Volunteer / Performance-based",
            compensation: "$0.25 per 10 likes",
            experience: "Open to anyone",
            posted: "Nov 2026",
            deadline: "Open until filled",
            summary:
                "Sign up to help spread the word about Gatito Labs across X, Instagram, and TikTok - flexible, volunteer-style, and paid at $0.25 for every 10 genuine likes.",
            description: [
                "Great independent software still needs people to find it. This is a flexible, low-commitment, volunteer-style role where you sign up to share Gatito Labs across X, Instagram, and TikTok - turning product updates and our privacy-first mission into posts, reels, and short videos people actually want to watch and share.",
                "Instead of fixed hours or corporate quotas, pay is simple and performance-based: you earn $0.25 for every 10 genuine likes on your posts. No hype, no rage-bait, and no creepy ad tracking - just honest humans sharing tools they believe in.",
            ],
            tags: [
                { label: "$0.25 / 10 likes", tone: "gold" },
                { label: "X", tone: "sage" },
                { label: "Instagram", tone: "rose" },
                { label: "TikTok", tone: "sky" },
            ],
            meta: [
                { label: "Pay structure", value: "$0.25 per 10 genuine likes" },
                { label: "Commitment", value: "Volunteer-style, no set hours" },
                { label: "Channels", value: "X, Instagram & TikTok" },
            ],
            responsibilities: [
                "Create and share engaging, plainspoken posts, threads, reels, and short-form videos on X, Instagram, and TikTok for Gatita Ask, Gatita Studio, Gatita AI API, and Gatita Bote.",
                "Highlight real features, quick demos, and privacy-first wins that resonate organically with everyday users.",
                "Keep the tone authentic, approachable, and aligned with Gatito Labs' independent ethos.",
            ],
            requirements: [
                "Clear, natural, human voice with zero corporate jargon.",
                "Familiarity with X, Instagram, or TikTok and what makes posts or short videos genuinely interesting to real people.",
                "Organic engagement only - no botted, bought, or artificial likes.",
            ],
            niceToHave: [
                "Experience creating short-form videos, reels, or posts on X, Instagram, or TikTok.",
                "Comfort making quick screen-recorded demos or light graphics.",
                "Genuine interest in free, privacy-first software and AI tools.",
            ],
            benefits: [
                "Earn $0.25 for every 10 genuine likes your approved posts bring in - simple and transparent.",
                "Zero set hours or quotas - contribute on your own schedule from anywhere.",
                "Direct access to the team and early previews of upcoming Gatito Labs releases.",
            ],
            customSections: [
                {
                    heading: "How payouts work",
                    type: "list",
                    items: [
                        "Rate: $0.25 per 10 genuine likes on approved Gatito Labs posts across X, Instagram, and TikTok.",
                        "Organic only: likes must come from real people (no bots, engagement pods, or purchased likes).",
                        "No minimum hours: post as often or as casually as you like once you're signed up.",
                    ],
                },
                {
                    heading: "How to get started",
                    type: "steps",
                    items: [
                        "Send a quick email to sign up and share your X, Instagram, or TikTok handles.",
                        "Get synced with the team on upcoming launches and brand voice.",
                        "Start posting and earn $0.25 for every 10 genuine likes.",
                    ],
                },
            ],
            application: {
                email: "careers@gatito.tech",
                subject: "[Application] Marketing Manager - Your Name",
                prompt:
                    "Send a quick note to sign up! Include your X, Instagram, and/or TikTok handles, any posts or videos you've made before (if any), and a quick idea for a post or short video pitching Gatita Ask or Gatita Studio.",
                attachmentsNote:
                    "No resume needed - just your handles and a quick post idea.",
                ctaLabel: "Sign up for this role",
            },
        },

        {
            id: "professional-designer-ai-training",
            title: "Professional Designer (AI Training)",
            hidden: false,
            featured: true,
            status: "open",
            statusLabel: "Open role",
            accent: "rose",
            department: "AI Training",
            team: "Gatita Models",
            location: "Remote (Worldwide)",
            type: "Part-time / Contract",
            compensation: "Competitive (Percentage-based)",
            experience: "Experienced",
            posted: "Nov 2026",
            deadline: "Open until filled",
            summary:
                "Teach our AI models what great design actually looks like - curating high-craft visual exemplars, design critiques, and training datasets. (Not a website design role.)",
            description: [
                "Important note up front: this role is strictly for AI model training and design-quality data - not for designing Gatito Labs' websites or marketing pages.",
                "Most AI models produce generic, cluttered, or soulless layouts because they were never trained with strong design judgment. We're looking for an experienced, taste-driven professional designer to create original design examples, structured critiques, rubrics, and preference evaluations that directly teach Gatita's models strong typography, hierarchy, composition, color, and craft.",
            ],
            tags: [
                { label: "AI Training", tone: "rose" },
                { label: "Design Taste", tone: "gold" },
                "Data & Rubrics",
                "Not Web Design",
            ],
            meta: [
                { label: "Pay structure", value: "Competitive, percentage-based" },
                { label: "Role focus", value: "AI training data, critiques & evals (not site design)" },
                { label: "Schedule", value: "Asynchronous, output-focused" },
            ],
            responsibilities: [
                "Create original, high-craft design exemplars, visual references, and structured design specifications used directly in training and fine-tuning Gatita AI models.",
                "Review and critique model-generated designs and layouts, explaining clearly why a choice works or fails across hierarchy, spacing, typography, contrast, and usability.",
                "Build clear evaluation rubrics and human-preference rankings to benchmark and measure design quality across model iterations.",
                "Identify recurring visual failure modes in model outputs (generic aesthetics, broken alignment, poor readability) and design targeted training examples to fix them.",
                "Collaborate closely with our model researchers to translate real-world design taste into repeatable training signals.",
            ],
            requirements: [
                "Strong professional design portfolio demonstrating high visual craft, typography, layout systems, and clear aesthetic judgment (product, UI, graphic, or visual design).",
                "Ability to articulate design decisions precisely in writing - breaking down taste into concrete, teachable principles.",
                "Comfort working systematically on datasets, structured rubrics, and side-by-side output evaluations.",
                "Originality and integrity: all training examples you author must be original work you have the right to contribute.",
            ],
            niceToHave: [
                "Prior experience with RLHF, preference annotation, evaluation benchmarks, or multimodal/UI-generation AI models.",
                "Ability to inspect or express design tokens, HTML/CSS layouts, or SVG graphics cleanly (helpful, not mandatory).",
                "Deep appreciation for accessible, thoughtful design systems across multiple visual styles.",
            ],
            benefits: [
                "Competitive, percentage-based compensation directly tied to the success of what we build.",
                "Fully remote, asynchronous workflow built around deep creative focus.",
                "A rare chance to imprint real, human design standards directly into next-generation privacy-first AI models.",
            ],
            customSections: [
                {
                    heading: "What this role is (and isn't)",
                    type: "list",
                    items: [
                        "IS: Authoring original design training data, writing sharp design critiques, defining visual quality rubrics, and ranking AI model outputs.",
                        "IS NOT: Designing gatito.tech, building marketing landing pages, or doing routine agency web design.",
                    ],
                },
                {
                    heading: "Your first 30 days",
                    type: "steps",
                    items: [
                        "Audit current Gatita model outputs and catalog the biggest visual and typographic gaps.",
                        "Co-design a structured rubric for scoring layout, hierarchy, accessibility, and aesthetic craft.",
                        "Deliver your first curated batch of original training exemplars and critiques.",
                    ],
                },
                {
                    heading: "How we hire for this role",
                    type: "text",
                    body: "We'll review your portfolio and design writing first. If your eye and clarity stand out, we'll have a short chat and a small evaluation exercise critiquing sample AI outputs.",
                },
            ],
            application: {
                email: "careers@gatito.tech",
                subject: "[Application] Professional Designer (AI Training) - Your Name",
                prompt:
                    "Share a link to your design portfolio plus a brief note (a few sentences is plenty) on one common design mistake you see AI tools make today and how you'd teach a model to do better.",
                attachmentsNote:
                    "Portfolio and clear design critique matter far more than a traditional resume.",
                ctaLabel: "Apply for this role",
            },
        },
    ],
};
