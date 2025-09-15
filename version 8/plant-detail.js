document.addEventListener('DOMContentLoaded', () => {

    // --- Page Load Fade-in Animation ---
    anime({
        targets: 'body',
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad'
    });
    
    // --- Page Transition for Back Button ---
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetUrl = backButton.href;
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
    }

    // --- Core Functionality ---
    const plantData = [
        {
            id: 'neem',
            name: 'Neem Tree',
            image: 'https://images.unsplash.com/photo-1617196035154-6f2f84e4f6bb',
            details: {
                soil_benefits: 'Neem trees are excellent for soil conservation. Their deep roots help bind the soil, preventing erosion. The fallen leaves decompose to create a rich, nutrient-filled humus, improving soil fertility and structure over time.',
                uses: 'Known as the "village pharmacy" in India, nearly every part of the Neem tree has medicinal uses, including anti-bacterial, anti-fungal, and anti-inflammatory properties. Its oil is a key ingredient in organic pesticides and cosmetics.',
                growth: 'Thrives in tropical and semi-tropical climates with plenty of sunlight. It is highly drought-resistant once established and can grow in a wide range of poor, shallow, or even saline soils.',
                trivia: 'A single Neem tree can live for over 200 years and its shade can lower the ambient temperature by up to 10 degrees Celsius.'
            }
        },
        {
            id: 'mango',
            name: 'Mango Tree',
            image: 'https://images.unsplash.com/photo-1597848212624-a19eb35c1c73',
            details: {
                soil_benefits: 'The Mango tree\'s extensive root system helps to stabilize soil and prevent erosion. Its large canopy provides dense shade, which reduces soil temperature and moisture loss, creating a favorable microclimate for other undergrowth.',
                uses: 'Beyond its world-famous fruit, Mango wood is used for furniture and construction. In traditional medicine, its leaves, bark, and kernels are used to treat various ailments. The leaves are also used in religious ceremonies in India.',
                growth: 'Requires a frost-free tropical or subtropical climate. It prefers deep, well-drained soil and needs full sun to produce a good fruit yield. Watering should be regular during growth but reduced before flowering.',
                trivia: 'The Mango is the national fruit of India, Pakistan, and the Philippines, and the national tree of Bangladesh.'
            }
        },
        {
            id: 'bamboo',
            name: 'Bamboo',
            image: 'https://images.unsplash.com/photo-1563720222786-7f6f76d9d7cf',
            details: {
                soil_benefits: 'Bamboo is a champion of soil protection. Its intricate network of roots (rhizomes) creates a dense mat that holds topsoil in place, making it extremely effective for erosion control on slopes and riverbanks. It also improves soil drainage.',
                uses: 'One of the most versatile plants on Earth. Used for construction (scaffolding, bridges), culinary purposes (bamboo shoots), textiles (bamboo fabric), and paper production. It is a highly sustainable and fast-growing resource.',
                growth: 'Most bamboo species thrive in tropical and temperate climates with moist soil and partial shade to full sun. It is one of the fastest-growing plants in the world.',
                trivia: 'Some species of bamboo can grow up to 91 cm (36 inches) within a 24-hour period!'
            }
        },
        {
            id: 'oak',
            name: 'Oak Tree',
            image: 'https://images.unsplash.com/photo-1596139947990-9d750c66336e?q=80&w=400',
            details: {
                soil_benefits: 'Oak trees have a profound positive impact on soil. Their deep taproots aerate the soil, while the decomposition of their tannin-rich leaves creates a valuable acidic humus layer, which benefits many woodland plants.',
                uses: 'Oak wood is highly prized for its strength and durability, used extensively in furniture making, flooring, and wine barrels. Acorns, the fruit of the oak, are an important food source for wildlife.',
                growth: 'Prefers full sun and deep, well-drained soil. They are slow-growing but incredibly long-lived, hardy trees that are staples of temperate forests worldwide.',
                trivia: 'An Oak tree can support over 500 different species of insects, birds, and other wildlife, making it a keystone species in its ecosystem.'
            }
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const plantId = urlParams.get('id');
    const plant = plantData.find(p => p.id === plantId);

    if (plant) {
        document.title = `${plant.name} | TerraNova`;
        document.getElementById('plant-banner').style.backgroundImage = `url(${plant.image})`;
        document.getElementById('plant-name').textContent = plant.name;
        document.getElementById('soil-benefits').textContent = plant.details.soil_benefits;
        document.getElementById('uses').textContent = plant.details.uses;
        document.getElementById('growth').textContent = plant.details.growth;
        document.getElementById('trivia').textContent = plant.details.trivia;
    } else {
        const container = document.querySelector('.plant-info-container');
        document.getElementById('plant-name').textContent = 'Plant Not Found';
        if(container) {
            container.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">The plant you are looking for could not be found. Please return to the Plant Guide.</p>';
        }
    }
});