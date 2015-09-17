// browser bug detection for firefox
if (navigator.userAgent.indexOf("irefox") > -1) {
setTimeout(function() {
document.getElementById("boring").disabled = false;
}, 500);
console.log("Firefox browser detected");
}

// crazy button flopping
var flopDir = false;
function flop() {
flopDir = !flopDir;
var buttons = document.body.getElementsByTagName("button");
var size = buttons.length;
var flipityFloop = (flopDir ? true : false);
for (var i = 0; i < size; i++) {
 if (buttons[i].id == "flop") {
   buttons[i].disabled = flipityFloop;
   flipityFloop = !flipityFloop;
 }
}
}

var clicked = false;
var persuadepls = false;
var onlyTen = 0;
function test() {
if (clicked) {
return;
}
clicked = true;
document.getElementById("boring").innerHTML="WHAT!??!!?!?";
setTimeout(function() {
  document.getElementById("boring").innerHTML="is.....";
}, 1000);
setTimeout(function() {
  document.getElementById("boring").innerHTML="this.....";
}, 2000);
setTimeout(function() {
  var pSpan = document.createElement("span");
  pSpan.id = "PPls";
  document.body.appendChild(pSpan);
  setInterval(function() {
	  document.getElementById("boring").innerHTML="SORCERY!.....";
	  if (onlyTen++ >= 10) {
		return;
	  }
	  var lel = document.createElement("button");
	  var img = document.createElement("img");
	  var kek = document.createTextNode("S");
	  lel.appendChild(kek);
	  persuadepls = !persuadepls;
	  lel.disabled = persuadepls;
	  lel.id = "flop";
	  lel.onclick = "flop();";
	  img.src = "images/U WAT MATE.png"
	  document.getElementById("boring").disabled = persuadepls;
	  document.body.appendChild(document.createElement("br"));
	  document.body.appendChild(lel);
	  document.getElementById("PPls").appendChild(img);
  }, 1000);
}, 3000);

}