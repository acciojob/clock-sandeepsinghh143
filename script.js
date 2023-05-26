//your JS code here. If required.
let time=document.getElementById("time");
setInterval(()=>{
	let d=new Date();
	time.innerText=d.getSeconds();
},1000);