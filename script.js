/* =====================================================
   V LUXE DENTAL ATELIER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


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
            function () {

                const isOpen =
                    mobileMenu.classList.toggle("open");


                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mobileMenu.classList.remove(
                            "open"
                        );

                        mobileMenuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* =================================================
       DOCTORS EXPAND / COLLAPSE
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
            function () {

                const isOpen =
                    teamContainer.classList.toggle("open");


                teamToggle.classList.toggle(
                    "active",
                    isOpen
                );


                teamToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );


                if (teamToggleText) {

                    teamToggleText.textContent =
                        isOpen
                            ? "Hide Our Doctors"
                            : "Meet Our Team of Specialists";

                }

            }
        );

    }


    /* =================================================
       SMOOTH SCROLL
    ================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


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


                    const header =
                        document.querySelector(
                            ".site-header"
                        );


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const position =
                        target.getBoundingClientRect().top
                        +
                        window.scrollY
                        -
                        headerHeight;


                    window.scrollTo({

                        top: position,

                        behavior: "smooth"

                    });

                }
            );

        });


    /* =================================================
       VIDEO AUTOPLAY
    ================================================= */

    document
        .querySelectorAll("video")
        .forEach(function (video) {

            video.muted = true;

            video.playsInline = true;


            const promise =
                video.play();


            if (promise !== undefined) {

                promise.catch(function () {

                    /*
                     * Some mobile browsers can
                     * temporarily block autoplay.
                     *
                     * The video remains available
                     * as a normal HTML5 video.
                     */

                });

            }

        });


    /* =================================================
       HEADER SCROLL EFFECT
    ================================================= */

    const header =
        document.querySelector(".site-header");


    if (header) {

        function updateHeader() {

            if (window.scrollY > 30) {

                header.style.boxShadow =
                    "0 10px 35px rgba(0,0,0,.07)";

            } else {

                header.style.boxShadow =
                    "none";

            }

        }


        updateHeader();


        window.addEventListener(
            "scroll",
            updateHeader,
            {
                passive: true
            }
        );

    }


});
