var state = 0;

// Orientation Check
function orientation () {
	var img_0 = document.getElementById('img-0');
	var vid_0 = document.getElementById('vid-0');
	var vid_1 = document.getElementById('vid-1');
	var vid_2 = document.getElementById('vid-2');

	if(window.innerHeight > window.innerWidth){
		img_0.style.objectFit = "contain";
		vid_0.style.objectFit = "contain";
		vid_1.style.objectFit = "contain";
		vid_2.style.objectFit = "contain";
	} else {
		img_0.style.objectFit = "cover";
		vid_0.style.objectFit = "cover";
		vid_1.style.objectFit = "cover";
		vid_2.style.objectFit = "cover";
	}
}

// Finite State Machine
function fsm () {
	var img_0 = document.getElementById('img-0');
	var vid_0 = document.getElementById('vid-0');
	var vid_1 = document.getElementById('vid-1');
	var vid_2 = document.getElementById('vid-2');

	switch (state) {
		case 0: // First Right -> Left
			img_0.style.visibility = "hidden";
			vid_0.style.visibility = "visible";
			vid_0.play();
			state = 1;
			break;
		case 1: // Left -> Right
			vid_1.style.visibility = "visible";
			vid_2.style.visibility = "hidden";
			vid_2.currentTime = 0;
			vid_1.play();
			state = 2;
			break;
		case 2: // Right -> Left
			vid_1.style.visibility = "hidden";
			vid_1.currentTime = 0;
			vid_2.style.visibility = "visible";
			vid_2.play();
			state = 1;
			break;
	}
}
