// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll
    const reveals = document.querySelectorAll('.reveal');
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Simple typing effect for Hero
    const dynamicTxt = document.querySelector('.dynamic-txt');
    const words = ["a Software Developer.", "a C/C++ Programmer.", "a Database Expert.", "a Problem Solver."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if(isDeleting) {
            dynamicTxt.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicTxt.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if(!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if(isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (dynamicTxt) {
        setTimeout(typeEffect, 1000); // Start after 1s
    }
});
