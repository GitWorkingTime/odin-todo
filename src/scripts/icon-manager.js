import { getTaskInfo, setTaskdetails, setTaskForm, toggleEditTaskModal } from "./items/add-item";
import { appendTask } from "./items/dom-item";
import { setProjectDetails, setProjectForm, toggleEditProjectModal } from "./projects/add-project";
import { appendProject } from "./projects/dom-project";
import { currProjectView } from "../index";

let type = "";
export let uuid = "";

export function registerIcons(taskArr, projectArr) {
    const icons = document.querySelectorAll(".icons");
    icons.forEach( iconContainer => {
        iconContainer.removeEventListener("click", () => {});
        iconContainer.addEventListener("click", (evt) => {
            let parsedID = evt.target.id.split(' ');

            uuid = parsedID[0];
            type = parsedID[1];

            switch(type) {
                case 'delete':
                    if(uuid.includes('t-')) {
                        deleteTask(taskArr, uuid);
                    } else if(uuid.includes('p-')) {
                        if( projectArr.length > 1) {
                            deleteProject(projectArr, uuid);
                        }
                    }
                    break;
                case 'edit':
                    if(uuid.includes('t-')) {
                        let task = taskArr[taskArr.findIndex(item => item.uuid === uuid)];
                        toggleEditTaskModal();
                        getTaskInfo(task);
                        setTaskForm();
                        setTaskdetails(task);
                    } else if (uuid.includes('p-')) {
                        toggleEditProjectModal();
                        setProjectDetails(currProjectView);
                        setProjectForm();
                    }
                    break;
                case 'move':
                    break;
            }
        })
    });
}

function deleteTask(taskArr, uuid) {
    let index = taskArr.findIndex(item => item.uuid === uuid );
    taskArr.splice(index, 1);
    appendTask(taskArr);
}

function deleteProject(projectArr, uuid ) {
    let index = projectArr.findIndex(item => item.uuid === uuid );
    projectArr.splice(index, 1);
    appendProject(projectArr);
}
