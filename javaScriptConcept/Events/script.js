// Events in JavaScript
// the change event is triggered when the value of an input element changes
// Events  are fired to notify code of changes in the state of the browser or DOM
// Examples
// 1. Mouse events: click, mouseover, mouseout, mousemove, mousedown, mouseup
// 2. Keyboard events: keydown, keyup, keypress
// 3. Form events: submit, change, focus, blur



// Node.event = ()=>{
//     // handle the event
// }

// let btn=document.querySelector("#btn")

// let a=1;
// btn.onclick=(event)=>{
//     console.log("Button clicked");
//     console.log(event); // event object
//     console.log(event.target); // target element that triggered the event
//     console.log(event.type); // type of event that was triggered
//     console.log(event.currentTarget); // current element that is being processed in the event bubbling phase
//     a++;
//     console.log(a);
// }


// let div=document.querySelector("div")
// div.onmouseover=(event)=>{
//     console.log("Mouse over div");
//     console.log(event); // event object
//     console.log(event.target); // target element that triggered the event
//     console.log(event.type); // type of event that was triggered
//     console.log(event.currentTarget); // current element that is being processed in the event bubbling phase
// }

//Note: If we have same event in inline html and in js, then the only js file event will be triggred not the inline html.
// If we have multiple same events hander function it will overwrite the previous function


// ---------------------------------------------------------------------------------------
// Event Object
// it is the special object that has deatils about the event that is fired
// All events handlers have access to the event object properties and methods




// Event Listeners -> it will listen for the event continuously and if event occurs and it executes this callback function
// node.addEventListener(event,callback); --> callback is a function which is passed as a argument to another function


// let btn=document.querySelector("#btn")
// const clickevent=()=>{
//     console.log("Button clicked using event listener");
//     // console.log(event); // event object
// }
// //  btn.addEventListener("click",()=>{
// //     console.log("Button clicked using event listener");
// //     // console.log(event); // event object
// // })
// btn.addEventListener("click",clickevent); // add event listener to the button

// btn.addEventListener("dblclick",()=>{
//     console.log("Button double clicked using event listener");
//     console.log(event); // event object
// })

// btn.addEventListener("mouseover",()=>{
//     console.log("Mouse over button using event listener");
//     console.log(event); // event object
// })

// // Remove event listener
// btn.removeEventListener("click",clickevent); // remove the event listener from the button


let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let currentMode="light"
modeBtn.addEventListener("click",()=>{
    if(currentMode==="light"){
        currentMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currentMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);
    // document.body.style.backgroundColor=currentMode==="light"?"white":"black"; // set the background color of the body element
    modeBtn.innerText=currentMode==="light"?"Switch to Dark Mode":"Switch to Light Mode"; // set the inner text of the button
    modeBtn.style.backgroundColor=currentMode==="light"?"red":"blue"; // set the background color of the button
    modeBtn.style.color=currentMode==="light"?"white":"black"; // set the color of the button
    document.querySelector("p").style.color=currentMode==="light"?"blue":"orange";

})