const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let timerId = null;

  const stopInterval = () => {
    if (timerId) {
       clearInterval(timerId);
    }
  }
  const animator = (seconds) => {
    stopInterval();
    timerId = setInterval(() => {
      secondsInp = seconds%60;
      minutes = Math.trunc(seconds/60)%60;
      hour = Math.trunc(seconds/60/60);
      if (seconds <= 0) {
        timerEl.innerHTML = "Время закончилось" ;
      } else {
        let hourStr = hour < 10 ? '0' + String(hour) : String(hour);
        let minuteStr = minutes < 10 ? '0' + String(minutes) : String(minutes);
        let secondsStr = secondsInp < 10 ? '0' + String(secondsInp) : String(secondsInp);
        let timerStr = `${hourStr}:${minuteStr}:${secondsStr}`;
        timerEl.innerHTML = timerStr;
      }
      --seconds;
    }, 1000);
 };
  return animator;
}

const animateTimer = createTimerAnimator();

//Не совсем понятно, что значит "Очистите input так, чтобы в значении оставались только числа"
//Задан формат таймера строго “hh:mm:ss”; Непонятно, что делать в случае, если количество часов - трехзначное и более число
inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace (/\D/, '');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

let test = null;
buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);
  
  inputEl.value = '';
});
