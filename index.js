// Arrays to keep track of each task's state
// get rid of all those array and use an obj
//   const taskTitles = [];
//   const taskComplete = [];
//   const taskDescription = []; //add var taskDescription



// Create a new task by adding to the arrays
// A new task will be created as incomplete
// create an obj 'task' to keep track on the origina arrays
function newTask(title, description) { //add description param
   // taskTitles.push(title);
   // taskComplete.push(false);
   // taskComplete.push(false);
  const task = {
     title: title,
     description: description,
     complete: false,

     //turn the 2 task functions into task obj method
     logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };

   return task;
}


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

//  logTaskState(task1); // Clean Cat Litter has not been completed
//  completeTask(task1);
//  logTaskState(task1); // Clean Cat Litter has been completed

// for now, let's just make sure we see our tasks
console.log(tasks);



// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
 function completeTask(task) {
      task.complete = true;
    }

// Print the state of a task to the console in a nice readable way
  function logTaskState(task) {
  //   const title = taskTitles[taskIndex];
  //   const complete = taskComplete[taskIndex];
     console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
     }

// DRIVER CODE BELOW
    //  newTask("Clean Cat Litter"); // task 0
   //   newTask("Do Laundry"); // task 1

//  logTaskState(0); // Clean Cat Litter has not been completed
//  completeTask(0);
//  logTaskState(0); // Clean Cat Litter has been completed
