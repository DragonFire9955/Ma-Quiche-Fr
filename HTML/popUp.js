let modalBtns = [...document.querySelectorAll(".button")]; // je lie modalBtns

modalBtns.forEach (function (btn) {
    btn.onclick = function () {
        let modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block"; //j'affiche modal
    }
})


window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
};

// A LIRE : ici j'ai réalisé un code qui fonctionne que si l'on met un "@gmail.com" dans l'encadré email, ceci est volontaire, ce n'est pas un beug.
let passCheck = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?])"
);
let passCheckEmail = new RegExp(
    "^([A-Z][a-z]*)@gmail.com$"
);
let emailVerif = document.querySelector("#Email");
let nameVerif = document.querySelector("#Name");
let mdp = document.querySelector("#password");
let mdpVerif = document.querySelector("#passwordVerif");

let containerError = document.getElementById("errorContainer");
let listError = document.getElementById("errorList");
let errMdp = document.createElement("li");
let errMdpVerif = document.createElement("li");
let errName = document.createElement("li");
let errEmail = document.createElement("li");

let button2emePage = document.getElementById("button2emePage");
let modalConnexion = document.getElementById("modalConnexion");
let Page2PopUp = document.getElementById("2emePagePopUp");
function miseEnAttente()
{
    setTimeout(fonctionAExecuter, 2000); //On attend 2 secondes avant d'exécuter la fonction
}
function fonctionAExecuter()
{
    modalConnexion.style.display = "none";
    Page2PopUp.style.display = "block";
}
button2emePage.onclick = function() {
    if (mdp.value === mdpVerif.value && passCheck.test(mdp.value) == true && mdp.value.length >= 10 || passCheck.test(mdp.value) == true && passCheckEmail.test(emailVerif.value) == true && passCheck.test(emailVerif.value) == true && nameVerif.value.length >= 6) {
        miseEnAttente();
    }
}


let formulaire = document.querySelector("form");
formulaire.addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (mdp.value === mdpVerif.value && passCheck.test(mdp.value) == true){
        mdpVerif.classList.add("correct");
        mdpVerif.classList.remove("incorrect");
    } else {
        containerError.classList.add("visible");
        errMdpVerif.innerText = "Les mots de passes doivent être identiques.";
        listError.appendChild(errMdpVerif);
        listError.classList.add("visible");

        mdpVerif.classList.remove("correct");
        mdpVerif.classList.add("incorrect");
    }
    if (mdp.value.length < 10 || passCheck.test(mdp.value) == false) {
        mdp.classList.add("incorrect");
        mdp.classList.remove("correct");

        containerError.classList.add("visible");
        errMdp.innerText = "Le mot de passe doit comporter au moins 8 caractères.";
        listError.appendChild(errMdp);
        listError.classList.add("visible");

    } else {
        mdp.classList.add("correct");
        mdp.classList.remove("incorrect");
    }
    if (nameVerif.value.length < 6) {
        nameVerif.classList.add("incorrect");
        nameVerif.classList.remove("correct");
        
        containerError.classList.add("visible");
        errName.innerText = "Le nom doit comporter au moins 6 caractères.";
        listError.appendChild(errName);
        listError.classList.add("visible");

    } else {
        nameVerif.classList.add("correct");
        nameVerif.classList.remove("incorrect");
    }
    if (passCheckEmail.test(emailVerif.value) == false && passCheck.test(emailVerif.value) == false) {  
        emailVerif.classList.remove("correct");
        emailVerif.classList.add("incorrect");

        containerError.classList.add("visible");
        errEmail.innerText = "L'Email est incorrect.";
        listError.appendChild(errEmail);
        listError.classList.add("visible");

    } else{
        emailVerif.classList.remove("incorrect");
        emailVerif.classList.add("correct");
    }
})
// le tableau crée des entrées de valeurs à compléter, et si tout est vérifié passe à la pop up suivante
