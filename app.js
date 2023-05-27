
let dates = new Date().getDate();
let days = new Date().getDay();
let months = new Date().getMonth().toString();
let copyDay = new Date().toString().slice(0,3);
let copyMonth = new Date().toString().slice(4);
let copysMonths = copyMonth.slice(0,4);
let dateIdHtml = document.getElementById("date").innerHTML = dates;
let dayIdHtml = document.getElementById("day").innerHTML = copyDay;
let monthIdHtml = document.getElementById("month").innerHTML = copysMonths;

function on() {
    function clock() {
        let hours = document.getElementById("hours");
        let minutes = document.getElementById("minutes");
        let seconds = document.getElementById("seconds");
        let session = document.getElementById("session");
        let show = document.getElementById("show").style.display = "block";
        let tim1 = document.getElementById("tim1");
        let fajr = document.getElementById("fajr");
        let zohr = document.getElementById("zohr");
        let aasr = document.getElementById("aasr");
        let magr = document.getElementById("magr");
        let esha = document.getElementById("esha");
        let jumma = document.getElementById("jumma");
        let timer = document.getElementById("timer");
        let lstTime = document.getElementById("lstTime");
        let mob = document.getElementById("mob");

        let h = Number(new Date().getHours());
        let m = Number(new Date().getMinutes());
        let s = Number(new Date().getSeconds());

        if (h >= 12) {
            session = session.value = "PM";
        } else {
            session = session.value = "AM";

        }

        if (h > 12) {
            h = h - 12;
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        hours.value = h;
        minutes.value = m;
        seconds.value = s;
        let plus = `${h}${m}${s}`;

        show.innerHTML = tim1.style.display = "none";

        if (plus >= "050000" && plus <= "052000" && session == "AM") {
            fajr.value = "5 20";
            fajr.style.color = "chartreuse";
            zohr.value = "1 45";
            zohr.style.color = "red";
            aasr.value = "5 45";
            aasr.style.color = "red";
            magr.value = "7 14";
            magr.style.color = "red";
            esha.value = "9 00";
            esha.style.color = "red";
            jumma.value = "2 15";
            jumma.style.color = "red";
            mob.innerHTML = "Please Turn Off Mobile";
            mob.style.color = "chartreuse";
        }
        else if (plus >= "012500" && plus <= "014500" && session == "PM" && (days == "0"|| days == "1"|| days == "2"|| days == "3"|| days == "4"|| days == "6")) {
            fajr.value = "5 20";
            fajr.style.color = "red";
            zohr.value = "1 45";
            zohr.style.color = "chartreuse";
            aasr.value = "5 45";
            aasr.style.color = "red";
            magr.value = "7 14";
            magr.style.color = "red";
            esha.value = "9 00";
            esha.style.color = "red";
            jumma.value = "2 15";
            jumma.style.color = "red";
            mob.innerHTML = "Please Turn Off Mobile";
            mob.style.color = "chartreuse";
        }
        else if (plus >= "052500" && plus <= "054500" && session == "PM") {
            fajr.value = "5 20";
            fajr.style.color = "red";
            zohr.value = "1 45";
            zohr.style.color = "red";
            aasr.value = "5 45";
            aasr.style.color = "chartreuse";
            magr.value = "7 14";
            magr.style.color = "red";
            esha.value = "9 00";
            esha.style.color = "red";
            jumma.value = "2 15";
            jumma.style.color = "red";
            mob.innerHTML = "Please Turn Off Mobile";
            mob.style.color = "chartreuse";
        }
        else if (plus >= "065400" && plus <= "071400" && session == "PM") {
            fajr.value = "5 20";
            fajr.style.color = "red";
            zohr.value = "1 45";
            zohr.style.color = "red";
            aasr.value = "5 45";
            aasr.style.color = "red";
            magr.value = "7 14";
            magr.style.color = "chartreuse";
            esha.value = "9 00";
            esha.style.color = "red";
            jumma.value = "2 15";
            jumma.style.color = "red";
            mob.innerHTML = "Please Turn Off Mobile";
            mob.style.color = "chartreuse";
        }
        else if (plus >= "084500" && plus <= "090000" && session == "PM") {
            fajr.value = "5 20";
            fajr.style.color = "red";
            zohr.value = "1 45";
            zohr.style.color = "red";
            aasr.value = "5 45";
            aasr.style.color = "red";
            magr.value = "7 14";
            magr.style.color = "red";
            esha.value = "9 00";
            esha.style.color = "chartreuse";
            jumma.value = "2 15";
            jumma.style.color = "red";
            mob.innerHTML = "Please Turn Off Mobile";
            mob.style.color = "chartreuse";
        }
        else if (plus >= "015500" && plus <= "021500" && session == "PM" && days == "5") {
            fajr.value = "5 20";
            fajr.style.color = "red";
            zohr.value = "1 45";
            zohr.style.color = "red";
            aasr.value = "5 45";
            aasr.style.color = "red";
            magr.value = "7 14";
            magr.style.color = "red";
            esha.value = "9 00";
            esha.style.color = "red";
            jumma.value = "2 15";
            jumma.style.color = "chartreuse";
            mob.innerHTML = "Please Turn Off Mobile";
            mob.style.color = "chartreuse";
        }
        else {
            fajr.value = "5 20";
            fajr.style.color = "red";
            zohr.value = "1 45";
            zohr.style.color = "red";
            aasr.value = "5 45";
            aasr.style.color = "red";
            magr.value = "7 14";
            magr.style.color = "red";
            esha.value = "9 00";
            esha.style.color = "red";
            jumma.value = "2 15";
            jumma.style.color = "red";
            mob.innerHTML = "";
            mob.style.color = "chartreuse";
        }
        
        if(plus >= "050000" && plus <= "054459" && session == "AM"){
            lstTime.value = "5 44";
            lstTime.style.color = "chartreuse";
        }else if (plus >= "012500" && plus <= "050959" && session == "PM") {
            lstTime.value = "5 28";
            lstTime.style.color = "chartreuse";
        }else if (plus >= "052500" && plus <= "071459" && session == "PM") {
            lstTime.value = "7 14";
            lstTime.style.color = "chartreuse";
        }else if (plus >= "065400" && plus <= "084059" && session == "PM") {
            lstTime.value = "8 40";
            lstTime.style.color = "chartreuse";
        }else if ((plus >= "084500" && plus <= "005959" && session == "PM") || (plus >= "010000" && plus <= "041759" && session == "AM")) {
            lstTime.value = "4 17";
            lstTime.style.color = "chartreuse";
        }else if (plus >= "015500" && plus <= "052859" && session == "PM" && days == "5") {
            lstTime.value = "5 28";
            lstTime.style.color = "chartreuse";
        }else {
            lstTime.value = "0 00";
            lstTime.style.color = "red";
        }
    }
    setInterval(clock, 1000);
}


function off() {
    location.reload();
}