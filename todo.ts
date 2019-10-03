'use strict';

const fs = require('fs');
const args: string[] = process.argv;

let todo = () => {

  if (args.length == 2) {
    console.log('Command Line Todo application' + '\n' +
      '=============================' + '\n' + '\n' +
      'Command line arguments:' + '\n' +
      '    -l   Lists all the tasks' + '\n' +
      '    -a   Adds a new task' + '\n' +
      '    -r   Removes an task' + '\n' +
      '    -c   Completes an task');
  }
  else {
    console.log('this is the error handling');
  }
}

todo();