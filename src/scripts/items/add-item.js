import { format, parse } from 'date-fns'
import { appendTask } from './dom-item';

let title = "";
let description = "";
let priority = "";
let deadline = "";
let project = "";
let currentTask = null;

export function toggleTaskModal() {
    const form = document.querySelector("#form-add-task");
    form.reset();
    const modal = document.querySelector("#modal-task");
    const overlay = document.querySelector("#overlay");
    let modalClasses = modal.classList;
    let overlayClasses = overlay.classList;

    modalClasses.toggle("show");
    overlayClasses.toggle("show");
}

export function toggleEditTaskModal() {
    const modal = document.querySelector("#modal-edit-task");
    const overlay = document.querySelector("#overlay");
    let modalClasses = modal.classList;
    let overlayClasses = overlay.classList;

    modalClasses.toggle("show");
    overlayClasses.toggle("show");
}

export function toggleMoveTaskModal() {
    const modal = document.querySelector("#modal-move-task");
    const overlay = document.querySelector("#overlay");
    let modalClasses = modal.classList;
    let overlayClasses = overlay.classList;

    modalClasses.toggle("show");
    overlayClasses.toggle("show");
}

export function getTaskInfo(task) {
    title = task.title;
    description = task.description;
    priority = task.priority;
    deadline = task.deadline;
    project = task.project;
}

export function initEditTaskForm( taskArr, currProjectView ) {
    const form =  document.querySelector("#form-edit-task");
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let formData = new FormData(evt.target);
        let formObj = Object.fromEntries(formData.entries());
        currentTask.title = formObj.title;
        currentTask.description = formObj.description;
        currentTask.priority = formObj.priority;
        currentTask.project = currProjectView.id;
        let dateObj = parse(formObj.deadline, 'yyyy-MM-dd', new Date());
        currentTask.deadline = format(dateObj, 'MM/dd/yyyy');        
        appendTask(taskArr, currentTask.project);
        toggleEditTaskModal();
    });
}

export function initMoveTaskForm( taskArr ) {
    const form = document.querySelector("#form-move-task");
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let prevProjectView = currentTask.project;
        let formData = new FormData(evt.target);
        let formObj = Object.fromEntries(formData.entries());
        console.log(formObj);
        currentTask.project = formObj.project;
        appendTask(taskArr, prevProjectView);
        toggleMoveTaskModal();
    });
}

export function setTaskForm() {
    const form = document.querySelector("#form-edit-task");
    const formEl = form.children;

    formEl[1].value = title;
    formEl[3].value = description;
    formEl[5].value = priority;

    let dateObj = parse(deadline, 'MM/dd/yyyy', new Date());
    let formatedDate = format(dateObj, 'yyyy-MM-dd');

    formEl[7].value = formatedDate;
}

export function setTaskdetails(task) {
    currentTask = task;
}

export class TaskObject {
    constructor(project, title, description, priority, deadline) {
        this.uuid = `t-${crypto.randomUUID()}`;
        this.project = project
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.deadline = format(deadline, 'MM/dd/yyyy');
        this.completed = false;
    }
}