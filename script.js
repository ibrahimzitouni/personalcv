document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    feather.replace();

    // Animate CV container on load
    setTimeout(() => {
        document.querySelector('.cv-container').classList.add('visible');
    }, 100);

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeIcon.setAttribute('data-feather', 'sun');
        } else {
            themeIcon.setAttribute('data-feather', 'moon');
        }
        feather.replace();
    });

    // Add hover effect to skills
    const skillItems = document.querySelectorAll('.skills-list li, .education-list li, .internship-list li, .language-list li');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = 'var(--card-shadow)';
        });
    });

    // Add hover effect to traits and hobbies
    const traitItems = document.querySelectorAll('.traits li, .hobbies-list li');
    traitItems.forEach(item => {
        
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        });
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Add a subtle parallax effect to the header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const scrollPosition = window.pageYOffset;
        header.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
});