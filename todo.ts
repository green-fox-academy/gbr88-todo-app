'use strict';

import { printCommands , listAllTasks } from './functions';

const args: string[] = process.argv;

// main function calls helpers from outside package when parameters used
let todo = (): void => {

  if (args.length == 2) {
    printCommands();
  } else if (args[3] = '-l') {
    listAllTasks();
  }
  else {
    console.log('this is the error handling');
  }
}

todo();