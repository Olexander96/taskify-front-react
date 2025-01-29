const addNewTask = async (taskTitle, taskText, status, SERVER_URL) => {
  // created_date value
  const createdDate = new Date().toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
  });

  // create task obj
  const newTask = {
    task_id: Date.now().toString(),
    title: taskTitle,
    text: taskText,
    status: status,
    completed: false,
    created_date: createdDate,
  };

  try {
    const response = await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error('Can not send new task to server!');
    return err;
  }
};

module.exports = { addNewTask };
