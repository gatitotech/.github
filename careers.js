(() => {
    "use strict";

    const DEFAULT_CONFIG = {
        email: "careers@gatito.tech",
        subjectTemplate: "[Application] {title}",
        defaultBodyTemplate:
            "Hi Gatito Labs team,\n\nI'd love to apply for the {title} role.\n\nA little about me:\n- \n\nLinks to my work:\n- \n",
        showFilters: true,
        emptyState: {
            badge: "Always open to introductions",
            heading: "No specific roles listed right now.",
            body: "We're a small, independent team and open new positions as our products grow. If you care about free, privacy-first software and want to help build it, we'd still love to hear from you.",
            ctaLabel: "Send an open application",
            subject: "[General Application] Saying hello",
        },
        generalApplication: {
            email: "careers@gatito.tech",
            subject: "[General Application] Your Name — Area of Interest",
            bodyTemplate:
                "Hi Gatito Labs team,\n\nI'd love to introduce myself and share how I could help Gatito Labs.\n\nWhat I work on:\n- \n\nLinks to my work:\n- \n",
        },
        roles: [],
    };

    const DEMO_ROLES = [
        {
            id: "frontend-design-engineer",
            title: "Frontend & Design Engineer",
            featured: true,
            status: "open",
            statusLabel: "Open role",
            accent: "gold",
            department: "Engineering",
            team: "Gatita AI",
            location: "Remote (Worldwide)",
            type: "Full-time",
            compensation: "$95k–$125k / yr",
            experience: "Mid–Senior",
            posted: "Nov 2026",
            deadline: "Open until filled",
            summary:
                "Craft warm, fast, accessible interfaces for Gatita AI and future Gatito Labs tools — with zero tracking scripts and zero bloat.",
            description: [
                "We care deeply about how software feels in your hands. You'll work directly with our small team to design, prototype, and ship interfaces that stay snappy, calm, and respectful.",
                "There are no endless sprint ceremonies here — we write plain notes, ship iteratively, and listen closely to the normal people using our apps every day.",
            ],
            tags: [
                { label: "HTML / CSS / JS", tone: "gold" },
                { label: "UI Motion", tone: "sage" },
                "Accessibility",
                "Privacy-first",
            ],
            meta: [
                { label: "Schedule", value: "Flexible, mostly async" },
                { label: "Stack", value: "Vanilla JS, CSS, Node.js" },
                { label: "Infrastructure", value: "100% renewable, self-hosted" },
            ],
            responsibilities: [
                "Build responsive, accessible web interfaces across Gatita AI and gatito.tech.",
                "Sweat the craft details: keyboard navigation, empty states, typography, and thoughtful motion.",
                "Turn real user feedback directly into cleaner flows and features.",
            ],
            requirements: [
                "Strong fundamentals in semantic HTML, modern CSS, and JavaScript or TypeScript.",
                "Links to shipped projects, repos, or prototypes that reflect genuine care for users.",
                "Clear, direct written communication and comfort owning projects end-to-end.",
            ],
            niceToHave: [
                "Experience with local-first apps, browser storage APIs, or privacy-preserving UX.",
                "Interest in typography, visual design, or lightweight Node.js tooling.",
            ],
            benefits: [
                "Work from anywhere with flexible hours and calm, async communication.",
                "Direct ownership with zero investor steering or ad-tech compromises.",
                "Equipment and learning budget for the tools that help you do your best work.",
            ],
            customSections: [
                {
                    heading: "Your first 30 days",
                    type: "steps",
                    items: [
                        "Get to know the codebase, design system, and self-hosted workflow.",
                        "Ship your first visible improvement to Gatita AI.",
                        "Help shape the design direction for what we're building next.",
                    ],
                },
                {
                    heading: "How we interview",
                    type: "text",
                    body: "No whiteboard trivia or trick algorithms. After reviewing your email and links, we'll have a casual conversation and a short, paid real-world pairing or project.",
                },
            ],
            application: {
                subject: "[Application] Frontend & Design Engineer — Your Name",
                prompt:
                    "Tell us briefly why Gatito Labs resonates with you, and share 2–3 links to interfaces, sites, or repos you're proud of.",
                attachmentsNote:
                    "Resume optional — real work and thoughtful writing matter most.",
                ctaLabel: "Apply for this role",
            },
        },
        {
            id: "systems-infrastructure-engineer",
            title: "Systems & Self-Hosted Infrastructure Engineer",
            status: "urgent",
            statusLabel: "Priority",
            accent: "sage",
            department: "Infrastructure",
            team: "Core Stack",
            location: "Remote (US / EU overlap)",
            type: "Contract",
            compensation: "$70–$95 / hr",
            experience: "Senior",
            posted: "Nov 2026",
            summary:
                "Keep our zero-emissions, cloud-free hardware fast, resilient, and locked down tight.",
            description:
                "We don't rent from hyperscalers. Everything Gatito Labs runs lives on renewable-powered infrastructure we control directly. We're looking for someone who loves Linux, networking, and clean observability.",
            tags: [
                { label: "Linux & Networking", tone: "sage" },
                { label: "Security", tone: "gold" },
                "Self-hosted",
                "Zero emissions",
            ],
            meta: [
                { label: "Commitment", value: "15–25 hrs / week" },
                { label: "Focus", value: "Hardening, uptime, inference hosting" },
            ],
            responsibilities: [
                "Harden routers, firewalls, reverse proxies, and self-hosted services.",
                "Build straightforward, privacy-respecting uptime monitoring and alerting.",
                "Improve deployment speed and disaster recovery without unnecessary complexity.",
            ],
            requirements: [
                "Hands-on experience running bare-metal Linux servers, DNS, TLS, and firewalls.",
                "A calm, transparent approach to security and incident response.",
            ],
            customSections: [
                {
                    heading: "What we value here",
                    type: "list",
                    items: [
                        "Boring, reliable setups over hype-driven complexity.",
                        "Zero user telemetry — monitoring system health without spying on people.",
                    ],
                },
            ],
            application: {
                subject: "[Application] Systems & Infrastructure Engineer — Your Name",
                prompt:
                    "Share a short overview of a self-hosted or Linux setup you've built or rescued, plus your availability.",
            },
        },
        {
            id: "community-safety-lead",
            title: "Community & Trust Lead",
            status: "closing-soon",
            statusLabel: "Closing soon",
            accent: "sky",
            department: "Community",
            team: "Gatita Bote & Gatita",
            location: "Remote (Worldwide)",
            type: "Part-time",
            compensation: "Paid stipend / Part-time",
            experience: "Any level",
            posted: "Nov 2026",
            deadline: "Dec 15, 2026",
            summary:
                "Help keep our Discord and user communities welcoming, safe, and heard — and shape Gatita Bote's moderation tools.",
            tags: [
                { label: "Discord", tone: "sky" },
                { label: "Safety", tone: "rose" },
                "Documentation",
            ],
            responsibilities: [
                "Support users across our community spaces with warmth and plainspoken answers.",
                "Turn recurring user questions into readable guides and product improvements.",
                "Collaborate on Gatita Bote's anti-abuse and community safety features.",
            ],
            requirements: [
                "Experience moderating or nurturing healthy online communities.",
                "Kind, clear writing and strong judgment under pressure.",
            ],
            application: {
                subject: "[Application] Community & Trust Lead — Your Name",
                prompt:
                    "Tell us about a community you've helped grow or moderate and what makes a space feel genuinely safe.",
            },
        },
    ];

    const STATUS_META = {
        open: { label: "Open", tone: "sage", closed: false },
        urgent: { label: "Priority", tone: "gold", closed: false },
        "closing-soon": { label: "Closing soon", tone: "rose", closed: false },
        paused: { label: "Paused", tone: "muted", closed: true },
        filled: { label: "Filled", tone: "muted", closed: true },
    };

    const VALID_ACCENTS = new Set(["gold", "sage", "sky", "rose"]);
    const VALID_TONES = new Set(["gold", "sage", "sky", "rose"]);

    const ICONS = {
        arrowRight:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
        arrowUpRight:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
        chevronDown:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
        mapPin:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6-5.5-6-11a6 6 0 1 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/></svg>',
        briefcase:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
        coins:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M14.5 9.2c-.5-.8-1.4-1.2-2.5-1.2-1.5 0-2.6.8-2.6 2s1.1 1.7 2.7 2c1.6.3 2.7.9 2.7 2.1s-1.2 2-2.8 2c-1.2 0-2.2-.5-2.7-1.3M12 6.5v11"/></svg>',
        clock:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
        spark:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 4.8L19 9.7l-5.1 1.9L12 16.5l-1.9-4.9L5 9.7l5.1-1.9L12 3z"/></svg>',
        copy:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="12" height="12" rx="2.2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
        link:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 4.93"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L13 19.07"/></svg>',
        mail:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
        check:
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 13 4 4L19 7"/></svg>',
    };

    const rawConfig = window.GATITO_CAREERS || {};
    const config = {
        ...DEFAULT_CONFIG,
        ...rawConfig,
        emptyState: { ...DEFAULT_CONFIG.emptyState, ...(rawConfig.emptyState || {}) },
        generalApplication: {
            ...DEFAULT_CONFIG.generalApplication,
            ...(rawConfig.generalApplication || {}),
        },
    };

    const params = new URLSearchParams(window.location.search);
    const isDemoPreview =
        params.get("preview") === "demo" || params.get("demo") === "1";

    /* ---------------------------------------------------------------------
       Helpers
       --------------------------------------------------------------------- */
    const el = (tag, attrs = {}, children = []) => {
        const node = document.createElement(tag);
        for (const [k, v] of Object.entries(attrs)) {
            if (v === undefined || v === null || v === false) continue;
            if (k === "className") node.className = v;
            else if (k === "text") node.textContent = v;
            else if (k === "html") node.innerHTML = v;
            else if (k === "style" && typeof v === "object") Object.assign(node.style, v);
            else if (k.startsWith("on") && typeof v === "function") {
                node.addEventListener(k.slice(2).toLowerCase(), v);
            } else {
                node.setAttribute(k, String(v));
            }
        }
        const list = Array.isArray(children) ? children : [children];
        for (const child of list) {
            if (child === null || child === undefined || child === false) continue;
            node.appendChild(
                typeof child === "string" ? document.createTextNode(child) : child
            );
        }
        return node;
    };

    const iconSpan = (name, className = "job-icon-svg") =>
        el("span", { className, html: ICONS[name] || "", "aria-hidden": "true" });

    const slugify = (str, fallback) => {
        const clean = String(str || "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        return clean || fallback;
    };

    const formatTemplate = (template, vars) =>
        String(template || "").replace(/\{(\w+)\}/g, (_, key) =>
            vars[key] !== undefined && vars[key] !== null ? String(vars[key]) : ""
        );

    const buildMailto = (email, subject, body) => {
        const parts = [];
        if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
        if (body) parts.push(`body=${encodeURIComponent(body)}`);
        return `mailto:${email}${parts.length ? `?${parts.join("&")}` : ""}`;
    };

    const isSafeExternalUrl = (url) => {
        if (typeof url !== "string") return false;
        const trimmed = url.trim();
        return /^(https?:\/\/|mailto:)/i.test(trimmed);
    };

    const announce = (message) => {
        const live = document.getElementById("careersLiveRegion");
        if (!live) return;
        live.textContent = "";
        requestAnimationFrame(() => {
            live.textContent = message;
        });
    };

    const copyText = async (text, button, successLabel = "Copied!") => {
        const labelNode = button.querySelector(".copy-label") || button;
        const originalText = labelNode.textContent;
        let ok = false;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                ok = true;
            }
        } catch (_) {
            ok = false;
        }
        if (!ok) {
            try {
                const ta = document.createElement("textarea");
                ta.value = text;
                ta.setAttribute("readonly", "");
                ta.style.position = "fixed";
                ta.style.opacity = "0";
                document.body.appendChild(ta);
                ta.select();
                ok = document.execCommand("copy");
                document.body.removeChild(ta);
            } catch (_) {
                ok = false;
            }
        }

        if (ok) {
            button.classList.add("is-copied");
            labelNode.textContent = successLabel;
            announce(`${successLabel} (${text})`);
            window.setTimeout(() => {
                button.classList.remove("is-copied");
                labelNode.textContent = originalText;
            }, 2200);
        }
    };

    /* ---------------------------------------------------------------------
       Normalize roles
       --------------------------------------------------------------------- */
    const rawRoles = isDemoPreview
        ? DEMO_ROLES
        : Array.isArray(config.roles)
          ? config.roles
          : [];

    const roles = rawRoles
        .filter((role) => role && role.title && !role.hidden)
        .map((role, index) => {
            const id = slugify(role.id || role.title, `role-${index + 1}`);
            const statusKey = String(role.status || "open").toLowerCase();
            const statusPreset = STATUS_META[statusKey] || {
                label: role.status || "Open",
                tone: "sage",
                closed: false,
            };
            const accent = VALID_ACCENTS.has(role.accent) ? role.accent : "gold";
            const tags = Array.isArray(role.tags)
                ? role.tags
                      .map((t) =>
                          typeof t === "string"
                              ? { label: t, tone: "" }
                              : t && t.label
                                ? {
                                      label: String(t.label),
                                      tone: VALID_TONES.has(t.tone) ? t.tone : "",
                                  }
                                : null
                      )
                      .filter(Boolean)
                : [];

            return {
                ...role,
                _order: index,
                id,
                accent,
                featured: Boolean(role.featured),
                statusKey,
                statusLabel: role.statusLabel || statusPreset.label,
                statusTone: statusPreset.tone,
                isClosed: statusPreset.closed,
                tags,
                application: role.application || {},
            };
        })
        .sort((a, b) => {
            if (a.featured !== b.featured) return a.featured ? -1 : 1;
            return a._order - b._order;
        });

    const openRolesCount = roles.filter((r) => !r.isClosed).length;

    /* ---------------------------------------------------------------------
       Wire global email links, copy buttons, & hero stats
       --------------------------------------------------------------------- */
    const globalEmail = config.email || DEFAULT_CONFIG.email;
    const generalCfg = config.generalApplication;
    const generalMailto = buildMailto(
        generalCfg.email || globalEmail,
        generalCfg.subject || "[General Application] Saying hello",
        generalCfg.bodyTemplate || ""
    );

    document.querySelectorAll("[data-careers-email-text]").forEach((node) => {
        node.textContent = globalEmail;
    });

    document.querySelectorAll("[data-careers-mailto]").forEach((link) => {
        link.setAttribute("href", generalMailto);
    });

    document.querySelectorAll("[data-copy-email]").forEach((btn) => {
        btn.addEventListener("click", () => {
            copyText(globalEmail, btn, "Email copied!");
        });
    });

    const openCountBadge = document.getElementById("openRolesCount");
    if (openCountBadge) {
        if (openRolesCount > 0) {
            openCountBadge.textContent =
                openRolesCount === 1 ? "1 open role" : `${openRolesCount} open roles`;
            openCountBadge.hidden = false;
        } else {
            openCountBadge.textContent = "Open to introductions";
            openCountBadge.hidden = false;
        }
    }

    const heroRoleCount = document.getElementById("heroRoleCount");
    if (heroRoleCount && openRolesCount > 0) {
        heroRoleCount.textContent = ` (${openRolesCount})`;
    }

    /* ---------------------------------------------------------------------
       Demo preview banner (only shown when ?preview=demo is in the URL)
       --------------------------------------------------------------------- */
    const demoBannerSlot = document.getElementById("demoPreviewSlot");
    if (isDemoPreview && demoBannerSlot) {
        const liveUrl = new URL(window.location.href);
        liveUrl.searchParams.delete("preview");
        liveUrl.searchParams.delete("demo");

        demoBannerSlot.appendChild(
            el("div", { className: "demo-banner", role: "status" }, [
                el("div", { className: "demo-banner-copy" }, [
                    el("span", { className: "tag tag--gold", text: "Preview mode" }),
                    el("p", {
                        text: "Showing 3 sample listings so you can test filters, accents, custom sections, and role details. Live visitors only see the roles in jobs.js.",
                    }),
                ]),
                el(
                    "a",
                    { className: "btn btn--ghost btn--sm", href: liveUrl.toString() },
                    ["Exit preview"]
                ),
            ])
        );
    }

    /* ---------------------------------------------------------------------
       State & Rendering for Open Roles
       --------------------------------------------------------------------- */
    const filtersRoot = document.getElementById("jobsFilters");
    const listRoot = document.getElementById("jobsList");
    const resultsSummary = document.getElementById("jobsResultsSummary");

    const state = {
        department: "All",
        type: "All",
        query: "",
        expanded: new Set(),
    };

    const getInitialTargetRoleId = () => {
        const qRole = params.get("role");
        if (qRole) return slugify(qRole, "");
        if (window.location.hash && window.location.hash.startsWith("#role-")) {
            return slugify(window.location.hash.slice("#role-".length), "");
        }
        return "";
    };

    const initialRoleId = getInitialTargetRoleId();
    if (initialRoleId && roles.some((r) => r.id === initialRoleId)) {
        state.expanded.add(initialRoleId);
    }

    const buildRoleMailto = (role) => {
        const app = role.application || {};
        const email = app.email || globalEmail;
        const vars = {
            title: role.title,
            id: role.id,
            department: role.department || "",
            location: role.location || "",
            type: role.type || "",
        };
        const subject = formatTemplate(
            app.subject || config.subjectTemplate,
            vars
        );
        const bodyTpl =
            app.bodyTemplate !== undefined
                ? app.bodyTemplate
                : config.defaultBodyTemplate;
        const body = bodyTpl ? formatTemplate(bodyTpl, vars) : "";
        return { email, subject, href: buildMailto(email, subject, body) };
    };

    const buildDetailSections = (role) => {
        const sections = [];

        if (role.description) {
            const paras = Array.isArray(role.description)
                ? role.description
                : [role.description];
            sections.push({
                heading: "About the role",
                type: "text",
                paragraphs: paras.filter(Boolean),
            });
        }

        if (Array.isArray(role.responsibilities) && role.responsibilities.length) {
            sections.push({
                heading: "What you'll do",
                type: "list",
                items: role.responsibilities,
            });
        }

        if (Array.isArray(role.requirements) && role.requirements.length) {
            sections.push({
                heading: "What we're looking for",
                type: "list",
                items: role.requirements,
            });
        }

        if (Array.isArray(role.niceToHave) && role.niceToHave.length) {
            sections.push({
                heading: "Nice to have",
                type: "list",
                items: role.niceToHave,
            });
        }

        const perks = role.benefits || role.perks;
        if (Array.isArray(perks) && perks.length) {
            sections.push({
                heading: "What you get",
                type: "list",
                items: perks,
            });
        }

        if (Array.isArray(role.customSections)) {
            for (const custom of role.customSections) {
                if (!custom || !custom.heading) continue;
                const type = custom.type || (Array.isArray(custom.items) ? "list" : "text");
                if (type === "text" && custom.body) {
                    const paragraphs = Array.isArray(custom.body)
                        ? custom.body
                        : [custom.body];
                    sections.push({ heading: custom.heading, type: "text", paragraphs });
                } else if (Array.isArray(custom.items) && custom.items.length) {
                    sections.push({
                        heading: custom.heading,
                        type: type === "steps" ? "steps" : "list",
                        items: custom.items,
                    });
                }
            }
        }

        return sections;
    };

    const renderApplyButton = (role, extraClass = "") => {
        if (role.isClosed) {
            return el(
                "span",
                { className: `btn btn--disabled ${extraClass}`.trim() },
                [role.statusKey === "paused" ? "Applications paused" : "Position filled"]
            );
        }

        const app = role.application || {};
        const label = app.ctaLabel || "Apply via email";

        if (app.externalUrl && isSafeExternalUrl(app.externalUrl)) {
            return el(
                "a",
                {
                    className: `btn btn--primary ${extraClass}`.trim(),
                    href: app.externalUrl.trim(),
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
                [label, iconSpan("arrowUpRight")]
            );
        }

        const mail = buildRoleMailto(role);
        return el(
            "a",
            {
                className: `btn btn--primary ${extraClass}`.trim(),
                href: mail.href,
            },
            [label, iconSpan("arrowRight")]
        );
    };

    const renderRoleCard = (role) => {
        const isExpanded = state.expanded.has(role.id);
        const panelId = `job-panel-${role.id}`;
        const mail = buildRoleMailto(role);
        const detailSections = buildDetailSections(role);
        const hasCustomMeta = Array.isArray(role.meta) && role.meta.length > 0;
        const hasDetails =
            detailSections.length > 0 ||
            hasCustomMeta ||
            Boolean(role.application && (role.application.prompt || role.application.attachmentsNote));

        const cardClasses = [
            "job-card",
            `job-card--${role.accent}`,
            role.featured ? "job-card--featured" : "",
            role.isClosed ? "job-card--closed" : "",
            isExpanded ? "is-expanded" : "",
        ]
            .filter(Boolean)
            .join(" ");

        // Top badges row: department/team + status + featured badge
        const topMetaLeft = el("div", { className: "job-kicker-group" }, [
            role.department
                ? el("span", { className: "job-dept", text: role.department })
                : null,
            role.team
                ? el("span", { className: "job-team", text: role.team })
                : null,
        ]);

        const topMetaRight = el("div", { className: "job-status-group" }, [
            role.featured
                ? el("span", { className: "tag tag--gold" }, [
                      iconSpan("spark", "job-tag-icon"),
                      "Featured",
                  ])
                : null,
            el("span", {
                className: `job-status job-status--${role.statusTone}`,
                text: role.statusLabel,
            }),
        ]);

        // Quick-glance facts row
        const facts = [];
        if (role.location) {
            facts.push(
                el("span", { className: "job-fact" }, [
                    iconSpan("mapPin"),
                    role.location,
                ])
            );
        }
        if (role.type) {
            facts.push(
                el("span", { className: "job-fact" }, [
                    iconSpan("briefcase"),
                    role.type,
                ])
            );
        }
        if (role.compensation) {
            facts.push(
                el("span", { className: "job-fact job-fact--accent" }, [
                    iconSpan("coins"),
                    role.compensation,
                ])
            );
        }
        if (role.experience) {
            facts.push(el("span", { className: "job-fact", text: role.experience }));
        }
        if (role.deadline) {
            facts.push(
                el("span", { className: "job-fact" }, [
                    iconSpan("clock"),
                    role.deadline,
                ])
            );
        } else if (role.posted) {
            facts.push(
                el("span", { className: "job-fact" }, [
                    iconSpan("clock"),
                    `Posted ${role.posted}`,
                ])
            );
        }

        // Tags row
        const tagsRow = role.tags.length
            ? el(
                  "div",
                  { className: "job-tags" },
                  role.tags.map((tag) =>
                      el("span", {
                          className: tag.tone ? `tag tag--${tag.tone}` : "tag",
                          text: tag.label,
                      })
                  )
              )
            : null;

        // Toggle details button
        const toggleBtn = el(
            "button",
            {
                type: "button",
                className: "btn btn--ghost btn--sm job-toggle-btn",
                "aria-expanded": String(isExpanded),
                "aria-controls": panelId,
                onClick: () => {
                    if (state.expanded.has(role.id)) {
                        state.expanded.delete(role.id);
                    } else {
                        state.expanded.add(role.id);
                    }
                    renderJobs();
                },
            },
            [
                el("span", {
                    text: isExpanded
                        ? "Hide details"
                        : hasDetails
                          ? "View role details"
                          : "How to apply",
                }),
                iconSpan("chevronDown", "job-chevron"),
            ]
        );

        const actionsRow = el("div", { className: "job-actions" }, [
            toggleBtn,
            renderApplyButton(role, "btn--sm"),
        ]);

        // Expandable details panel
        const panelChildren = [];

        if (hasCustomMeta) {
            panelChildren.push(
                el(
                    "dl",
                    { className: "job-meta-grid" },
                    role.meta
                        .filter((m) => m && m.label && m.value)
                        .map((m) =>
                            el("div", { className: "job-meta-item" }, [
                                el("dt", { text: m.label }),
                                el("dd", { text: m.value }),
                            ])
                        )
                )
            );
        }

        if (detailSections.length) {
            const sectionsWrap = el("div", { className: "job-sections" });
            for (const sec of detailSections) {
                const secEl = el("div", { className: "job-section" }, [
                    el("h4", { text: sec.heading }),
                ]);

                if (sec.type === "text") {
                    for (const para of sec.paragraphs) {
                        secEl.appendChild(el("p", { text: para }));
                    }
                } else if (sec.type === "steps") {
                    const ol = el("ol", { className: "job-steps" });
                    for (const item of sec.items) {
                        ol.appendChild(el("li", { text: item }));
                    }
                    secEl.appendChild(ol);
                } else {
                    const ul = el("ul", { className: "job-bullets" });
                    for (const item of sec.items) {
                        ul.appendChild(el("li", { text: item }));
                    }
                    secEl.appendChild(ul);
                }

                sectionsWrap.appendChild(secEl);
            }
            panelChildren.push(sectionsWrap);
        }

        // Per-role application callout inside the expanded view
        const app = role.application || {};
        const roleUrl = new URL(window.location.href);
        roleUrl.hash = `role-${role.id}`;

        const copyEmailBtn = el(
            "button",
            {
                type: "button",
                className: "btn btn--ghost btn--sm",
                onClick: (e) => copyText(mail.email, e.currentTarget, "Email copied!"),
            },
            [iconSpan("copy"), el("span", { className: "copy-label", text: mail.email })]
        );

        const copyLinkBtn = el(
            "button",
            {
                type: "button",
                className: "btn btn--ghost btn--sm",
                onClick: (e) =>
                    copyText(roleUrl.toString(), e.currentTarget, "Link copied!"),
            },
            [iconSpan("link"), el("span", { className: "copy-label", text: "Copy role link" })]
        );

        const applyBox = el("div", { className: "job-apply-box" }, [
            el("div", { className: "job-apply-copy" }, [
                el("span", { className: "job-apply-eyebrow", text: "How to apply for this role" }),
                el("p", {
                    text:
                        app.prompt ||
                        `Email ${mail.email} with "${mail.subject}" in the subject line. Include a short intro and links to work you're proud of.`,
                }),
                app.attachmentsNote
                    ? el("p", { className: "job-apply-note", text: app.attachmentsNote })
                    : null,
            ]),
            el("div", { className: "job-apply-actions" }, [
                renderApplyButton(role, "btn--sm"),
                copyEmailBtn,
                copyLinkBtn,
            ]),
        ]);

        panelChildren.push(applyBox);

        const detailsPanel = el(
            "div",
            {
                id: panelId,
                className: "job-details",
                hidden: !isExpanded,
            },
            panelChildren
        );

        return el(
            "article",
            {
                id: `role-${role.id}`,
                className: cardClasses,
            },
            [
                el("span", { className: "job-card-glow", "aria-hidden": "true" }),
                el("div", { className: "job-card-head" }, [topMetaLeft, topMetaRight]),
                el("div", { className: "job-card-main" }, [
                    el("div", { className: "job-card-copy" }, [
                        el("h3", { className: "job-title", text: role.title }),
                        facts.length ? el("div", { className: "job-facts" }, facts) : null,
                        role.summary
                            ? el("p", { className: "job-summary", text: role.summary })
                            : null,
                        tagsRow,
                    ]),
                    actionsRow,
                ]),
                detailsPanel,
            ]
        );
    };

    const renderEmptyState = () => {
        const empty = config.emptyState;
        const emptyMailto = buildMailto(
            generalCfg.email || globalEmail,
            empty.subject || generalCfg.subject,
            generalCfg.bodyTemplate || ""
        );

        const copyBtn = el(
            "button",
            {
                type: "button",
                className: "btn btn--ghost",
                onClick: (e) => copyText(globalEmail, e.currentTarget, "Email copied!"),
            },
            [
                iconSpan("copy"),
                el("span", { className: "copy-label", text: `Copy ${globalEmail}` }),
            ]
        );

        return el("div", { className: "jobs-empty" }, [
            el("span", { className: "status-badge", text: empty.badge }),
            el("h3", { className: "display", text: empty.heading }),
            el("p", { text: empty.body }),
            el("div", { className: "jobs-empty-actions" }, [
                el("a", { className: "btn btn--primary", href: emptyMailto }, [
                    empty.ctaLabel || "Send an open application",
                    iconSpan("arrowRight"),
                ]),
                copyBtn,
            ]),
        ]);
    };

    const renderFilters = () => {
        if (!filtersRoot) return;
        filtersRoot.innerHTML = "";

        if (!config.showFilters || roles.length === 0) {
            filtersRoot.hidden = true;
            return;
        }

        const departments = [
            "All",
            ...Array.from(new Set(roles.map((r) => r.department).filter(Boolean))),
        ];
        const types = [
            "All",
            ...Array.from(new Set(roles.map((r) => r.type).filter(Boolean))),
        ];

        const shouldShowControls =
            roles.length > 1 || departments.length > 2 || types.length > 2;

        if (!shouldShowControls) {
            filtersRoot.hidden = true;
            return;
        }

        filtersRoot.hidden = false;

        const bar = el("div", { className: "jobs-filter-bar" });

        // Department pills
        if (departments.length > 2) {
            const deptGroup = el(
                "div",
                { className: "filter-pills", role: "group", "aria-label": "Filter by department" },
                departments.map((dept) =>
                    el("button", {
                        type: "button",
                        className: `filter-pill${state.department === dept ? " is-active" : ""}`,
                        "aria-pressed": String(state.department === dept),
                        text: dept,
                        onClick: () => {
                            state.department = dept;
                            renderFilters();
                            renderJobs();
                        },
                    })
                )
            );
            bar.appendChild(deptGroup);
        }

        // Right-hand controls: type select + search input
        const controls = el("div", { className: "filter-controls" });

        if (types.length > 2) {
            const select = el(
                "select",
                {
                    className: "filter-select",
                    "aria-label": "Filter by employment type",
                    onChange: (e) => {
                        state.type = e.target.value;
                        renderJobs();
                    },
                },
                types.map((t) =>
                    el("option", {
                        value: t,
                        text: t === "All" ? "All types" : t,
                        selected: state.type === t,
                    })
                )
            );
            controls.appendChild(select);
        }

        const searchInput = el("input", {
            type: "search",
            className: "filter-search",
            placeholder: "Search roles, skills, or tags...",
            value: state.query,
            "aria-label": "Search open roles",
            onInput: (e) => {
                state.query = e.target.value;
                renderJobs();
            },
        });
        controls.appendChild(searchInput);

        bar.appendChild(controls);
        filtersRoot.appendChild(bar);
    };

    const matchesQuery = (role, q) => {
        if (!q) return true;
        const needle = q.trim().toLowerCase();
        if (!needle) return true;

        const haystack = [
            role.title,
            role.department,
            role.team,
            role.location,
            role.type,
            role.experience,
            role.summary,
            ...(Array.isArray(role.description) ? role.description : [role.description]),
            ...role.tags.map((t) => t.label),
            ...(Array.isArray(role.responsibilities) ? role.responsibilities : []),
            ...(Array.isArray(role.requirements) ? role.requirements : []),
            ...(Array.isArray(role.meta) ? role.meta.map((m) => `${m.label} ${m.value}`) : []),
        ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase();

        return haystack.includes(needle);
    };

    const renderJobs = () => {
        if (!listRoot) return;
        listRoot.innerHTML = "";

        if (roles.length === 0) {
            if (resultsSummary) resultsSummary.textContent = "";
            listRoot.appendChild(renderEmptyState());
            return;
        }

        const filtered = roles.filter((role) => {
            if (state.department !== "All" && role.department !== state.department) {
                return false;
            }
            if (state.type !== "All" && role.type !== state.type) {
                return false;
            }
            return matchesQuery(role, state.query);
        });

        if (resultsSummary) {
            const isFiltered =
                state.department !== "All" || state.type !== "All" || state.query.trim() !== "";
            resultsSummary.textContent = isFiltered
                ? `Showing ${filtered.length} of ${roles.length} ${roles.length === 1 ? "role" : "roles"}`
                : `${roles.length} ${roles.length === 1 ? "position" : "positions"} listed`;
        }

        if (filtered.length === 0) {
            listRoot.appendChild(
                el("div", { className: "jobs-no-match" }, [
                    el("p", { text: "No open roles match your current filters." }),
                    el("button", {
                        type: "button",
                        className: "btn btn--ghost btn--sm",
                        text: "Reset filters",
                        onClick: () => {
                            state.department = "All";
                            state.type = "All";
                            state.query = "";
                            renderFilters();
                            renderJobs();
                        },
                    }),
                ])
            );
            return;
        }

        const frag = document.createDocumentFragment();
        for (const role of filtered) {
            frag.appendChild(renderRoleCard(role));
        }
        listRoot.appendChild(frag);
    };

    renderFilters();
    renderJobs();

    // Smooth-scroll to a deep-linked role on load
    if (initialRoleId) {
        const target = document.getElementById(`role-${initialRoleId}`);
        if (target) {
            window.setTimeout(() => {
                const top = target.getBoundingClientRect().top + window.scrollY - 96;
                window.scrollTo({ top, behavior: "smooth" });
            }, 120);
        }
    }
})();
