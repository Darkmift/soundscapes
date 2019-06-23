const html = document.documentElement;

function playSoundKey(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const button = document.querySelector(`.btn[data-key='${e.keyCode}']`);
    if(!audio) return; // stop function from running altogether;
    audio.currentTime = 0; // rewind to the start
    audio.play();
    audio.loop = true;
    button.classList.add('playing');
}

function playSoundClick1(cancel) {
        const audio = document.getElementById('audio-1');
        const button = document.querySelector('.btn-1');
        if(!audio) return; // stop function from running altogether;
        if(cancel === 0) {
            audio.currentTime = 0; // rewind to the start
            audio.play();
            button.classList.add('playing');
            html.classList.add('birds-bg');

        } else if(cancel === 1) {
            audio.pause();
            button.classList.remove('playing');
            html.classList.remove('birds-bg');
        }
};

function playSoundClick2(cancel) {
    const audio = document.getElementById(`audio-2`);
    const button = document.querySelector('.btn-2');
    if(!audio) return; // stop function from running altogether;
        if(cancel === 0) {
            audio.currentTime = 0; // rewind to the start
            audio.play();
            button.classList.add('playing');
            html.classList.add('campfire-bg');
        } else if(cancel === 1) {
            audio.pause();
            button.classList.remove('playing');
            html.classList.remove('campfire-bg');
        }
};

function playSoundClick3(cancel) {
    const audio = document.getElementById(`audio-3`);
    const button = document.querySelector('.btn-3');
    if(!audio) return; // stop function from running altogether;
        if(cancel === 0) {
            audio.currentTime = 0; // rewind to the start
            audio.play();
            button.classList.add('playing');
            html.classList.add('forest-bg');
        } else if(cancel === 1) {
            audio.pause();
            button.classList.remove('playing');
            html.classList.remove('forest-bg');
        }
}

function playSoundClick4(cancel) {
    const audio = document.getElementById(`audio-4`);
    const button = document.querySelector('.btn-4');
    if(!audio) return; // stop function from running altogether;
        if(cancel === 0) {
            audio.currentTime = 0; // rewind to the start
            audio.play();
            button.classList.add('playing');
            html.classList.add('ocean-bg');
        } else if(cancel === 1) {
            audio.pause();
            button.classList.remove('playing');
            html.classList.remove('ocean-bg');
        }
}

function playSoundClick5(cancel) {
    const audio = document.getElementById(`audio-5`);
    const button = document.querySelector('.btn-5');
    if(!audio) return; // stop function from running altogether;
        if(cancel === 0) {
            audio.currentTime = 0; // rewind to the start
            audio.play();
            button.classList.add('playing');
            html.classList.add('storm-bg');
        } else if(cancel === 1) {
            audio.pause();
            button.classList.remove('playing');
            html.classList.remove('storm-bg');
        }
}

//// Cancel the keydown function until I figure out a way that it won't conflict
/// with the button presses...
// window.addEventListener('keydown', playSoundKey);