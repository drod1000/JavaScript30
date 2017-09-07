const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(function(skipButton) {
  skipButton.addEventListener('click', skip);
})
ranges.forEach(function(range) {
  range.addEventListener('change', handleRangeUpdate);
  range.addEventListener('mousemove', handleRangeUpdate);
})

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  this.paused ? toggle.textContent = '►' : toggle.textContent = '❚❚';
}

function skip() {
  const skipAmount = parseFloat(this.dataset.skip);
  video.currentTime += skipAmount;
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}
