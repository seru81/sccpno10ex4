const Inputtask = document.getElementById("inputtask")
const Addtask = document.getElementById("addtask")
const Tasks = document.getElementById("tasks")

Addtask.addEventListener("click",() => {
    const todo = document.createElement("div")
    const task = document.createElement("p")
    const remove = document.createElement("input")

    remove.type = "button"
    remove.value = "削除"
    remove.addEventListener("click",() => todo.remove())
    task.textContent = Inputtask.value

    todo.appendChild(task)
    todo.appendChild(remove)
    Tasks.appendChild(todo)

    Inputtask.value = ""
})