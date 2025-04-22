// for of loop in javascript -> iterating array, string, set, map, etc.
// The for...of statement creates a loop iterating over iterable objects, including built-in String, Array, array-like objects (e.g. arguments or NodeList), and other iterable objects.
// It invokes a custom iteration hook with statements to be executed for the value of each distinct property.



const array = [1, 2, 3, 4, 5];
for(const number of array){
    // console.log(number); // 1 2 3 4 5
}



const string = "Hello World";
for(const char of string){
    // console.log(char); // H e l l o   W o r l d
}

// Maps->unique values in same ordered in which they were inserted
const map=new Map();
map.set(1,"one");
map.set(2,"two");
map.set(3,"three");
map.set(1,"one"); // this will not add a new value as key is same
console.log(map);

for(const item of map){
    // console.log(item);
}

for(const [key,value] of map){
    // console.log(key,value); // 1 "one" 2 "two" 3 "three"
}

// destructuring the map
const arr=["In","India"];
const [key,value]=arr;
// console.log(key,value); // In India


const obj={
    game1:"cricket",
    game2:"football",
    game3:"hockey",
    game4:"tennis",
}
for(const [key,value] of obj){
    // console.log(key,value); // this will give error as object is not iterable
}