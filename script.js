// video background pause button
var video = document.getElementById("bckgVideo");
var btn = document.getElementById("bckgVideoBtn");

function pauseFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML;
  } else {
    video.pause();
    btn.innerHTML;
  }
};

