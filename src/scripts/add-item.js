export function addItem() {
    let title = "";
    let description = "";
    let deadline = "";
    let isCompleted = false;

    function initializeItem( itemTitle, itemDesc, itemDue ) {
        title = itemTitle;
        description = itemDesc;
        deadline = itemDue;
    }

    function info() {
        return `Title: ${title}, Description: ${description}, Deadline: ${deadline}, Completed: ${isCompleted}`;
    }

    function getObj() {
        return {title, description, deadline, isCompleted};
    }

    return { initializeItem, info, getObj };
};