$(document).ready(function()
{

	var counter = 0;
	var wins = 0;
	var losses = 0;
	var crystalNum = [];
	var compNum = [];
	var lowEnd = 19;
	var highEnd = 120;
	var crystalNum = [];
	var crystalLow = 1;
	var crystalHigh = 12;
	var imageCrystal = $("<img>");
	var imageCrystal1 = $("<img>");
	//var imageCrystal2 = $("<img>");
	var imageCrystal3 = $("<img>");
			
		/*clears the crystal values and starts the game over*/
		function reset()
		{
		$("#crystals").empty();
		setGame();
		}
		/*sets up the game*/
		function setGame ()
		{
			/*sets up the array of numbers decided by high and low var above*/
			while(lowEnd <= highEnd)
			{
				compNum.push(lowEnd++);
			}
			/*picks a random number from the array*/			
			compChoice = compNum[Math.floor(Math.random() * compNum.length)];
			$("#compChoice").html(compChoice);
			/*sets up the array of numers decided by high and low var*/
			while(crystalLow <= crystalHigh)
			{
				crystalNum.push(crystalLow++);
			}
			
			/*assigns a class, gets the picture, assigns ramdom from array to the image, adds image to html*/
			crystalChoice = crystalNum[Math.floor(Math.random() * (.5) * (crystalNum.length))] * [2];
			imageCrystal.addClass("crystal-image");
			imageCrystal.attr("src", "assets/images/red.jpg");
			imageCrystal.attr("data-crystalvalue", crystalChoice);
			$("#crystals").append(imageCrystal);
		  
			crystalChoice1 = crystalNum[Math.floor(Math.random() * crystalNum.length)];
			imageCrystal1.addClass("crystal-image");
			imageCrystal1.attr("src", "assets/images/amethyst.jpg");
			imageCrystal1.attr("data-crystalvalue", crystalChoice1);
			$("#crystals").append(imageCrystal1);

		 	crystalChoice2 = crystalNum[Math.floor(Math.random() * (.5) * (crystalNum.length))] * [2];
				if(crystalChoice2 !== crystalChoice)
				{
					var imageCrystal2 = $("<img>");
					imageCrystal2.addClass("crystal-image");
					imageCrystal2.attr("src", "assets/images/yellow.jpg");
					imageCrystal2.attr("data-crystalvalue", crystalChoice2);
					$("#crystals").append(imageCrystal2);
					//console.log(crystalChoice2);
				}
				else if (crystalChoice2 === crystalChoice)
				{
						if (crystalChoice2 <= 10)
						{
							crystalchoice2 = crystalChoice2 + 2;
						}
						else if (crystalChoice2 >= 11)
						{
							crystalChoice2 = crystalChoice2 - 2;
						}

					//crystalChoice2 = crystalChoice + 2;
					//$("#crystals").append(imageCrystal2);
						//console.log(crystalChoice2);
				}	
			
			//imageCrystal2.addClass("crystal-image");
			//imageCrystal2.attr("src", "assets/images/yellow.jpg");
			//imageCrystal2.attr("data-crystalvalue", crystalChoice2);
			//$("#crystals").append(imageCrystal2);

			crystalChoice3 = crystalNum[Math.floor(Math.random() * crystalNum.length)];
			imageCrystal3.addClass("crystal-image");
			imageCrystal3.attr("src", "assets/images/clear.jpg");
			imageCrystal3.attr("data-crystalvalue", crystalChoice3);
			$("#crystals").append(imageCrystal3);
			/*determines what happen when the images are clicked*/
		  	$(".crystal-image").on("click", function()
		  	{
		  	    var crystalValue = ($(this).attr("data-crystalvalue"));
			    crystalValue = parseInt(crystalValue);
			    counter += crystalValue;
			    $("#score").html(counter);
			    console.log(counter);
				    /*determines what happens if counter and compChoice match*/
					if (counter === compChoice) 
					{
					    wins++;
					    alert("You win!");
					    $("#wins").html(wins);
					    counter = 0;
					    $("#score").html(counter);
					    reset();
					}
				    
				    else if (counter >= compChoice)
				    {
				    	losses++;
				    	alert("You lose!!");
				    	$("#losses").html(losses);
				    	counter = 0;
				    	$("#score").html(counter);
				    	reset();
					}
			}
			)

		}
	setGame()
}); 			