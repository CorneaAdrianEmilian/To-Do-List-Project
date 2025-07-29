
document.addEventListener("DOMContentLoaded", function()
{
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


let tasksList = document.querySelector(".tasksList");

  tasks.forEach(task => {
    
    let taskContainer = document.createElement("li");

    let taskName = document.createElement("div");
    taskName.textContent= task.name;
    if(task.done)
      {
        taskName.classList.add('completedTask');
      } 

    let buttonsContainer =  document.createElement("div");
    buttonsContainer.classList.add('taskButtonsContainer')

    let completeBtn= document.createElement("button");
    completeBtn.textContent="✓";
    completeBtn.classList.add('completeBtn')

    let deleteBtn= document.createElement("button");
    deleteBtn.textContent="✕";
    deleteBtn.classList.add('deleteBtn')


    buttonsContainer.append(completeBtn);
    buttonsContainer.append(deleteBtn);


    taskContainer.append(taskName);
    taskContainer.append(buttonsContainer);

            
    taskContainer.classList.add("task");
    tasksList.append(taskContainer);

  });

})

let addButton = document.querySelector(".add_btn");
let userInput = document.querySelector(".user_input");
let tasksList = document.querySelector(".tasksList");
let saveBtn = document.querySelector(".save_tasks");

saveBtn.addEventListener("click", 
  function ()
  {

    let tasks = []

    document.querySelectorAll(".task").forEach(task =>
    {
      const name = task.querySelector('div').textContent;
      const done = task.querySelector('div').classList.contains('completedTask');
      tasks.push({name, done});
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }
)


addButton.addEventListener("click", ()=>
  {
    if(userInput.value)
      {
        let taskContainer = document.createElement("li");

        let taskName = document.createElement("div");
        taskName.textContent= userInput.value;
        
        let buttonsContainer=  document.createElement("div");
        buttonsContainer.classList.add('taskButtonsContainer')

        let completeBtn= document.createElement("button");
        completeBtn.textContent="✓";
        completeBtn.classList.add('completeBtn')

        let deleteBtn= document.createElement("button");
        deleteBtn.textContent="✕";
        deleteBtn.classList.add('deleteBtn')


        buttonsContainer.append(completeBtn);
        buttonsContainer.append(deleteBtn);


        taskContainer.append(taskName);
        taskContainer.append(buttonsContainer);

        
        taskContainer.classList.add("task");
        tasksList.append(taskContainer);
        userInput.value='';
      }
  })

  tasksList.addEventListener("click", function(e)
  {

    //console.log(e);
    if(e.target.classList.contains('completeBtn'))
      {
        e.target.parentElement.previousSibling.classList.toggle('completedTask');

      }else if(e.target.classList.contains('deleteBtn'))
        {

          e.target.parentElement.parentElement.remove();
        }
  })