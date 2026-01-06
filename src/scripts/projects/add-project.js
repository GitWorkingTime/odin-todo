export function toggleProjectModal( ) {
    const modal = document.querySelector("#modal-project");
    const overlay = document.querySelector("#overlay");
    let modalClasses = modal.classList;
    let overlayClasses = overlay.classList;

    modalClasses.toggle("show");
    overlayClasses.toggle("show");
}

export class ProjectObject {
    constructor( title ) {
        this.uuid = `p-${crypto.randomUUID()}`;
        this.title = title;
    }
}