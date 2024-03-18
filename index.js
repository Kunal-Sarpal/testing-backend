const express = require('express');
const app = express();
const PORT = 3000;

// Route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Route for about page
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Route for contact page
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Route for 404 (Not Found) error
app.use((req, res) => {
  res.status(404).send('404 Page Not Found');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
