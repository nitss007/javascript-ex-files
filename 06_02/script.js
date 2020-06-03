const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock(){
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hrPosition = (hr/12)*360 + ((min/60)*360)/12;
    let minPosition = (min/60)*360+ ((min/60)*360)/60;
    let secPosition = (sec/60)*360;


    console.log("time : " + hr + min + sec);

    HOURHAND.style.transform = "rotate("+ hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate("+ minPosition + "deg)";
    SECONDHAND.style.transform = "rotate("+ secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);
