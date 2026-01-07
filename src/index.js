// Entry Point script
import "./styles.css";
import { initEditProjectForm, ProjectObject, toggleProjectModal } from "./scripts/projects/add-project.js";
import { toggleTaskModal, TaskObject, initEditTaskForm } from "./scripts/items/add-item.js";
import { modalInit } from "./scripts/modal-manager.js";
import { completedInit } from "./scripts/items/completed.js";
import { appendTask } from "./scripts/items/dom-item.js";
import { appendProject } from "./scripts/projects/dom-project.js";
import { registerTaskIcons, registerProjectIcons } from "./scripts/icon-manager.js";
import { parse } from "date-fns";

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
    { uuid: "p-default", title: "Default" }
];

export let currProjectView = projectArr[0];

let taskArr = [
    {   uuid: "t-1", 
        project: "p-default", 
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
        description: "Lorem Ipsum", 
        deadline: "01/01/2025", 
        priority: "high", 
        completed: false 
    } 
];

modalInit();
completedInit();
appendProject(projectArr);
appendTask(taskArr, projectArr[0].uuid);
initEditTaskForm(taskArr, projectArr, currProjectView);
initEditProjectForm(taskArr, projectArr);
registerProjectIcons( taskArr, projectArr, currProjectView.uuid );
registerTaskIcons( taskArr );

const taskForm = document.querySelector("#form-add-task");
taskForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let formData = new FormData(evt.target);
    let formObj = Object.fromEntries(formData.entries());
    let dateObj = parse(formObj.deadline, 'yyyy-MM-dd', new Date());
    let newTask = new TaskObject(currProjectView.uuid, formObj.title, formObj.description, formObj.priority, dateObj);
    taskArr.push(newTask);

    taskForm.reset();
    toggleTaskModal();
    appendTask(taskArr, currProjectView.uuid);
    registerTaskIcons(taskArr, currProjectView.uuid);
});

const projectForm = document.querySelector("#form-add-project");
projectForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let formData = new FormData(evt.target);
    let formObj = Object.fromEntries(formData.entries());
    let newProject = new ProjectObject(formObj.title);
    projectArr.push(newProject);

    projectForm.reset();
    toggleProjectModal();
    appendProject(projectArr);
    registerProjectIcons(taskArr, projectArr, currProjectView.uuid);
});

const projectList = document.querySelector(".project-list");
projectList.addEventListener("click", (evt) => {
    if(evt.target.id.includes(`p-`)) {
        for(let i = 0; i < projectArr.length; ++i ) {
            if( projectArr[i].uuid == evt.target.id ) {
                currProjectView = projectArr[i];
                break;
            }
        }
    }
    appendTask(taskArr, currProjectView.uuid);
    registerTaskIcons(taskArr, currProjectView.uuid);
    registerProjectIcons(taskArr, projectArr, currProjectView.uuid);
});

export function setCurrProjectView( index ) {
    currProjectView = projectArr[index];
}

  