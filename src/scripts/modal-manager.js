import { toggleProjectModal } from "./projects/add-project.js";
import { toggleEditTaskModal, toggleTaskModal } from "./items/add-item.js";

export function modalInit() {
    const btns = document.querySelectorAll("button");
    const modalProject = document.querySelector("#form-add-project");
    const modalTask = document.querySelector("#form-add-task");
    const modalEditTask = document.querySelector("#form-edit-task");
    btns.forEach( button => {
        button.addEventListener("click", (evt) => {
            if(evt.target.id == "add-project") {
                toggleProjectModal();
            } else if (evt.target.id == "add-task") {
                toggleTaskModal();
            }
        });
    })

    const modalProjectExit = document.querySelector("#exit-project");
    modalProjectExit.addEventListener("click", (evt) => {
        toggleProjectModal();
        modalProject.reset();
    });
    
    const modalTaskExit = document.querySelector('#exit-task');
    modalTaskExit.addEventListener("click", (evt) => {
        toggleTaskModal();
        modalTask.reset();
    });

    const modalEditTaskExit = document.querySelector('#exit-edit-task');
    modalEditTaskExit.addEventListener("click", (evt) => {
        toggleEditTaskModal();
        modalEditTask.reset();
    });
}
