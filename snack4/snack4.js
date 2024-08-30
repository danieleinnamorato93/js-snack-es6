const footbalTeams = [ 
    {
        name:'Lipsia',
        points:0,
        fouls:0,

    },
    {
        name:'Liverpool',
        points:0,
        fouls:0,

    },
    {
        name:'Getafe',
        points:0,
        fouls:0,

    },
    {
        name:'Palermo',
        points:0,
        fouls:0,

    },
    
]
//creo una funzione per generare numeri randomici

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max-min +1)) +min;
}

//genero numeri casuali con for each  e la funzione getRandomNumber
footbalTeams.forEach(team=>{
    team.points = getRandomNumber(0,100);
    team.fouls = getRandomNumber(0,50);
});
console.log(footbalTeams)

//creo un nuovo array che contiene solo il nome e i falli subiti

const teamsFouls = footbalTeams.map(({name, fouls})  => ({name, fouls}));
console.log(teamsFouls)