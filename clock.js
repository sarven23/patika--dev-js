let fullName = prompt("Adınızı Giriniz:")
let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} ${fullName}`

function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let d = dateTime.getDay();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('day').innerHTML = `${days[d]}`;
}
setInterval(displayTime, 10);