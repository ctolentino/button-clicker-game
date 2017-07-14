/* console.log("num", document.getElementById("countNum").innerHTML = 0);

console.log("button", document.getElementById('button'));

var i = 0;

function incrementNum(n){
	n++;
	return n;
}

console.log("click", document.getElementById('button').addEventListener("click", incrementNum)); */

var button = document.getElementById('button');

console.log(button);

button.addEventListener("click", incrementNum);

function incrementNum(){
	console.log("my function works");
	var n = 0;
	n+= 1;
	console.log(n);
	document.getElementById('countNum').innerHTML = n;
}