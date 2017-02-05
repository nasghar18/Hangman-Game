var words = [
	"Mercury",
	"Venus",
	"Earth",
	"Mars",
	"Saturn",
	"Jupiter",
	"Neptune",
	"Uranus",
	"Pluto"
];

var wordpick = words[Math.floor(Math.random() * words.length)];
var wordequal = wordpick.toLowerCase('');
var wordChar = wordequal.split('');
var gotit = false;
//var wordlength = wordpick.length;
var hideword = new Array(wordChar.length);

for(var i = 0; i < hideword.length; i++){
	hideword[i] = " _ ";
};

function printBlanks(){
	for (var i = 0; i < hideword.length; i++){
		var gameDis = document.getElementById("guessing");
		var node = document.createTextNode(hideword[i]);
		gameDis.appendChild(node);
	};
};

var lives = 10;

document.querySelector("#lives").innerHTML = lives;

var guessedL = [];

document.onkeyup = function(event){

	var userGuess = event.key;
	if (userGuess.match(/[a-z]/i)) {
	    // alphabet letters found
		for (var i = 0; i < hideword.length; i++) {
			if (userGuess === wordChar[i]){
				hideword[i] = userGuess + " ";
				hideword[i] = hideword[i].toUpperCase('');
				var gotit = true;
			};

			//else if (userGuess !== wordequal[i]){
				//alert("you're wrong!");

			//};

		};

		if (!gotit) {
			guessedL.push(userGuess);
			guessedL = guessedL.filter( function( item, index, inputArray ) {
			           return inputArray.indexOf(item) == index;
			});
			document.querySelector("#missletters").innerHTML = guessedL;			
		}
		console.log(guessedL);

		var gameDis = document.getElementById("guessing");
		gameDis.innerHTML = "";
		printBlanks();

		var lives = 10 - guessedL.length;
		document.querySelector("#lives").innerHTML = lives;

		var check = true;

		for (var i =0; i < hideword.length; i++){

			if (hideword[i] === " _ "){
				check = false;
			};

		};

		if (check){
			alert("You've won!");
			//cont = true;
		};
			
		if (lives === 0){
			alert("Game Over!")
			//cont = true;
		};
	};

		



};
console.log(wordpick);
console.log(wordequal);

console.log(wordChar);
console.log(hideword);

console.log(lives);
window.onload = printBlanks ;