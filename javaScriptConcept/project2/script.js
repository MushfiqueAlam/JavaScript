const form =document.querySelector('form');
form.addEventListener("submit",(e)=>{
    e.preventDefault();// Prevent the default form submission behavior.when it dont use then the page will refresh and the data will be lost and got to the server.
    // console.log(e)
    // console.log(e.target); // Log the target of the event (the form element)
    // let value = e.target[0].value; // Get the value of the first input field in the form

    let height=parseInt(document.querySelector("#height").value); // Get the value of the height input field
    let weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector("#results");
    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML=`Please enter a valid height ${height}!`
        result.style.color="red";
    }
   else if(weight==="" || weight<0 || isNaN(weight)){
        result.innerHTML=`Please enter a valid weight ${weight}!`
        result.style.color="red";
    }
    else{
        const bmi=(weight/(height*height));
        result.innerHTML=`Your BMI is ${bmi.toFixed(2)}`; 
        result.style.color="green";
    }
    // console.log(height); // Log the value to the console
})