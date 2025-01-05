let player = document.getElementById('player');

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // stop any currently playing audio
        player.pause();
        // change the source of the player and play
        player.src = `./sounds/${this.innerText}.mp3`;
        player.play();
    });
});

document.querySelector('.stop').addEventListener('click', function() {
    // stop the audio if it's playing
    player.pause();
});