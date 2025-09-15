document.addEventListener('DOMContentLoaded', () => {

    // --- Data for Interactive Sections ---
    const plantData = [
        { name: 'Neem Tree', image: 'https://images.unsplash.com/photo-1616010515162-83561a3c683c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fG5lZW0lMjB0cmVlfGVufDB8fHx8MTYxODg2MjI4NA&ixlib=rb-1.2.1&q=80&w=400', climate: 'tropical', benefit: 'Natural pesticide, improves soil alkalinity.' },
        { name: 'Banyan Tree', image: 'https://images.unsplash.com/photo-1615962483461-413343367809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGJhbnlhbiUyMHRyZWV8ZW58MHx8fHwxNjE4ODYyMzEy&ixlib=rb-1.2.1&q=80&w=400', climate: 'tropical', benefit: 'Prevents soil erosion with its massive root system.' },
        { name: 'Millet', image: 'https://images.unsplash.com/photo-1597516243451-22d744b8a264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1pbGxldCUyMGZpZWxkfGVufDB8fHx8MTYxODg2MjM4OQ&ixlib=rb-1.2.1&q=80&w=400', climate: 'dry', benefit: 'Drought-resistant, improves soil structure.' },
        { name: 'Acacia', image: 'https://images.unsplash.com/photo-1577985055843-a4f382a52b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGFjYWNpYSUyMHRyZWV8ZW58MHx8fHwxNjE4ODYyNDI4&ixlib=rb-1.2.1&q=80&w=400', climate: 'dry', benefit: 'Fixes nitrogen in the soil, increasing fertility.' },
        { name: 'Oak Tree', image: 'https://images.unsplash.com/photo-1596139947990-9d750c66336e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG9hayUyMHRyZWV8ZW58MHx8fHwxNjE4ODYyNDU2&ixlib=rb-1.2.1&q=80&w=400', climate: 'temperate', benefit: 'Supports biodiversity and its leaf litter enriches topsoil.' },
        { name: 'Maple Tree', image: 'https://images.unsplash.com/photo-1531826526955-1317e0a2944b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1hcGxlJTIwdHJlZXxlbnwwfHx8fDE2MTg4NjI1MDE&ixlib=rb-1.2.1&q=80&w=400', climate: 'temperate', benefit: 'Deep roots help stabilize soil on slopes.' },
        { name: 'Mangrove', image: 'https://images.unsplash.com/photo-1594269899380-539075eb9a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fG1hbmdyb3ZlJTIwZm9yZXN0fGVufDB8fHx8MTYxODg2MjU0OA&ixlib=rb-1.2.1&q=80&w=400', climate: 'coastal', benefit: 'Traps sediments, protecting coastlines from erosion.' },
        { name: 'Coconut Palm', image: 'https://images.unsplash.com/photo-1587422896943-9844005c0a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGNvY29udXQlMjBwYWxtfGVufDB8fHx8MTYxODg2MjU4MQ&ixlib=rb-1.2.1&q=80&w=400', climate: 'coastal', benefit: 'Thrives in sandy soil and helps stabilize dunes.' }
    ];

    const quizQuestions = [
        { question: "Which of these is a primary cause of soil erosion?", answers: [{ text: 'Planting trees', correct: false }, { text: 'Deforestation', correct: true }, { text: 'Composting', correct: false }, { text: 'Crop rotation', correct: false }] },
        { question: "What is the term for plowing along the contours of land?", answers: [{ text: 'Terracing', correct: false }, { text: 'Strip Cropping', correct: false }, { text: 'Contour Farming', correct: true }, { text: 'Mulching', correct: false }] },
        { question: "Which type of soil is generally considered best for gardening?", answers: [{ text: 'Sandy', correct: false }, { text: 'Clayey', correct: false }, { text: 'Silty', correct: false }, { text: 'Loamy', correct: true }] },
        { question: "What do 'cover crops' primarily help prevent?", answers: [{ text: 'Soil nutrient loss', correct: true }, { text: 'Pest infestations', correct: false }, { text: 'Over-watering', correct: false }, { text: 'Frost damage', correct: false }] },
        { question: "What is the benefit of adding compost to soil?", answers: [{ text: 'Increases soil density', correct: false }, { text: 'Enriches soil with nutrients', correct: true }, { text: 'Lowers soil pH', correct: false }, { text: 'Kills all bacteria', correct: false }] }
    ];

    // --- Hero Section Animation ---
    const heroBg = document.getElementById('animated-hero-bg');
    for (let i = 0; i < 30; i++) {
        const leaf = document.createElement('div');
        leaf.classList.add('growing-leaf');
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.top = `${Math.random() * 100}%`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        leaf.style.width = leaf.style.height = `${Math.random() * 15 + 5}px`;
        heroBg.appendChild(leaf);
    }
    
    // --- Theme & Sound Toggles ---
    const themeToggle = document.getElementById('theme-toggle');
    const soundToggle = document.getElementById('sound-toggle');
    const natureSound = document.getElementById('nature-sound');

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        localStorage.setItem('theme', theme);
    });

    soundToggle.addEventListener('click', () => {
        if (natureSound.paused) {
            natureSound.play();
            soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            natureSound.pause();
            soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    // --- Interactive Plant Guide ---
    const climateSelect = document.getElementById('climate-select');
    const plantCardsContainer = document.getElementById('plant-cards-container');

    function displayPlantCards(filter) {
        plantCardsContainer.innerHTML = '';
        const filteredPlants = (filter === 'all') ? plantData : plantData.filter(plant => plant.climate === filter);
        
        filteredPlants.forEach(plant => {
            const card = `
                <div class="plant-card">
                    <img src="${plant.image}" alt="${plant.name}">
                    <div class="plant-card-content">
                        <h3>${plant.name}</h3>
                        <p>${plant.benefit}</p>
                        <p class="benefit">Climate: ${plant.climate.charAt(0).toUpperCase() + plant.climate.slice(1)}</p>
                    </div>
                </div>
            `;
            plantCardsContainer.innerHTML += card;
        });
    }

    climateSelect.addEventListener('change', (e) => displayPlantCards(e.target.value));
    displayPlantCards('all'); // Initial display


    // --- Virtual Plantation ---
    const forestGrid = document.getElementById('forest-grid');
    const treeCounter = document.getElementById('tree-counter');
    const totalPatches = 12 * 8; // 12 columns, 8 rows
    let plantedTrees = parseInt(localStorage.getItem('treeCount')) || 0;

    treeCounter.textContent = plantedTrees;

    function createForest() {
        forestGrid.innerHTML = '';
        for (let i = 0; i < totalPatches; i++) {
            const patch = document.createElement('div');
            patch.classList.add('soil-patch');
            patch.dataset.id = i;
            forestGrid.appendChild(patch);
        }
    }
    
    forestGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('soil-patch') && !e.target.classList.contains('planted')) {
            e.target.classList.add('planted');
            plantedTrees++;
            treeCounter.textContent = plantedTrees;
            localStorage.setItem('treeCount', plantedTrees);
        }
    });

    createForest();

    // --- Community Event Section ---
    const eventDate = new Date("2025-10-05T09:00:00").getTime();
    const communityGoal = 500;
    
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const eventPreContent = document.getElementById('event-pre-content');
    const eventPostContent = document.getElementById('event-post-content');
    
    const registrationForm = document.getElementById('event-registration-form');
    const participantList = document.getElementById('participant-list');
    const progressBar = document.getElementById('community-progress-bar');
    const progressText = document.getElementById('community-progress-text');

    let eventParticipants = JSON.parse(localStorage.getItem('eventParticipants')) || [];

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            eventPreContent.classList.add('hide');
            eventPostContent.classList.remove('hide');
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = String(days).padStart(2, '0');
        hoursEl.innerText = String(hours).padStart(2, '0');
        minutesEl.innerText = String(minutes).padStart(2, '0');
        secondsEl.innerText = String(seconds).padStart(2, '0');
    }
    
    function displayParticipants() {
        participantList.innerHTML = '';
        let totalPledged = 0;
        eventParticipants.forEach(p => {
            const li = document.createElement('li');
            li.innerHTML = `${p.name} <span>${p.trees} trees</span>`;
            participantList.appendChild(li);
            totalPledged += p.trees;
        });

        const progressPercent = Math.min((totalPledged / communityGoal) * 100, 100);
        progressBar.style.width = `${progressPercent}%`;
        progressText.innerText = `${totalPledged} / ${communityGoal} trees pledged`;
    }

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const participantName = document.getElementById('participant-name').value.trim();
        const treesPledged = parseInt(document.getElementById('trees-pledged').value);
        
        if (participantName && treesPledged > 0) {
            eventParticipants.push({ name: participantName, trees: treesPledged });
            localStorage.setItem('eventParticipants', JSON.stringify(eventParticipants));
            displayParticipants();
            registrationForm.reset();
        }
    });

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // initial call
    displayParticipants(); // initial call

    // Event Reminder Banner
    const reminderBanner = document.getElementById('event-reminder-banner');
    const closeReminderBtn = document.getElementById('close-reminder-btn');
    const reminderClosed = localStorage.getItem('reminderClosed');
    
    const now = new Date().getTime();
    const timeUntilEvent = eventDate - now;
    const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000;

    if (timeUntilEvent > 0 && timeUntilEvent < sevenDaysInMillis && reminderClosed !== 'true') {
        reminderBanner.classList.remove('hide');
    }

    closeReminderBtn.addEventListener('click', () => {
        reminderBanner.classList.add('hide');
        localStorage.setItem('reminderClosed', 'true');
    });

    // --- Soil Protection Quiz ---
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const answerButtons = document.getElementById('answer-buttons');
    const quizResults = document.getElementById('quiz-results');
    const resultsTitle = document.getElementById('results-title');
    const resultsScore = document.getElementById('results-score');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');

    let currentQuestionIndex, score;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        questionContainer.classList.remove('hide');
        quizResults.classList.add('hide');
        showQuestion();
    }
    
    function showQuestion() {
        resetState();
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionText.innerText = currentQuestion.question;
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtons.appendChild(button);
        });
    }

    function resetState() {
        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === 'true';

        if (isCorrect) {
            score++;
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('incorrect');
        }

        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion();
            } else {
                showResults();
            }
        }, 1500);
    }
    
    function showResults() {
        questionContainer.classList.add('hide');
        quizResults.classList.remove('hide');
        resultsScore.innerText = `You scored ${score} out of ${quizQuestions.length}!`;
        if (score >= 4) {
            resultsTitle.innerText = "Congratulations, You’re a Soil Saver!";
        } else if (score >= 2) {
            resultsTitle.innerText = "Great job, you're on your way!";
        } else {
            resultsTitle.innerText = "Keep learning to protect our soil!";
        }
    }

    restartQuizBtn.addEventListener('click', startQuiz);
    startQuiz();

    // --- Pledge Wall ---
    const pledgeForm = document.getElementById('pledge-form');
    const pledgeName = document.getElementById('pledge-name');
    const pledgeMessage = document.getElementById('pledge-message');
    const pledgeList = document.getElementById('pledge-list');

    let pledges = JSON.parse(localStorage.getItem('pledges')) || [];

    function displayPledges() {
        pledgeList.innerHTML = '';
        if (pledges.length === 0) {
            pledgeList.innerHTML = '<li>Be the first to make a pledge!</li>';
            return;
        }
        pledges.forEach(p => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${p.name} pledges:</strong> "${p.message}"`;
            pledgeList.prepend(li); // Show newest first
        });
    }

    pledgeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPledge = {
            name: pledgeName.value.trim(),
            message: pledgeMessage.value.trim()
        };
        if (newPledge.name && newPledge.message) {
            pledges.push(newPledge);
            localStorage.setItem('pledges', JSON.stringify(pledges));
            displayPledges();
            pledgeForm.reset();
        }
    });

    displayPledges();
});