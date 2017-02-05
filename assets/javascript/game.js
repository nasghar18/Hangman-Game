//var cont = true;
//while (cont){

var words = [

	//["M", "E", "R", "C", "U", "R", "Y"],
	//["V", "E", "N", "U", "S"],
	//["E", "A", "R", "T", "H"],
	//["M", "A", "R", "S"],
	//["S", "A", "T", "U", "R", "N"],
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

//var gamediv = document.getElementById("game");
//var newDiv = document.createElement("div");
//gamediv.appendChild(newDiv);
//var node = document.createTextNode(hideword);
//newDiv.appendChild(node);


    //newDiv.innerHTML = hideword;
//var hidehtml = "<p>" + hideword + "</p>";

//document.querySelector("#game").innerHTML = hideword;

//console.log(words);
	var lives = 10;

	document.querySelector("#lives").innerHTML = lives;

	var guessedL = [];



		document.onkeyup = function(event){

			var userGuess = event.key;

			//var lives = 10;

			for (var i = 0; i < hideword.length; i++){
				if (userGuess === wordequal[i]){
					hideword[i] = userGuess + " ";
					hideword[i] = hideword[i].toUpperCase('');
					var gotit = true;
				};

				//else if (userGuess !== wordequal[i]){
					//alert("you're wrong!");

				//};

			};

		
			var gameDis = document.getElementById("guessing");
			gameDis.innerHTML = "";
			printBlanks();

			guessedL.push(userGuess);

		};	
			if (!gotit){
				guessedL.push(userGuess);
				var guesscheck = 0;
				for (var i = 0; i < guessedL.length; i++){
					if (userGuess === guessedL[i]){
						//var missedP = document.getElementById("missletters");
						//var missedL = document.createTextNode(" " + userGuess);
						//missedP.appendChild(missedL);
						//lives --;
						lives=lives + 0;
						var guesscheck = 1;

					}

				};

				if (guesscheck = 0){

					for (var i =0; i < guessedL.length; i++){
						var missedP = document.getElementById("missletters");
						var missedL = document.createTextNode(" " + userGuess);
						missedP.appendChild(missedL);
						lives --;

						//if(userGuess === guessedL[i]){
							//lives = lives + 0;
							//var matcher = true;
					}

					//};

					//if (!matcher)


				//};

				
				console.log(guessedL);
			};	
				//document.querySelector("#lives").innerHTML = lives;
				



			document.querySelector("#lives").innerHTML = lives;
			//var livesP = document.getElementById("lives");
			//var newlivesP = document.createTextNode(lives);
			//livesp.appendChild(newlivesP);

			var check = true;

			for (var i =0; i < hideword.length; i++){

				if (hideword[i] === " _ "){
					check = false;
				};

			};
			//var cpucheck = wordequal.toLowerCase('');

			//var usercheck = hideword.toLowerCase('');
			//console.log(usercheck);
			//cont = false;



			if (check){
					alert("You've won!");
					//cont = true;
			};
			
			if (lives === 0){
					alert("Game Over!")
					//cont = true;
			};


			//if (lives ===)
		};
	



		//var gameDis = document.getElementById("guessing");
		//gameDis.innerHTML = "";
		//printBlanks();

		console.log(wordpick);
		console.log(wordequal);

		console.log(wordChar);
		console.log(hideword);

		console.log(lives);



		window.onload = printBlanks ;


