const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Node.js app is running!');
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});