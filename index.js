/*jshint esversion: 6 */
window.addEventListener("keydown", function (e) {
  // on window we keydown any button to get keyCode

  const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`); // get this code key and if equal key audio this will playing

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // if clicked and get keycode not equal key code audio return No Thing!

  audio.currentTime = 0; // rest time to replay audio after any click

  audio.play(); // if f true audio will play

  key.classList.add("playing");
  key.addEventListener("transitionend", function () {
    this.classList.remove("playing");
  });
});
