const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, Node.js App is Running!');
});

app.get('/health', (req, res) => {
    res.send({ status: 'UP' });
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
