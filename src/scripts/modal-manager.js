import { toggleProjectModal } from "./projects/add-project.js";
import { toggleTaskModal } from "./items/add-item.js";

export function modalInit() {
    const btns = document.querySelectorAll("button");
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
    });
    
    const modalTaskExit = document.querySelector('#exit-task');
    modalTaskExit.addEventListener("click", (evt) => {
        toggleTaskModal();
    });
}
