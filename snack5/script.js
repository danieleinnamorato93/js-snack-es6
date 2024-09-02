//creo un array di stringhe

const guitars = [
    'les paul','jaguar','telecaster', 'stratocaster' ,'JAZZMASTER'
];
const formattedGuitars = guitars.map(guitar =>{
    return guitar.charAt(0).toUpperCase() + guitar.slice(1).toLowerCase();


});
console.log(formattedGuitars)