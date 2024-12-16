// Smooth Scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Theme Toggle (Light/Dark Mode)
const themeToggle = document.createElement("button");
themeToggle.classList.add("theme-toggle");
themeToggle.textContent = "Toggle Dark Mode";
document.querySelector("header").appendChild(themeToggle);

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Toggle Light Mode";
    } else {
        themeToggle.textContent = "Toggle Dark Mode";
    }
});

// Add a small footer dynamically
const footer = document.createElement("footer");
footer.innerHTML = "Designed by <strong>Pradyot</strong>. CSS Zen Garden Example.";
document.body.appendChild(footer);

// Warning Box Interactive Alert
const warningBox = document.querySelector(".warning");
if (warningBox) {
    warningBox.addEventListener("click", () => {
        alert("This is an interactive warning box. You clicked on it!");
    });
}
