const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(_dirname, '..', 'public');
const port = process.env.PORT || 3001;

app.get(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});