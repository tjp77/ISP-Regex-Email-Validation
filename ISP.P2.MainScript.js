
// Time Update 

setInterval(TimeUpdate, 0);


// Box image movement

var theBox = document.getElementById('box').style;
var boxX, boxY, boxFinalX, boxFinalY;

theBox.position = 'absolute';
theBox.left = window.innerWidth / 2 - 24 + 'px';
theBox.position.right = '0px';


// Email validation 

var tipBox = document.getElementById("tipBox");
var tbFeedBack = document.getElementById("tbFeedBack");

var badSpan = '<span style = "color: red; text-decoration: line-through; font-weight: bold;">';
var spanEnd = '</span>';

var validEmail = /^[(A-Za-z)][^@\s]*@[^@\s]+\.[^@\s0-9]{2,3}$/;


// ----------


function TimeUpdate()
{
	var currDateTime = new Date();
	document.getElementById("curTime").innerHTML = currDateTime.toLocaleString();
	return true;
}


// ----------



function alertTheBox(event) 
{
	boxFinalX = event.clientX - 24;
	boxFinalY = event.clientY - 24;

	var boxX = theBox.left;
	var boxY = theBox.top;

	boxX = boxX.match(/\d+/);
	boxY = boxY.match(/\d+/);

	moveBox(boxX, boxY);

	return true;
} 


function moveBox(boxX, boxY)
{

	if (boxX != boxFinalX)
	{
		if (boxX > boxFinalX) 
		{ --boxX; }
		else if (boxX < boxFinalX)
		{ ++boxX;}
	}

	if (boxY != boxFinalY)
	{
		if (boxY > boxFinalY) 
		{ --boxY; }
		else if (boxY <boxFinalY) 
		{ ++boxY; }
	}

	if ( (boxX != boxFinalX) || (boxY != boxFinalY) )
	{

		theBox.left = boxX + "px";
		theBox.top = boxY + "px";

		setTimeout("moveBox(" + boxX + "," + boxY + ")", 10);
	}

	return true;
}


// ----------


function ValidateEmail()
{
	var email = document.getElementById("email1").value;

	if (email.match(validEmail) != null)
	{ 
		document.getElementById("email1").style.color = "green";
		tbFeedBack.innerHTML = "";
		tipBox.innerHTML = "All good! Your email seems valid!";
		
	}
	else if (email != "")
	{ 
		document.getElementById("email1").style.color = "red";
		TroubleshootEmail(email, "reg");
	}
	else
	{
		tipBox.innerHTML = "Please enter an email.";
		tbFeedBack.innerHTML = "";
	}

}


function RTValidation()
{	
	var email = document.getElementById("email2").value;

	if (email == "")
	{ 
		tipBox.innerHTML = "";
		tbFeedBack.innerHTML = "";
		return;
	}

	if (email.match(validEmail) != null)
	{ 
		document.getElementById("email2").style.color = "green";
		tbFeedBack.innerHTML = "";
		tipBox.innerHTML = "All good! Your email seems valid!";
		
	}
	else
	{ 
		document.getElementById("email2").style.color = "black";
		TroubleshootEmail(email, "rt");
	}
}


function TroubleshootEmail(email, type)
{

	tbFeedBack.innerHTML = "";
	tipBox.innerHTML = "The email ";

	
	// check in the email's beginning
	// or end is invalid or if has space.
		
	if (email[0].match(/[A-Za-z]/) == null)
	{ 
		tipBox.innerHTML += "must start with a letter, ";
		tbFeedBack.innerHTML = badSpan + email[0] + spanEnd;
	}
	else
	{ tbFeedBack.innerHTML = email[0]; }

	if(email[0].match(/[^@\s]+\.[^@\s0-9]{2,}$/) == null)
	{
		tipBox.innerHTML += "must end with a full domain name (ie: name.com/.net/etc) of no more than 3 characters, ";
	}

	if (email.includes(" "))
	{ 
		tipBox.innerHTML += "cannot have spaces, ";
	}

	
	// See if there's too many @ characters 
	// and set the tip if needed.

	var atCount = 0;

	for (var i = 0; i < email.length; i++)
	{
		if (email[i] == "@")
		{ 
			++atCount;
		}
	}

	if (atCount > 1)
	{
		tipBox.innerHTML += "cannont contain more then 1 '@',";
	}
	else if (atCount < 1)
	{
		tipBox.innerHTML += "should contain 1 @ between your account name and the domain,";
	}


	// Add the currently input email to
	// the tipBox and mark bad characters.

	for (var j = 1, atPassed = 0; j < email.length; j++)
	{
		if (email[j] == " " || (email[j] == "@" && email.substr(0, j).includes("@")) )
	 	{ 
			tbFeedBack.innerHTML += badSpan + email[j] + spanEnd; 
		}
		else
		{ tbFeedBack.innerHTML += email[j]; }
	}
	
}

