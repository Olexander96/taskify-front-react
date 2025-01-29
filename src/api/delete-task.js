const deleteTask = async (taskId, SERVER_URL) => {
  const taskIdObj = {
    taskId: taskId,
  };

  try {
    const response = await fetch(SERVER_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskIdObj),
    });
    const result = await response.text();
    return result;
  } catch (err) {
    return err;
  }
};

module.exports = { deleteTask };
