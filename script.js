(() => {
    "use strict";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const desktop = window.matchMedia("(min-width: 901px)");

    const lerp = (a, b, t) => a + (b - a) * t;
    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    /* ---------------------------------------------------------------
       Header scroll state
    --------------------------------------------------------------- */
    const header = document.querySelector(".site-header");
    const updateHeader = () => header && header.classList.toggle("is-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    /* ---------------------------------------------------------------
       Mobile navigation drawer
    --------------------------------------------------------------- */
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navScrim = document.getElementById("navScrim");

    const setMenu = (open) => {
        document.body.classList.toggle("nav-open", open);
        document.documentElement.classList.toggle("nav-open", open);
        navToggle?.setAttribute("aria-expanded", String(open));
        navToggle?.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        document.body.style.overflow = open ? "hidden" : "";
    };

    navToggle?.addEventListener("click", () => setMenu(!document.body.classList.contains("nav-open")));
    navScrim?.addEventListener("click", () => setMenu(false));
    navMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") setMenu(false);
    });
    window.addEventListener("resize", () => {
        if (desktop.matches) setMenu(false);
    });

    /* ---------------------------------------------------------------
       Reveal on scroll (with optional stagger groups)
    --------------------------------------------------------------- */
    const revealables = document.querySelectorAll("[data-reveal]");

    const revealEl = (el) => el.classList.add("in");

    if ("IntersectionObserver" in window && !reduced.matches) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    const el = entry.target;
                    const group = el.closest("[data-reveal-group]");
                    if (group && group._staggered) {
                        revealEl(el);
                    } else {
                        // Stagger siblings inside a group so they cascade in.
                        if (group && !group._staggered) {
                            group._staggered = true;
                            const items = Array.from(group.querySelectorAll("[data-reveal]"));
                            items.forEach((item, i) => {
                                item.style.setProperty("--d", `${i * 90}ms`);
                            });
                        }
                        revealEl(el);
                    }
                    observer.unobserve(el);
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
        );
        revealables.forEach((el) => observer.observe(el));
    } else {
        revealables.forEach(revealEl);
    }

    /* ---------------------------------------------------------------
       Number counters
    --------------------------------------------------------------- */
    const counters = document.querySelectorAll("[data-count]");
    const runCounter = (el) => {
        const target = parseFloat(el.dataset.count);
        const decimals = (el.dataset.count.split(".")[1] || "").length;
        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
            const p = clamp((now - start) / duration, 0, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * eased).toFixed(decimals);
            if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window && !reduced.matches && counters.length) {
        const cObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    runCounter(entry.target);
                    cObserver.unobserve(entry.target);
                });
            },
            { threshold: 0.6 }
        );
        counters.forEach((el) => cObserver.observe(el));
    } else {
        counters.forEach((el) => {
            el.textContent = el.dataset.count;
        });
    }

    /* ---------------------------------------------------------------
       Horizontal scroll sections — vertical scroll drives the track
       horizontally, with a lerped rAF for buttery motion.
    --------------------------------------------------------------- */
    const hscrolls = Array.from(document.querySelectorAll(".hscroll")).map((section) => ({
        section,
        track: section.querySelector(".hscroll-track"),
        bar: section.querySelector(".hscroll-progress i"),
        progress: 0,
        current: 0,
    }));

    const updateHscrolls = () => {
        if (!desktop.matches) return;
        const vh = window.innerHeight;
        hscrolls.forEach((h) => {
            const rect = h.section.getBoundingClientRect();
            const runway = h.section.offsetHeight - vh;
            if (runway <= 0) return;
            const raw = clamp(-rect.top / runway, 0, 1);
            h.progress = raw;
        });
    };

    const renderHscrolls = () => {
        hscrolls.forEach((h) => {
            h.current = lerp(h.current, h.progress, 0.09);
            const track = h.track;
            const distance = track.scrollWidth - track.parentElement.clientWidth;
            if (distance > 0) {
                track.style.transform = `translate3d(${(-h.current * distance).toFixed(2)}px, 0, 0)`;
            }
            if (h.bar) h.bar.style.transform = `scaleX(${h.current.toFixed(4)})`;
        });
    };

    if (hscrolls.length && !reduced.matches) {
        updateHscrolls();
        window.addEventListener("scroll", updateHscrolls, { passive: true });
        window.addEventListener("resize", updateHscrolls);

        const loop = () => {
            renderHscrolls();
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    }

    /* ---------------------------------------------------------------
       Hero — mouse parallax + gentle tilt of the 3D scene,
       and scroll-out fade of the hero copy.
    --------------------------------------------------------------- */
    const hero = document.querySelector(".labs-hero");
    if (hero && !reduced.matches) {
        const depths = Array.from(hero.querySelectorAll(".scene-depth"));
        const copy = hero.querySelector(".hero-inner");
        let tx = 0;
        let ty = 0;
        let cx = 0;
        let cy = 0;
        let frame = null;

        const step = () => {
            cx = lerp(cx, tx, 0.06);
            cy = lerp(cy, ty, 0.06);
            depths.forEach((d) => {
                const f = parseFloat(d.dataset.depth || 0);
                d.style.transform = `translate3d(${(cx * f).toFixed(2)}px, ${(cy * f).toFixed(2)}px, 0)`;
            });
            const settled = Math.abs(tx - cx) < 0.05 && Math.abs(ty - cy) < 0.05;
            frame = settled ? null : requestAnimationFrame(step);
        };

        if (finePointer.matches) {
            window.addEventListener(
                "pointermove",
                (event) => {
                    tx = (event.clientX / window.innerWidth - 0.5) * 2;
                    ty = (event.clientY / window.innerHeight - 0.5) * 2;
                    if (frame === null) frame = requestAnimationFrame(step);
                },
                { passive: true }
            );
        }

        // Fade + lift the hero copy as you scroll away.
        const heroScroll = () => {
            const y = window.scrollY;
            const max = hero.offsetHeight;
            const p = clamp(y / max, 0, 1);
            if (copy) {
                copy.style.opacity = (1 - p * 1.6).toFixed(3);
                copy.style.transform = `translate3d(0, ${(p * 70).toFixed(2)}px, 0)`;
            }
        };
        heroScroll();
        window.addEventListener("scroll", heroScroll, { passive: true });
    }

    /* ---------------------------------------------------------------
       3D tilt cards — cards lean toward the cursor.
       Touch devices keep the natural scroll experience (no tilt).
    --------------------------------------------------------------- */
    if (finePointer.matches && !reduced.matches) {
        const tiltables = document.querySelectorAll(".tilt-card, .value-card, .product-card");

        tiltables.forEach((card) => {
            card.addEventListener("pointerenter", () => {
                card.style.transition = "transform 120ms linear";
            });
            card.addEventListener("pointermove", (event) => {
                const r = card.getBoundingClientRect();
                const px = (event.clientX - r.left) / r.width - 0.5;
                const py = (event.clientY - r.top) / r.height - 0.5;
                const intensity = card.classList.contains("value-card") ? 7 : 8;
                card.style.transform =
                    `perspective(900px) rotateX(${(-py * intensity).toFixed(2)}deg) ` +
                    `rotateY(${(px * intensity * 1.2).toFixed(2)}deg) translateY(-4px)`;
            });
            card.addEventListener("pointerleave", () => {
                card.style.transition = "transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1)";
                card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
            });
        });
    }

    /* ---------------------------------------------------------------
       Smooth anchor scroll offset for the sticky header
    --------------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (event) => {
            const id = a.getAttribute("href");
            if (id.length < 2) return;
            const target = document.querySelector(id);
            if (!target) return;
            event.preventDefault();
            const top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: reduced.matches ? "auto" : "smooth" });
        });
    });
})();
