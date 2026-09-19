/* ==========================================
   SHIV PORTFOLIO - JAVASCRIPT
========================================== */


/* ==========================================
   1. MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

}


/* Close menu when clicking a navigation link */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


/* ==========================================
   2. TYPING EFFECT
========================================== */

const typingElement = document.querySelector(".hero-content h2");

const typingTexts = [
    "Computer Science Student",
    "Web Developer",
    "DSA Learner",
    "Tech Enthusiast"
];

let textIndex = 0;
let characterIndex = 0;
let isDeleting = false;


function typeEffect() {

    if (!typingElement) {
        return;
    }

    const currentText = typingTexts[textIndex];


    /* Typing */

    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, characterIndex + 1);

        characterIndex++;


        /* Finished typing */

        if (characterIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    }


    /* Deleting */

    else {

        typingElement.textContent =
            currentText.substring(0, characterIndex - 1);

        characterIndex--;


        /* Finished deleting */

        if (characterIndex === 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex >= typingTexts.length) {
                textIndex = 0;
            }

        }

    }


    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}


/* Start typing animation */

typeEffect();


/* ==========================================
   3. ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* ==========================================
   4. SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .info-card, .journey-item, .timeline-item"
);


function revealOnScroll() {

    const windowHeight = window.innerHeight;


    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


/* ==========================================
   5. CONTACT FORM
========================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        /* Check empty fields */

        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert("Please fill in all the fields.");

            return;
        }


        /* Success message */

        alert(
            "Thank you " +
            name +
            "! Your message has been received."
        );


        /* Clear form */

        contactForm.reset();

    });

}


/* ==========================================
   6. CURRENT YEAR
========================================== */

const footerText =
    document.querySelector(".footer-content p");


if (footerText) {

    const currentYear =
        new Date().getFullYear();


    footerText.textContent =
        "© " +
        currentYear +
        " Shiv Kumar Ram. All Rights Reserved.";

}


/* ==========================================
   7. CONSOLE MESSAGE
========================================== */

console.log("Shiv's Portfolio is running successfully 🚀");

const footerYear = document.getElementById("footerYear");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}