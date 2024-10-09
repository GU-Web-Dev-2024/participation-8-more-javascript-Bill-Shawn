"use strict";

// let myInt = 42;

// myInt++;

// function to add a task
function addTask(task, taskList)
{
    const list = document.getElementById("li");
    li.textContent = task;
    list.appendChild(newTask);
}

// function to clear input field
function clearInput()
{
    const input = document.getElementById("taskInput");
    input.value = "";
}

// alternative method to export
export function sayHello(task)
{
    alert("Hello, world!");
    console.log(`Hello, ${task}!`);
}

// export functions
export { addTask, clearInput};