import "./styles.css";


const content = document.querySelector("#content");
const projectList = document.querySelector("#projects-list");

const projects = [];


function createProject(name) {
    
    let projectName = name;
    const dateMade = new Date();
    let items = [];

    function createToDoItem(name, notes) {
        const itemName = name;
        const itemNotes = notes;
        const startDate = new Date();
        const endDate = null;

        items.push({itemName, itemNotes, startDate, endDate});
    }   
    
    function displayProject() {
        

    }


    return {projectName, dateMade, items, createToDoItem, displayProject};
}


function createToDoItemElement(item) {

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("input");

    title.type = "text";
    title.classList.add("card-name");
    title.placeholder = "To Do";

    const time = document.createElement("input");

    time.type = "text";
    time.classList.add("card-time");
    time.placeholder = "Time";

    const notesDiv = document.createElement("div");
    const notesText = document.createElement("textarea");

    notesDiv.innerText = "Notes: ";
    notesDiv.classList.add("card-notes");

    notesText.classList.add("card-notes-text");

    notesDiv.appendChild(notesText);

    const doneDiv = document.createElement("div");
    const doneLabel = document.createElement("label");
    const doneCheckbox = document.createElement("input");

    doneDiv.classList.add("card-done");

    doneLabel.for = "finished";
    doneLabel.innerText = "Done";

    doneCheckbox.type = "checkbox";
    doneCheckbox.id = "finished";

    doneDiv.appendChild(doneLabel);
    doneDiv.appendChild(doneCheckbox);

    const deleteButton = document.createElement("button");

    deleteButton.classList.add("card-delete");

    card.appendChild(title);
    card.appendChild(time);
    card.appendChild(notesDiv);
    card.appendChild(doneDiv);
    card.appendChild(deleteButton);
    
    content.appendChild(card);
}

function createProjectElement() {
    const listItem = document.createElement("li");
    const button = document.createElement("button");

    button.innerText = "Project";

    listItem.appendChild(button);

    projectList.appendChild(listItem);
}

createToDoItemElement();
createProjectElement();


const newProject = createProject("Work-out");

newProject.createToDoItem("hello", "hi");

console.log(newProject);