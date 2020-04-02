
const btnNavbar = document.getElementById("btn-navbar");
const btnFullview = document.getElementById("btn-fullview");

btnNavbar.onclick = function () {
	let panel = document.getElementById("container-navbar");
	let btn = document.getElementById("btn-navbar");

	if (panel.style.left === "0rem") {
		// Collapse
		panel.style.left = "-20rem";
		btn.style.left = "0rem";
	} else {
		// Expand
		panel.style.left = "0rem";
		btn.style.left = "20rem";
	}
}

btnFullview.onclick = function () {
	let panel = document.getElementById("container-fullview");
	let btn = document.getElementById("btn-fullview");

	if (panel.style.right === "0rem") {
		// Collapse
		panel.style.right = "-45rem";
		btn.style.right = "0rem";
	} else {
		// Expand
		panel.style.right = "0rem";
		btn.style.right = "45rem";
	}
}
