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
        answer1: "A",
        answer2: "A",
        answer3: "C",
        answer4: "B",
        answer5: "C",
        answer6: "A",
        answer7: "A",
        answer8: "C",
        answer9: "D",
        answer10: "A"
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

document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.innerHTML = `
        .confetti-piece {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: hsl(${Math.random() * 360}, 100%, 50%);
            opacity: 0.7;
            animation: fall 3s linear infinite;
        }

        @keyframes fall {
            0% {
                transform: translateY(-100%);
            }
            100% {
                transform: translateY(100vh) rotate(720deg);
            }
        }
    `;
    document.head.appendChild(style);

    document.getElementById('cong-btn').addEventListener('click', function() {
        document.getElementById('congrats-popup').classList.remove('hidden');
        launchConfetti();
    });

    function launchConfetti() {
        const confettiContainer = document.getElementById('confetti');

        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti-piece');
            confettiPiece.style.left = `${Math.random() * 100}vw`;
            confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
            confettiContainer.appendChild(confettiPiece);
        }
    }
});
