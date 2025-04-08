function addTodo() {
    const input = document.getElementById("todo-input");
    const task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.className = "todo-item";

    const span = document.createElement("span");
    span.className = "text";
    span.innerText = task;

    const actions = document.createElement("div");
    actions.className = "actions";

    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.onclick = () => {
        li.classList.toggle("done");
        doneBtn.innerText = li.classList.contains("done") ? "Undone" : "Done";
    };

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.onclick = () => {
        li.remove();
    };

    actions.appendChild(doneBtn);
    actions.appendChild(removeBtn);

    li.appendChild(span);
    li.appendChild(actions);

    document.getElementById("todo-list").appendChild(li);
    input.value = "";
}