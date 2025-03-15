const sayMyName = function() {
    console.log("Mushfique");
    console.log("Mushfique");
    console.log("Mushfique");
    console.log("Mushfique");
    console.log("Mushfique");
    console.log("Mushfique");
}
// sayMyName();

// function addTwoNumber(a,b){
//     // console.log(a+b);
//     return a+b;
// }
// // addTwoNumber(4,5);
// const sum=addTwoNumber(4,5);
// console.log(sum);

function loginUserMessage(username) {
    if(!username) {
        return "Please provide a username";
    }
    return `${username} is logged in`;
}
const message = loginUserMessage("Mushfique");
// console.log(message);


function calculateCartPrice(...num1){
    return num1
}

// const cartPrice = calculateCartPrice(100, 200, 300);
// console.log(cartPrice);


const user = {
    name: "Mushfique",
    age: 21,
    location: "Bihar",
    email: "musha@gmail.com"
}
function handleObject(object){
    return `Hello ${object.name}, you are ${object.age} years old and you are from ${object.location} and your email is ${object.email}`;
}

// handleObject(user);
// console.log(handleObject(user));

handleObject({
    username: "Mushfique",
    userage: 21
})

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function handleArray(array){
    // return array;
    return array[3];
}
console.log(handleArray(myArray));