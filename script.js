/* ==========================================================================
   HARSHA MARBLE POLISHING SERVICE - MASTER SCRIPT
   ========================================================================== */

// --- GALLERY DATA (35 High-Resolution Success Stories & Projects) ---
const galleryData = [
    {
        src: 'images/gallery-16.png',
        tag: 'Diamond Polishing',
        title: 'Diamond Polishing',
        description: 'Restore the Freshness and Mirror Reflection of Your Marble Surfaces',
        details: 'Professional multi-stage diamond polishing process for high-end Italian and Katni marble floors. Eliminates surface dullness, levels lipage, and provides a crisp factory mirror reflection.',
        features: ['100% Mirror Reflection Gloss', 'Dust-Free Wet Diamond Grinding', '5-Year Stain Shield Protection']
    },
    {
        src: 'images/gallery-17.png',
        tag: 'Tiles Cleaning Services',
        title: 'Tiles Cleaning Services',
        description: 'Restore the Freshness and Shine of Your Tiled Surfaces',
        details: 'Deep chemical cleaning and diamond buffing for high-traffic hallway tile & marble floors. Cleans deep grime in grout lines and protects against future discoloration.',
        features: ['Deep Grout & Surface Cleaning', 'Non-Slip Satin Buffing', 'Anti-Discoloration Coating']
    },
    {
        src: 'images/gallery-18.png',
        tag: 'Granite Polishing',
        title: 'Granite Polishing',
        description: 'Experience the Elegance of Polished Granite & Marble Living Rooms',
        details: 'Specialized diamond refinishing for residential granite & living room marble. Enhances rich natural stone veins and creates a deep reflective shine.',
        features: ['Rich Color Vein Polish', 'Heavy Diamond Buffing', 'Stain-Resistant Sealant']
    },
    {
        src: 'images/gallery-19.png',
        tag: 'Kota Stone Polishing',
        title: 'Kota Stone Polishing',
        description: 'Restore the Timeless Beauty of Your Kota Stone Floors',
        details: 'Multi-stage diamond grinding specifically engineered for Kota stone floors. Removes oil marks, levels uneven tile joints, and brings a smooth glossy green finish.',
        features: ['Rough Edge Joint Leveling', 'Smooth Satin Green Finish', 'Oil & Stain Barrier']
    },
    {
        src: 'images/gallery-20.png',
        tag: 'Marble Floor Refinishing',
        title: 'Marble Floor Refinishing Services',
        description: 'Restore the Timeless Beauty of Your Marble Floors Marble',
        details: 'Full floor restoration package including scratch removal, resin pinhole filling, and high-grit diamond powder buffing for long-lasting luxury shine.',
        features: ['Pinhole & Crack Resin Filling', 'High-Grit Powder Buffing', 'Scratch & Etch Removal']
    },
    {
        src: 'images/gallery-21.png',
        tag: 'Mosaic Floor Polishing',
        title: 'Mosaic Floor Polishing',
        description: 'Experience the Elegance of Polished Mosaic & Terrazzo Flooring',
        details: 'Traditional mosaic floor grinding and diamond buffing that brings out bright vibrant chips and a smooth reflective mirror surface.',
        features: ['Vibrant Chip Enhancement', 'Smooth Joint Grinding', 'Durable Protective Sealer']
    },
    {
        src: 'images/gallery-22.png',
        tag: 'Granite Floor Polishing',
        title: 'Granite Floor Polishing',
        description: 'Deep Mirror Gloss Refinishing for Dark Granite Surfaces',
        details: 'High-speed diamond polishing for black and colored granite floors. Restores rich dark gloss and prevents dull footprints.',
        features: ['Dark Stone Deep Mirror Shine', 'Footprint & Wear Resistance', 'Industrial Machine Grade']
    },
    {
        src: 'images/gallery-23.png',
        tag: 'Marble Floor Polishing',
        title: 'Expert Indian & Italian Marble',
        description: 'Experience the Elegance of Polished Marble Floors Marble floors',
        details: 'Customized diamond honing and crystallization treatment tailored for white Statuario, Katni, Kota, and Italian marble varieties.',
        features: ['Statuario & Italian Specialist', 'Thermo-Crystallization Shield', '100% Mirror Reflection']
    },
    {
        src: 'images/gallery-24.png',
        tag: 'Stain Removal & Shield',
        title: '100% Stain & Scratch Elimination',
        description: 'Deep Acid & Water Mark Removal with Protective Nano-Sealer',
        details: 'Specialized chemical Poultice treatment that extracts stubborn coffee, oil, rust, and water stains from deep within stone pores.',
        features: ['Deep Pore Chemical Extraction', 'Hydrophobic Nano Sealer', 'Acid Mark Removal']
    },
    {
        src: 'images/gallery-25.png',
        tag: 'Granite Polishing',
        title: 'Granite Surface Refinishing',
        description: 'High-Durability Diamond Buffing for Commercial & Residential Granite',
        details: 'Restores hard-wearing granite stone in kitchen counters and living room floors with high-grit diamond pastes and sealer shields.',
        features: ['Counter & Floor Refinishing', 'High-Grit Diamond Pastes', 'Heat & Stain Shield']
    },
    {
        src: 'images/gallery-26.png',
        tag: 'Villa Floor Care',
        title: 'Villa Lobby Mirror Polish',
        description: 'Luxury Chandelier Reflection for Villa Foyer Floors',
        details: 'Comprehensive restoration for villa entrances and main living halls, creating brilliant clear reflections under ambient lighting.',
        features: ['Chandelier Light Reflection', 'Seamless Joint Polish', 'Luxury Residence Care']
    },
    {
        src: 'images/gallery-27.png',
        tag: 'Kota Stone Polishing',
        title: 'Kota Stone Floor Care',
        description: 'Smooth Green & Blue Kota Stone Surface Treatment',
        details: 'Removes dullness and rough surfaces from Kota stone slabs, leaving a clean, smooth, and stain-resistant surface.',
        features: ['Smooth Non-Porous Surface', 'Natural Stone Color Boost', 'Long Wear Protection']
    },
    {
        src: 'images/gallery-28.png',
        tag: 'Seamless Joint Grinding',
        title: 'Seamless Joint Grinding & Epoxy',
        description: 'Flush Surface Leveling & Invisible Epoxy Resin Filling',
        details: 'Replaces dirty grout with color-matched resin epoxy, then flushes tile joints flat for a continuous seamless marble floor appearance.',
        features: ['Color-Matched Resin Epoxy', 'Flat Seamless Joint Polish', 'No Grout Dirt Accumulation']
    },
    {
        src: 'images/gallery-29.png',
        tag: 'Dust-Free Process',
        title: 'Dust-Free Heavy Diamond Buffing',
        description: 'Clean Wet Diamond Polishing Process for Indoor Spaces',
        details: 'State-of-the-art wet diamond polishing equipment ensures zero airborne dust during indoor residential floor restoration.',
        features: ['Zero Airborne Dust', 'Eco Slurry Extraction', 'Quiet Smooth Operation']
    },
    {
        src: 'images/gallery-30.png',
        tag: 'Residential Marble Care',
        title: 'Mirror Shine Residential Hall',
        description: 'Complete Living Room & Dining Hall Rejuvenation',
        details: 'Full floor diamond treatment removing scratches and providing a crystal-clear mirror finish across all living spaces.',
        features: ['Complete Home Package', 'Diamond Powder Buffing', 'Durable Reflection']
    },
    {
        src: 'images/gallery-31.png',
        tag: 'Luxury Marble Care',
        title: 'Luxury Interior Marble Restoration',
        description: 'Restores Factory Original Gloss to Imported Italian Marbles',
        details: 'Handcrafted mirror buffing for rare Italian imported marble varieties, restoring original factory gloss and richness.',
        features: ['Imported Italian Stone Care', 'Factory Gloss Restoration', 'UV Protection Shield']
    },
    {
        src: 'images/gallery-32.png',
        tag: 'Crystallization Treatment',
        title: 'Crystallization Shine Shield',
        description: 'Thermo-Chemical Hardening & Ultra Glass Mirror Finish',
        details: 'Thermo-chemical crystallization creates a hard glass-like micro-layer on top of marble, making it scratch-resistant and highly reflective.',
        features: ['Glass Hardened Micro-Layer', 'Scratch Resistant Shield', 'Ultra High Reflection']
    },
    {
        src: 'images/gallery-33.png',
        tag: 'Protective Sealer Shield',
        title: 'High Gloss Protection Shield',
        description: 'Penetrating Nano-Sealer Shield Against Oil & Acid Spills',
        details: 'Penetrating hydrophobic nano-sealant shields polished marble from spills, lemon acid marks, and daily wear.',
        features: ['Hydrophobic Nano Barrier', 'Anti-Acid Etch Sealer', '5-Year Protection']
    },
    {
        src: 'images/gallery-34.png',
        tag: 'Italian White Marble',
        title: 'Italian White Marble Polish',
        description: 'Snow-White Shine Restoration for Statuario & Carrara Marble',
        details: 'Custom non-yellowing polishing slurry tailored for white Statuario and Carrara Italian marbles, restoring pure snow-white shine.',
        features: ['Pure Snow-White Gloss', 'Non-Yellowing Formula', 'Ultra Smooth Surface']
    },
    {
        src: 'images/gallery-35.png',
        tag: 'Premium Floor Refinishing',
        title: 'Premium Floor Refinishing',
        description: 'End-to-End Stone Restoration & High Mirror Finish Treatment',
        details: 'End-to-end stone restoration service for residential and commercial spaces. Elevates overall property aesthetics and value.',
        features: ['End-to-End Stone Care', 'Property Value Elevation', '100% Satisfaction Guarantee']
    },
    {
        src: 'images/gallery-1.png',
        tag: 'Italian Marble Care',
        title: 'Italian Marble Gloss Masterclass',
        description: 'High-End Diamond Polishing for Italian Beige & White Marble',
        details: 'High-end diamond polishing for Italian beige and white marble, restoring rich depth and crystal reflection.',
        features: ['Rich Depth Gloss', 'Italian Stone Specialist', 'Mirror Finish']
    },
    {
        src: 'images/gallery-2.png',
        tag: 'Mirror Finish Floor',
        title: 'Mirror Finish Living Room',
        description: 'Flawless Reflection for Residential Living Room Interiors',
        details: 'Full living room marble floor treatment with Italian diamond abrasives and thermo-crystallization hardening.',
        features: ['Thermo-Crystallization', 'Living Room Specialist', '100% Mirror Reflection']
    },
    {
        src: 'images/gallery-3.png',
        tag: 'Katni Stone Care',
        title: 'High Gloss Katni Floor Care',
        description: 'Smooth Slick Shine Restoration for Katni Marble Floors',
        details: 'Expert Katni floor restoration removing surface dullness and creating a smooth, slick mirror shine.',
        features: ['Smooth Slick Shine', 'Katni Stone Specialist', 'Stain Protection']
    },
    {
        src: 'images/gallery-4.png',
        tag: 'Steps & Staircase Polish',
        title: 'Precision Steps & Staircase Polish',
        description: 'Precision Corner & Riser Hand Polishing for Stairs',
        details: 'Handheld diamond angle grinding for staircase steps, edges, and risers with protective anti-slip clear sealer.',
        features: ['Handheld Precision', 'Anti-Slip Clear Sealer', 'Smooth Edge Polish']
    },
    {
        src: 'images/gallery-5.png',
        tag: 'Commercial Floor Care',
        title: 'Commercial Hall Mirror Shine',
        description: 'High-Capacity Industrial Polishing for Large Commercial Halls',
        details: 'Industrial machine polishing for large banquet halls, office lobbies, and commercial complexes.',
        features: ['Large Area Coverage', 'Industrial Machine Grade', 'Durable High Gloss']
    },
    {
        src: 'images/gallery-6.png',
        tag: 'Granite Polishing',
        title: 'Granite Floor Diamond Buffing',
        description: 'Restore Deep Gloss & Dark Reflection to Hard Granite Floors',
        details: 'Heavy-duty granite diamond polishing removing scratches and delivering a deep mirror shine on dark granite.',
        features: ['Hard Granite Specialist', 'Deep Dark Mirror Gloss', 'Scratch Removal']
    },
    {
        src: 'images/gallery-7.png',
        tag: 'Joint Grinding',
        title: 'Seamless Joint Grinding & Epoxy',
        description: 'Level Floor Surface Grinding & Seamless Epoxy Filling',
        details: 'Flushes tile joints even and seals with color-matched resin epoxy for a continuous seamless marble floor.',
        features: ['Flush Joint Leveling', 'Color-Matched Epoxy', 'Dirt-Free Surface']
    },
    {
        src: 'images/gallery-8.png',
        tag: 'Villa Floor Care',
        title: 'Villa Flooring Restoration',
        description: 'Restore the Timeless Luxury of Villa Interiors',
        details: 'Comprehensive restoration for villa hall marble floors, bringing back brilliant reflections and elegance.',
        features: ['Brilliant Reflection', 'Villa Interior Specialist', 'Long-Lasting Shine']
    },
    {
        src: 'images/gallery-9.png',
        tag: 'Stain Protection',
        title: 'Stain Shield & Sealant Protection',
        description: 'Deep Chemical Stain Removal & Protective Nano-Shield',
        details: 'Cleans coffee, wine, oil, and water marks and applies penetrating hydrophobic nano-sealing shield.',
        features: ['Hydrophobic Nano-Shield', 'Chemical Stain Removal', '5-Year Protection']
    },
    {
        src: 'images/gallery-10.png',
        tag: 'White Marble Care',
        title: 'White Marble Diamond Buffing',
        description: 'Restore Pure Snow-White Shine to White Marble Floors',
        details: 'Non-yellowing white marble polishing slurry removes stains and enhances bright snow-white brilliance.',
        features: ['Snow White Brilliance', 'Non-Yellowing Formula', 'Mirror Gloss']
    },
    {
        src: 'images/gallery-11.png',
        tag: 'High Gloss Buffing',
        title: 'High Gloss Diamond Powder Polish',
        description: 'Ultra High Gloss Diamond Powder Finish for Natural Stone',
        details: 'Final stage high-grit diamond powder buffing creates a glass-smooth mirror reflective surface.',
        features: ['High-Grit Diamond Powder', 'Glass Smooth Surface', 'Super Reflective']
    },
    {
        src: 'images/gallery-12.png',
        tag: 'Protective Sealer',
        title: 'Protective Sealer Shield Coating',
        description: 'Penetrating Sealant Shield Against Daily Wear & Acid Spills',
        details: 'Deep penetrating sealer seals micro-pores, preventing water absorption, etching, and dullness.',
        features: ['Pore Penetrating Sealer', 'Anti-Etching Shield', 'Easy Maintenance']
    },
    {
        src: 'images/gallery-13.png',
        tag: 'Katni Marble Care',
        title: 'Katni Surface Refinishing',
        description: 'Restore the Timeless Beauty of Katni Marble Flooring',
        details: 'Specialized honing and crystallization process designed to bring out the warm natural tones of Katni marble.',
        features: ['Natural Warm Tones', 'Katni Stone Care', 'Smooth Mirror Surface']
    },
    {
        src: 'images/gallery-14.png',
        tag: 'Lobby Floor Care',
        title: 'Lobby Floor Mirror Reflection',
        description: 'High-Impact Mirror Shine for Reception & Entrance Lobbies',
        details: 'Creates an inviting high-gloss first impression for hotel reception lobbies and office entrances.',
        features: ['High-Impact Gloss', 'Entrance Lobby Care', 'Heavy Footprint Protection']
    },
    {
        src: 'images/gallery-15.png',
        tag: 'Reflective Marble Care',
        title: 'Reflective Marble Restoration',
        description: 'Experience Flawless Reflective Shine Across Every Room',
        details: 'Complete home diamond polishing service bringing factory-new shine to Italian, Kota, Katni, and granite floors.',
        features: ['Factory-New Reflection', 'All Stone Types', '100% Satisfaction Guarantee']
    }
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
let currentDetailIndex = 0;
const WHATSAPP_NUMBER = '916303415748';

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderGalleryGrids();
    initScrollAnimations();
    initStatsCounter();
    initMobileNav();
    initBottomNavScroll();
    initHeroSlider();
    initRotatingHeadlines();
    initTimedPromoPopup();
    initHeroBackgroundVideo();
});

