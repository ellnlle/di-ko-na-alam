document.addEventListener("DOMContentLoaded", function() {
    const quizBlocks = document.querySelectorAll('.quiz-block');

    const fadeInElement = () => {
        const windowHeight = window.innerHeight;

        quizBlocks.forEach((quizBlock) => {
            const elementTop = quizBlock.getBoundingClientRect().top;

            if (elementTop < windowHeight - 50) {
                quizBlock.classList.add("fade-in");
            }
        });
    };

    document.querySelectorAll('.descrip a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();

            const targetElement = document.querySelector(href);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar-container').offsetHeight;

                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        }
    });
    });


    window.addEventListener("scroll", fadeInElement);

    const correctAnswers = {
        answer1: "B",
        answer2: "B",
        answer3: "A",
        answer4: "B",
        answer5: "B",
        answer6: "B",
        answer7: "B",
        answer8: "A",
        answer9: "A",
        answer10: "B"
    };

    const quizForms = document.querySelectorAll('.quiz-form');

    quizForms.forEach((quizForm, index) => {
        quizForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const questionNumber = index + 1;
            const answerName = `answer${questionNumber}`;
            const selectedAnswer = quizForm.querySelector(`input[name="${answerName}"]:checked`);

            if (selectedAnswer) {
                const userAnswer = selectedAnswer.value;
                const correctAnswer = correctAnswers[answerName];

                if (userAnswer === correctAnswer) {
                    selectedAnswer.parentElement.style.backgroundColor = "#92c981";
                } else {
                    selectedAnswer.parentElement.style.backgroundColor = "#ed5c5c";
                    alert(`Incorrect! Resetting the quiz for Question ${questionNumber}.`);

                    setTimeout(() => {
                        quizForm.reset();
                        quizForm.querySelectorAll("input").forEach(input => {
                            input.parentElement.style.backgroundColor = "";
                        });
                    }, 500);
                }
            } else {
                alert(`Please select an answer for Question ${questionNumber}.`);
            }
        });
    });
});
