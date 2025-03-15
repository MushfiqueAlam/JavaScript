//Array

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,true,"Musha",null,undefined];
// console.log(myArray);

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(myArray[3]);
// const myHero = ["Mushfique", "Alam", "MushfiqueAlam"];
// const myArray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(myArray);
// myArray.push(11);
// myArray.pop();
// myArray.unshift(0);
// myArray.shift();


// console.log(myArray.includes(11));
// console.log(myArray.indexOf(6));

// const newArray = myArray.join();
// console.log(typeof newArray);

// console.log(myArray);
// console.log(myArray.slice(2, 5));
// console.log(myArray.splice(2, 5));
// console.log(myArray);


const marvel_heroes = ["Ironman", "Thor", "Hulk", "Spiderman", "Captain America"];
const dc_heroes = ["Superman", "Batman","Flash", "Wonder"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes.length);
// console.log(marvel_heroes[5][2]);

// const all_heros=marvel_heroes.concat(dc_heroes);
// console.log(all_heros);

// const all_heros2=[...marvel_heroes,...dc_heroes];
// console.log(all_heros2);

// const all_heros3=[...marvel_heroes,"Mushfique",...dc_heroes];
// console.log(all_heros3);

console.log(Array.isArray("Mushfique"));
console.log(Array.from("Mushfique"));
console.log(Array.from({name:"Mushfique"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));