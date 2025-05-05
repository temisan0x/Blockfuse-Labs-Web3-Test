const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const ball = document.getElementById('ball');
const timer = document.getElementById('timer');

// set animation
setInterval(() => {
  const x = Math.random() * 80;
  const y = Math.random() * 40;
  player1.style.transform = `translate(${x}vw, ${y}vh)`;
  player2.style.transform = `translate(${x}vw, ${y}vh)`;

  const ballX = Math.random() * 40;
  const ballY = Math.random() * 30;
  ball.style.transform = `translate(${ballX}vw, ${ballY}vh)`;
}, 1000);

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