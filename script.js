const dayEl = document.getElementById('day');
const monthEl = document.getElementById('month');
const yearEl = document.getElementById('year');
const weekEl = document.getElementById('week')
const hoursEl = document.getElementById('Hours');
const minsEl = document.getElementById('Minutes');
const secondsEl = document.getElementById('Seconds');

const weeks ={
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT"
}
const months ={
    0: "JAN",
    1: "FEB",
    2: "MAR",
    3: "APR",
    4: "MAY",
    5: "JUN",
    6: "JUL",
    7: "AUG",
    8: "SEP",
    9: "OCT",
    10: "NOV",
    11: "DEC"
}

function displaydate(){
    const currentdate = new Date();
    const day = currentdate.getDate();
    const month = currentdate.getMonth();
    const year = currentdate.getFullYear();
    const week = currentdate.getDay();

    dayEl.innerHTML=day; 
    monthEl.innerHTML=months[month];
    yearEl.innerHTML=year;
    weekEl.innerHTML=weeks[week];
}

function timer(){
    const currentdate = new Date();
    const second = currentdate.getSeconds();
    const min = currentdate.getMinutes();
    const hour = currentdate.getHours();

    secondsEl.innerHTML = iflesszero(second); 
    minsEl.innerHTML = iflesszero(min);
    hoursEl.innerHTML = iflesszero(hour);      
    
}

function iflesszero(time){
    return time < 10 ? `0${time}` : time;
}

timer();
displaydate();


setInterval(timer,1000);