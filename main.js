let raceNumber = Math.floor(Math.random() * 1000);

let runnerEarly = true;

let runnerAge = 0;

if (runnerAge >= 18 && runnerEarly) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && runnerEarly) {
  console.log(`Your race number is ${raceNumber} and you will race at 9:30am`);
}
  else if (runnerAge >=18 && !runnerEarly) {
    console.log(`Your race number is ${raceNumber} and you will race at 11am`)
  }
  else if(runnerAge < 18) {
    console.log(`Your race number is ${raceNumber} and you will race at 12:30pm`);
  }
  else {
    console.log('Please approach the registration desk');
  }

