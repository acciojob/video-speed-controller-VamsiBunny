const video = document.querySelector('.player__video'); // Match Cypress selector
const playPauseButton = document.querySelector('.toggle'); // Match Cypress selector
const progressBar = document.getElementById('progress');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const currentTimeDisplay = document.getElementById('currentTime');

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseButton.textContent = '❚❚'; // Change to pause icon
  } else {
    video.pause();
    playPauseButton.textContent = '►'; // Change to play icon
  }
});

// Update progress bar as video plays
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${progress}%`;

  // Update current time display
  const minutes = Math.floor(video.currentTime / 60);
  const seconds = Math.floor(video.currentTime % 60);
  currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
});

// Volume control
volumeControl.addEventListener('input', (e) => {
  video.volume = e.target.value;
});

// Playback speed control
playbackSpeedControl.addEventListener('input', (e) => {
  video.playbackRate = e.target.value;
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
  video.currentTime -= 10;
});

// Skip forward 25 seconds
forwardButton.addEventListener('click', () => {
  video.currentTime += 25;
});
