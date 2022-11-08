const todays_date = new Date()
let days = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(days)
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let date = days[todays_date.getDay()] + ", " + months[todays_date.getMonth()] + ' ' + todays_date.getDate() + ', ' + todays_date.getFullYear();
//creates date
let time_now = new Date()
let hour = time_now.getHours()
let minute = time_now.getMinutes()
greeting = "Good Night"
if (hour > 0 && hour < 12) {
    greeting = "Good Morning"
}
if (hour >= 12 && hour < 15) {
    greeting = "Good Afternoon"
}
if (hour > 15 && hour < 22) {
    greeting = "Good Evening"
}
//creates greeting
let ampm = "AM"
console.log(hour)
if (hour > 12) {
  hour = hour - 12
  ampm = "PM"
}
if (minute >= 0 && minute <= 9){
  minute = "0" + minute
}
console.log(ampm)
console.log(hour)
//creates time
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let raw_name = urlParams.get('name')
name = ", " + raw_name
if (name = ", null"){
    name = ""
}
// get name from website URL
let dgh = date + " - " + greeting + name

let time = hour + ":" + minute + " "
document.getElementById("day").innerHTML = dgh;
document.getElementById("time").innerHTML = time;
document.getElementById("ampm").innerHTML = ampm;
refreshtime = 60 - todays_date.getSeconds()
setTimeout(function(){
   window.location.reload(1);
}, refreshtime*1000);