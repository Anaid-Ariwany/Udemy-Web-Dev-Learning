# ToDo List
## Problem
The problem is to create a simple ToDo List program that allows users to add, view, and delete tasks. The program does not have an interface and will be run in the console. The details include:
- The program runs continuously until the user decides to exit by typing the word 'quit'.

- The user can add a task by typing 'new' then is prompted to enter the task description. The task is then added to an array and the program confirms that the task has been added using the words 'Task added to the list'.

- The user can view all tasks by typing 'list'. The program will display all tasks in the array, each preceded by its index number.

- The user can delete a task by typing 'delete' followed by the index number of the task they wish to remove (as prompted by the program). The program will confirm that the task has been deleted using the words 'Task removed from the list'.

- The program should handle invalid inputs gracefully, such as trying to delete a task that does not exist or entering an unrecognized command.