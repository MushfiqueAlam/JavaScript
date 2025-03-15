// const tinderUser=new Object(); //object singleton

const tinderUser={}
tinderUser.userId="euey334"
tinderUser.name="Mushfique"
tinderUser.isLoggedin=true
// console.log(tinderUser)


const regularUser={
    email:"musha@gmail.com",
    fullname:{
        firstname:"Mushfique",  
        lastname:"Alam"
    }
}
// console.log(regularUser.fullname.firstname)

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"a",5:"b",6:"c"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedin'))

const course={
    coursename:"JavaScript",
    courseDuration:"6 months",
    courseFee:10000
}
// course.courseDuration="8 months"

const {courseDuration:duration}=course
// console.log(courseDuration)
console.log(duration)

