document.addEventListener('DOMContentLoaded', () => {
  // Step 1: Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage when the page loads
  loadTasks(); // Insert this line to load tasks when the page loads

  // Step 2: Define the addTask function
  function addTask(taskText, save = true) {
      // Check if taskText is not empty
      if (taskText === '') {
          alert('Please enter a task.');
          return;
      }

      // Create new list item
      const listItem = document.createElement('li');
      listItem.textContent = taskText;

      // Create remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn'); // Use classList.add to add the class name

      // Assign an onclick event to the remove button that removes the li element from taskList
      removeButton.onclick = () => {
          taskList.removeChild(listItem);
          removeTask(taskText); // Call removeTask when a task is removed
      };

      // Append remove button to list item
      listItem.appendChild(removeButton);

      // Append list item to task list
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = '';

      // Save task to Local Storage if save is true
      if (save) {
          saveTask(taskText); // Call saveTask to save the task to Local Storage
      }
  }

  // Step 3: Save a task to Local Storage
  function saveTask(taskText) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Step 4: Remove a task from Local Storage
  function removeTask(taskText) {
      let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
  }

  // Step 5: Load tasks from Local Storage
  function loadTasks() {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
  }

  // Step 6: Attach event listeners
  addButton.addEventListener('click', () => addTask(taskInput.value.trim()));

  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask(taskInput.value.trim());
      }
  });
});
