// create all of the album covers into a variable
const albumCovers = document.querySelectorAll("#album-art img"),
      theAudioEl = document.querySelector('audio'),
      playButton = document.querySelector('#playButton'),
      pauseButton = document.querySelector('#pauseButton'),
      rewindButton = document.querySelector('#rewindButton'),
      volSlider = document;

//tell the audio elements to play
function playAudio () {
    let currentSrc = `audio/${this.dataset.trackref}.mp3`;

    theAudioListener.src = currentSrc;

    //debug (test) your code at this point before you add anything else
    theAudioEl.play();
}
function playAudio () { theAudioEl.play(); }
function rewindAudio () { theAudioEl.currentTime = 0; }
function pauseAudio () { theAudioEl.pause(); }
function setVolume() {
    //get the numeric value of the volume slider between 0 (min) and 100 (max)
    //and then set the audio element's volume level to match
    console.log(this.value);

    //divide the value by 100 to get a floating point number
    theAudioEl.volume = this.value/100;
}
//add event handling to the album covers ()
albumCovers.forEach(cover => cover.addEventListener('click', playAudio));
playButton.addEventListener('click', playAudio)
rewindButton.addEventListener('click', rewindAudio)
pauseButton.addEventListener('click', pauseAudio)

volSlider.addEventListener('change', setVolume)