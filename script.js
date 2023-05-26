//your JS code here. If required.
let time=document.getElementById("time");
setInterval(()=>{
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+', '+time;
time.innerText=dateTime;
},1000);