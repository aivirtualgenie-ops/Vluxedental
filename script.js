/* =====================================================
   V LUXE DENTAL ATELIER
   INTERACTION SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       HEADER
    ================================================= */

    const header =
        document.querySelector(".site-header");


    const updateHeader = () => {

        if (!header) return;

        header.classList.toggle(
            "scrolled",
            window.scrollY > 25
        );

    };


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    /* =================================================
       MOBILE MENU
    ================================================= */

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");


    if (
        mobileMenuButton &&
        mobileMenu
    ) {

        mobileMenuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.toggle("open");


                mobileMenuButton.classList.toggle(
                    "active",
                    isOpen
                );


                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                mobileMenuButton.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close menu"
                        : "Open menu"
                );

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "open"
                        );

                        mobileMenuButton.classList.remove(
                            "active"
                        );

                        mobileMenuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        mobileMenuButton.setAttribute(
                            "aria-label",
                            "Open menu"
                        );

                    }
                );

            });

    }


    /* =================================================
       TEAM ACCORDION
    ================================================= */

    const teamToggle =
        document.getElementById("teamToggle");

    const teamContainer =
        document.getElementById("teamContainer");

    const teamToggleText =
        document.getElementById("teamToggleText");


    if (
        teamToggle &&
        teamContainer
    ) {

        teamToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    teamContainer.classList.toggle("open");


                teamToggle.classList.toggle(
                    "active",
                    isOpen
                );


                teamToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );


                if (teamToggleText) {

                    teamToggleText.textContent =
                        isOpen
                            ? "Hide Our Team"
                            : "Meet Our Team";

                }

            }
        );

    }


    /* =================================================
       SMOOTH ANCHOR SCROLLING
    ================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(targetId);


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const offset =
                        window.innerWidth <= 750
                            ? 12
                            : 18;


                    const targetPosition =
                        target.getBoundingClientRect().top
                        +
                        window.scrollY
                        -
                        headerHeight
                        -
                        offset;


                    window.scrollTo({

                        top:
                            Math.max(
                                targetPosition,
                                0
                            ),

                        behavior: "smooth"

                    });

                }
            );

        });


    /* =================================================
       REVEAL ANIMATIONS
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".reveal-section"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin: "0px 0px -60px 0px"
                }
            );


        revealElements.forEach(element => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(element => {

            element.classList.add(
                "visible"
            );

        });

    }


    /* =================================================
       VIDEO PLAYBACK
    ================================================= */

    const videos =
        document.querySelectorAll("video");


    videos.forEach(video => {

        video.muted = true;

        video.playsInline = true;


        const playVideo = () => {

            const promise =
                video.play();


            if (
                promise &&
                typeof promise.catch === "function"
            ) {

                promise.catch(() => {
                    /*
                     * Mobile browsers may block
                     * autoplay temporarily.
                     */

                });

            }

        };


        playVideo();


        document.addEventListener(
            "visibilitychange",
            () => {

                if (
                    document.visibilityState ===
                    "visible"
                ) {

                    playVideo();

                }

            }
        );

    });


    /* =================================================
       VIDEO FEATURE INTERACTION
    ================================================= */

    const videoBox =
        document.querySelector(".video-box");


    if (videoBox) {

        const video =
            videoBox.querySelector("video");


        const videoCenter =
            videoBox.querySelector(".video-center");


        if (
            video &&
            videoCenter
        ) {

            videoCenter.addEventListener(
                "click",
                () => {

                    if (video.paused) {

                        video.play();

                    } else {

                        video.pause();

                    }

                }
            );

        }

    }


    /* =================================================
       IMAGE LOAD POLISH
    ================================================= */

    document
        .querySelectorAll("img")
        .forEach(img => {

            if (img.complete) {

                img.classList.add(
                    "loaded"
                );

            } else {

                img.addEventListener(
                    "load",
                    () => {

                        img.classList.add(
                            "loaded"
                        );

                    },
                    {
                        once: true
                    }
                );

            }

        });


    /* =================================================
       CLOSE MOBILE MENU WITH ESC
    ================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileMenu &&
                mobileMenu.classList.contains("open")
            ) {

                mobileMenu.classList.remove(
                    "open"
                );


                if (mobileMenuButton) {

                    mobileMenuButton.classList.remove(
                        "active"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-label",
                        "Open menu"
                    );

                }

            }

        }
    );

});
