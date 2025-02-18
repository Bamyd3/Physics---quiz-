document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quizContainer");
    const quizForm = document.getElementById("quizForm");
    const resultContainer = document.getElementById("resultContainer");

    // Quiz Questions
    const questions = [
        {
            question: "What is the acceleration due to gravity on Earth?",
            options: ["9.8 m/s²", "8.9 m/s²", "10.5 m/s²", "7.8 m/s²"],
            answer: "9.8 m/s²"
        },
        {
            question: "Which of the following is a unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            answer: "Newton"
        },
        {
            question: "Which law states that 'For every action, there is an equal and opposite reaction'?",
            options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Energy"],
            answer: "Newton's Third Law"
        }
    ];

    // Display Quiz Questions
    function loadQuiz() {
        quizContainer.innerHTML = "";
        questions.forEach((q, index) => {
            const questionHTML = `
                <div class="question">
                    <p><strong>${index + 1}. ${q.question}</strong></p>
                    ${q.options
                        .map(option => `
                            <label>
                                <input type="radio" name="question${index}" value="${option}" required> ${option}
                            </label><br>
                        `)
                        .join("")}
                </div>
            `;
            quizContainer.innerHTML += questionHTML;
        });
    }

    // Handle Quiz Submission
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let score = 0;
        let totalQuestions = questions.length;
        let feedbackHTML = "<h3>Quiz Results</h3>";

        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
            if (selectedOption) {
                if (selectedOption.value === q.answer) {
                    score++;
                    feedbackHTML += `<p class="correct">${index + 1}. ✅ Correct! (${q.answer})</p>`;
                } else {
                    feedbackHTML += `<p class="wrong">${index + 1}. ❌ Wrong! (Correct Answer: ${q.answer})</p>`;
                }
            }
        });

        // Display Score
        feedbackHTML += `<h4>Your Score: ${score} / ${totalQuestions}</h4>`;
        resultContainer.innerHTML = feedbackHTML;
    });

    // Load the Quiz
    loadQuiz();
});