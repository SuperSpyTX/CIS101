// Form Processing Script

// When writing forms
var global_disable = false;

function form_submit() {
  var form = document.forms["kek"];
  var dec = form["decimal"].value;
  var hex = form["hexadecimal"].value;

  alert("Hex: " + hex + " Dec: " + dec);

  return false;
}

var hasDelay = {};
function set_color_blue(id, set_as_blue) {
  if (global_disable) {
    return;
  }
  if (set_as_blue) {
    hasDelay[id] = Date.now();
    document.getElementById(id).style = "animation: fadeIn 1s ease-in 1 forwards;";
  } else {
    setTimeout(function() {
      document.getElementById(id).style = "animation: fadeOut 2s ease-in 1 forwards;";
    }, 10500);
  }
}

// How to do voodoo magic
setTimeout(function () {
  var reg = document.getElementsByTagNameNS("*", "*");
  for (var i = 0; i < reg.length; i++) {
    var tagObj = reg[i];
    var tagName = tagObj.tagName;
    if (/*tagName.substring(0, 1) == "H" &&*/ tagObj.className != "proper-align" && tagName != "FORM" && tagName != "HTML" && tagName != "HEAD" && tagName != "BODY") {
      tagObj.id = "reg" + i;
      tagObj.addEventListener("mouseover", function (event) {
        set_color_blue(this.id, true);
      });
      tagObj.addEventListener("mouseout", function (event) {
        set_color_blue(this.id, false);
      });
    }
  }
}, 250);
