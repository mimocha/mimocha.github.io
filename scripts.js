"use strict";
var img = document.getElementById('img-0');
var vid = [	document.getElementById('vid-0'),
			document.getElementById('vid-1'),
			document.getElementById('vid-2'),
			document.getElementById('vid-3'),
			document.getElementById('vid-4')];

// Click Wrapper Function
function clicked () {
	img = document.getElementById('img-0');
	vid[0] = document.getElementById('vid-0');
	vid[1] = document.getElementById('vid-1');
	vid[2] = document.getElementById('vid-2');
	vid[3] = document.getElementById('vid-3');
	vid[4] = document.getElementById('vid-4');

	orientation ();
	fsm ();
	sound ();
	counter ();
}

// Orientation Check
function orientation () {
	if (window.innerHeight > window.innerWidth){
		img.style.objectFit = "contain";
		vid[0].style.objectFit = "contain";
		vid[1].style.objectFit = "contain";
		vid[2].style.objectFit = "contain";
		vid[3].style.objectFit = "contain";
		vid[4].style.objectFit = "contain";
	} else {
		img.style.objectFit = "cover";
		vid[0].style.objectFit = "cover";
		vid[1].style.objectFit = "cover";
		vid[2].style.objectFit = "cover";
		vid[3].style.objectFit = "cover";
		vid[4].style.objectFit = "cover";
	}
}

// Finite State Machine
function fsm () {
	switch (fsm.val) {
		case -1: // Load
			fsm.val = 0;
			break;

		case 0: // First Right -> Left
			img.style.visibility = "hidden";
			vid[0].style.visibility = "visible";
			vid[0].play();
			fsm.val = 1;
			break;

		case 1: // Left -> Right
			vid[0].style.visibility = "hidden";
			vid[4].style.visibility = "hidden";
			vid[4].currentTime = 0;
			vid[1].style.visibility = "visible";
			vid[1].play();
			fsm.val = 2;
			break;

		case 2: // Right -> Left
			vid[2].style.visibility = "visible";
			vid[2].play();
			vid[1].style.visibility = "hidden";
			vid[1].currentTime = 0;
			// fsm.val = 1;
			fsm.val = 3;
			break;

		case 3: // Left -> Right
			vid[3].style.visibility = "visible";
			vid[3].play();
			vid[2].style.visibility = "hidden";
			vid[2].currentTime = 0;
			fsm.val = 4;
			break;

		case 4: // Right -> Left
			vid[4].style.visibility = "visible";
			vid[4].play();
			vid[3].style.visibility = "hidden";
			vid[3].currentTime = 0;
			fsm.val = 1;
			break;
	}
}
fsm.val = -1;
var f = new fsm();

// Play Sound
function sound () {
	switch (sound.val) {
		case -1: break;
		case 0:
			document.getElementById('aud-0').play();
			break;
		case 1:
			document.getElementById('aud-1').play();
			break;
	}
	sound.val++;
	sound.val %= 2;
}
sound.val = -1;
var s = new sound();

// Click Counter
function counter () {
	counter.val++;
}
counter.val = 0;
var c = new counter();