// --- RENDER DYNAMIC GALLERY GRIDS (Matching Reference Card Design) ---
function renderGalleryGrids() {
    const fullContainer = document.getElementById('galleryGridContainer');
    const homeContainer = document.getElementById('homeGalleryGridContainer');

    const buildHTML = (items) => {
        return items.map((item, index) => `
            <div class="gallery-card-box reveal-up active" onclick="openDetailModal(${index})">
                <div class="gallery-card-bg">
                    <img src="${item.src}" alt="${item.title}" loading="lazy">
                    <div class="gallery-card-scrim"></div>
                </div>
                <div class="gallery-card-content">
                    <div class="gallery-card-tag-wrapper">
                        <span class="gallery-card-tag">${item.tag || 'Marble Polishing'}</span>
                        <span class="tag-accent-line"></span>
                    </div>
                    <h3 class="gallery-card-title">${item.title}</h3>
                    <p class="gallery-card-desc">${item.description}</p>
                    <div class="gallery-card-action">
                        <button class="btn-read-more-pill" onclick="event.stopPropagation(); openDetailModal(${index})">
                            <i class="fa-solid fa-plus"></i> Read More
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    };

    if (fullContainer) {
        fullContainer.innerHTML = buildHTML(galleryData);
    }
    if (homeContainer) {
        homeContainer.innerHTML = buildHTML(galleryData);
    }
}

// --- HERO BACKGROUND VIDEO AUTOPLAY HANDLER ---
function initHeroBackgroundVideo() {
    const video = document.querySelector('.hero-bg-video');
    if (!video) return;
    
    // Ensure video is muted and playsinline
    video.muted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Autoplay prevented by browser, retrying on user interaction:', error);
            const enableVideoPlay = () => {
                video.play();
                document.removeEventListener('touchstart', enableVideoPlay);
                document.removeEventListener('click', enableVideoPlay);
            };
            document.addEventListener('touchstart', enableVideoPlay, { once: true });
            document.addEventListener('click', enableVideoPlay, { once: true });
        });
    }
}

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

// --- PROJECT & SERVICE DETAIL MODAL HANDLERS ---
function openDetailModal(index) {
    if (index < 0 || index >= galleryData.length) return;
    currentDetailIndex = index;
    const item = galleryData[index];

    const overlay = document.getElementById('projectDetailModalOverlay');
    const img = document.getElementById('detailModalImg');
    const tag = document.getElementById('detailModalTag');
    const subTag = document.getElementById('detailModalSubTag');
    const title = document.getElementById('detailModalTitle');
    const details = document.getElementById('detailModalDetails');
    const featuresList = document.getElementById('detailModalFeatures');

    if (!overlay) {
        openLightbox(index);
        return;
    }

    if (img) img.src = item.src;
    if (tag) tag.textContent = item.tag || 'Marble Polishing';
    if (subTag) subTag.textContent = `${item.tag || 'Marble Service'} Showcase`;
    if (title) title.textContent = item.title;
    if (details) details.textContent = item.details || item.description;

    if (featuresList) {
        const features = item.features || [
            '100% Mirror Reflection Gloss',
            'Dust-Free Diamond Grinding',
            '5-Year Protection Shield'
        ];
        featuresList.innerHTML = features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('');
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectDetailModal() {
    const overlay = document.getElementById('projectDetailModalOverlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
}

function closeProjectDetailOnOverlay(event) {
    if (event.target.id === 'projectDetailModalOverlay') {
        closeProjectDetailModal();
    }
}

function requestQuoteForCurrentDetail() {
    const item = galleryData[currentDetailIndex];
    const serviceName = item ? item.title : 'Marble Polishing';
    const message = `Hello Harsha Marble Polishing Service! 👋%0A%0AI am interested in your service: *${encodeURIComponent(serviceName)}*.%0APlease provide a free site inspection & price estimate.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}
