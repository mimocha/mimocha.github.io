const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
let state = 0;

// Increment
btnRight.onclick = function () {
	state = (state + 1) % 4;
	animate (state);
}

// Decrement
btnLeft.onclick = function () {
	state = (state - 1);
	state = (state < 0) ? state += 4 : state;
	animate (state);
}

// Simple function to cycle through 4 set states
// Use helper functions to update various css styles
function animate (state) {
	// Outer Container -> Update Z-Index
	let Cz = document.getElementsByClassName("cyan")[0];
	let Mz = document.getElementsByClassName("magenta")[0];
	let Yz = document.getElementsByClassName("yellow")[0];
	let Kz = document.getElementsByClassName("key")[0];

	// Inner Container -> Update Clipping Path
	let C = document.getElementsByClassName("cyan")[1];
	let M = document.getElementsByClassName("magenta")[1];
	let Y = document.getElementsByClassName("yellow")[1];
	let K = document.getElementsByClassName("key")[1];

	switch (state) {
		case 0:
			updateClip (C, M, Y, K);
			updateZIndex (Cz, Mz, Yz, Kz);
			updateButton (btnRight, "m");
			updateButton (btnLeft,  "k");
			break;
		case 1:
			updateClip (M, Y, K, C);
			updateZIndex (Mz, Yz, Kz, Cz);
			updateButton (btnRight, "y");
			updateButton (btnLeft,  "c");
			break;
		case 2:
			updateClip (Y, K, C, M);
			updateZIndex (Yz, Kz, Cz, Mz);
			updateButton (btnRight, "k");
			updateButton (btnLeft,  "m");
			break;
		case 3:
			updateClip (K, C, M, Y);
			updateZIndex (Kz, Cz, Mz, Yz);
			updateButton (btnRight, "c");
			updateButton (btnLeft,  "y");
			break;
		default:
			console.log('finite state machine error');
	}
}

function updateClip (front, right, back, left) {
	front.style.clipPath = "var(--pFront)";
	right.style.clipPath = "var(--pRight)";
	back.style.clipPath = "var(--pBack)";
	left.style.clipPath = "var(--pLeft)";
}

function updateZIndex (front, right, back, left) {
	front.style["z-index"] = 2;
	right.style["z-index"] = 1;
	back.style["z-index"] = 0;
	left.style["z-index"] = 1;
}

function updateButton (button, color) {
	button.style.backgroundColor = "var(--" + color + "Primary)";
	button.style.color = "var(--" + color + "Text)";
}
