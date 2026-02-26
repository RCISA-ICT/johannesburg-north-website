// RCISA Johannesburg North - JavaScript

// Mobile Menu Toggle - World Class Implementation
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');
const menuBackdrop = document.getElementById('menuBackdrop');
const body = document.body;

// Function to open menu
function openMenu() {
    if (navLinks) navLinks.classList.add('active');
    if (mobileMenuToggle) mobileMenuToggle.classList.add('active');
    if (menuBackdrop) menuBackdrop.classList.add('active');
    body.style.overflow = 'hidden';
}

// Function to close menu
function closeMenu() {
    if (navLinks) navLinks.classList.remove('active');
    if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
    if (menuBackdrop) menuBackdrop.classList.remove('active');
    body.style.overflow = '';
}

// Toggle mobile menu
if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        if (navLinks.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
}

// Close menu when clicking backdrop
if (menuBackdrop) {
    menuBackdrop.addEventListener('click', closeMenu);
}

// Close mobile menu when clicking on a link
const navLinksItems = document.querySelectorAll('.nav-link');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks && mobileMenuToggle) {
        if (navLinks.classList.contains('active') &&
            !navLinks.contains(e.target) &&
            !mobileMenuToggle.contains(e.target)) {
            closeMenu();
        }
    }
});

// Close mobile menu on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
            closeMenu();
        }
    }, 250);
});

// Close menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
        closeMenu();
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksItems.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });

    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    if (scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    }
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to elements
const animateElements = document.querySelectorAll('.leader-card, .council-card, .service-card, .contact-card, .about-text, .about-image');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Scroll to top button (optional enhancement)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0d2c6c, #3b82f6);
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'translateY(-5px)';
    scrollToTopBtn.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'translateY(0)';
    scrollToTopBtn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
});

// Log page load
console.log('RCISA Johannesburg North website loaded successfully!');

// Modal functionality
const prayerModal = document.getElementById('prayerModal');

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === prayerModal) {
        prayerModal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && prayerModal.style.display === 'flex') {
        prayerModal.style.display = 'none';
    }
});

// Prayer form submission
const prayerForm = document.getElementById('prayerForm');
if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(prayerForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const request = formData.get('request');
        const anonymous = formData.get('anonymous');

        // Here you would typically send this to a server
        // For now, we'll just show a success message
        alert(`Thank you ${anonymous ? 'for your' : name + ' for your'} prayer request. Our prayer team will be praying for you.`);

        // Reset form and close modal
        prayerForm.reset();
        prayerModal.style.display = 'none';
    });
}

// Copy bank details function
function copyBankDetails() {
    const bankDetails = `Bank: First National Bank
Account Name: RCISA
Account Number: 62804341791
Branch Code: 250655
Reference: Your Name + "Donation Johannesburg North"`;

    navigator.clipboard.writeText(bankDetails).then(() => {
        alert('Bank details copied to clipboard!');
    }).catch(() => {
        alert('Please copy the bank details manually.');
    });
}

// Make function globally available
window.copyBankDetails = copyBankDetails;

// Amount button interactions
document.addEventListener('DOMContentLoaded', () => {
    const amountButtons = document.querySelectorAll('.amount-btn');
    amountButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // If custom amount, you could show an input field
            if (this.textContent === 'Custom Amount') {
                const customAmount = prompt('Enter your donation amount (R):');
                if (customAmount) {
                    alert(`Thank you for your donation of R${customAmount}!`);
                }
            }
        });
    });
});
