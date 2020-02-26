/* ============================= Swipe Function ============================= */
// TODO
// Reference:
// https://developers.google.com/web/fundamentals/design-and-ux/input/touch#top_of_page


/* ============================= Button Toggle ============================= */

const btnSidebar = document.getElementById("btn-sidebar");
const btnFullview = document.getElementById("btn-fullview");

btnSidebar.onclick = function () {
	let panel = document.getElementsByClassName("outer")[0];
	let btn = document.getElementById("btn-sidebar");
	let arrow = document.getElementById("btn-sidebar").childNodes[1];

	if (panel.style.left === "0rem") {
		// Collapse
		panel.style.left = "-20rem";
		btn.style.left = "0rem";
		arrow.style.rotate = "0deg";
	} else {
		// Expand
		panel.style.left = "0rem";
		arrow.style.rotate = "180deg";
		btn.style.left = btnEdgeCheck (20);
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
		arrow.style.rotate = "180deg";
		btn.style.right = btnEdgeCheck(45);
	}
}

/* Button Translation Edge Checking Function
 * Input translation target, units in rem.
 * Moves button to edge of viewport instead, if viewport is too small
 */
function btnEdgeCheck (target) {
	const b = 40; // Button Size Buffer
	let vw = window.innerWidth; // Viewport Width, in pixel
	let tPix = target * 16; // Target translation, in pixel
	return ( (vw>=tPix) ? (target).toString()+"rem" : ((vw-b)/16).toString()+"rem" )
}
