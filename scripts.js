"use strict";

// OnLoad Event Function
var obj;
var len;
window.onload = function (e) {
	obj = document.querySelectorAll(".media");
	len = obj.length
	orient ();
}


// Orientation Event Function
window.ondeviceorientation = function (e) {
	orient ();
}
function orient () {
	var setval;
	if (window.innerHeight > window.innerWidth) { setval = "contain"; }
	else { setval = "cover"; }
	for (var i = 0; i < len; i++) { obj[i].style.objectFit = setval; }
}


// Click Event Function
window.onclick = function clicked (e) {
	console.log("count =", counter.val, "fsm = ", fsm.val, "sound = ", sound.val);
	fsm ();
	sound ();
	counter ();
}


// Finite State Machine
fsm.val = 0;
var tstart;
function fsm () {
	switch (fsm.val) {
		case 0: // First Right -> Left
			obj[0].style.visibility = "hidden";
			obj[1].style.visibility = "visible";

			obj[1].play();
			tstart = Date.now();
			setTimeout (pausevid, 400);
			fsm.val = 1;
			break;

		case 1: // Left -> Right
			obj[1].play();
			tstart = Date.now();
			setTimeout (pausevid, 400);
			fsm.val = 2;
			break;

		case 2: // Right -> Left
			obj[1].play();
			tstart = Date.now();
			setTimeout (pausevid, 360);
			fsm.val = 3;
			break;

		case 3: // Left -> Right
			obj[1].play();
			tstart = Date.now();
			setTimeout (pausevid, 400);
			fsm.val = 4;
			break;

		case 4: // Right -> Left
			obj[1].currentTime = 0;
			obj[1].play();
			setTimeout (pausevid, 400);
			fsm.val = 1;
			break;

	}
}


// Pause Video Playback
function pausevid () {
	obj[1].pause();
	console.log("tdiff:", Date.now() - tstart);
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
