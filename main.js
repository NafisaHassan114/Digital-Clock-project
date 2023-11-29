const month = document.querySelector("#month")
const day = document.querySelector("#day")
const year = document.querySelector("#year")

const hour = document.querySelector("#hr")
const minutes = document.querySelector("#min")
const seconds = document.querySelector("#sec")

const morning = document.querySelector("#MorA")

const dayNames = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "friday", "Saturday"]
const monthNames = ["Jan","Feb","Mar","Apr","May","jun","Jul","Aus","Sep","Oct","Nov","Dec"]
function clock(){
    const dateTime = new Date()
month.innerHTML = monthNames[dateTime.getMonth()] 
day.innerHTML = dateTime.getDate()
year.innerHTML = dateTime.getFullYear()

if(dateTime.getHours() > 12){
    morning.innerHTML = "PM"
}
else{
    morning.innerHTML = "AM"
}
 
if(dateTime.getHours() < 10){
    hour.innerHTML = `0${dateTime.getHours()}:`
}
else{
    hour.innerHTML = dateTime.getHours() + ":"
}
 if(dateTime.getMinutes() < 10){
    minutes.innerHTML =`0${dateTime.getMinutes()}:`
 }  
 else{
    minutes.innerHTML = dateTime.getMinutes() + ":"
 }
 
seconds.innerHTML = dateTime.getSeconds()


}

setInterval(clock)