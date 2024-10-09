"use strict";

// import module
import{addTask, clearInput} from "./todo.js";
import { saveTasks, loadTasks } from "./todo.js";

// import *as storage from "./storage.js";

//set up DOM references
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");

// load tasks from local storage
const tasks = loadTasks();

//add event listeners for new tasks
addTaskButton.addEventListener("click",()=>{
    const task = newTaskInput.value.trim();
    if(task){
        // add task to the DOM
        addTask(task, taskList);
        // save task to local storage
        saveTasks(task);
        // clear input field
        clearInput();
    }
});


