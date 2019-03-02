var state = 0;

// Finite State Machine
function fsm () {
	switch (state) {
		case 0: // First Right -> Left
			document.getElementById('vid-elem').style.visibility = "visible";
			document.getElementById('vid-elem').play();
			state = 1;
			break;
		case 1: // Left -> Right
			document.getElementById('vid-elem').src='vid/chika-1.mp4';
			document.getElementById('img-elem').src='img/chika-1.jpg';
			document.getElementById('vid-elem').play();
			state = 2;
			break;
		case 2: // Right -> Left
			document.getElementById('vid-elem').src='vid/chika-2.mp4';
			document.getElementById('img-elem').src='img/chika-2.jpg';
			document.getElementById('vid-elem').play();
			state = 1;
			break;
	}
}
