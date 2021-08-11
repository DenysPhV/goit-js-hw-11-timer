class CountdownTimer {
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate;
    this.selector = selector;
    this.arrSpanClass = document.querySelector(this.selector).querySelectorAll('.value');
  }

  start() {
    const timeIntervalId = setInterval(() => {
      this.timerComponents();

      if (this.targetDate <= Date.now()) {
        clearInterval(timeIntervalId);
      }
    }, 1000);
  }

  timerComponents() {
    const time = this.targetDate - Date.now();

    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    const arrDate = [days, hours, mins, secs];
    this.arrSpanClass.forEach((span, i) => {
      span.textContent = arrDate[i];
    });
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31 2021'),
});

// const timer2 = new CountdownTimer({
//   selector: '#timer-2',
//   targetDate: new Date('Nov 3 2021'),
// });

timer1.start();
// timer2.start();

/*
Alona Harnyk
По таймеру - вся логика должна быть инкапсулирована внутри класса. 
Также примите во внимание, что передаваемый селектор должен использоваться: у вас должна быть возможность создать на странице несколько работающих таймеров с разными датами одновременно (разумеется, при условии наличия подготовленной разметки).
 */
// ========================================== пример который работает =================================================
// const refs = {
//   secs: document.querySelector('[data-value="secs"]'),
//   mins: document.querySelector('[data-value="mins"]'),
//   hours: document.querySelector('[data-value="hours"]'),
//   days: document.querySelector('[data-value="days"]'),
// };

// class CountdownTimer {
//   constructor({ onTick, targetDate, selector }) {
//     this.targetDate = targetDate;
//     this.selector = selector;
//     this.onTick = onTick;
//   }

//   start() {
//     this.targetDate = new Date(this.targetDate).getTime();

//     const timeIntervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deadLine = this.targetDate - currentTime;
//       const time = this.getTimeComponents(deadLine);
//       this.onTick(time);

//       if (deadLine <= 0) {
//         clearInterval(timeIntervalId);
//       }
//     }, 1000);
//   }

//   getTimeComponents(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { days, hours, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }
// }

// const timer = new CountdownTimer({
//   onTick: addClockElement,
//   selector: '#timer-1',
//   targetDate: new Date('Aug 7 2021'),
// });

// function addClockElement({ days, hours, mins, secs }) {
//   refs.secs.textContent = `${secs}`;
//   refs.mins.textContent = `${mins}`;
//   refs.hours.textContent = `${hours}`;
//   refs.days.textContent = `${days}`;
// }

// timer.start();
