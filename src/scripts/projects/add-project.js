import { registerIcons } from "../icon-manager";
import { appendProject } from "./dom-project";

let currentProject = null;

export function toggleProjectModal( ) {
    const modal = document.querySelector("#modal-project");
    const overlay = document.querySelector("#overlay");
    let modalClasses = modal.classList;
    let overlayClasses = overlay.classList;

    modalClasses.toggle("show");
    overlayClasses.toggle("show");
}

export function toggleEditProjectModal() {
    const modal = document.querySelector("#modal-edit-project");
    const overlay = document.querySelector("#overlay");
    let modalClasses = modal.classList;
    let overlayClasses = overlay.classList;

    modalClasses.toggle("show");
    overlayClasses.toggle("show");
}

export function setProjectForm() {
    const form = document.querySelector("#form-edit-project");
    const formEl = form.children;
    formEl[1].value = currentProject.title;
}

export function initEditProjectForm( taskArr, projectArr ) {
    const form = document.querySelector("#form-edit-project");
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let formData = new FormData(form);
        let formObj = Object.fromEntries(formData.entries());

        currentProject.title = formObj.title;
        appendProject(projectArr);
        registerIcons(taskArr, projectArr);
        toggleEditProjectModal();
    });
}

export function setProjectDetails( project ) {
    currentProject = project;
}

export class ProjectObject {
    constructor( title ) {
        this.uuid = `p-${crypto.randomUUID()}`;
        this.title = title;
    }
}