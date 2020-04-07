var inervalID;

function renkInterval() {
  inervalID = setInterval(uyariVer, 1000);
}

function uyariVer() {
  var renk1 = Math.floor(255 * Math.random());
  var renk2 = Math.floor(255 * Math.random());
  var renk3 = Math.floor(255 * Math.random());
  console.log(renk1);
  document.body.style.backgroundColor = "rgb(" + renk1 + "," + renk2 + "," + renk3 + ")";
}