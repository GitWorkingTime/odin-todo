import { getTaskInfo, setTaskdetails, setTaskForm, toggleEditTaskModal } from "./items/add-item";
import { appendTask } from "./items/dom-item";
import { setProjectDetails, setProjectForm, toggleEditProjectModal } from "./projects/add-project";
import { appendProject } from "./projects/dom-project";
import { currProjectView, setCurrProjectView } from "../index";
import { parse } from "date-fns";

let type = "";
export let uuid = "";

export function registerTaskIcons( taskArr, currProjectViewID ) {
    const icons = document.querySelectorAll(".task-icons");
    icons.forEach( iconContainer => {
        iconContainer.addEventListener("click", (evt) => {
            let iconObj = parseIcon(evt.target);
            if(iconObj.uuid.includes('t-')) {
                switch(iconObj.type) {
                    case 'delete':
                        deleteTask(taskArr, iconObj.uuid);
                        appendTask(taskArr, currProjectViewID);
                        break;
                    case 'edit':
                        let task = taskArr[taskArr.findIndex(item => item.uuid === iconObj.uuid)];
                        toggleEditTaskModal();
                        getTaskInfo(task);
                        setTaskForm();
                        setTaskdetails(task);
                        break;
                    case 'move':
                        break;
                }
            }
        });
    });
}

export function registerProjectIcons( taskArr, projectArr, currProjectViewID ) {
    const icons = document.querySelectorAll(".project-icons");
    icons.forEach( iconContainer => {
        iconContainer.addEventListener("click", (evt) => {
            let iconObj = parseIcon(evt.target);
            if(iconObj.uuid.includes('p-')) {
                switch(iconObj.type) {
                    case 'delete':
                        if( projectArr.length > 1 ) {
                            let prevProjectIndex = projectArr.findIndex(item => item.uuid === iconObj.uuid) - 1;
                            setCurrProjectView(prevProjectIndex);
                            appendTask(taskArr, currProjectViewID);

                            deleteProject(projectArr, iconObj.uuid);
                            appendProject(projectArr);
                            for(let i = 0; i < taskArr.length; ++i ) {
                                if(taskArr[i].project == iconObj.uuid) {
                                    deleteTask(taskArr, iconObj.uuid);
                                }
                            }                            
                        }
                        break;
                    case 'edit':
                        let project = projectArr[projectArr.findIndex(item => item.uuid === iconObj.uuid)];
                        toggleEditProjectModal();
                        setProjectDetails(project);
                        setProjectForm();
                        break;
                }
            }
        })
    });
}

function parseIcon( element ) {
    let parsedID = element.id.split(' ');
    let uuid = parsedID[0];
    let type = parsedID[1];
    return { uuid, type };
}

function deleteTask(taskArr, uuid) {
    let index = taskArr.findIndex(item => item.uuid === uuid );
    taskArr.splice(index, 1);
}

function deleteProject(projectArr, uuid ) {
    let index = projectArr.findIndex(item => item.uuid === uuid );
    projectArr.splice(index, 1);
}
