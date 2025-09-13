import { createProject } from "./project.js";
import clearContent from "./contentClear.js";

const content = document.querySelector("#content");
const projectButton = document.querySelector("button.new-project");
const projectList = document.querySelector("#projects-list");



const projectManager = (function() {

    projectButton.addEventListener("click", newProject);

    const projects = [];


    content.addEventListener("click", deleteProject);

    
    function newProject() {
        const newProject = createProject("Project");

        projects.push(newProject);
        projectList.appendChild(newProject.projectElement);
        

    }


    function deleteProject(event) {

        if (!event.target.classList.contains("delete-button")) {
            return;
        }



    }


    return {};
})();

export default projectManager;