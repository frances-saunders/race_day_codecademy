//This script fulfills the project reqs for "Race Day" in Codecademy

let raceNumber = Math.floor(Math.random() * 1000);

let runnerEarly = true;

let runnerAge = 0;

if (runnerAge >= 18 && runnerEarly) {
  raceNumber += 1000; //adds 1000 to raceNumber if conditions are met
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

