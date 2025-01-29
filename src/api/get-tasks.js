const getAllTasks = async (SERVER_URL) => {
  try {
    const response = await fetch(SERVER_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error('Can not get tasks from server!');
    return err;
  }
};

module.exports = { getAllTasks };
