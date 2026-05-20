//2,200 sketches!!!
var num = 0;
var speed = 0.2; 
var msinterval = 10;
var precision = 4;
function D(x){return new ExpantaNum(x)}

function valueNumber(x){
	if(x<10000){
		let number = ExpantaNum.div(x,100).floor().toString();
		return number
	}
	else if(x<90000){
		let i = 2+(x-10000)/10000;
		let number = ExpantaNum.pow(10,i).floor().toString();
		return number
	}
		
	else return "Infinite"
	}


function changeinterval(){
		document.getElementById("intervalinput").innerHTML = displayOutput(document.getElementById("ii2").value)
}

function displayOutput(){
	document.getElementById("fafo").innerHTML = valueNumber(num)
document.getElementById("aaa~~").innerHTML = (num/24607152).toFixed(precision);
document.getElementById("dbd").innerHTML = Math.floor(((((24607152-num)/speed)/msinterval)/60)/60);
document.getElementById("dbdbd").innerHTML = Math.floor((((24607152-num)/speed)/msinterval)/60) % 60;
document.getElementById("dbdbdbd").innerHTML = Math.floor(((24607152-num)/speed)/msinterval) % 60;
document.getElementById("prec").innerHTML = precision
document.getElementById("interval").innerHTML = msinterval
document.getElementById("value").innerHTML = speed
document.getElementById("intervalpersecond").innerHTML = 1000/msinterval
document.getElementById("myv").innerHTML = num
	num+=speed
}
setInterval(displayOutput, msinterval)
