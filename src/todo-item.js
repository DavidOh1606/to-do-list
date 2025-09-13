function createToDoItem(name, notes) {
    const itemName = name;
    const itemNotes = notes;
    const startDate = new Date();
    const endDate = null;
    const todoItemElement = createToDoItemElement();

    function createToDoItemElement() {

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
        deleteButton.innerText = "X";

        card.appendChild(title);
        card.appendChild(time);
        card.appendChild(notesDiv);
        card.appendChild(doneDiv);
        card.appendChild(deleteButton);

        return card;
    }

    return { itemName, itemNotes, startDate, endDate, todoItemElement };
};


export { createToDoItem };