const nums= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterarray=nums.filter((num)=>{
    // if(num%2==0){
    //     console.log(num); // 2 4 6 8 10
    // }
    return num%2==0; // this will return an array of even numbers
})
// console.log(filterarray); // [2, 4, 6, 8, 10]


const newNum=[];
nums.filter((num)=>{
    if(num%2==0){
        newNum.push(num); // this will return an array of even numbers
    }
})
// console.log(newNum); // [2, 4, 6, 8, 10]



const books=[
    {
        title:"JavaScript",
        year:2020,  
        generation:"Programming"
    },
    {
        title:"Python",
        year:2021,
        generation:"Programming"
    },
    {
        title:"Java",
        year:2022,
        generation:"Programming"
    },
    {
        title:"C++",
        year:2023,
        generation:"Programming"
    },
    {
        title:"C#",
        year:2024,
        generation:"Programming"
    },
]

let userBook=books.filter((book)=>{
    return book.year>2022; // this will return an array of books whose year is greater than 2022
})
console.log(userBook);

