document.addEventListener('DOMContentLoaded', () => {
  // Step 2: Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 3: Define the addTask function
  function addTask() {
      const taskText = taskInput.value.trim(); // Retrieve and trim the input value

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
      removeButton.classList.add('remove-btn');

      // Remove task on button click
      removeButton.onclick = () => {
          taskList.removeChild(listItem);
      };

      // Append remove button to list item
      listItem.appendChild(removeButton);

      // Append list item to task list
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = '';
  }

  // Step 4: Attach event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
          addTask();
      }
  });
});
