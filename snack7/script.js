const people = [
    { nome: 'Marco', cognome: 'Resini', età: 19 },
    { nome: 'Giulia', cognome: 'Rossi', età: 25 },
    { nome: 'Luca', cognome: 'Bianchi', età: 30 },
    { nome: 'Federica', cognome: 'Esposito', età: 22 },
    { nome: 'Andrea', cognome: 'Russo', età: 27 },
    { nome: 'Chiara', cognome: 'Greco', età: 21 },
    { nome: 'Matteo', cognome: 'Ferrari', età: 34 },
    { nome: 'Elena', cognome: 'Fontana', età: 28 },
    { nome: 'Alessandro', cognome: 'Marini', età: 23 },
    { nome: 'Sara', cognome: 'Conti', età: 26 },
    { nome: 'Davide', cognome: 'Moretti', età: 32 }
];

const newArray = people.map(person => {
    let canDrive; 

    if (person.età >= 18) { 
        canDrive = 'può guidare';
    } else {
        canDrive = 'non può guidare';
    }

    return `${person.nome} ${person.cognome} ${canDrive}.`; 
});

console.log(newArray);
