const updateTask = async (taskId, newStatus, SERVER_URL) => {
  const taskIdObj = {
    taskId: taskId,
    status: newStatus,
  };

  try {
    const response = await fetch(SERVER_URL, {
      method: 'PATCH',
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

module.exports = { updateTask };
