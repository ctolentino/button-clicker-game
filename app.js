var num = document.getElementById("countNum");
var button = document.getElementById('button');

console.log(button);

button.addEventListener("click", incrementNum);

var i = 0;

	function incrementNum(){
		
		//compound condition
		if(i === 10 && i > 9){
			alert("Game Over");
		}

		//conditionals
		if(i > 5){
			alert("You're a winner!");
		}

		if(i === 10){
			i = 0;
		}

		//incrementing
		i++;

		//giving the num element a new value in innerHTML
		num.innerHTML = i;
		console.log("my function works");
		console.log(i);
	}