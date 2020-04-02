
const btnNavbar = document.getElementById("btn-navbar");
const btnFullview = document.getElementById("btn-fullview");

btnNavbar.onclick = function () {
	let panel = document.getElementsByClassName("outer")[0];
	let btn = document.getElementById("btn-navbar");
	let arrow = document.getElementById("btn-navbar").childNodes[1];

	if (panel.style.left === "0rem") {
		// Collapse
		panel.style.left = "-20rem";
		btn.style.left = "0rem";
		arrow.style.rotate = "0deg";
	} else {
		// Expand
		panel.style.left = "0rem";
		btn.style.left = "20rem";
		arrow.style.rotate = "180deg";
	}
}

btnFullview.onclick = function () {
	let panel = document.getElementsByClassName("outer")[2];
	let btn = document.getElementById("btn-fullview");
	let arrow = document.getElementById("btn-fullview").childNodes[1];

	if (panel.style.right === "0rem") {
		// Collapse
		panel.style.right = "-45rem";
		btn.style.right = "0rem";
		arrow.style.rotate = "0deg";
	} else {
		// Expand
		panel.style.right = "0rem";
		btn.style.right = "45rem";
		arrow.style.rotate = "180deg";
	}
}
