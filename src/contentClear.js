
const content = document.querySelector("#content");


function clearContent() {
    while (content.firstChild) {
        content.firstChild.remove();
    }
}


export default clearContent;