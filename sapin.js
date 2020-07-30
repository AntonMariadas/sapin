// const nombreEtages = prompt('Entrez le nombre d\'étages du sapin');

// Ce code ne marche que pour 1 et 2
// if(nombreEtages == 1) {
//   console.log('*')
// } else if (nombreEtages == 2) {
//   console.log('*')
//   console.log('**')
// }

// Ce code ne marche pas il n'affiche qu'un étage (l'étage du bas)
// console.log('*'.repeat(nombreEtages));


// Code sans fonction

// const etoile = '*'

// for (let etageCourant = 1; etageCourant <= nombreEtages; etageCourant++) {
//   console.log(etoile.repeat(etageCourant));
// }

// Définition des fonctions :

const recupererNombreEtage = () => {
  const nombreEtages = prompt('Entrez le nombre d\'étages du sapin');
  return nombreEtages;
}

const dessinerSapin = (nombreEtages) => {
  const description = descriptionSapin(nombreEtages);
  console.log(description);
  const etoile = '*'

  for (let etageCourant = 1; etageCourant <= nombreEtages; etageCourant++) {
    console.log(etoile.repeat(etageCourant));
  }
}

const descriptionSapin = (nombreEtages) => {
  return `Voici un sapin de ${nombreEtages}:
  `;
}

// Code principal :

const nombreEtage = recupererNombreEtage();
dessinerSapin(nombreEtage);

dessinerSapin(5);
dessinerSapin(2);
dessinerSapin(7);
