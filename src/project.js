import { createToDoItem } from "./todo-item.js";


const content = document.querySelector("#content");

function createProject(name) {
        
    let projectName = name;
    const dateMade = new Date();
    let items = [];

    const projectElement = createProjectElement();
    const projectDetails = createProjectDetailsElement();

    const todo = createToDoItem("hi", "bye");
    items.push(todo);

    function createProjectDetailsElement() {

        const projectDetails = document.createElement("div");
        const projectTitle = document.createElement("input");
        const newItemButton = document.createElement("button");
        const projectDate = document.createElement("div");

        projectDetails.classList.add("project-details");

        projectTitle.type = "text";
        projectTitle.classList.add("project-details-title");
        projectTitle.placeholder = "Project Title";
        
        projectTitle.value = "Project";

        newItemButton.classList.add("new-todo");
        newItemButton.innerText = "New Todo";
        newItemButton.addEventListener("click", createNewItem);

        projectDate.classList.add("project-details-date");

        projectDate.innerText = dateMade.toLocaleDateString();   

        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(newItemButton);
        projectDetails.appendChild(projectDate);

        return projectDetails;
    }

    function createProjectElement() {
        const listItem = document.createElement("li");
        const button = document.createElement("button");

        button.innerText = "Project";

        listItem.appendChild(button);
        
        button.addEventListener("click", displayProject);

        return listItem;
    }

    function createNewItem() {
        const newItem = createToDoItem();
        
        items.push(newItem);

        displayProject();
    }

    function displayProject() {
        clearContent();
        
        content.appendChild(projectDetails);
        items.forEach(item => content.appendChild(item.todoItemElement));


    }
    
    return { projectName, dateMade, items, projectElement };
}


function clearContent() {
    while (content.firstChild) {
        content.firstChild.remove();
    }
}

export { createProject };