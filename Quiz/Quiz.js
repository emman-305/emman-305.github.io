// JavaScript source code
const questions = [
    { question: "What is the capital city of Kenya?", answers: ["Nairobi", "Mombasa", "Kisumu"], correct: 0 },
    { question: "Which ocean borders Kenya to the east?", answers: ["Atlantic", "Indian", "Pacific"], correct: 1 },
    { question: "In which year did Kenya gain independence?", answers: ["1963", "1975", "1955"], correct: 0 },
    { question: "What is the official language of Kenya?", answers: ["Swahili", "French", "Zulu"], correct: 0 },
    { question: "What is Kenya’s currency?", answers: ["Kenya Shilling", "Rand", "Dollar"], correct: 0 }
];

let currentQuestionIndex = 0;
let shuffledQuestions = [];
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    answersElement.innerHTML = "";
}

function selectAnswer(index) {
    let correct = shuffledQuestions[currentQuestionIndex].correct;
    if (index === correct) score++;

    nextButton.classList.remove("hidden");
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        alert(`Quiz finished! You scored ${score} out of ${shuffledQuestions.length}`);
        startQuiz();
    }
});

startQuiz();