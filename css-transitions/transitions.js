var i = 0;
let timer = setInterval(()=>{
    i++;
    document.getElementById("timerElement").innerHTML = i;
    
    if(i==3){
        clearInterval(timer);
    }
}, 1000);