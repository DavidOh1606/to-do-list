import { createProject } from "./project.js";
import clearContent from "./contentClear.js";
import { createToDoItem } from "./todo-item.js";

const content = document.querySelector("#content");
const projectButton = document.querySelector("button.new-project");
const projectList = document.querySelector("#projects-list");
const sidebar = document.querySelector(".sidebar");

const projectManager = (function() {

    projectButton.addEventListener("click", newProject);

    const projects = [];

    if (localStorage.getItem("projects") !== null) {
        
        const projectsData = JSON.parse(localStorage.getItem("projects"));

        projectsData.forEach(function(project) {

            let newItems = [];

            project.items = project.items.forEach(function(item) {
                newItems.push(createToDoItem(item.itemName, item.itemTime, item.itemNotes, item.startDate, item.checked));
            });

            projects.push(createProject(project.name, project.date, newItems));
        });

    }


    displayProjectsList();



    content.addEventListener("click", deleteProject);
    sidebar.addEventListener("click", saveProjects);
    
    
    function newProject() {
        const newProject = createProject("Project");

        projects.push(newProject);    
        displayProjectsList();    
    }


    function deleteProject(event) {

        if (!event.target.classList.contains("delete-project")) {
            return;
        }

        const projectDetails = event.target.parentNode;

        const index = projects.findIndex(project => project.projectDetails === projectDetails);

        projects.splice(index, 1);
    
        displayProjectsList();
        clearContent()
    }

    function saveProjects(event) {
        if (!event.target.classList.contains("save-projects")) {
            return;
        }

        if (storageAvailable("localStorage")) {

            const saveData = projects.map(function(project) {
                
                const projectData = project.save();

                const name = projectData.name;
                const date = projectData.dateMade;
                const items = project.items.map(function(item) {
                    return item.save();
                });

                return {name, items, date};
            });

            localStorage.setItem("projects", JSON.stringify(saveData));
        }
        else {
            console.log("Unable to save projects ot localStorage");
        }

    }


    // From https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    function storageAvailable(type) {
        let storage;
        try {
            storage = window[type];
            const x = "__storage_test__";
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        } catch (e) {
            return (
                e instanceof DOMException &&
                e.name === "QuotaExceededError" &&
                storage &&
                storage.length !== 0
            );
        }
    }

    function displayProjectsList() {
        clearProjectsList();
        projects.forEach(project => projectList.appendChild(project.projectElement));
    }

    function clearProjectsList() {
        while (projectList.firstChild) {
            projectList.firstChild.remove();
        }
    }


    return {};
})();

export default projectManager;