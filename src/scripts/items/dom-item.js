import deleteIcon from "./../../icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
import editIcon from "./../../icons/edit_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
import moveIcon from "./../../icons/move_item_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
import { completedInit } from "./completed";

function capitalizeFirstLetter(string) {
  if (!string) return ""; // Handle empty or non-string input
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let iconArrImg = [
    deleteIcon,
    editIcon,
    moveIcon
];

let iconNames = [
    "delete",
    "edit",
    "move"
]

let iconSide = 30;

export function appendTask(taskArr, projectID) {
    const taskList = document.querySelector(".task-container");
    taskList.textContent = ""; 

    for( let i = 0; i < taskArr.length; ++i ) {
        if(taskArr[i].project == projectID) {
            let taskID = taskArr[i].uuid;

            const taskEl = document.createElement("div");
            taskEl.setAttribute("class", "task");
            taskEl.setAttribute("id", taskID);

            const completed = document.createElement("input");
            completed.setAttribute("type", "checkbox");
            completed.setAttribute("id", "completed");
            taskEl.appendChild(completed);

            const title = document.createElement("div");
            title.setAttribute("class", "title");
            title.textContent = taskArr[i].title;
            taskEl.appendChild(title);

            const leftSide = document.createElement("div");
            leftSide.setAttribute("class", "left");

            const priority = document.createElement("div");
            priority.setAttribute("class", `priority ${taskArr[i].priority}`);
            priority.textContent = capitalizeFirstLetter(taskArr[i].priority);
            leftSide.appendChild(priority);

            const deadline = document.createElement("div");
            deadline.setAttribute("class", "calendar");
            deadline.textContent = taskArr[i].deadline;
            leftSide.appendChild(deadline);

            const icons = document.createElement("div");
            icons.setAttribute("class", "task-icons");

            for(let i = 0; i < 3; ++i ) {
                const iconChild = new Image();
                iconChild.src = iconArrImg[i];
                iconChild.alt = iconNames[i];
                iconChild.height = iconSide;
                iconChild.width = iconSide;
                iconChild.id = `${taskID} ${iconNames[i]}`;
                icons.appendChild(iconChild);
            }

            leftSide.appendChild(icons);
            taskEl.appendChild(leftSide);
            taskList.appendChild(taskEl);
        }
    }

    completedInit();
}