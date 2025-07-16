// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Gallery functionality
const galleryThumbs = document.querySelectorAll('.gallery-thumb');
const mainGalleryImg = document.querySelector('.main-gallery-img');

galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        // Remove active class from all thumbs
        galleryThumbs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked thumb
        thumb.classList.add('active');
        // Change main image
        mainGalleryImg.src = thumb.src;
        mainGalleryImg.alt = thumb.alt;
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.querySelectorAll('section').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Language Translation System
const translations = {
    es: {
        // Navigation
        'nav-inicio': 'Inicio',
        'nav-about': 'Sobre Nosotros',
        'nav-accommodation': 'Alojamiento',
        'nav-services': 'Servicios',
        'nav-location': 'Ubicación',
        'nav-contact': 'Contacto',
        
        // Hero Section
        'hero-badge': '⭐ Calificado 4.8/5 por huéspedes',
        'hero-title': 'Bienvenido a Hostal Sonia',
        'hero-subtitle': 'Tu hogar en el corazón de Copacabana, Bolivia',
        'hero-wifi': 'WiFi Gratuito',
        'hero-breakfast': 'Desayuno Incluido',
        'hero-location': 'Ubicación Perfecta',
        'hero-book': 'Reservar Ahora',
        
        // About Section
        'about-title': 'Sobre Nosotros',
        'about-text1': 'Bonito y cómodo hostal ubicado en el centro de Copacabana, contamos con habitaciones simples y dobles para una estancia perfecta.',
        'about-text2': 'Hostal Sonia ofrece alojamiento en Copacabana con acceso gratuito a WiFi y desayuno diario incluido.',
        'about-text3': 'Ubicado a 200 metros de la plaza principal y a 100 metros de la Catedral de Nuestra Señora de Copacabana. Las Horcas del Inca están a 200 metros del Hostal Sonia, mientras que el Mercado de Copacabana está a 400 metros de la propiedad.',
        'feature1-title': 'Habitaciones Cómodas',
        'feature1-text': 'Habitaciones equipadas con TV con canales por cable, vistas a las montañas o jardín, y baño privado.',
        'feature2-title': 'Restaurante',
        'feature2-text': 'Restaurante en el lugar y desayuno incluido para comenzar bien tu día.',
        'feature3-title': 'Estacionamiento Gratuito',
        'feature3-text': 'Estacionamiento privado gratuito y servicios de transporte disponibles.',
        
        // Accommodations
        'accommodation-title': 'Alojamiento',
        'room-badge-popular': 'Opción Popular',
        'room-badge-value': 'Mejor Valor',
        'room-badge-spacious': 'Espacioso',
        'room-badge-family': 'Familiar',
        'room1-title': 'Habitación Doble con Baño Privado',
        'room1-desc': 'Una habitación privada cómoda con cama doble, baño privado, ducha caliente, wifi, calefacción, TV y cocina compartida.',
        'room2-title': '2 Camas con Baño Privado',
        'room2-desc': 'Una habitación cómoda y espaciosa con baño privado, ducha caliente, calefacción, wifi, TV, desayuno incluido y cocina compartida.',
        'room3-title': '3 Camas con Baño Privado',
        'room3-desc': 'UNA CÓMODA HABITACIÓN DE TRES CAMAS PRIVADA con baño privado, ducha caliente, calefacción, wifi, TV, desayuno incluido y cocina compartida.',
        'room4-title': 'Habitación Familiar 3 Camas',
        'room4-desc': 'Una habitación cómoda y espaciosa que tiene 1 cama doble y 1 cama individual con baño privado, ducha caliente, calefacción, wifi, TV, desayuno incluido y cocina compartida.',
        'places': 'Número de plazas:',
        'private-bathroom': 'Baño Privado',
        'price-note': 'Precios por habitación - Impuestos incluidos',
        'standard': 'Estándar',
        'book-now': 'Reservar Ahora',
        
        // Testimonials
        'testimonials-title': 'Lo que dicen nuestros huéspedes',
        'rating-based': 'Basado en reseñas de Google',
        'reviews-link': 'Ver todas las reseñas',
        
        // Services
        'services-title': 'Nuestros Servicios',
        'services-free': 'Servicios Gratuitos',
        'services-general': 'Servicios Generales',
        'services-amenities': 'Comodidades',
        'service-wifi': 'WiFi Gratuito',
        'service-breakfast': 'Desayuno Incluido',
        'service-parking': 'Estacionamiento Gratuito',
        'service-map': 'Mapa de la Ciudad Gratuito',
        'service-luggage': 'Depósito de Equipaje',
        'service-reception': 'Recepción 24 horas',
        'service-exchange': 'Cambio de Moneda',
        'service-cleaning': 'Limpieza de Habitaciones',
        'service-tv': 'TV por Cable',
        'service-books': 'Intercambio de Libros',
        'service-shower': 'Ducha con Agua Caliente',
        'service-views': 'Vistas Panorámicas',
        'service-common': 'Sala Común',
        'service-kitchen': 'Cocina',
        'service-laundry': 'Lavandería',
        
        // Policies
        'policies-title': 'Políticas y Condiciones',
        'policy-checkin': 'Check-in / Check-out',
        'policy-checkin-text': 'Check-in: 13:00 - 18:00<br>Check-out: Antes de las 11:00',
        'policy-cancellation': 'Cancelación',
        'policy-cancellation-text': '3 días antes de la llegada. En caso de cancelación tardía, se cobrará la primera noche.',
        'policy-payment': 'Pago',
        'policy-payment-text': 'Al llegar: efectivo, tarjetas de crédito y débito. Impuestos incluidos.',
        'policy-children': 'Niños',
        'policy-children-text': 'Niños permitidos: 1 a 5 años<br>No se permiten mascotas',
        
        // Location
        'location-title': 'Nuestra Ubicación',
        'location-heart': 'En el Corazón de Copacabana',
        'location-nearby': 'Cerca de:',
        'attraction-plaza': 'Plaza Principal',
        'attraction-cathedral': 'Catedral de Nuestra Señora de Copacabana',
        'attraction-horcas': 'Horcas del Inca',
        'attraction-market': 'Mercado de Copacabana',
        'attraction-lake': 'Lago Titicaca',
        'attraction-port': 'Puerto para Isla del Sol',
        'location-walking': 'Todo accesible a pie',
        'location-transport': 'Transporte público cercano',
        'location-view': 'Vista a las montañas',
        'location-map-title': 'Encuentra Hostal Sonia',
        'location-directions': 'Obtén direcciones precisas desde tu ubicación',
        
        // Contact
        'contact-title': 'Contacto',
        'contact-info': 'Información de Contacto',
        'contact-phone': 'Teléfono',
        'contact-email': 'Email',
        'contact-hours': 'Horario',
        'contact-hours-text': 'Siempre abierto',
        'contact-address': 'Dirección',
        'contact-languages': 'Idiomas',
        'contact-languages-text': 'Hablamos Español, English y Français',
        'contact-rating': 'Calificación',
        'contact-additional': 'Información Adicional',
        'contact-reception': 'Horarios de Atención',
        'contact-reception-text': 'Recepción 24h • Check-in: 13:00-18:00 • Check-out: 11:00',
        'contact-wifi': 'WiFi & Servicios',
        'contact-wifi-text': 'Internet gratuito • Desayuno incluido • Estacionamiento gratis',
        'contact-ready': '¿Listo para reservar?',
        'contact-book-text': 'Visita nuestro perfil en Hostelworld para hacer tu reserva',
        'contact-book-link': 'Reservar en Hostelworld'
    },
    en: {
        // Navigation
        'nav-inicio': 'Home',
        'nav-about': 'About Us',
        'nav-accommodation': 'Accommodation',
        'nav-services': 'Services',
        'nav-location': 'Location',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-badge': '⭐ Rated 4.8/5 by guests',
        'hero-title': 'Welcome to Hostal Sonia',
        'hero-subtitle': 'Your home in the heart of Copacabana, Bolivia',
        'hero-wifi': 'Free WiFi',
        'hero-breakfast': 'Breakfast Included',
        'hero-location': 'Perfect Location',
        'hero-book': 'Book Now',
        
        // About Section
        'about-title': 'About Us',
        'about-text1': 'Beautiful and comfortable hostel located in the center of Copacabana, we have single and double rooms for a perfect stay.',
        'about-text2': 'Hostal Sonia offers accommodation in Copacabana with free WiFi access and daily breakfast included.',
        'about-text3': 'Located 200 meters from the main square and 100 meters from the Cathedral of Our Lady of Copacabana. The Horcas del Inca are 200 meters from Hostal Sonia, while the Copacabana Market is 400 meters from the property.',
        'feature1-title': 'Comfortable Rooms',
        'feature1-text': 'Rooms equipped with cable TV, mountain or garden views, and private bathroom.',
        'feature2-title': 'Restaurant',
        'feature2-text': 'On-site restaurant and breakfast included to start your day right.',
        'feature3-title': 'Free Parking',
        'feature3-text': 'Free private parking and transportation services available.',
        
        // Accommodations
        'accommodation-title': 'Accommodations',
        'room-badge-popular': 'Popular Choice',
        'room-badge-value': 'Best Value',
        'room-badge-spacious': 'Spacious',
        'room-badge-family': 'Family Friendly',
        'room1-title': 'Double Bed Private Bathroom',
        'room1-desc': 'A nice and comfortable private double bed room with private bathroom, hot shower, wifi, heater in the room, tv and a shared kitchen you can use.',
        'room2-title': '2 Beds Private Bathroom',
        'room2-desc': 'A nice, comfortable and spacious quiet room with private bathroom, hot shower, heater, wifi, tv, breakfast included and a shared kitchen you can use.',
        'room3-title': '3 Bed Private Bathroom',
        'room3-desc': 'A COMFORTABLE THREE BEDS PRIVATE ROOM with private bathroom, hot shower, heater, wifi, tv, breakfast included and a shared kitchen you can use.',
        'room4-title': '3 Bed Family Room Bathroom',
        'room4-desc': 'A nice, comfortable and spacious quiet room that has 1 double bed and 1 single bed with private bathroom, hot shower, heater, wifi, tv, breakfast included and a shared kitchen you can use.',
        'places': 'Number of places:',
        'private-bathroom': 'Private Bathroom',
        'price-note': 'Prices are per room - Taxes included',
        'standard': 'Standard',
        'book-now': 'Book Now',
        
        // Testimonials
        'testimonials-title': 'What our guests say',
        'rating-based': 'Based on Google reviews',
        'reviews-link': 'View all reviews',
        
        // Services
        'services-title': 'Our Services',
        'services-free': 'Free Services',
        'services-general': 'General Services',
        'services-amenities': 'Amenities',
        'service-wifi': 'Free WiFi',
        'service-breakfast': 'Breakfast Included',
        'service-parking': 'Free Parking',
        'service-map': 'Free City Map',
        'service-luggage': 'Luggage Storage',
        'service-reception': '24 Hour Reception',
        'service-exchange': 'Currency Exchange',
        'service-cleaning': 'Room Cleaning',
        'service-tv': 'Cable TV',
        'service-books': 'Book Exchange',
        'service-shower': 'Hot Water Shower',
        'service-views': 'Panoramic Views',
        'service-common': 'Common Room',
        'service-kitchen': 'Kitchen',
        'service-laundry': 'Laundry',
        
        // Policies
        'policies-title': 'Policies and Conditions',
        'policy-checkin': 'Check-in / Check-out',
        'policy-checkin-text': 'Check-in: 1:00 PM - 6:00 PM<br>Check-out: Before 11:00 AM',
        'policy-cancellation': 'Cancellation',
        'policy-cancellation-text': '3 days before arrival. In case of late cancellation, the first night will be charged.',
        'policy-payment': 'Payment',
        'policy-payment-text': 'On arrival: cash, credit and debit cards. Taxes included.',
        'policy-children': 'Children',
        'policy-children-text': 'Children allowed: 1 to 5 years<br>Pets not allowed',
        
        // Location
        'location-title': 'Our Location',
        'location-heart': 'In the Heart of Copacabana',
        'location-nearby': 'Near:',
        'attraction-plaza': 'Main Square',
        'attraction-cathedral': 'Cathedral of Our Lady of Copacabana',
        'attraction-horcas': 'Horcas del Inca',
        'attraction-market': 'Copacabana Market',
        'attraction-lake': 'Lake Titicaca',
        'attraction-port': 'Port to Isla del Sol',
        'location-walking': 'Everything walkable',
        'location-transport': 'Public transport nearby',
        'location-view': 'Mountain views',
        'location-map-title': 'Find Hostal Sonia',
        'location-directions': 'Get precise directions from your location',
        
        // Contact
        'contact-title': 'Contact',
        'contact-info': 'Contact Information',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'contact-hours': 'Hours',
        'contact-hours-text': 'Always open',
        'contact-address': 'Address',
        'contact-languages': 'Languages',
        'contact-languages-text': 'We speak Spanish, English and French',
        'contact-rating': 'Rating',
        'contact-additional': 'Additional Information',
        'contact-reception': 'Reception Hours',
        'contact-reception-text': '24h Reception • Check-in: 1:00-6:00 PM • Check-out: 11:00 AM',
        'contact-wifi': 'WiFi & Services',
        'contact-wifi-text': 'Free internet • Breakfast included • Free parking',
        'contact-ready': 'Ready to book?',
        'contact-book-text': 'Visit our profile on Hostelworld to make your reservation',
        'contact-book-link': 'Book on Hostelworld'
    }
};

