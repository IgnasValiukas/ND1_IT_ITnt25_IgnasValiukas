/* PASVEIKINIMO FUNKCIJA */
/* Funkcija parodo pasveikinimo pranešimą vartotojui */
function showWelcomeMessage() {
    alert("Welcome to Porsche Shop!"); 
    // alert() – naršyklės funkcija, kuri išveda pranešimą iššokančiame lange
}

/* FONO SPALVOS KEITIMAS */
/* Funkcija keičia puslapio fono spalvą paspaudus mygtuką */
function changeBackgroundColor() {

    // Tikrina, ar dabartinė fono spalva yra lightgray
    if (document.body.style.backgroundColor === "lightgray") {

        document.body.style.backgroundColor = "";
        // Jei spalva jau pilka → grąžina į pradinę (default)

    } else {

        document.body.style.backgroundColor = "lightgray";
        // Jei spalva ne pilka → nustato pilką foną
    }
}

/* ABOUT US PRANEŠIMAS */
/* Funkcija parodo informaciją apie įmonę */
function showAboutMessage() {
    alert("We are passionate about Porsche cars and premium service.");
    // alert naudojamas greitam informacijos parodymui vartotojui
}

/* KONTAKTŲ PRANEŠIMAS */
/* Funkcija parodo kontaktinę informaciją */
function showContactMessage() {
    alert("You can contact us every working day from 8:00 to 17:00.");
}

/* FORMOS APDOROJIMAS */
/* Funkcija apdoroja kontaktų formos siuntimą */
function submitContactForm(event) {

    event.preventDefault(); 
    // sustabdo numatytą formos siuntimą (puslapio perkrovimą)

    alert("Your message has been sent successfully!");
    // parodo vartotojui patvirtinimo pranešimą

    event.target.reset();
    // išvalo visus formos laukus po išsiuntimo
}