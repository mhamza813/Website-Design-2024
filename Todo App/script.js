function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
  
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
      listItem.remove();
    };
  
    listItem.appendChild(deleteBtn);
    listItem.onclick = function() {
      listItem.classList.toggle('completed');
    };
  
    document.getElementById('todo-list').appendChild(listItem);
    input.value = '';
  }
  