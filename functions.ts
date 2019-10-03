'use strict';

const fs = require('fs');

export let todoFunctions = {

  // prints the arguments list when argument not provided in command line for main function
  printCommands(): void {
    console.log('Command Line Todo application' + '\n' +
      '=============================' + '\n' + '\n' +
      'Command line arguments:' + '\n' +
      '    -l   Lists all the tasks' + '\n' +
      '    -a   Adds a new task' + '\n' +
      '    -r   Removes an task' + '\n' +
      '    -c   Completes an task');
  },

  // reads from predefined file and prints out the lines with added numbers for it
  listAllTasks(): void {
    let context: string = fs.readFileSync('tasks.txt', 'utf8');
    if (context == '') {
      console.log('No todos for today! :)');
    } else {
      let contextLines: string[] = [];
      context.split('\r\n').forEach(function (lines) {
        contextLines.push(lines);
      })
      for (let i: number = 0; i < contextLines.length; i++) {
        console.log(i + 1 + '. - ' + contextLines[i]);
      }
    }
  }

}