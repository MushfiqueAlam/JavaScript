function addTwoNumber(num1,num2){
    return num1 + num2;
}
// console.log(addTwoNumber(2,3)); // 5 



function loggedInMessage(userName){
    if(!userName){
        console.log("Please enter your name"); // Please enter your name
        return ""
        
    }else{
        return `Hello ${userName}, welcome to our website!` 
    }
}

// console.log(loggedInMessage("Mushfique"));



function calculateCartPrice(val1,val2,...num){
    console.log(val1,val2,num); // 2 3 [4, 5]
    return num;
}
// console.log(calculateCartPrice(2,3,4,5)); 


const user={
    userName:"Mushfique",
    price:100
}
function handleObject(object){
    console.log(`userName is ${user.userName} and price is ${user.price}`); // userName is Mushfique and price is 100
}

// handleObject(user); 


const arr=[1,2,3,4,5,6,7,8,9,10];
function handleArray(array){
    return array[1]; 
}
// console.log(handleArray([697,300,87.059])); // 2


const userName="Mushfique";
function handleString(string){
    return string; // M
}

// console.log(handleString("Alam")); 


const myFunction=function(userName){
    return userName; // Mushfique
}
// console.log(myFunction("Mushfique")); 



const newFunction=(userName)=>{
    return userName;
}

console.log(newFunction("Mushfique")); // Mushfique

const str="Mushfique";
const strFunction=(str)=>{
    return str; // Mushfique
}
console.log(strFunction("Mushfique")); // Mushfique