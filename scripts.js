var state = 0;

// Finite State Machine
function fsm () {
	switch (state) {
		case 0: // First Right -> Left
			document.getElementById('img-0').style.visibility = "hidden";
			document.getElementById('vid-0').style.visibility = "visible";
			document.getElementById('vid-0').play();
			state = 1;
			break;
		case 1: // Left -> Right
			document.getElementById('vid-1').style.visibility = "visible";
			document.getElementById('vid-2').style.visibility = "hidden";
			document.getElementById('vid-2').currentTime = 0;
			document.getElementById('vid-1').play();
			state = 2;
			break;
		case 2: // Right -> Left
			document.getElementById('vid-1').style.visibility = "hidden";
			document.getElementById('vid-1').currentTime = 0;
			document.getElementById('vid-2').style.visibility = "visible";
			document.getElementById('vid-2').play();
			state = 1;
			break;
	}
}
