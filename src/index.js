// Entry Point script
import "./styles.css";
import "./scripts/add-project.js";
import { toggleProjectModal } from "./scripts/add-project.js";

/*
 * To-Do list setup:
 * 
 * Inspiration: Trello
 * - Project Lists:
 *  - Category of todo list tasks
 *  - Can...
 *      - Edit title
 *      - Delete list
 *      - Add list
 *      - Add todo list items
 *      - Delete todo list items
 * 
 * - To-do list items:
 *  - Properties
 *      - Title
 *      - Description
 *      - Deadline
 *      - Checkmark complete
 * 
 * Functions:
 *  - Create list
 *  - Edit list details
 *      - Edit title
 *  - Delete list
 *  - Add item
 *  - Delete item
 *  - Edit item details
 *      - Edit title
 *      - Edit description
 *      - Edit deadline
 *      - Edit completed
 *      - Priority
 * 
 */

let projectArr = [
    { id: "default", title: "default" }
];

let taskArr = [
    { project: "default", title: "Lorem Ipsum", description: "Lorem Ipsum", deadline: "01/01/2025", priority: "high" } 
];

const btns = document.querySelectorAll("button");
btns.forEach( button => {
    button.addEventListener("click", (evt) => {
        if(evt.target.id == "add-project") {
            toggleProjectModal();
        }
    });
})

const modalProjectExit = document.querySelector("#exit-project");
modalProjectExit.addEventListener("click", (evt) => {
    toggleProjectModal();
});



  