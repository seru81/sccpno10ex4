const inputTask = document.getElementById("inputtask")
const addTask = document.getElementById("addtask")
const taskListContainer = document.getElementById("tasklistcontainer")
let tasks = []

addTask.addEventListener("click", () => {
    let newTaskId
    if(tasks.length !== 0){
        newTaskId = tasks.slice(-1)[0].id + 1
    }else{
        newTaskId = 1
    }
    const task = {
        id: newTaskId,
        text: inputTask.value
    }
    tasks.push(task)
    const tasksJson = JSON.stringify(tasks)
    localStorage.removeItem("hoge")
    localStorage.setItem("hoge",tasksJson)
    update()
    inputTask.value = ""
})

const update = () => {
    while(taskListContainer.firstChild !== null){
        taskListContainer.removeChild(taskListContainer.firstChild)
    }
    tasks = JSON.parse(localStorage.getItem("hoge"))
    if(tasks === null){
        tasks = []
    }
    for(let i = 0; i < tasks.length; i++){
        const task = tasks[i]
        const taskscontainer = document.createElement("div")
        taskscontainer.id = task.id
        const taskp = document.createElement("p")
        taskp.textContent = task.text

        const remove = document.createElement("input")
        remove.type = "button"
        remove.value = "削除"
        remove.addEventListener("click", () => {
            localStorage.removeItem("hoge")
            if(tasks[i]!==null){
                tasks.splice(i,1)
                const tasksJson = JSON.stringify(tasks)
                localStorage.setItem("hoge",tasksJson)
                update()
            }
        })
        taskscontainer.appendChild(taskp)
        taskscontainer.appendChild(remove)
        taskListContainer.appendChild(taskscontainer)
    }
}

update()
