// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

// =================== ПРАКТИКА ПО ВЕБИНАРУ РЕПЕТЫ =================

const refs = {
  secs: document.querySelector('[data-value="secs"]'),
  mins: document.querySelector('[data-value="mins"]'),
  hours: document.querySelector('[data-value="hours"]'),
  days: document.querySelector('[data-value="days"]'),
};

// создает таймер
const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const { days, hours, mins, secs } = getTimeComponents(deltaTime);
      addClockElement({ days, hours, mins, secs });
      //   console.log(`${days}:${hours}:${mins}:${secs}`);
    }, 1000);
  },
};

timer.start();

function addClockElement({ days, hours, mins, secs }) {
  refs.secs.textContent = `${secs}`;
  refs.mins.textContent = `${mins}`;
  refs.hours.textContent = `${hours}`;
  refs.days.textContent = `${days}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

// функция для переменных которая считает и переводит милисекунды в нормальное время
function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
console.log(deadline);
