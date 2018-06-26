// Afficher "MonPseudo" dans la case Pseudo
var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";


// Affichage d'un message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("focus", function () {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});
// Suppression du message contextuel pour la saisie du pseudo
pseudoElt.addEventListener("blur", function () {
    document.getElementById("aidePseudo").textContent = "";
});

// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function (e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function (e) {
        console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}

// Affichage du code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function (e) {
    console.log("Code de nationalité : " + e.target.value);
});

var form = document.querySelector("form");
console.log("Nombre de champs de saisie : " + form.elements.length); // Affiche 10
console.log(form.elements[0].name); // Affiche "pseudo"
console.log(form.elements.mdp.type); // Affiche "password"

// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "BE":
        console.log("Vous êtes belge");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});


// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var longueurMdp = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; // Longueur suffisante => couleur verte
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
    var validiteCourriel = "";
    if (e.target.value.indexOf("@") === -1) {
        // Le courriel saisi ne contient pas le caractère @
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});

// REGULAR EXPRESSION:

var regex = /@/; // La chaîne doit contenir le caractère @
console.log(regex.test("")); // Affiche false
console.log(regex.test("@")); // Affiche true
console.log(regex.test("sophie&mail.fr")); // Affiche false
console.log(regex.test("sophie@mail.fr")); // Affiche true


var username = "sarah2803";
var res1 = username.match(/^[a-z\d]{5,12}$/i);
res1;

var email = "assedo.sarah@gmail.com";
var res2 = email.match(/^.+@[a-z]+\.[a-z]+$/);
res2;

var password = "fratte-28";
var res3 = password.match(/^[a-zA-Z\d\@\-\_]{8,20}$/);
res3;

var telephone = "07672102422";
var res4 = telephone.match(/^[0-9]{11}$/);
res4;

var slug = "sarah-assedo28";
var res5 = slug.match(/^[a-z0-9\-]{8,20}$/);
res5;

