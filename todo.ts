'use strict';

import { todoFunctions } from './functions';

const args: string[] = process.argv;

// main function calls helpers from outside package when parameters used
let todo = (): void => {

  if (args.length == 2) {
    todoFunctions.printCommands();
  } else if (args[3] = '-l') {
    todoFunctions.listAllTasks();
  }
  else {
    console.log('this is the error handling');
  }
}

todo();