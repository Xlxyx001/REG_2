// ====================================
// MENU SIDEBAR RESPONSIVE
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    // Toggle du menu hamburger
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            if (menuOverlay) {
                menuOverlay.classList.toggle('active');
            }
            if (sidebarMenu) {
                sidebarMenu.classList.toggle('active');
            }
        });
    }

    // Fermer le menu quand on clique sur l'overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function() {
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            menuOverlay.classList.remove('active');
            if (sidebarMenu) {
                sidebarMenu.classList.remove('active');
            }
        });
    }

    // Fermer le menu quand on clique sur un lien
    if (sidebarMenu) {
        const navLinks = sidebarMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
                if (menuOverlay) {
                    menuOverlay.classList.remove('active');
                }
                if (sidebarMenu) {
                    sidebarMenu.classList.remove('active');
                }
            });
        });
    }

    // Fermer le menu au redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            if (menuOverlay) {
                menuOverlay.classList.remove('active');
            }
            if (sidebarMenu) {
                sidebarMenu.classList.remove('active');
            }
        }
    });
});

// ====================================
// NEWSLETTER FORM
// ====================================

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        alert(`Merci de vous être inscrit avec: ${email}. Vous recevrez notre newsletter chaque semaine!`);
        event.target.reset();
    }
}

// ====================================
// CONTACT FORM
// ====================================

function handleContactSubmit(event) {
    event.preventDefault();
    const name = event.target.querySelector('#name').value;
    const email = event.target.querySelector('#email').value;
    const subject = event.target.querySelector('#subject').value;
    
    if (name && email && subject) {
        alert(`Merci ${name}! Votre message a été reçu. Nous vous contacterons à ${email} dès que possible.`);
        event.target.reset();
    }
}

// ====================================
// SMOOTH SCROLLING
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====================================
// DETECTION DE SCROLLING
// ====================================

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// ====================================
// ANIMATIONS AU SCROLLING
// ====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cartes d'articles
document.querySelectorAll('.article-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observer les cartes vidéo
document.querySelectorAll('.video-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Ajouter l'animation CSS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ====================================
// COMPTEUR D'ARTICLES
// ====================================

function updateArticleCount() {
    const articlesCount = document.querySelectorAll('.article-card').length;
    if (articlesCount > 0) {
        // Vous pouvez afficher le nombre d'articles quelque part
        console.log(`Total d'articles: ${articlesCount}`);
    }
}

updateArticleCount();