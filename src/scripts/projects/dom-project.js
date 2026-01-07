import deleteIcon from "./../../icons/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
import editIcon from "./../../icons/edit_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"

let iconArrImg = [
    deleteIcon,
    editIcon
]

let iconNames = [
    "delete",
    "edit"
]

let iconSide = 30;

export function appendProject(projectArr) {
    const projectList = document.querySelector(".project-list");
    projectList.textContent = "";

    for( let i = 0; i < projectArr.length; ++i ) {
        let projectID = projectArr[i].uuid;
        const projectEl = document.createElement("div");
        projectEl.setAttribute("class", "project");
        projectEl.setAttribute("id", `${projectID}`);

        const title = document.createElement("div");
        title.setAttribute("class", "title");
        title.setAttribute("id", `${projectID}`);
        title.textContent = projectArr[i].title;
        projectEl.appendChild(title);

        const icons = document.createElement("div");
        icons.setAttribute("class", "project-icons");

        for( let i = 0; i < 2; ++i ) {
            const iconChild = new Image();
            iconChild.src = iconArrImg[i];
            iconChild.alt = iconNames[i];
            iconChild.height = iconSide;
            iconChild.width = iconSide;
            iconChild.id = `${projectID} ${iconNames[i]}`;
            icons.appendChild(iconChild);
        }
        projectEl.appendChild(icons);
        projectList.appendChild(projectEl);
    }
}