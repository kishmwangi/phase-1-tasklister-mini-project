document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = documephase-1-tasklister-mini-projectnt.querySelector('form');

  //submit even listenner to newTaskForm

  newTaskForm.addEventListener('submit' (e) => {
    e.preventDefault();


    const newToDo = e.target.querySelector('#new-task-description').value

    //pass in newToDo variable 

    buildToDo(newToDo);

    newTaskForm.reset();

  })
});

 //when user submits, we pass in the targeted input into buildToDo function

function buildToDo(newToDo){
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  taskLi.textContent = newToDo;
  taskLi.appendChild(deleteButton);
  document.querySelector('#tasks').appendChild(taskLi);
  deleteButton.addEventListener('click', handleDelete);
}

 function handleDelete(e){
  e.target.parentNode.remove();
}
