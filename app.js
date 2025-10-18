// Quiz Application
class QuizApp {
    constructor() {
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;

        // Get DOM elements
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');

        this.startBtn = document.getElementById('start-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.restartBtn = document.getElementById('restart-btn');

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

        // Update question counter and progress bar
        this.questionCounter.textContent = `Frage ${this.currentQuestionIndex + 1} von ${questions.length}`;
        this.progressFill.style.width = `${((this.currentQuestionIndex + 1) / questions.length) * 100}%`;

        // Update question text
        this.questionText.textContent = question.question;

        // Clear previous answers
        this.answersContainer.innerHTML = '';

        // Create answer buttons
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.addEventListener('click', () => this.selectAnswer(index));
            this.answersContainer.appendChild(button);
        });

        // Hide next button
        this.nextBtn.style.display = 'none';
    }

    selectAnswer(selectedIndex) {
        const question = questions[this.currentQuestionIndex];
        const answerButtons = this.answersContainer.querySelectorAll('.answer-btn');

        // Disable all buttons
        answerButtons.forEach(btn => btn.disabled = true);

        // Store user answer
        this.userAnswers[this.currentQuestionIndex] = selectedIndex;

        // Check if answer is correct
        const isCorrect = selectedIndex === question.correctAnswer;
        if (isCorrect) {
            this.score++;
        }

        // Highlight correct and incorrect answers
        answerButtons.forEach((btn, index) => {
            if (index === question.correctAnswer) {
                btn.classList.add('correct');
            } else if (index === selectedIndex) {
                btn.classList.add('incorrect');
            }
        });

        // Show next button
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
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;

            const resultItem = document.createElement('div');
            resultItem.className = `result-item ${isCorrect ? 'correct' : 'incorrect'}`;

            resultItem.innerHTML = `
                <div class="result-item-question">
                    ${index + 1}. ${question.question}
                </div>
                <div class="result-item-answer your-answer">
                    <strong>Deine Antwort:</strong> ${question.answers[userAnswer]}
                </div>
                ${!isCorrect ? `
                    <div class="result-item-answer">
                        <strong>Richtige Antwort:</strong> ${question.answers[question.correctAnswer]}
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
