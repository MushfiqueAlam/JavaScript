// Immediately Invoked Function Expression (IIFE)
// IIFE is a JavaScript function that runs as soon as it is defined.
// It is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

(function myanme(){
    console.log("IIFE")
})();  //if i give semicolon here then it will not  give error;
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

(function myage(){
    console.log("IIFE")
})(); //if i give semicolon here then it will not give error;
// The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.   

((name)=>{
    console.log(`Hello ${name}`);
})(`Mushfique`);
// The second part creates the immediately executing function expression () through which the JavaScript engine will directly interpret the function.   