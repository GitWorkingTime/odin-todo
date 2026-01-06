import { format } from 'date-fns'

export function toggleTaskModal() {
    const modal = document.querySelector("#modal-task");
    const overlay = document.querySelector("#overlay");
    let modalClasses = modal.classList;
    let overlayClasses = overlay.classList;

    modalClasses.toggle("show");
    overlayClasses.toggle("show");
}

export class TaskObject {
    constructor(project, title, description, priority, deadline) {
        this.uuid = `t-${crypto.randomUUID()}`;
        this.project = project
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.deadline = format(deadline, 'dd/MM/yyyy');
        this.completed = false;
    }
}