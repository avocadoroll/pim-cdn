window.onload = function myFunction() {
  var x = document.createElement("FORM");
  x.setAttribute("id", "myForm");
  document.body.appendChild(x);

  var y = document.createElement("INPUT");
  y.setAttribute("type", "text");
  y.setAttribute("value", "Donald Duck");
  document.getElementById("myForm").appendChild(y);
};
