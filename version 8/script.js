document.addEventListener('DOMContentLoaded', () => {

    // --- ANIME.JS ANIMATIONS ---

    // 1. Page Load Animations
    const timeline = anime.timeline({
        easing: 'easeOutExpo',
    });

    timeline.add({
        targets: '.cta-button',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800
    }).add({
        targets: '.hero-countdown-container',
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 600
    }, '-=400'); // Starts 400ms before the previous animation ends

    // 2. Scroll-triggered Animation for Registration Form
    const registrationCard = document.querySelector('.event-registration-card');
    if (registrationCard) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: registrationCard,
                        translateY: [40, 0],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutCubic'
                    });
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
        observer.observe(registrationCard);
    }

    // 3. Page Transition Animation (Fade-out)
    function attachTransition(selector) {
        const links = document.querySelectorAll(selector);
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetUrl = link.href;
                anime({
                    targets: 'body',
                    opacity: 0,
                    duration: 500,
                    easing: 'easeOutQuad',
                    complete: () => {
                        window.location.href = targetUrl;
                    }
                });
            });
        });
    }

    // --- CORE FUNCTIONALITY ---
    const plantData = [
        { id: 'neem', name: 'Neem Tree', image: 'https://images.unsplash.com/photo-1617196035154-6f2f84e4f6bb', climate: 'tropical', benefit: 'Natural pesticide, improves soil alkalinity.' },
        { id: 'mango', name: 'Mango Tree', image: 'https://images.unsplash.com/photo-1597848212624-a19eb35c1c73', climate: 'tropical', benefit: 'Provides dense shade, preventing soil from drying out.' },
        { id: 'bamboo', name: 'Bamboo', image: 'https://images.unsplash.com/photo-1563720222786-7f6f76d9d7cf', climate: 'tropical', benefit: 'Excellent for preventing soil erosion with its dense root system.' },
        { id: 'oak', name: 'Oak Tree', image: 'https://images.unsplash.com/photo-1596139947990-9d750c66336e?q=80&w=400', climate: 'temperate', benefit: 'Supports biodiversity and its leaf litter enriches topsoil.' }
    ];

    const climateSelect = document.getElementById('climate-select');
    const plantCardsContainer = document.getElementById('plant-cards-container');
    function displayPlantCards(filter) {
        plantCardsContainer.innerHTML = '';
        const filteredPlants = (filter === 'all') ? plantData : plantData.filter(plant => plant.climate === filter);
        filteredPlants.forEach(plant => {
            const cardHTML = `
                <a href="plant-detail.html?id=${plant.id}" class="plant-card-link">
                    <div class="plant-card">
                        <img src="${plant.image}" alt="${plant.name}">
                        <div class="plant-card-content">
                            <h3>${plant.name}</h3>
                            <p>${plant.benefit}</p>
                            <p class="benefit">Climate: ${plant.climate.charAt(0).toUpperCase() + plant.climate.slice(1)}</p>
                        </div>
                    </div>
                </a>`;
            plantCardsContainer.innerHTML += cardHTML;
        });
        // Attach transition listeners after cards are created
        attachTransition('.plant-card-link');
    }
    if (climateSelect) {
        climateSelect.addEventListener('change', (e) => displayPlantCards(e.target.value));
        displayPlantCards('all');
    }

    // All other logic remains the same...
    const soundToggle = document.getElementById('sound-toggle');
    const natureSound = document.getElementById('nature-sound');
    if (soundToggle) { /* ... sound toggle logic ... */ }
    
    const countdownTimer = document.getElementById('countdown-timer');
    if (countdownTimer) { /* ... countdown logic ... */ }
    
    const registrationForm = document.getElementById('event-registration-form');
    if(registrationForm) { /* ... registration and progress logic ... */ }

    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) { /* ... quiz logic ... */ }
    
    const pledgeForm = document.getElementById('pledge-form');
    if (pledgeForm) { /* ... pledge logic ... */ }

    // (Full logic from previous steps is condensed here for brevity but should be included)
});