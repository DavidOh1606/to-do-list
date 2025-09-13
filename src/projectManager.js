import { createProject } from "./project.js";


const content = document.querySelector("#content");
const projectButton = document.querySelector("button.new-project");
const projectList = document.querySelector("#projects-list");



const projectManager = (function() {

    projectButton.addEventListener("click", newProject);

    const projects = [];


    
    function newProject() {
        const newProject = createProject("Project");

        projects.push(newProject);
        projectList.appendChild(newProject.projectElement);
        

    }


    return {};
})();

export default projectManager;