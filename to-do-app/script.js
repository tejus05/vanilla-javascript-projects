const inputField = document.querySelector('.input');
inputField.focus();
const addButton = document.querySelector('.button');
const taskContainer = document.querySelector('.task-container');

let i = 0;

function addToDo() {
  i++;
  const value = inputField.value;
  const task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `<p class="para"><i class="fa-regular fa-square icon"></i> ${value} <i class="fa-regular fa-circle-xmark"></i></p>`;
  taskContainer.appendChild(task);

  function updateTodo() {
    const icon = task.querySelector('.icon');
    const para = task.querySelector('.para');
    if (icon.classList.contains('fa-square')) {
      icon.classList.add('fa-square-check');
      icon.classList.remove('fa-square');
      para.classList.add('active');
    }
    else {
      icon.classList.remove('fa-square-check');
      icon.classList.add('fa-square');
      para.classList.remove('active');
    }
  }
  function removeTodo() {
    task.remove();
  }


  task.querySelector('.icon').addEventListener('click', updateTodo);

  task.querySelector('.fa-circle-xmark').addEventListener('click', removeTodo);
}


addButton.addEventListener('click', () => {
  if (inputField.value.trim() == '') {
    inputField.value = '';
    inputField.focus();
  }
  else {
    if (i < 10) {
      addToDo();
      inputField.value = '';
      inputField.focus();
    }
    else {
      alert('Maximum 10 tasks!!');
    }
  }
});

inputField.addEventListener('keydown', (x) => {
  if (x.key == 'Enter') {
    if (inputField.value.trim() == '') {
      inputField.value = '';
      inputField.focus();
    }
    else {
      if (i < 10) {
        addToDo();
        inputField.value = '';
        inputField.focus();
      }
      else {
        alert('Maximum 10 tasks!!');
      }
    }
  }
})