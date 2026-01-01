export function createProject( title ) {
    let id = crypto.randomUUID();
    let projectTitle = title;
    return { id, projectTitle };
}

export function toggleProjectModal( modalOpen ) {
    const modal = document.querySelector("#modal-project");
    const overlay = document.querySelector("#overlay");
    let modalClasses = modal.classList;
    let overlayClasses = overlay.classList;

    modalClasses.toggle("show");
    overlayClasses.toggle("show");
    return !modalOpen;
}