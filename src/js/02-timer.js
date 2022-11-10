import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    days: document.querySelector('.value[data-days]'),
    hours: document.querySelector('.value[data-hours]'),
    minutes: document.querySelector('.value[data-minutes]'),
    seconds: document.querySelector('.value[data-seconds]'),
    startBtn: document.querySelector('button[data-start]'),
    input: document.querySelector('#datetime-picker'),
}

let timeStart = null;
let timeEnd = null;
let intervalId = null;

refs.startBtn.setAttribute('disabled', true)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeEnd = selectedDates[0].getTime();
    timeStart = new Date();

    if (timeEnd > timeStart) {
      alert('Для того, щоб розпочати таймер, натисніть кнопку Start')
      refs.startBtn.removeAttribute('disabled')
    } else {
      alert('Виберіть дату із майбутнього!')
    }
  },
};

flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', runTaimer)

//  Запуск таймера
function runTaimer(evt) {
refs.startBtn.setAttribute('disabled', true)
refs.input.setAttribute('disabled', true)
intervalId = setInterval(startTaimer, 1000)
}

function startTaimer(evt) {
  const setTime = timeEnd - new Date()
  const time = convertMs(setTime);

  uppdateCounter(time)
}

function uppdateCounter({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(`${days}`);
  refs.hours.textContent = addLeadingZero(`${hours}`);
  refs.minutes.textContent = addLeadingZero(`${minutes}`);
  refs.seconds.textContent = addLeadingZero(`${seconds}`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}