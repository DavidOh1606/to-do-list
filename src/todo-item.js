
function createToDoItem(name, time, notes, date, checked) {
    let itemName = name;
    let itemTime = time;
    let itemNotes = notes;
    const startDate = date === undefined ? new Date().toLocaleDateString() : date;
    const endDate = null;
    const todoItemElement = createToDoItemElement();

    function createToDoItemElement() {

        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("input");

        title.type = "text";
        title.classList.add("card-name");
        title.placeholder = "To Do";
        title.value = itemName === undefined ? "" : itemName;

        const time = document.createElement("input");

        time.type = "text";
        time.classList.add("card-time");
        time.placeholder = "Time";
        time.value = itemTime === undefined ? "" : itemTime;

        const notesDiv = document.createElement("div");
        const notesText = document.createElement("textarea");

        notesDiv.innerText = "Notes: ";
        notesDiv.classList.add("card-notes");

        notesText.classList.add("card-notes-text");
        notesText.value = itemNotes === undefined ? "" : itemNotes;

        notesDiv.appendChild(notesText);

        const doneDiv = document.createElement("div");
        const doneLabel = document.createElement("label");
        const doneCheckbox = document.createElement("input");

        doneDiv.classList.add("card-done");

        doneLabel.for = "finished";
        doneLabel.innerText = "Done";

        doneCheckbox.type = "checkbox";
        doneCheckbox.id = "finished";
        doneCheckbox.checked = checked === undefined ? false : checked;

        doneDiv.appendChild(doneLabel);
        doneDiv.appendChild(doneCheckbox);

        const deleteButton = document.createElement("button");

        deleteButton.classList.add("card-delete");
        deleteButton.innerText = "X";

        card.appendChild(title);
        card.appendChild(time);
        card.appendChild(notesDiv);
        card.appendChild(doneDiv);
        card.appendChild(deleteButton);

        return card;
    }

    function save() {
        itemName = todoItemElement.querySelector(".card-name").value;
        itemTime = todoItemElement.querySelector(".card-time").value;
        itemNotes = todoItemElement.querySelector(".card-notes-text").value;
        const checked = todoItemElement.querySelector("[type='checkbox']").checked;
        return {itemName, itemTime, startDate, itemNotes, checked};
    }

    return { itemName, itemTime, itemNotes, startDate, endDate, todoItemElement, save };
};


export { createToDoItem };