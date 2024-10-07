// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// Define a simple route
app.get('/', (req, res) => {
res.send('Hello World! Welcome to your CI/CD Node.js Application!');
});
// Start the server
app.listen(port, () => {
console.log(`App is running on http://localhost:${port}`);
});
