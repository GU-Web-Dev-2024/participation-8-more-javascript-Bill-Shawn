"use strict";

// function to save task to local storage
function saveTasks(task)
{
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// function to load tasks from local storage
function loadTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}
// exports