function addTask() {
    const taskInput = document.getElementById('add-task');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const todoList = document.getElementById('todo-list');
      const newTask = document.createElement('div');
      newTask.className = 'todo-item';
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      const taskContent = document.createElement('span');
      taskContent.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function() {
        todoList.removeChild(newTask);
      };
  
      newTask.appendChild(checkbox);
      newTask.appendChild(taskContent);
      newTask.appendChild(deleteButton);
  
      todoList.appendChild(newTask);
  
      taskInput.value = '';
    }
  }
  