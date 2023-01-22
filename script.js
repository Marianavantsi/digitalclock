 const getHour = document.getElementById("hour")
 const getMinute = document.getElementById("minutes")
 const getSecond = document.getElementById("second")
 const ampmTime = document.getElementById("ampm")


function newClock(){
       let h = new Date().getHours()
       let m = new Date().getMinutes()
       let s = new Date().getSeconds()
       let ampm = "AM"



       if (h > 12){
        h = h- 12
        ampm = "PM"
       }

       h = h<10 ? "0" + h : h;
       m = m<10 ? "0" + m : m;
       s = s<10 ? "0" + s : s;

       getHour.innerText = h;
       getMinute.innerText = m;
       getSecond.innerText = s;
       ampmTime.innerText = ampm;
       setTimeout(()=>{
        newClock()
       },1000)
    }
    newClock();