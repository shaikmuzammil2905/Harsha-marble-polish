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

// --- HERO SLIDER DATA (10 Dedicated Hero Pictures) ---
const heroSliderData = [
    { src: 'images/hero-technician-hd.png', title: 'Italian Marble Mirror Polish' },
    { src: 'images/gallery-1.png', title: 'High Gloss Living Room Marble' },
    { src: 'images/gallery-2.png', title: 'Premium Katni Floor Restoration' },
    { src: 'images/gallery-3.png', title: 'Precision Staircase Polishing' },
    { src: 'images/gallery-4.png', title: 'Commercial Hall Gloss Finish' },
    { src: 'images/gallery-5.png', title: 'Granite Floor Diamond Buffing' },
    { src: 'images/gallery-6.png', title: 'Seamless Joint Grinding' },
    { src: 'images/gallery-7.png', title: 'Luxury Villa Marble Restoration' },
    { src: 'images/gallery-8.png', title: 'Stain Removal & Sealant Shield' },
    { src: 'images/gallery-9.png', title: 'Kota & Katni Surface Refinishing' }
];

let currentHeroSlideIndex = 0;
let heroAutoSlideTimer = null;
let activeLightboxMode = 'gallery'; // 'gallery' or 'hero'

let currentLightboxIndex = 0;
const WHATSAPP_NUMBER = '916303415748';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initStatsCounter();
    initMobileNav();
    initBottomNavScroll();
    initHeroSlider();
    initRotatingHeadlines();
    initTimedPromoPopup();
});

// --- DYNAMIC ROTATING HEADLINE SWITCHER ---
function initRotatingHeadlines() {
    const textItems = [
        "Advanced Diamond Polishing Technology",
        "100% Mirror Finish Marble Care",
        "Italian & Kota Marble Restoration",
        "Stain & Scratch Elimination Experts"
    ];
    const targetEl = document.getElementById('rotatingTextDynamic');
    if (!targetEl) return;

    let index = 0;
    setInterval(() => {
        index = (index + 1) % textItems.length;
        targetEl.style.opacity = '0';
        targetEl.style.transform = 'translateY(-15px)';
        setTimeout(() => {
            targetEl.textContent = textItems[index];
            targetEl.style.opacity = '1';
            targetEl.style.transform = 'translateY(0)';
        }, 300);
    }, 3000);
}

// --- TIMED INQUIRY PROMO POPUP (5 SECONDS) ---
function initTimedPromoPopup() {
    if (sessionStorage.getItem('promoPopupShown')) return;
    
    setTimeout(() => {
        const modal = document.getElementById('quoteModalOverlay');
        if (modal && !modal.classList.contains('open')) {
            openQuoteModal('Instant Consultation');
            sessionStorage.setItem('promoPopupShown', 'true');
        }
    }, 7000);
}

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
    activeLightboxMode = 'gallery';
    
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

function openHeroLightbox(index) {
    if (index < 0 || index >= heroSliderData.length) return;
    currentHeroSlideIndex = index;
    activeLightboxMode = 'hero';
    
    const overlay = document.getElementById('lightboxOverlay');
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const counter = document.getElementById('lightboxCounter');

    img.src = heroSliderData[currentHeroSlideIndex].src;
    title.textContent = heroSliderData[currentHeroSlideIndex].title;
    counter.textContent = `${currentHeroSlideIndex + 1} / ${heroSliderData.length}`;

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
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

function closeLightboxOnOverlay(event) {
    if (event.target.id === 'lightboxOverlay' || event.target.classList.contains('lightbox-image-container')) {
        closeLightbox();
    }
}

function nextLightboxImage() {
    if (activeLightboxMode === 'hero') {
        currentHeroSlideIndex = (currentHeroSlideIndex + 1) % heroSliderData.length;
    } else {
        currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
    }
    updateLightboxContent();
}

function prevLightboxImage() {
    if (activeLightboxMode === 'hero') {
        currentHeroSlideIndex = (currentHeroSlideIndex - 1 + heroSliderData.length) % heroSliderData.length;
    } else {
        currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
    }
    updateLightboxContent();
}

function updateLightboxContent() {
    const img = document.getElementById('lightboxImg');
    const title = document.getElementById('lightboxTitle');
    const counter = document.getElementById('lightboxCounter');

    const data = (activeLightboxMode === 'hero') ? heroSliderData : galleryData;
    const currentIndex = (activeLightboxMode === 'hero') ? currentHeroSlideIndex : currentLightboxIndex;

    img.style.opacity = '0.4';
    img.style.transform = 'scale(0.96)';
    setTimeout(() => {
        img.src = data[currentIndex].src;
        title.textContent = data[currentIndex].title;
        counter.textContent = `${currentIndex + 1} / ${data.length}`;
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    }, 150);
}

// --- HERO SLIDER CAROUSEL ENGINE ---
function initHeroSlider() {
    const track = document.getElementById('heroSliderTrack');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    const dotsContainer = document.getElementById('heroSliderDots');
    const wrapper = document.getElementById('heroSliderWrapper');

    if (!track || !wrapper) return;

    // Build pagination dots
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        heroSliderData.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.className = `hero-dot ${i === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goToHeroSlide(i);
            });
            dotsContainer.appendChild(dot);
        });
    }

    // Side-to-Side Navigation button clicks
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            prevHeroSlide();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            nextHeroSlide();
        });
    }

    // Touch Swipe Event Listeners for Mobile Compatibility
    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        pauseHeroAutoSlide();
    }, { passive: true });

    wrapper.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeDistance = touchEndX - touchStartX;
        if (swipeDistance < -40) {
            nextHeroSlide();
        } else if (swipeDistance > 40) {
            prevHeroSlide();
        }
        startHeroAutoSlide();
    }, { passive: true });

    // Pause auto slide on mouse hover
    wrapper.addEventListener('mouseenter', pauseHeroAutoSlide);
    wrapper.addEventListener('mouseleave', startHeroAutoSlide);

    // Initial render and start auto slide
    goToHeroSlide(0);
    startHeroAutoSlide();
}

function goToHeroSlide(index) {
    if (index < 0) index = heroSliderData.length - 1;
    if (index >= heroSliderData.length) index = 0;

    currentHeroSlideIndex = index;
    const track = document.getElementById('heroSliderTrack');
    const counter = document.getElementById('heroSlideCounter');
    const dots = document.querySelectorAll('.hero-dot');

    if (track) {
        track.style.transform = `translateX(-${currentHeroSlideIndex * 100}%)`;
    }

    if (counter) {
        counter.textContent = `${currentHeroSlideIndex + 1} / ${heroSliderData.length}`;
    }

    dots.forEach((dot, i) => {
        if (i === currentHeroSlideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    const slides = document.querySelectorAll('.hero-slide-item');
    slides.forEach((slide, i) => {
        if (i === currentHeroSlideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextHeroSlide() {
    goToHeroSlide(currentHeroSlideIndex + 1);
}

function prevHeroSlide() {
    goToHeroSlide(currentHeroSlideIndex - 1);
}

function startHeroAutoSlide() {
    pauseHeroAutoSlide();
    heroAutoSlideTimer = setInterval(() => {
        nextHeroSlide();
    }, 3500);
}

function pauseHeroAutoSlide() {
    if (heroAutoSlideTimer) {
        clearInterval(heroAutoSlideTimer);
        heroAutoSlideTimer = null;
    }
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
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .reveal-rubber');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('reveal-active');
                    if (entry.target.classList.contains('reveal-rubber')) {
                        entry.target.classList.add('animate-rubber');
                    }
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
