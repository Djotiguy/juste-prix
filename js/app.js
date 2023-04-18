// **************** PROJECT 4 : Le juste Prix *****************/
// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.getElementById('formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = 'none';

// Etape 3 - Générer un nombre aléatoire
let nombreAléatoire = Math.floor(Math.random() * 1001); // retourne un nombre aléatoire entre 1 & 1000
let nombreChoisi;
let instructions = document.querySelector('#instructions');

// Etape 4 - Créer la fonction vérifier
function verifier(nombre) {
    let instruction = document.createElement('div');

    if(nombre < nombreAléatoire){
        // C'est plus
        instruction.textContent = "("+ nombre +")" + " c'est plus";
        instruction.className = 'instruction plus'; // ajout de la classe "plus" dans notre div instruction

    } else if(nombre > nombreAléatoire){
        // C'est moins
        instruction.textContent = "("+ nombre +")" + " c'est moins";
        instruction.className = 'instruction moins'; // ajout de la classe "moins" dans notre div instruction

    } else {
        instruction.textContent = "("+ nombre +")" + " Félicitations vous avez trouvée les juste prix La partie est terminer ";
        instruction.className = 'instruction fini'; // ajout de la classe "fini" dans notre div instruction
        input.disabled = true; // Désaticvation du formulaire après avoir trouvé le résultat

    }

    // Ajout de l'élément instruction devant les autres
     instructions.prepend(instruction);
}

// Etape 5 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
});

// Etape 6 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    e.preventDefault(); // Annule l'évènement par défaut de notre submit

    if(isNaN(input.value) || input.value == '' ){
        input.style.borderColor = 'red';
    } else {
        input.style.borderColor = 'silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
});

