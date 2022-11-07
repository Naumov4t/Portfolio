
let player = document.getElementById('audio');
let btnPlay = document.querySelector('.play');
let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');

let audioName = document.querySelector('.audio-name');


let playlist = [
    'Frankie Bones & Lenny Dee - Definately A Robbery.mp3',
    'I Need Your Love - N.R.G. Original Mix 1992.mp3',
    'The Project - Do That Dance.mp3',
    'DJ Zinc - Super Sharp Shooter (Remix).mp3',
    'Bomfunk MC - Uprocking Beats.mp3'
];

currentMusic = 0;

player.src = 'audio/' + playlist[currentMusic];
btnNext.onclick = next;
btnPrev.onclick = prev;

btnPlay.onclick = play;

function play() {
    audio.play();
    btnPlay.classList.add("pause");
    btnPlay.classList.remove("play");
    btnPlay.onclick = pause;
    currentArtist();
}

function pause() {
    audio.pause();
    btnPlay.classList.add("play");
    btnPlay.classList.remove("pause");
    btnPlay.onclick = play;
    currentArtist();
}

function next() {
    currentMusic += 1;

    if(currentMusic >= 5) {
        currentMusic = 0;
    }

    player.src = 'audio/' + playlist[currentMusic];
    play();
    currentArtist();
}

function prev() {
    currentMusic -= 1;

    if(currentMusic < 0) {
        currentMusic = 4;
    }

    player.src = 'audio/' + playlist[currentMusic];
    play();
    currentArtist();
}

function currentArtist() {
    audioName.innerHTML = playlist[currentMusic].replace('.mp3', '');
};