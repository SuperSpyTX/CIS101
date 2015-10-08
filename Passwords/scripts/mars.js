// Oh god not this again......
function protectMyData() {
  var thePasswordToProtect = "gertrude";
  var input = prompt("What is the password");
  if (input == thePasswordToProtect) {
    // Success
    document.getElementById("data_access").style = "display: show;";
  } else {
    // Failure
    document.getElementById("no_access_msg").style = "display: show;";
  }
}

function hackthematrix() {

}
