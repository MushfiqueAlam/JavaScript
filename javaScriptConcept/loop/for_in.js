// for in loop in javascript -> iterating object, array, string, etc.
// The for...in statement iterates over all enumerable properties of an object, in arbitrary order.

const obj={
    game1:"cricket",
    game2:"football",       
    game3:"hockey",
    game4:"tennis",
}
for(const key in obj){
    // console.log(key,obj[key]); 
}

const array = ["javascript", "python", "java", "c++"];
for(const key in array){
//    console.log(key,array[key]); // 0 "javascript" 1 "python" 2 "java" 3 "c++"
}


const map=new Map();
map.set(1,"one");
map.set(2,"two");
map.set(3,"three");

for(const key in map){
    // console.log(key,map[key]); // this will give error as map is not iterable
}
// console.log(typeof map); // object

