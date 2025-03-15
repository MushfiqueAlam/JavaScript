//object literals


const mySymbol=Symbol("mySymbol1")

const user={
    name:"Mushfique",
    "full name":"Mushfique Alam",//dont acces by dot notation
    age:21,
    [mySymbol]:"mysymbol182",
    location:"Bihar",
    email:"mushfique@gmail.com",
    isLoggedIn:true,
    lastLoggInDays:["monday","tuesday"]
}
// console.log(user.name)
// console.log(user["name"])
// // console.log(user.full name)//dont acces by dot notation
// console.log(user["full name"])
// console.log(user[mySymbol])

user.email="mushfique12@gmail.com"
// console.log(user.email)
// Object.freeze(user)
// user.email="musha@gmail.com"
// console.log(user)

user.greeting=function(){
    console.log(`Hello I am here`);
}
user.greeting2=function(){
    console.log(`Hello I am here, ${this.name}`);
}
console.log(user.greeting())
console.log(user.greeting2())