document.addEventListener("DOMContentLoaded", function() {
    const creatorsSection = document.getElementById("creators");
    const aboutSection = document.querySelector(".about");
    const aboutImages = document.querySelectorAll(".pictures_about img");
    const allElements = [...creatorsSection.querySelectorAll("img, .creator_text, .line_2"), aboutSection, ...aboutImages];

    const fadeInElements = () => {
        const windowHeight = window.innerHeight;

        allElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 50) {
                element.classList.add("fade-in");
            }
        });
    };

    window.addEventListener("scroll", fadeInElements);
});
