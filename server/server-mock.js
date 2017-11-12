const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT_NUM = 4300;

let SERVER_JSON_RESULT = {
    "results": [
      "Item 1",
      "Item 2",
    ]
};

app.get(`/api/items`, (req, res) => {
    console.log(`[${req.method}] ${req.originalUrl}`);
    return res.send(SERVER_JSON_RESULT);
});

app.listen(PORT_NUM, () => console.log(`start to listening on port ${PORT_NUM}`));