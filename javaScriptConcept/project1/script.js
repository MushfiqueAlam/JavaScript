const body=document.querySelector("body");
const button=document.querySelectorAll(".button");
button.forEach(function(btn){
    btn.addEventListener("click",(e)=>{
       if(e.target.id==="grey"){
        body.style.backgroundColor="grey";
       }else if(e.target.id==="blue"){
        body.style.backgroundColor="blue";
       }else if(e.target.id==="white"){
        body.style.backgroundColor="white";
       }else if(e.target.id==="yellow"){
        body.style.backgroundColor="yellow";
       }
    })
})

