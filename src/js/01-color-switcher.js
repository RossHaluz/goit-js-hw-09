const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
}

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);
let intervalId = null;

function onClickStart(evt) { 
  refs.start.setAttribute("disabled", true)
  intervalId = setInterval(() => {
  document.body.style.backgroundColor = getRandomHexColor()
   }, 1000)
  
}

function onClickStop(evt) {
  refs.start.removeAttribute('disabled')
  clearInterval(intervalId)
  }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}