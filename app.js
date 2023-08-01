const express = require('express');
const axios = require('axios');
const app = express();
const port = 5002;

app.use(express.static('public'));

app.get('/studentinfo', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5001/studentinfo');
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch student info' });
  }
});

app.get('/markinfo', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5001/markinfo');
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch mark info' });
  }
});

app.listen(port, () => {
  console.log(`Web application running on port ${port}`);
});
