const inputTask = document.querySelector('.new-task');
const addTask = document.querySelector('.add-task');
const tasks = document.querySelector('.tasks');

addNewTask = (inputText) => {
  const li = document.createElement('li');
  li.innerText = inputText;
  tasks.appendChild(li)
  clearInput();
  deleteTask(li);
  saveTask();

}
clearInput = () => {
  inputTask.value = '';
  inputTask.focus();
}
deleteTask = (li) => {
  li.innerText += ' ';
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.setAttribute('class', 'delete') // seta uma classe para o botao
  li.appendChild(deleteButton);
}
function saveTask() {
  const liTarefas = tasks.querySelectorAll('li');
  const listaDeTarefas = [];
  for (let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Delete', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJson = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tasks', tarefasJson);
}

function addSavedTasks () {
  const tasks = localStorage.getItem('tasks');
  const listaDeTarefas = JSON.parse(tasks);

  for (let task of tasks) {
    addTask(task);
  }
}

inputTask.addEventListener('keypress', (ev) => { // Essa funçao faz com a tarefa seja criada ao pressionar a tecla enter, limpa o input 
  if(ev.keyCode === 13){
    if(!inputTask.value) return; 
    addNewTask(inputTask.value);
  }
})
addTask.addEventListener('click', () => {
  if(!inputTask.value) return 
    addNewTask(inputTask.value);
});

document.addEventListener('click', (ev) => {
  const element = ev.target;
  if (element.classList.contains('delete')){
    element.parentElement.remove();
    saveTask();
  }
})