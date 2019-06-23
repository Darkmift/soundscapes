const html = document.documentElement;
const btnGroup = document.querySelectorAll(".playBtn");
btnGroup.forEach(btn => {
  btn.addEventListener("click", function() {
    const name = this.getAttribute("id");
    const audio = document.querySelector(`audio[data-key='${name}']`);

    clearClasses(name);

    audio.play();
    this.classList.add("playing");
    html.classList.add(`${name}-bg`);
  });
});

const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", function() {
  clearClasses(name);
  const audios = document.getElementsByTagName("audio");
  for (var i = 0, len = audios.length; i < len; i++) {
    audios[i].pause();
  }
});

function clearClasses(name) {
  btnGroup.forEach(btn => {
    btn.classList.remove("playing");
    html.classList.remove(`${name}-bg`);
  });
}

document.addEventListener(
  "play",
  function(e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  },
  true
);
