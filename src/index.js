import "./styles.css";


const content = document.querySelector("#content");

const projects = [];


function createProject(name) {
    
    let projectName = name;
    const dateMade = new Date();
    const items = [];

    function createToDoItem(name, notes) {
        const itemName = name;
        const itemNotes = notes;
        const startDate = new Date();
        const endDate = null;

        items.push({itemName, itemNotes, startDate, endDate});
    }   
    
    function displayProject() {

    }

    return {projectName, dateMade, items, createToDoItem};
}


const newProject = createProject("Work-out");

newProject.createToDoItem("hello", "hi");

console.log(newProject);