// script for the mobile menu icon
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("mobile-overlay");

    // Open menu
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        overlay.classList.toggle("hidden");
    });

    // Close when clicking overlay
    overlay.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        overlay.classList.add("hidden");
    });

    // Close when any link is clicked
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            overlay.classList.add("hidden");
        });
    });
});


// script for FAQ expand and collapse
document.addEventListener("DOMContentLoaded", function () {
    const allDetails = document.querySelectorAll('#faq details');

    allDetails.forEach((detail) => {
        detail.addEventListener('toggle', function () {
            if (this.open) {
                allDetails.forEach((otherDetail) => {
                    if (otherDetail !== this) {
                        otherDetail.removeAttribute('open');
                    }
                });
            }
        });
    });
});

// effects & animation
document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".hero-badge, .hero-title, .hero-content, .hero-image, .feature-title, .feature-box, .energy-card, .energy-title, .energy-subtitle, .how-title, .how-subtitle, .how-card, .hub-title, .hub-subtitle, .hub-left, .hub-right, .stat-item, .cta-card, .cta-content, .cta-title, .cta-text, .cta-button, .keywords-section, .why-title, .why-subtitle, .why-card, .app-left, .app-right, .cta-button-wrapper"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            } else {
                // REMOVE class when leaving viewport
                entry.target.classList.remove("animate");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));

});


