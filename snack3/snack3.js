const racingBikes= [
    {
        name:'Giant Propel Advanced SL',
        weight:6.8,
    },
    {
        name:'Scott Addict RC Ultimate',
        weight:6.7
    },
    {
        name:'Specialized S-Works Aethos',
        weight:6.3,
    },
    {
        name:'Wilier Zero SLR',
        weight:7.1,
    },

];
console.log(racingBikes)

const lighterBike = racingBikes.reduce((min, racingBike)=>{
    return racingBike.weight < min.weight ? racingBike : min ;
});

const {name, weight} = lighterBike;
console.log(`La bici più leggera è la ${name},pesa circa ${weight}kg.`);

const message = document.createElement('p');
message.textContent =`La bici più leggera è la ${name},pesa circa ${weight}kg.`
document.body.appendChild(message);