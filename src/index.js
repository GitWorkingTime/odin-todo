// Entry Point script
import "./styles.css";
import { ProjectObject, toggleProjectModal } from "./scripts/projects/add-project.js";
import { toggleTaskModal, TaskObject } from "./scripts/items/add-item.js";
import { modalInit } from "./scripts/modal-manager.js";
import { completedInit } from "./scripts/items/completed.js";

/*
 * To-Do list setup:
 * 
 * Inspiration: Trello
 * - Project Lists:
 *  - Category of todo list tasks
 *  - Can...
 *      - Edit title
 *      - Delete list
 *      - Add list
 *      - Add todo list items
 *      - Delete todo list items
 * 
 * - To-do list items:
 *  - Properties
 *      - Title
 *      - Description
 *      - Deadline
 *      - Checkmark complete
 * 
 * Functions:
 *  - Create list
 *  - Edit list details
 *      - Edit title
 *  - Delete list
 *  - Add item
 *  - Delete item
 *  - Edit item details
 *      - Edit title
 *      - Edit description
 *      - Edit deadline
 *      - Edit completed
 *      - Priority
 * 
 */

let projectArr = [
    { uuid: "default", title: "default" }
];

let currProjectView = projectArr[0];

let taskArr = [
    { uuid: "test", project: "default", title: "Lorem Ipsum", description: "Lorem Ipsum", deadline: "01/01/2025", priority: "high", completed: false } 
];

modalInit();
completedInit();

const taskForm = document.querySelector("#form-add-task");
taskForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let formData = new FormData(evt.target);
    let formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
    let newTask = new TaskObject(currProjectView.id, formObj.title, formObj.description, formObj.priority, formObj.deadline);
    taskArr.push(newTask);
    console.log(taskArr);

    taskForm.reset();
    toggleTaskModal();
});

const projectForm = document.querySelector("#form-add-project");
projectForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let formData = new FormData(evt.target);
    let formObj = Object.fromEntries(formData.entries());
    let newProject = new ProjectObject(formObj.title);
    projectArr.push(newProject);
    console.log(projectArr);

    projectForm.reset();
    toggleProjectModal();
});

  