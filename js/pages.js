// Parodo pasveikinimo pranešimą pagrindiniame puslapyje
function showWelcomeMessage() {
    alert("Welcome to Porsche Shop!");
}

// Keičia puslapio fono spalvą
function changeBackgroundColor() {
    if (document.body.style.backgroundColor === "lightgray") {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "lightgray";
    }
}

// Parodo About us puslapio pranešimą
function showAboutMessage() {
    alert("We are passionate about Porsche cars and premium service.");
}

// Parodo kontaktinį pranešimą
function showContactMessage() {
    alert("You can contact us every working day from 8:00 to 17:00.");
}

// Apdoroja formos siuntimą
function submitContactForm(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
    event.target.reset();
}