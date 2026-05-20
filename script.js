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
	else if(x<270000){
		let i = 2+(x-90000)/20000;
		let number = ExpantaNum.tetr(10,i).floor().toString();
		return number
	}
	else if(x<540000){
		let i = 2+(x-270000)/30000;
		let number = ExpantaNum.pent(10,i).floor().toString();
		return number
	}
	else if(x<3340000){
		let i = 2+((x-540000)/50000)%8;
		let j = Math.floor(3+((x-540000)/400000));
		let number = ExpantaNum.arrow(10,j,i).floor().toString();
		return number
	}
	else if(x < 4388576){
	let i = Math.floor(2 + ((x - 3340000) / 1));
	let number = ExpantaNum.expansion(10,i).floor().toString();
		return number
}
	else if(x < 6863576){
	let i = (20 + ((x - 4388576) / 75000));
	let j = Math.floor(ExpantaNum.pow(2,i).floor())
	let number = ExpantaNum.expansion(10,j).floor().toString();
	return number
}
	else if(x < 10388576){
		let i = (53 + ((x - 6863576) / 75000))
		let j = ExpantaNum.pow(2,i).floor()
		let number = "J|"+j
		return number
	}
	else if(x < 12788576){
		let i = 2 + (x-10388576)/300000
		let j = ExpantaNum.pow(i,100).floor()
		let number = "J|K|"+j
		return number
	}
	else if(x < 15188576){
		let i = ExpantaNum.pow(10,(2 + (x-12788576)/300000))
		let j = ExpantaNum.pow(10,i).floor()
		let number = "J|K|L"+j
		return number
	}
	else if(x < 17588576){
		let i = 2 + (x-15188576)/300000
		let j = ExpantaNum.tetr(10,i).floor()
		let number = "K^"+j
		return number
	}
	else if(x < 19988576){
		let i = 2 + (x-17588576)/300000
		let j = ExpantaNum.pent(10,i).floor()
		let number = "L^"+j
		return number
	}
	else if(x<21908576){
		let i = 2+((x-19988576)/30000)%8;
		let j = Math.floor(3+((x-19988576)/240000));
		let number = ExpantaNum.arrow(10,j,i).floor().toString();
		let number2 = "M^"+number
		return number2
	}
	else if(x < 22957152){
	let i = Math.floor(2 + ((x - 21908576) / 1));
	let number = ExpantaNum.expansion(10,i).floor().toString();
	return "N^"+number
}
	else if(x < 24607152){
	let i = (20 + ((x - 24607152) / 50000));
	let j = ExpantaNum.pow(2,i).floor()
	let number = ExpantaNum.expansion(10,j).floor().toString();
	return "R^"+number
}
		else if(x < 26807152){
	let i = (20 + ((x - 24607152) / 50000));
	let j = ExpantaNum.pow(2,i).floor()
	let number = ExpantaNum.expansion(10,j).floor().toString();
	return "?"+number
}

else if(x < 27807152){
	let i = (20 + ((x - 26807152) / 50000));
	let j = ExpantaNum.pow(2,i).floor()
	let number = ExpantaNum.expansion(10,j).floor().toString();
	return "!"+number
}
		else if(x < 28807152){
	let i = (20 + ((x - 27807152) / 50000));
	let j = ExpantaNum.pow(2,i).floor()
	let number = ExpantaNum.expansion(10,j).floor().toString();
	return "/"+number
}
		else if(x < 29807152){
	let i = (20 + ((x - 28807152) / 50000));
	let j = ExpantaNum.pow(2,i).floor()
	let number = ExpantaNum.expansion(10,j).floor().toString();
	return "-"+number
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
