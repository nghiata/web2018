const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const user = {
        name: 'nghiata',
        hobby: 'jogging'
    };
    res.send(user);
});
app.listen(3000);