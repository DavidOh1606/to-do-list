import { createToDoItem } from "./todo-item.js";
import clearContent from "./contentClear.js";

const content = document.querySelector("#content");

function createProject(name) {
        
    let projectName = name;
    const dateMade = new Date();
    let items = [];

    const projectElement = createProjectElement();
    const projectDetails = createProjectDetailsElement();

    function createProjectDetailsElement() {

        const projectDetails = document.createElement("div");
        const projectTitle = document.createElement("input");
        const newItemButton = document.createElement("button");
        const saveButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        const projectDate = document.createElement("div");

        projectDetails.classList.add("project-details");

        projectTitle.type = "text";
        projectTitle.classList.add("project-details-title");
        projectTitle.placeholder = "Project Title";
        
        projectTitle.value = name;

        newItemButton.classList.add("new-todo");
        newItemButton.innerText = "New";
        newItemButton.addEventListener("click", createNewItem);

        saveButton.classList.add("save");
        saveButton.innerText = "Save";
        saveButton.addEventListener("click", save);

        deleteButton.classList.add("delete-project");
        deleteButton.innerText = "Delete";

        projectDate.classList.add("project-details-date");

        projectDate.innerText = `Started on ` + dateMade.toLocaleDateString();   

        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(newItemButton);
        projectDetails.appendChild(saveButton);
        projectDetails.appendChild(deleteButton);
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
        newItem.todoItemElement.addEventListener("click", removeItem);

        items.push(newItem);

        displayProject();
    }

    function removeItem(event) {
        if (!event.target.classList.contains("card-delete")) {
            return;
        }

        const card = event.target.parentNode; 

        const index = items.findIndex(item => item === card);

        items.splice(index, 1);

        displayProject();
    }

    function save() {
        const projectButton = projectElement.querySelector("button");
        const projectTitle = projectDetails.querySelector(".project-details-title");

        projectButton.innerText = projectTitle.value;
    }

    function displayProject() {
        clearContent();
        
        content.appendChild(projectDetails);
        items.forEach(item => content.appendChild(item.todoItemElement));

    }
    
    return { projectName, dateMade, items, projectElement, projectDetails };
}


export { createProject };