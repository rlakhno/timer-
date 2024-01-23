const args = process.argv.slice(2); //getting arguments from command line
const { exec } = require('child_process');
// Timer function
const timer = function(array) {
  
  for (let item of array) {
    // validating if not negative OR NaN
    if (item < 0 || isNaN(item)) {
      continue;
    }
    let time = item * 1000;
    setTimeout(() => {
      // Single beep
      exec("[console]::beep(1000, 500)", { 'shell': 'powershell.exe' });
      // console.log(time);
    }, time);
  }
};

timer(args);
