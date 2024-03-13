//your JS code here. If required.
let time=document.getElementById("time");
const displayTime = () => {
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+', '+time;
time.innerText=dateTime;
	console.log(dateTime);
}
displayTime();
setInterval(displayTime,1000);