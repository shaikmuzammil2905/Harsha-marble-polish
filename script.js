/* ==========================================================================
   HARSHA MARBLE POLISHING SERVICE - MASTER SCRIPT
   ========================================================================== */

// --- GALLERY DATA (15 Dedicated Images) ---
const galleryData = [
    { src: 'images/gallery-1.png', title: 'Italian Marble Polish' },
    { src: 'images/gallery-2.png', title: 'Mirror Finish Floor' },
    { src: 'images/gallery-3.png', title: 'Living Room Marble' },
    { src: 'images/gallery-4.png', title: 'Staircase Polishing' },
    { src: 'images/gallery-5.png', title: 'Commercial Hall Floor' },
    { src: 'images/gallery-6.png', title: 'Granite Gloss Restoration' },
    { src: 'images/gallery-7.png', title: 'Diamond Polish Finish' },
    { src: 'images/gallery-8.png', title: 'Villa Flooring Shine' },
    { src: 'images/gallery-9.png', title: 'Seamless Joint Grinding' },
    { src: 'images/gallery-10.png', title: 'White Marble Shine' },
    { src: 'images/gallery-11.png', title: 'High Gloss Buffing' },
    { src: 'images/gallery-12.png', title: 'Stain Protection Coating' },
    { src: 'images/gallery-13.png', title: 'Katni Marble Restoration' },
    { src: 'images/gallery-14.png', title: 'Lobby Floor Polish' },
    { src: 'images/gallery-15.png', title: 'Reflective Marble Care' }
];

let currentLightboxIndex = 0;
const WHATSAPP_NUMBER = '916303415748';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initStatsCounter();
    initMobileNav();
    initBottomNavScroll();
});

// --- MOBILE NAVIGATION DRAWER ---
function initMobileNav() {
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const overlay = document.getElementById('mobileNavOverlay');
    const closeBtn = document.getElementById('closeMobileNav');

    if (mobileBtn && overlay && closeBtn) {
        mobileBtn.addEventListener('click', () => {
            overlay.classList.add('open');
        });

        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('open');
        });

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('open');
            }
        });
    }
}

function closeMobileMenu() {
    const overlay = document.getElementById('mobileNavOverlay');
    if (overlay) {
        overlay.classList.remove('open');
    }
}

// --- QUOTE MODAL POPUP ---
function openQuoteModal(serviceName = '') {
    const modal = document.getElementById('quoteModalOverlay');
    if (modal) {
        modal.classList.add('open');
        if (serviceName) {
            const selectEl = document.getElementById('modalService');
            if (selectEl) {
                selectEl.value = serviceName;
            }
        }
    }
}

function closeQuoteModal() {
    const modal = document.getElementById('quoteModalOverlay');
    if (modal) {
        modal.classList.remove('open');
    }
}

function closeQuoteModalOnOverlay(event) {
    if (event.target.id === 'quoteModalOverlay') {
        closeQuoteModal();
    }
}

// --- FORM SUBMISSION DIRECTLY TO WHATSAPP (+91 63034 15748) ---
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const service = document.getElementById('custService').value;
    const location = document.getElementById('custLocation').value.trim() || 'Not specified';
    const notes = document.getElementById('custNotes').value.trim() || 'None';

    sendToWhatsApp(name, phone, service, location, notes);
}

function handleModalFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('modalName').value.trim();
    const phone = document.getElementById('modalPhone').value.trim();
    const service = document.getElementById('modalService').value;
    const location = document.getElementById('modalLocation').value.trim() || 'Not specified';

    sendToWhatsApp(name, phone, service, location, 'Requested from Quote Modal');
    closeQuoteModal();
}

function sendToWhatsApp(name, phone, service, location, notes) {
    const message = `Hello Harsha Marble Polishing Service! 👋%0A%0AI would like to request a free marble inspection & quote.%0A%0A👤 *Name:* ${encodeURIComponent(name)}%0A📱 *Phone:* ${encodeURIComponent(phone)}%0A🛠️ *Service:* ${encodeURIComponent(service)}%0A📍 *Location:* ${encodeURIComponent(location)}%0A📝 *Details:* ${encodeURIComponent(notes)}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// --- LIGHTBOX MODAL LOGIC ---
function openLightbox(index) {
    if (index < 0 || index >= galleryData.length) return;
    currentLightboxIndex = index;
    
    const overlay = document.getElementById('lightboxOverlay');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const counter = document.getElementById('lightboxCounter');

    img.src = galleryData[currentLightboxIndex].src;
    title.textContent = galleryData[currentLightboxIndex].title;
    counter.textContent = `${currentLightboxIndex + 1} / ${galleryData.length}`;

    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    if (prevBtn) prevBtn.style.display = 'flex';
    if (nextBtn) nextBtn.style.display = 'flex';

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function openSingleImageModal(imageSrc, imageTitle) {
    const overlay = document.getElementById('lightboxOverlay');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const counter = document.getElementById('lightboxCounter');

    img.src = imageSrc;
    title.textContent = imageTitle;
    counter.textContent = '';

    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const overlay = document.getElementById('lightboxOverlay');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

function closeLightboxOnOverlay(event) {
    if (event.target.id === 'lightboxOverlay' || event.target.classList.contains('lightbox-image-container')) {
        closeLightbox();
    }
}

function nextLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
    updateLightboxContent();
}

function prevLightboxImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const counter = document.getElementById('lightboxCounter');

    img.style.opacity = '0.5';
    setTimeout(() => {
        img.src = galleryData[currentLightboxIndex].src;
        title.textContent = galleryData[currentLightboxIndex].title;
        counter.textContent = `${currentLightboxIndex + 1} / ${galleryData.length}`;
        img.style.opacity = '1';
    }, 150);
}

// Keyboard Navigation for Lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightboxOverlay');
    if (lightbox && lightbox.classList.contains('open')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextLightboxImage();
        if (e.key === 'ArrowLeft') prevLightboxImage();
    }
});

// --- STATS NUMBERS COUNTER ANIMATION ---
function initStatsCounter() {
    const counters = document.querySelectorAll('.counter');
    let counted = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                counted = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000; // 2 seconds
                    const step = Math.ceil(target / (duration / 20));
                    let current = 0;

                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            counter.textContent = target.toLocaleString();
                            clearInterval(timer);
                        } else {
                            counter.textContent = current.toLocaleString();
                        }
                    }, 20);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// --- SCROLL REVEAL ANIMATIONS ---
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('reveal-active');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
}

// --- BOTTOM NAV HIGHLIGHTING ON SCROLL ---
function initBottomNavScroll() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.bottom-nav-item');

    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage) {
            item.classList.add('active');
        }
    });
}
