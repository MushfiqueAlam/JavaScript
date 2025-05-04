// console.log("Hello World");
// console.log("I am Mushfique");

// console.log(window.document)  //Element and tags in the document
// console.dir(document);//object and its methods and properties


// DOM Manipulation
// Selection by id
let button=document.getElementById("myBtn");
// console.log(button); //get the button element by id

// Selection by class name
let class1=document.getElementsByClassName("myClass");
// console.log(class1); //get the button element by class name



// Selection by tag name
let tag1=document.getElementsByTagName("p");
// console.log(tag1); //get the button element by tag name




// Selection by query selector
let myBtn=document.querySelector("#myBtn"); //get the button element by id
// console.log(myBtn); //get the button element by id

let myClass=document.querySelector(".myClass"); //get the button element by class name
// console.log(myClass); //get the button element by class name




// Selection by query selector all
let myClass1=document.querySelectorAll(".myClass"); //get the button element by class name
// console.log(myClass1); //get the button element by class name




// Properties
//  1. tagName: it returns the tag name of the element
//  2. id: it returns the id of the element
//  3. className: it returns the class name of the element
//  4. innerHTML: it returns the inner HTML of the element
//  5. innerText: it returns the inner text of the element  
//  6. outerHTML: it returns the outer HTML of the element
//  7. textContent: it returns the text content of the element



// let div=document.querySelector("div");
// console.log(div); //get the tag name of the element
// console.dir(div); //get the object of the element

let heading=document.querySelector("h2");
// console.dir(heading); //get the tag name of the element



let h1=document.querySelector("h1");
// console.log(h1.innerText)

// let divs=document.querySelectorAll(".box");
// divs[0].innerHTML="Random text for div 1";
// divs[1].innerHTML="Random text for div 2";
// divs[2].innerHTML="Random text for div 3";

// for(let i=0;i<divs.length;i++){
//     divs[i].innerText="Random text for div "+(i+1);
    
// }





// DOM Manipulation
// Attributes
// 1. getAttribute: it returns the value of the attribute
// 2. setAttribute: it sets the value of the attribute

// let div=document.querySelector("div");
// let id=div.getAttribute("id"); //get the id of the element
// let name=div.getAttribute("name"); //get the name of the element
// console.log(div); //get the tag name of the element
// console.log(id); //get the id of the element
// console.log(name); //get the name of the element

// let para=document.querySelector("p");
// console.log(para)
// console.log(para.getAttribute("class")); //get the class of the element


// let para1=document.querySelector("p");
// console.log(para1.setAttribute("class","myClass1")); //set the class of the element
// console.log(para1.getAttribute("class")); //get the class of the element

// style to access all the inline styles of the element
// let div=document.querySelector("div");
// div.style.color="red"; //set the color of the element
// div.style.backgroundColor="blue"; //set the background color of the element
// div.style.fontSize="50px";

// DOM Manipulation
// Insert and remove elements
// Insert elements (done in two parts a) create a new element and b) append the new element to the parent element)

// Methods to insert elements


// let ele=document.createElement("h1"); //create an element
//  node.append(el); //append the element to the parent element,add the element to the end of the parent element

// let newButton=document.createElement("button"); //create a new button element
// newButton.innerText="Click Me"; //set the inner text of the button
// console.log(newButton); //log the button element to the console

// let div=document.querySelector("div"); //get the div element
// div.append(newButton); //append the button to the div element



// Methods to remove elements in DOM
// element.remove()  //remove the element from the parent element
// div.remove(); //remove the div element from the parent element



// let newHeading=document.createElement("h1"); //create a new heading element
// newHeading.innerHTML="<i>Hello this is javaScript</i>"; //set the inner text of the heading
// document.querySelector("body").prepend(newHeading); //append the heading to the body element

// let para=document.querySelector("p"); //create a new paragraph element
// para.remove(); //remove the paragraph element from the parent element



// appendChild() method to append the new element to the parent element
// let newHeading=document.createElement("h1"); //create a new heading element
// newHeading.innerHTML="<i>Hello this is javaScript</i>"; //set the inner text of the heading
// document.querySelector("body").appendChild(newHeading); //append the heading to the body element
// newHeading.removeChild(newHeading); //remove the heading element from the parent element




let newButton=document.createElement("button"); //create a new button element
newButton.innerText="Click Me"; //set the inner text of the button
newButton.style.backgroundColor="red"; //set the background color of the button
newButton.style.color="white";
document.querySelector("body").prepend(newButton)