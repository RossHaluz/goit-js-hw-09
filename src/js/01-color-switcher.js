const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');


btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);
let intervalId = null;
btnStop.setAttribute("disabled", true)

function onClickStart(evt) { 
  btnStart.setAttribute("disabled", true);
  btnStop.removeAttribute("disabled");
  intervalId = setInterval(() => {
  document.body.style.backgroundColor = getRandomHexColor()
   }, 1000)
  
}

function onClickStop(evt) {
  btnStop.setAttribute("disabled", true);
  btnStart.removeAttribute("disabled");
  clearInterval(intervalId)
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}