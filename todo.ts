'use strict';

import { todoFunctions } from './functions';

const args: string[] = process.argv;

// main function calls helpers from outside package when parameters given
let todo = (): void => {

  if (args.length == 2) {
    todoFunctions.printCommands();

  } else if (args[2] == '-l') {
    todoFunctions.listAllTasks();

  }
  else if (args[2] == '-a') {
    todoFunctions.writeTask();

  }
  else {
    console.log('this is the error handling');

  }
}

todo();