let todo = [];
let req;

req = prompt("Enter your choice ");

while (true) {
   

    if (req === "quit") {
        console.log("Quitting...");
        break;
    }
    else if (req === "add") {
        let task = prompt("Enter task to add:");
        todo.push(task);
        console.log("Task added.");
    }
    else if (req === "list") {
        console.log("-----------------------------------------------------------------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-----------------------------------------------------------------------------");
    }
    else if (req === "delete") {
        let idx = prompt("Enter the index number to delete:");
        if (idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("Task deleted.");
        } else {
            console.log("Invalid index.");
        }
    }
    else {
        console.log("Invalid command.");
    }
    req = prompt("Enter your choice ");
}
