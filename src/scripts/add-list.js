export function addList() {
    let id = crypto.randomUUID();
    let title = "";

    function initializeList( listTitle ) {
        title = listTitle;
    }

    function getObj() {
        return {id, title};
    }

    return { initializeList, getObj };
}