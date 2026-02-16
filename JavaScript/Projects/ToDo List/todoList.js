let userInput = prompt("What do you want to do? NEW, LIST, or DELETE?");
let arrTask = [];

while (userInput.toUpperCase() !== 'QUIT') {
    if (userInput.toUpperCase() === 'NEW') {
        input = prompt("Enter a task to add?");
        arrTask.push(input.toUpperCase());
        console.log(`${input.toUpperCase()} added to the list`);
    }

    else if (userInput.toUpperCase() === 'LIST') {
        for (let i = 0; i < arrTask.length; i++) {
            console.log(i, arrTask[i]);
        }
    }

    else if (userInput.toUpperCase() === 'DELETE') {
        input = parseInt(prompt("Enter index of item to delete?"));
        arrTask.splice(input, 1);
        console.log('Task deleted!')
        console.log(arrTask);
    }

    userInput = prompt("What do you want to do? NEW, LIST, or DELETE?");

}
console.log("You quit the program");

