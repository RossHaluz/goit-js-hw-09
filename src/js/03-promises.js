import Notiflix from 'notiflix';

const form = document.querySelector('.form');
let firstDelay = null;
let delayStep = null;
let amountPromise = null;

form.addEventListener('submit', counterPromise)


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }
  }, delay)
    })
}

function counterPromise(evt) {
  evt.preventDefault()
  const { delay, step, amount } = evt.currentTarget.elements;
  firstDelay = Number(delay.value);
  delayStep = Number(step.value);
  amountPromise = Number(amount.value);

  for (let i = 1; i <= amountPromise; i += 1){
     createPromise(i, firstDelay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
    firstDelay += delayStep
  }

  evt.currentTarget.reset()
  }
  