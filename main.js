let hour = 0;
let minute =0;
let second = 0;
  
let time = document.getElementById("time")
time.innerHTML = hour+":"+minute+":"+second
let startt = document.getElementById("start")
let stopp = document.getElementById("stop")
let resett = document.getElementById("reset")
var intervalID

function timer(){ 
    second++;      
    time.innerHTML = hour+":"+minute+":"+second 
    if (second == 60){
        minute++;
        second = 0;
    }else if(minute==60){
        hour++;
        minute = 0;
    }
      

}

document.querySelector("#stop").disabled = true;

startt.onclick = function start(){
    intervalID = setInterval(timer, 1000);
    document.querySelector("#start").disabled = true;
    document.querySelector("#stop").disabled = false;
}

stopp.onclick = function stop(){
    clearInterval(intervalID);
    startt.innerHTML = "Conitnue";
    document.querySelector("#start").disabled = false;
    document.querySelector("#stop").disabled = true;
}
resett.onclick = function reset(){
    clearInterval(intervalID);
    startt.innerHTML = "Start";
    document.querySelector("#start").disabled = false;
    document.querySelector("#stop").disabled = true;
    hour = 0;
    minute =0;
    second = 0;
    time.innerHTML = hour+":"+minute+":"+second;
}





        