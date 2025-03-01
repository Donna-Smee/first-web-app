const express = require('express');
const promClient = require('prom-client');
const app = express();
const PORT = 3000; // put this as variable later maybe


// Simple hello world endpoint
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Web app is running on http://localhost:${PORT}`);
});