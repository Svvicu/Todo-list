const tasksBox = document.getElementById("TasksBox");
const submitBtn = document.getElementById("submitBtn");
const toggleForm = document.getElementById("showPanelBtn");
const noteForm=document.querySelector(".addNotePanel");
const fieldTitle = document.getElementById("fieldTitle");
const fieldDesc = document.getElementById("fieldDesc");

const toggleNoteForm = () =>{
        noteForm.classList.toggle("showNoteForm");
}
toggleForm.addEventListener("click", toggleNoteForm);

const createCard = () => {
    const task = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = fieldTitle.value;
    task.appendChild(title);
    task.classList = "taskCard";
    tasksBox.appendChild(task);
    const description = document.createElement("p");
    description.textContent = fieldDesc.value;
    task.appendChild(description);
    fieldDesc.value=" ";
    fieldTitle.value=" "


}

submitBtn.addEventListener("click", createCard)
