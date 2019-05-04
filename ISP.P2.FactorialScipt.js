var colorUnit = 255/10;

var red = 0, green = 0, blue = 0;


function Factorial()
{
	var numb = PromtPosNumb();
	var result = CalculateFactorial(numb);

	document.getElementById("factorialResult").innerHTML = result;
	document.getElementById("factorialResult").style.fontSize = (Math.log(result)) + 'px';

	SetColors(result);
	
	document.getElementById("factorialResult").style.color = "rgb(" + red + "," + green + "," + blue + ")";
}


function SetColors(result)
{
	var colorStr = result.toString();
	var len = colorStr.length;

	red = parseInt(colorStr[0]) * colorUnit;

	if (len >= 3)
	{
		green = parseInt(colorStr[1]) * colorUnit;
		blue = parseInt(colorStr[2]) * colorUnit;
	}
	else
	{ 
		green = 2 * colorUnit;
		blue = 4* colorUnit;
	}

	
}


function PromtPosNumb()
{
	var validinput = false;

	do
	{
		var numb = prompt("Please enter a positive number from which to calculate a factorial:", "8");

		if (numb >= 0)
		{ 
			validinput = true;
		}
		else if (numb < 0)
		{ 
			alert("You have entered a negetive number. Please enter a positive number.");
		}

	}while (validinput == false);

	return numb;
}


function CalculateFactorial(numb)
{
	if (numb == 0)
	{ return 1; }

	return numb * CalculateFactorial(numb - 1);
}