let currentLanguage = 'es';

// Language toggle functionality
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLanguage) {
                switchLanguage(lang);
                
                // Update active button
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                currentLanguage = lang;
            }
        });
    });
}

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Testimonials Carousel functionality
function initTestimonialsCarousel() {
    const track = document.querySelector('.testimonials-track');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const totalSlides = 2; // We have 2 sets of 3 testimonials
    let autoScrollInterval;

    function updateCarousel() {
        const translateX = currentSlide * -100;
        track.style.transform = `translateX(${translateX}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateCarousel();
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(nextSlide, 4000); // Change every 4 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Add click events to indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoScroll();
            goToSlide(index);
            // Restart auto-scroll after 8 seconds of inactivity
            setTimeout(startAutoScroll, 8000);
        });
    });

    // Pause auto-scroll on hover
    const testimonialsSection = document.querySelector('.testimonials-carousel');
    if (testimonialsSection) {
        testimonialsSection.addEventListener('mouseenter', stopAutoScroll);
        testimonialsSection.addEventListener('mouseleave', startAutoScroll);
    }

    // Start auto-scrolling when page loads
    startAutoScroll();
}

// Testimonials Carousel
class TestimonialsCarousel {
    constructor() {
        this.carousel = document.querySelector('.testimonials-carousel');
        this.track = document.querySelector('.testimonials-track');
        this.cards = document.querySelectorAll('.testimonial-card');
        this.indicators = document.querySelectorAll('.indicator');
        
        if (!this.track || !this.cards.length) return;
        
        this.currentSlide = 0;
        this.totalSlides = Math.ceil(this.cards.length / this.getVisibleCards());
        this.autoScrollInterval = null;
        this.isHovered = false;
        
        this.init();
    }
    
    init() {
        this.setupCards();
        this.updateIndicators();
        this.bindEvents();
        this.startAutoScroll();
    }
    
    getVisibleCards() {
        const containerWidth = this.carousel.offsetWidth;
        if (containerWidth <= 480) return 1;
        if (containerWidth <= 768) return 2;
        return 3;
    }
    
    setupCards() {
        const visibleCards = this.getVisibleCards();
        const cardWidth = 100 / visibleCards;
        
        this.cards.forEach(card => {
            card.style.flex = `0 0 calc(${cardWidth}% - 20px)`;
        });
        
        // Update total slides based on current viewport
        this.totalSlides = Math.ceil(this.cards.length / visibleCards);
        
        // Reset to first slide if current slide is out of bounds
        if (this.currentSlide >= this.totalSlides) {
            this.currentSlide = 0;
        }
        
        this.updateCarousel();
    }
    
    updateCarousel() {
        const visibleCards = this.getVisibleCards();
        const translateX = -(this.currentSlide * 100);
        this.track.style.transform = `translateX(${translateX}%)`;
        this.updateIndicators();
    }
    
    updateIndicators() {
        // Update the number of indicators to match total slides
        const indicatorsContainer = document.querySelector('.carousel-indicators');
        if (!indicatorsContainer) return;
        
        // Clear existing indicators
        indicatorsContainer.innerHTML = '';
        
        // Create indicators for each slide
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.className = `indicator ${i === this.currentSlide ? 'active' : ''}`;
            indicator.setAttribute('data-slide', i);
            indicator.addEventListener('click', () => this.goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
        
        // Update indicators reference
        this.indicators = document.querySelectorAll('.indicator');
    }
    
    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        this.updateCarousel();
        this.restartAutoScroll();
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.updateCarousel();
    }
    
    prevSlide() {
        this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.updateCarousel();
    }
    
    startAutoScroll() {
        this.autoScrollInterval = setInterval(() => {
            if (!this.isHovered) {
                this.nextSlide();
            }
        }, 4000); // Change slide every 4 seconds
    }
    
    stopAutoScroll() {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
            this.autoScrollInterval = null;
        }
    }
    
    restartAutoScroll() {
        this.stopAutoScroll();
        this.startAutoScroll();
    }
    
    bindEvents() {
        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => {
            this.isHovered = true;
        });
        
        this.carousel.addEventListener('mouseleave', () => {
            this.isHovered = false;
        });
        
        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.setupCards();
            }, 250);
        });
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;
            
            if (Math.abs(diffX) > 50) { // Minimum swipe distance
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
                this.restartAutoScroll();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.activeElement && document.activeElement.closest('.testimonials-carousel')) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.prevSlide();
                    this.restartAutoScroll();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.nextSlide();
                    this.restartAutoScroll();
                }
            }
        });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initLanguageToggle();
    initTestimonialsCarousel();
    new TestimonialsCarousel();
});