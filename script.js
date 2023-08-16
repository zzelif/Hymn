const audio = document.querySelector('#audio-player');
const playButton = document.querySelector('#audio-player');
const audioPlayer = document.getElementById("audio-player");
const textContainer = document.querySelector(".container");
const textLines = document.querySelectorAll(".container p");
const videoPlayer = document.querySelector("video");

playButton.addEventListener('click', function(){
	if (audio.paused) {
		audio.play();
  } else {
		audio.pause();
  }
});

audioPlayer.addEventListener("timeupdate", function() {
	const currentTime = audioPlayer.currentTime;
	const percentComplete = (audioPlayer.currentTime / audioPlayer.duration) * 100;
	
	//text scroll
	const textHeight = textContainer.scrollHeight;
	const containerHeight = textContainer.offsetHeight;
	const textTop = (textHeight - containerHeight) * (percentComplete / 100);
	textContainer.scrollTop = textTop;
	
	//text highlight
	textLines.forEach((textline) => {
		const textlineStart = parseFloat(textline.dataset.start);
		const textlineEnd = parseFloat(textline.dataset.end);
		
		if (currentTime >= textlineStart && currentTime <= textlineEnd) {
			textline.classList.add('highlight');
		} else {
			textline.classList.remove('highlight');
		}
	});
});

audioPlayer.addEventListener("pause", function() {
	videoPlayer.pause();
	videoPlayer.muted = true;
});

audioPlayer.addEventListener("play", function() {
	videoPlayer.play();
	videoPlayer.muted = false;
});

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoPlayer');
    videoPlayer.volume = 0.15;
	var audio = document.getElementById('audioPlayer');
	audioPlayer.volume = 0.5;
  });