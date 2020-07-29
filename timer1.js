const secondsArray = process.argv.slice(2);
// let secondsArray = [3,5,9,10,15];

const alarmTimer = function(secondsArray) {
  for (let second of secondsArray) {
    console.log(second);
    if (typeof secondsArray[second] === "string" || secondsArray[second] < 0) {
      console.log("type in positive numbers");
      second++; // do not beleive this is skipping the alarm
      //do not know why
    }
    setTimeout(() => {
      process.stdout.write('BOOM');
    }, (second * 1000));
  }
};
alarmTimer(secondsArray);

// const timerFunct = setTimeout(() => {
//   process.stdout.write('BOOM'); // this makes a timer sound
// }, 1000);
// process.stdout.write('BOOM'); // this makes a timer sound
/* Should beep at;

    3 seconds
    5 seconds
    9 seconds
    10 seconds
    15 seconds
*/