"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /* =========================================================
       MISSION CONTROL LOADING SCREEN
    ========================================================= */

    const loadingScreen =
        document.getElementById("loadingScreen") ||
        document.querySelector(".loading-screen");

    const loaderProgress =
        document.getElementById("loaderProgress") ||
        document.querySelector(".loader-progress span");

    const loaderPercentage =
        document.getElementById("loaderPercentage") ||
        document.querySelector(".loader-percentage");

    const loaderMessage =
        document.getElementById("loaderMessage") ||
        document.querySelector(".loader-message");

    const loadingMessages = [
        "Inicializando núcleo de ORION...",
        "Conectando sistemas analíticos...",
        "Verificando módulos de datos...",
        "Cargando misiones del portafolio...",
        "Sincronizando panel de control...",
        "Acceso autorizado. Bienvenido, explorador.",
    ];

    let loadingProgress = 0;
    let loadingFinished = false;

    const updateLoader = () => {
        if (!loadingScreen || loadingFinished) {
            return;
        }

        const increment = Math.floor(Math.random() * 7) + 2;
        loadingProgress = Math.min(loadingProgress + increment, 100);

        if (loaderProgress) {
            loaderProgress.style.width = `${loadingProgress}%`;
        }

        if (loaderPercentage) {
           loaderPercentage.textContent = String(loadingProgress);
        }

        if (loaderMessage) {
            let messageIndex = 0;

            if (loadingProgress >= 15) {
                messageIndex = 1;
            }

            if (loadingProgress >= 35) {
                messageIndex = 2;
            }

            if (loadingProgress >= 55) {
                messageIndex = 3;
            }

            if (loadingProgress >= 75) {
                messageIndex = 4;
            }

            if (loadingProgress >= 95) {
                messageIndex = 5;
            }

            loaderMessage.textContent = loadingMessages[messageIndex];
        }

        if (loadingProgress < 100) {
            const delay = Math.floor(Math.random() * 90) + 70;
            window.setTimeout(updateLoader, delay);
            return;
        }

        finishLoading();
    };

    const finishLoading = () => {
        if (!loadingScreen || loadingFinished) {
            document.body.classList.remove("loading");
            return;
        }

        loadingFinished = true;

        if (loaderProgress) {
            loaderProgress.style.width = "100%";
        }

        if (loaderPercentage) {
            loaderPercentage.textContent = "100%";
        }

        if (loaderMessage) {
            loaderMessage.textContent =
                "Acceso autorizado. Bienvenido, explorador.";
        }

        window.setTimeout(() => {
            loadingScreen.classList.add("hidden");
            document.body.classList.remove("loading");

            window.setTimeout(() => {
                loadingScreen.remove();
            }, 900);
        }, 650);
    };

    if (loadingScreen) {
        document.body.classList.add("loading");

        window.setTimeout(() => {
            updateLoader();
        }, 300);

        /*
         * Sistema de seguridad:
         * evita que la pantalla de carga permanezca visible
         * si algún recurso tarda demasiado.
         */
        window.setTimeout(() => {
            if (!loadingFinished) {
                loadingProgress = 100;
                finishLoading();
            }
        }, 6000);
    } else {
        document.body.classList.remove("loading");
    }

    /* =========================================================
       GENERAL ELEMENTS
    ========================================================= */

    const header = document.querySelector(".site-header");
    const menuButton = document.getElementById("menuButton");
    const navigation = document.getElementById("navigation");
    const navigationLinks = navigation?.querySelectorAll("a") ?? [];
    const revealElements = document.querySelectorAll(".reveal");
    const skillBars = document.querySelectorAll(".skill-progress");
    const currentYear = document.getElementById("currentYear");
    const orionMessage = document.getElementById("orionMessage");

    /* =========================================================
       CURRENT YEAR
    ========================================================= */

    if (currentYear) {
        currentYear.textContent = String(new Date().getFullYear());
    }

    /* =========================================================
       HEADER BACKGROUND ON SCROLL
    ========================================================= */

    const updateHeader = () => {
        if (!header) {
            return;
        }

        header.classList.toggle("scrolled", window.scrollY > 40);
    };

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
        passive: true,
    });

    /* =========================================================
       MOBILE NAVIGATION
    ========================================================= */

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

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });
    }

    /* =========================================================
       REVEAL ELEMENTS ON SCROLL
    ========================================================= */

    if ("IntersectionObserver" in window) {
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
    } else {
        revealElements.forEach((element) => {
            element.classList.add("visible");
        });
    }

    /* =========================================================
       ANIMATE SKILL BARS
    ========================================================= */

    if ("IntersectionObserver" in window) {
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
    } else {
        skillBars.forEach((bar) => {
            const level = Number(bar.dataset.level ?? 0);
            const safeLevel = Math.min(Math.max(level, 0), 100);

            bar.style.width = `${safeLevel}%`;
        });
    }

    /* =========================================================
       ORION ROTATING MESSAGES
    ========================================================= */

    const messages = [
        "Welcome, Explorer. Mission Control is ready.",
        "Scanning analytical systems...",
        "Loading real-world data missions...",
        "Transforming data into decisions...",
        "Portfolio access granted.",
    ];

    let messageIndex = 0;

    if (orionMessage) {
        orionMessage.style.transition = "opacity 0.25s ease";

        window.setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            orionMessage.style.opacity = "0";

            window.setTimeout(() => {
                orionMessage.textContent = messages[messageIndex];
                orionMessage.style.opacity = "1";
            }, 250);
        }, 3600);
    }

    /* =========================================================
       SMOOTH NAVIGATION
    ========================================================= */

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            event.preventDefault();

            const headerHeight = header?.offsetHeight ?? 0;
            const targetPosition =
                targetElement.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });
        });
    });
});
