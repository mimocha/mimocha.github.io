"use strict";

// Click Event Function
window.onclick = function clicked (e) {
	console.log("count =", counter.val, "fsm = ", fsm.val, "sound = ", sound.val);
	fsm ();
	sound ();
	counter ();
}


// Finite State Machine
fsm.val = 0;
function fsm () {
	switch (fsm.val) {
		case 0: // First Right -> Left
			document.getElementById("img-0").style.visibility = "hidden";
			document.getElementById("vid-0").style.visibility = "visible";
			document.getElementById("vid-0").play();
			fsm.val = 1;
			break;

		case 1: // Left -> Right
			document.getElementById("vid-0").style.visibility = "hidden";
			document.getElementById("vid-4").style.visibility = "hidden";
			document.getElementById("vid-4").currentTime = 0;
			document.getElementById("vid-1").style.visibility = "visible";
			document.getElementById("vid-1").play();
			fsm.val = 2;
			break;

		case 2: // Right -> Left
			document.getElementById("vid-1").style.visibility = "hidden";
			document.getElementById("vid-1").currentTime = 0;
			document.getElementById("vid-2").style.visibility = "visible";
			document.getElementById("vid-2").play();
			fsm.val = 3;
			break;

		case 3: // Left -> Right
			document.getElementById("vid-2").style.visibility = "hidden";
			document.getElementById("vid-2").currentTime = 0;
			document.getElementById("vid-3").style.visibility = "visible";
			document.getElementById("vid-3").play();
			fsm.val = 4;
			break;

		case 4: // Right -> Left
			document.getElementById("vid-3").style.visibility = "hidden";
			document.getElementById("vid-3").currentTime = 0;
			document.getElementById("vid-4").style.visibility = "visible";
			document.getElementById("vid-4").play();
			fsm.val = 1;
			break;
	}
}


// Play Sound
sound.val = 0;
function sound () {
	switch (sound.val) {
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


// Click Counter
counter.val = 0;
function counter () {
	counter.val++;
}
