let audio;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // stop any currently playing audio
        if (audio) {
            audio.pause();
        }

        // create a new Audio object and play it
        audio = new Audio(`./sounds/${this.innerText}.mp3`);
        audio.play();
    });
});

document.querySelector('.stop').addEventListener('click', function() {
    // stop the audio if it's playing
    if (audio) {
        audio.pause();
    }
});