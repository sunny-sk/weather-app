const today = new Date();
const currentDay    =  today.getDay();
// getting all document
const $ = document.querySelector.bind(document);
   // week days
const weeksDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const months  =   ["january","feb","march","april","may","june","july","august","september","october","novemebr","december"];


function setDays(){
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
    $(".date").innerText = `${weeksDays[currentDay-1]}, ${currentDate} ${months[currentMonth]}`;
    // $(".day").innerText = weeksDays[currentDay-1];

}




function x(){
    //     // geting dates and times
    const currentHour  = today.getHours();
    const currentMinute = today.getMinutes();
    const currentSeconds = today.getSeconds();
    var getAmPm = currentHour >= 12 ? "pm" : "am";
    $(".hour").innerText = `${Math.abs(currentHour)} :`
    $(".minute").innerText = `${currentMinute}`;
    $(".ampm").innerText = `${getAmPm}`
    $(".inner-navbar-box").style.backgroundColor = `black`;

}

setDays();
x();
setInterval(x,1000);


