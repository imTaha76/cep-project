document.addEventListener('DOMContentLoaded', () => {

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
    }
    if (climateSelect) {
        climateSelect.addEventListener('change', (e) => displayPlantCards(e.target.value));
        displayPlantCards('all');
    }

    const soundToggle = document.getElementById('sound-toggle');
    const natureSound = document.getElementById('nature-sound');
    if (soundToggle) {
        soundToggle.addEventListener('click', () => {
            if (natureSound.paused) {
                natureSound.play();
                soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
            } else {
                natureSound.pause();
                soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
            }
        });
    }
    
    // Countdown Timer Logic
    const countdownTimer = document.getElementById('countdown-timer');
    if (countdownTimer) {
        const eventDate = new Date("2025-10-05T09:00:00").getTime();
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = eventDate - now;
            if (distance < 0) {
                clearInterval(countdownInterval);
                document.getElementById('countdown-timer').innerHTML = "<h4>The Event has started!</h4>";
                return;
            }
            daysEl.innerText = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
            hoursEl.innerText = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
            minutesEl.innerText = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            secondsEl.innerText = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
        };
        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }
    
    // Event Registration and Progress Logic
    const registrationForm = document.getElementById('event-registration-form');
    if(registrationForm) {
        const communityGoal = 500;
        const participantList = document.getElementById('participant-list');
        const progressBar = document.getElementById('community-progress-bar');
        const progressText = document.getElementById('community-progress-text');
        let eventParticipants = JSON.parse(localStorage.getItem('eventParticipants')) || [];

        const displayParticipants = () => {
            participantList.innerHTML = '';
            let totalPledged = eventParticipants.reduce((sum, p) => sum + p.trees, 0);
            eventParticipants.forEach(p => {
                const li = document.createElement('li');
                li.innerHTML = `${p.name} <span>${p.trees} trees</span>`;
                participantList.appendChild(li);
            });
            const progressPercent = Math.min((totalPledged / communityGoal) * 100, 100);
            progressBar.style.width = `${progressPercent}%`;
            progressText.innerText = `${totalPledged} / ${communityGoal} trees pledged`;
        };

        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const participantName = document.getElementById('participant-name').value.trim();
            const treesPledged = parseInt(document.getElementById('trees-pledged').value);
            if (participantName && treesPledged > 0) {
                eventParticipants.push({ name: participantName, trees: treesPledged });
                localStorage.setItem('eventParticipants', JSON.stringify(eventParticipants));
                displayParticipants();
                registrationForm.reset();
                alert('Thank you for registering!');
            }
        });
        displayParticipants();
    }

    // Quiz Logic
    const quizContainer = document.getElementById('quiz-container');
    if (quizContainer) {
        const questionText = document.getElementById('question-text');
        const answerButtons = document.getElementById('answer-buttons');
        const quizResults = document.getElementById('quiz-results');
        const resultsTitle = document.getElementById('results-title');
        const resultsScore = document.getElementById('results-score');
        const restartQuizBtn = document.getElementById('restart-quiz-btn');
        let currentQuestionIndex, score;
        const quizQuestions = [
            { question: "Which of these is a primary cause of soil erosion?", answers: [{ text: 'Planting trees', correct: false }, { text: 'Deforestation', correct: true }] },
            { question: "What is the term for plowing along the contours of land?", answers: [{ text: 'Contour Farming', correct: true }, { text: 'Mulching', correct: false }] },
            { question: "Which type of soil is generally considered best for gardening?", answers: [{ text: 'Sandy', correct: false }, { text: 'Loamy', correct: true }] }
        ];
        const startQuiz = () => {
            currentQuestionIndex = 0; score = 0;
            quizResults.classList.add('hide');
            document.getElementById('question-container').classList.remove('hide');
            showQuestion();
        };
        const showQuestion = () => {
            answerButtons.innerHTML = '';
            const currentQuestion = quizQuestions[currentQuestionIndex];
            questionText.innerText = currentQuestion.question;
            currentQuestion.answers.forEach(answer => {
                const button = document.createElement('button');
                button.innerText = answer.text;
                button.classList.add('btn');
                if (answer.correct) button.dataset.correct = true;
                button.addEventListener('click', selectAnswer);
                answerButtons.appendChild(button);
            });
        };
        const selectAnswer = (e) => {
            if (e.target.dataset.correct) score++;
            Array.from(answerButtons.children).forEach(button => button.disabled = true);
            setTimeout(() => {
                if (quizQuestions.length > currentQuestionIndex + 1) {
                    currentQuestionIndex++;
                    showQuestion();
                } else {
                    showResults();
                }
            }, 1000);
        };
        const showResults = () => {
            document.getElementById('question-container').classList.add('hide');
            quizResults.classList.remove('hide');
            resultsScore.innerText = `You scored ${score} out of ${quizQuestions.length}!`;
            resultsTitle.innerText = score >= 2 ? "Congratulations, You’re a Soil Saver!" : "Keep learning to protect our soil!";
        };
        restartQuizBtn.addEventListener('click', startQuiz);
        startQuiz();
    }
    
    // Pledge Wall Logic
    const pledgeForm = document.getElementById('pledge-form');
    if (pledgeForm) {
        const pledgeList = document.getElementById('pledge-list');
        let pledges = JSON.parse(localStorage.getItem('pledges')) || [];
        const displayPledges = () => {
            pledgeList.innerHTML = '';
            pledges.slice().reverse().forEach(p => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${p.name} pledges:</strong> "${p.message}"`;
                pledgeList.appendChild(li);
            });
        };
        pledgeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newPledge = { name: document.getElementById('pledge-name').value.trim(), message: document.getElementById('pledge-message').value.trim() };
            if (newPledge.name && newPledge.message) {
                pledges.push(newPledge);
                localStorage.setItem('pledges', JSON.stringify(pledges));
                displayPledges();
                pledgeForm.reset();
            }
        });
        displayPledges();
    }
});