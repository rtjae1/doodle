// menu opening functionality
function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("t").style.color = "var(--primaryColor)";
  document.getElementById("f").style.color = "var(--primaryColor)";
  document.getElementById("l").style.color = "var(--primaryColor)";
  document.getElementById("i").style.color = "var(--primaryColor)";
  document.getElementById("g").style.color = "var(--primaryColor)";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("t").style.color = "var(--secondaryColor)";
  document.getElementById("t").style.transitionDelay = ".8s";
  document.getElementById("f").style.color = "var(--secondaryColor)";
  document.getElementById("f").style.transitionDelay = ".8s";
  document.getElementById("l").style.color = "var(--secondaryColor)";
  document.getElementById("l").style.transitionDelay = ".8s";
  document.getElementById("i").style.color = "var(--secondaryColor)";
  document.getElementById("i").style.transitionDelay = ".8s";
  document.getElementById("g").style.color = "var(--secondaryColor)";
  document.getElementById("g").style.transitionDelay = ".8s";
}
