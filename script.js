const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runClock(){
    let hrPosition = 13;
    let minPosition = 34;
    let secPosition = 288;

    var date = new Date();
    console.log(date)
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    secPosition = sec * 360/60;
    minPosition = min * (360/60) + sec/60;
    hrPosition = hour * (360/12) + min/12;

    HOURHAND.style.transform = "rotate("+ hrPosition +"deg)";
    MINUTEHAND.style.transform = "rotate("+  minPosition +"deg)";
    SECONDHAND.style.transform = "rotate("+ secPosition +"deg)";

}


var interval = setInterval(runClock,1000)
