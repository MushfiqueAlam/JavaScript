const clock = document.querySelector("#clock");

// let date=new Date();
// clock.innerHTML=date.toLocaleTimeString();
setInterval(()=>{
    let date=new Date();
    clock.innerHTML=`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
},1000)