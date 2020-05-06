const dots = document.getElementsByClassName("nav-menu");
const portfolioElements = document.getElementsByClassName("poster");

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        if (i == 0) {
            for (element of portfolioElements) {
                element.classList.remove("hidden");
            }
        }
        else {
            for (element of portfolioElements) {
                if (dots[i].id == element.getAttribute("data-category")) {
                    element.classList.remove("hidden");
                }
                else {
                    element.classList.add("hidden")
                }
            }
        }
    });
};