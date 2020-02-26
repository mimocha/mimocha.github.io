window.onload = function(e) {
	document.getElementById('var-url').innerHTML = document.URL;

	switch (Math.floor(Math.random()*3)) {
		case 0:
			document.getElementById('var-line').innerHTML = "BUT IT WAS ME, DIO!";
			document.getElementById('img').style.backgroundImage = "url('/img/404/dio.jpg')";
			break;
		case 1:
			document.getElementById('var-line').innerHTML = "BUT NOBODY EXPECTS THE SPANISH INQUISITION";
			document.getElementById('img').style.backgroundImage = "url('/img/404/spanish.jpg')";
			break;
		case 2:
			document.getElementById('var-line').innerHTML = "But you get used to it.";
			document.getElementById('img').style.backgroundImage = "url('/img/404/priestess.jpg')";
	}
}
