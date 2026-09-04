/* ==========================================
   V LUXE DENTAL ATELIER
   Main interactions
========================================== */


/* ==========================================
   MOBILE MENU
========================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });


/* ==========================================
   DOCTORS EXPAND / COLLAPSE
========================================== */

const doctorsToggle =
    document.getElementById("doctorsToggle");

const doctorsContainer =
    document.getElementById("doctorsContainer");

const toggleText =
    doctorsToggle.querySelector(".toggle-text");


doctorsToggle.addEventListener("click", () => {

    const isOpen =
        doctorsContainer.classList.toggle("open");

    doctorsToggle.classList.toggle(
        "active",
        isOpen
    );


    if (isOpen) {

        toggleText.textContent =
            "Hide Our Doctors";

    } else {

        toggleText.textContent =
            "View Our Doctors";

    }

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ==========================================
   VIDEO AUTOPLAY FALLBACK
========================================== */

const videos =
    document.querySelectorAll("video");


videos.forEach(video => {

    video.muted = true;

    const playPromise =
        video.play();

    if (playPromise !== undefined) {

        playPromise.catch(() => {

            /*
                Mobile browsers can sometimes
                block autoplay.

                Muted + playsinline normally
                solves this.
            */

        });

    }

});


/* ==========================================
   HEADER SCROLL EFFECT
========================================== */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.05)";

    } else {

        header.style.boxShadow =
            "none";

    }

});


/* ==========================================
   SMOOTH ANCHOR OFFSET
========================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener(
            "click",
            function(event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    !targetId
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
                    document.querySelector(
                        ".header"
                    ).offsetHeight;

                const targetPosition =
                    target.getBoundingClientRect()
                        .top
                    +
                    window.scrollY
                    -
                    headerHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });
