const express = require('express');
const app = express();

app.get('/backend', (req, res) => {
    res.send("Working fine.");
})

app.listen(3300, () => {
    console.log("Server is running at port 3300");
})