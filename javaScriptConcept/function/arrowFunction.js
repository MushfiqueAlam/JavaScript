const user={
    username: "Mushfique",
    price: 1000,

    welcomeMessage:function(){
        console.log(`Hello ${this.username}, welcome to our website`);
        console.log(this);
    }
}
// user.welcomeMessage();
// user.username="Mushfique Alam";
// user.welcomeMessage()

// console.log(this);

// function sayMyName() {
//     const username="Mushfique";
//     console.log(this.username);
// }
// sayMyName();

const sayMyName=()=>{
    let username="Mushfique";
    console.log(this);
}
// sayMyName();


// const addtwoNum=(a,b)=>{
//     return a+b;//explicit return
// }
// console.log(addtwoNum(4,5));


// const addtwoNum=(a,b)=>(a+b); //implicit return
// console.log(addtwoNum(4,5));


const obj=()=>({name:"Mushfique",age:21});
console.log(obj());
