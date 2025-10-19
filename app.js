// Quiz Application
class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.selectedAnswers = []; // Track multiple selected answers for current question

        // Get DOM elements
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');

        this.startBtn = document.getElementById('start-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.restartBtn = document.getElementById('restart-btn');

        this.questionCategory = document.getElementById('question-category');
        this.questionText = document.getElementById('question-text');
        this.answersContainer = document.getElementById('answers-container');
        this.questionCounter = document.getElementById('question-counter');
        this.progressFill = document.getElementById('progress-fill');

        this.scorePercentage = document.getElementById('score-percentage');
        this.scoreText = document.getElementById('score-text');
        this.resultsDetails = document.getElementById('results-details');

        this.initEventListeners();
    }

    initEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.submitBtn.addEventListener('click', () => this.submitAnswer());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
    }

    startQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;

        this.showScreen(this.quizScreen);
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.currentQuestionIndex >= questions.length) {
            this.showResults();
            return;
        }

        const question = questions[this.currentQuestionIndex];
        this.selectedAnswers = []; // Reset selected answers for new question

        // Update question counter and progress bar
        this.questionCounter.textContent = `Frage ${this.currentQuestionIndex + 1} von ${questions.length}`;
        this.progressFill.style.width = `${((this.currentQuestionIndex + 1) / questions.length) * 100}%`;

        this.nextBtn.textContent = this.currentQuestionIndex === questions.length - 1 ? 'Ergebnisse anzeigen' : 'Nächste Frage';

        // Update category and question text
        this.questionCategory.textContent = question.category;
        this.questionText.textContent = question.question;

        // Clear previous answers
        this.answersContainer.innerHTML = '';

        // Create answer buttons with checkbox behavior
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.setAttribute('data-index', index);
            button.addEventListener('click', () => this.toggleAnswer(index, button));
            this.answersContainer.appendChild(button);
        });

        // Show submit button, hide next button
        this.submitBtn.style.display = 'block';
        this.nextBtn.style.display = 'none';
    }

    toggleAnswer(index, button) {
        // Toggle selection
        const selectedIndex = this.selectedAnswers.indexOf(index);
        if (selectedIndex > -1) {
            // Deselect
            this.selectedAnswers.splice(selectedIndex, 1);
            button.classList.remove('selected');
        } else {
            // Select
            this.selectedAnswers.push(index);
            button.classList.add('selected');
        }
    }

    submitAnswer() {
        if (this.selectedAnswers.length === 0) {
            return; // Don't submit if no answer selected
        }

        const question = questions[this.currentQuestionIndex];
        const answerButtons = this.answersContainer.querySelectorAll('.answer-btn');

        // Disable all buttons
        answerButtons.forEach(btn => btn.disabled = true);

        // Store user answers (sorted for comparison)
        this.userAnswers[this.currentQuestionIndex] = [...this.selectedAnswers].sort((a, b) => a - b);

        // Check if answer is correct (must match all correct answers)
        const correctAnswersSorted = [...question.correctAnswers].sort((a, b) => a - b);
        const isCorrect = JSON.stringify(this.userAnswers[this.currentQuestionIndex]) === JSON.stringify(correctAnswersSorted);

        if (isCorrect) {
            this.score++;
        }

        // Highlight correct and incorrect answers
        answerButtons.forEach((btn, index) => {
            if (question.correctAnswers.includes(index)) {
                btn.classList.add('correct');
            } else if (this.selectedAnswers.includes(index)) {
                btn.classList.add('incorrect');
            }
        });

        // Hide submit button, show next button
        this.submitBtn.style.display = 'none';
        this.nextBtn.style.display = 'block';
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
    }

    showResults() {
        const percentage = Math.round((this.score / questions.length) * 100);

        this.scorePercentage.textContent = `${percentage}%`;
        this.scoreText.textContent = `Du hast ${this.score} von ${questions.length} Fragen richtig!`;

        // Generate detailed results
        this.resultsDetails.innerHTML = '';

        questions.forEach((question, index) => {
            const userAnswers = this.userAnswers[index] || [];
            const correctAnswersSorted = [...question.correctAnswers].sort((a, b) => a - b);
            const userAnswersSorted = [...userAnswers].sort((a, b) => a - b);
            const isCorrect = JSON.stringify(userAnswersSorted) === JSON.stringify(correctAnswersSorted);

            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;

            // Format user answers
            const userAnswerText = userAnswers.length > 0
                ? userAnswers.map(i => question.answers[i]).join(', ')
                : 'Keine Antwort';

            // Format correct answers
            const correctAnswerText = question.correctAnswers.map(i => question.answers[i]).join(', ');

            resultItem.innerHTML = `
                <div class="result-item-question">
                    ${index + 1}. ${question.question}
                </div>
                <div class="result-item-answer your-answer">
                    <strong>Deine Antwort:</strong> ${userAnswerText}
                </div>
                ${!isCorrect ? `
                    <div class="result-item-answer">
                        <strong>Richtige Antwort${question.correctAnswers.length > 1 ? 'en' : ''}:</strong> ${correctAnswerText}
                    </div>
                ` : ''}
            `;

            this.resultsDetails.appendChild(resultItem);
        });

        this.showScreen(this.resultsScreen);
    }

    restartQuiz() {
        this.showScreen(this.startScreen);
    }

    showScreen(screen) {
        // Hide all screens
        this.startScreen.classList.remove('active');
        this.quizScreen.classList.remove('active');
        this.resultsScreen.classList.remove('active');

        // Show selected screen
        screen.classList.add('active');
    }
}

// Initialize the quiz app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
