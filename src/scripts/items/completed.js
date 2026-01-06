export function completedInit() {
    const completed = document.querySelectorAll(".task");
    completed.forEach( check => {
        check.addEventListener("click", (evt) => {
            let parentID = check.id;
            if(evt.target.id == "completed") {
                const checkbox = evt.target;
                const title = document.querySelector(`#${parentID} .title`);
                let titleClasses = title.classList;
                if(checkbox.checked) {
                    titleClasses.add("completed");
                } else {
                    titleClasses.remove("completed");
                }
            }
        });
    });
}