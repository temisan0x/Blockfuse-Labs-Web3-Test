const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const ball = document.getElementById('ball');
const timer = document.getElementById('timer');
const pitch = document.querySelector('.pitch');

function moveElements() {
  const pitchWidth = pitch.clientWidth;
  const pitchHeight = pitch.clientHeight;

  const player1X = Math.random() * (pitchWidth - 20);
  const player1Y = Math.random() * (pitchHeight - 20);
  player1.style.transform = `translate(${player1X}px, ${player1Y}px)`;

  const player2X = Math.random() * (pitchWidth - 20);
  const player2Y = Math.random() * (pitchHeight - 20);
  player2.style.transform = `translate(${player2X}px, ${player2Y}px)`;

  const ballX = Math.random() * (pitchWidth - 15); 
  const ballY = Math.random() * (pitchHeight - 15);
  ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
}

setInterval(moveElements, 1000);

// Timer
let seconds = 0;
function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s = String(sec % 60).padStart(2, '0');
  return `${m}:${s}`;
}

setInterval(() => {
  seconds++;
  timer.textContent = formatTime(seconds);
}, 1000);
