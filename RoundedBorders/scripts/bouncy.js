// "Oh god what now"

var prevX = 0;
var prevY = 0;
var initialSkip = true;
var currAnimLR = 0;
var currAnimUD = 0;
var oozero = false;
setTimeout(function() {
  var beat = document.getElementById("beatspill");
  beat.addEventListener("mousemove", function (event) {
    if (prevX != 0 && prevY != 0) {
      if (initialSkip) {
        // Intiial skip helps with buggy movement right after entering the area.
        prevX = event.clientX;
        prevY = event.clientY;
        initialSkip = false;
        return;
      }

      // Move the beats pill thing around.

      //console.log((event.clientX - prevX) + " - " + (event.clientY - prevY));
      // negative = right, positive left.
      if ((event.clientX - prevX) > 0) {
        currAnimLR += (event.clientX - prevX);
        document.getElementById("beatspill").style = "transform: translateX(" + currAnimLR + "px) translateY(" + currAnimUD + "px);";
      } else if ((event.clientX - prevX) < 0) {
        currAnimLR -= -(event.clientX - prevX);
        document.getElementById("beatspill").style = "transform: translateX(" + currAnimLR + "px) translateY(" + currAnimUD + "px);";
      }

      // negative up, positive down
      if ((event.clientY - prevY) > 0) {
        currAnimUD += (event.clientY - prevY);
        document.getElementById("beatspill").style = "transform: translateX(" + currAnimLR + "px) translateY(" + currAnimUD + "px);";
      } else if ((event.clientY - prevY) < 0) {
        currAnimUD -= -(event.clientY - prevY);
        document.getElementById("beatspill").style = "transform: translateX(" + currAnimLR + "px) translateY(" + currAnimUD + "px);";
      }

      // Little easter egg
      // Or the thing that I got called out in class for....LOL
      if (!oozero && (currAnimLR != 0 || currAnimUD != 0)) {
        oozero = true;
      }

      if (oozero && (currAnimLR == 0 || currAnimUD == 0)) {
        // LOLOLOLOLOLOL
        console.log("EASTER EGG!");
        setTimeout(function() {
          document.getElementById("lel").innerHTML = "Bees Pill";
          var bees = document.createElement("img");
          bees.src = "images/bees_oprah.gif";
          bees.id = "LOLEASTEREGG";
          bees.height = "800";
          bees.style = "transform: translateX(-500px)";
          document.getElementById("lel").appendChild(bees);
          setTimeout(function() {
            document.getElementById("lel").innerHTML = "Beats Pill";
            document.getElementById("lel").removeChild(document.getElementById("LOLEASTEREGG"));
          }, 8000);
        }, 100);
        oozero = false;
      }
    }

    prevX = event.clientX;
    prevY = event.clientY;
  });
  beat.addEventListener("mouseleave", function (event) {
    initialSkip = true;
  });
  console.log("Event registered!");
}, 100);
