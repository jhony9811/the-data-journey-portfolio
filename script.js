"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("navigation");
    const navigationLinks = navigation?.querySelectorAll("a") ?? [];
    const revealElements = document.querySelectorAll(".reveal");
    const skillBars = document.querySelectorAll(".skill-progress");
    const currentYear = document.getElementById("currentYear");
    const orionMessage = document.getElementById("orionMessage");

    // Current year
    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }

    // Header background on scroll
    const updateHeader = () => {
        if (!header) {
            return;
        }

        header.classList.toggle("scrolled", window.scrollY > 40);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    // Mobile navigation
    const closeMenu = () => {
        if (!menuButton || !navigation) {
            return;
        }

        menuButton.classList.remove("active");
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    if (menuButton && navigation) {
        menuButton.addEventListener("click", () => {
            const isOpen = navigation.classList.toggle("active");

            menuButton.classList.toggle("active", isOpen);
            menuButton.setAttribute("aria-expanded", String(isOpen));
            document.body.classList.toggle("menu-open", isOpen);
        });

        navigationLinks.forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("resize", () => {
            if (window.innerWidth > 760) {
                closeMenu();
            }
        });
    }

    // Reveal elements as the user scrolls
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px",
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

    // Animate skill bars
    const skillObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const bar = entry.target;
                const level = Number(bar.dataset.level ?? 0);
                const safeLevel = Math.min(Math.max(level, 0), 100);

                bar.style.width = `${safeLevel}%`;
                observer.unobserve(bar);
            });
        },
        {
            threshold: 0.4,
        }
    );

    skillBars.forEach((bar) => {
        skillObserver.observe(bar);
    });

    // ORION rotating messages
    const messages = [
        "Welcome, Explorer. Mission Control is ready.",
        "Scanning analytical systems...",
        "Loading real-world data missions...",
        "Portfolio access granted.",
    ];

    let messageIndex = 0;

    if (orionMessage) {
        window.setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;

            orionMessage.style.opacity = "0";

            window.setTimeout(() => {
                orionMessage.textContent = messages[messageIndex];
                orionMessage.style.opacity = "1";
            }, 250);
        }, 3600);

        orionMessage.style.transition = "opacity 0.25s ease";
    }
});