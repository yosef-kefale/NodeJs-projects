const express = require('express');
const app = express();

// routes
app.get('/', (re, res) => {
    res.send('Task Manager App')
})

const port = 3000;

app.listen(port, console.log(`Server listenning on port ${port}...`));