// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ===== SCROLL FADE-IN ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .blog-card, .project-card, .timeline-card, .contact-detail-card, .about-info-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== SKILL BARS ANIMATION =====
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.style.getPropertyValue('--w') || getComputedStyle(fill).getPropertyValue('--w');
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-bars').forEach(el => skillObserver.observe(el));

// ===== GOLD PARTICLE EFFECT ON CLICK =====
document.addEventListener('click', (e) => {
  for (let i = 0; i < 6; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed; left: ${e.clientX}px; top: ${e.clientY}px;
      width: 4px; height: 4px; border-radius: 50%;
      background: #c9a227; pointer-events: none; z-index: 9999;
      animation: particleFly 0.8s ease forwards;
      --dx: ${(Math.random() - 0.5) * 80}px;
      --dy: ${(Math.random() - 0.5) * 80}px;
    `;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 800);
  }
});

// Inject particle animation
const style = document.createElement('style');
style.textContent = `
  @keyframes particleFly {
    0% { opacity: 1; transform: translate(0,0) scale(1); }
    100% { opacity: 0; transform: translate(var(--dx), var(--dy)) scale(0); }
  }
`;
document.head.appendChild(style);

// ===== ACTIVE NAV LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
});
