const express = require('express');
const app = express();

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Define a route to handle GET requests to /api/data
app.get('/api/data', (req, res) => {
  res.json(data);
});

const host = 'localhost';
const port = 8080; // Use any port number you prefer for the API server

// Start the API server
app.listen(port, host, () => {
  
  console.log(`API server running on http://${host}:${port}`);
});
