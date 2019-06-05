const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const chat = [];

app.get('/', (req, res) => {
    res.json(chat);
});

app.post('/', (req, res) => {
    const id = req.query.id;
    const { username, message } = req.body;
    const obj = { id, message, username };
    chat.push(obj);
    responseJson(res, "ok");
});

app.delete('/', (req, res) => {
    const id = req.query.id;
    const chatIndex = findIndexById(id);
    chat.splice(chatIndex, 1);
    responseJson(res, "ok");
});

app.put('/', (req, res) => {
    const id = req.query.id;
    const message = req.body.message;
    const chatIndex = findIndexById(id);
    chat[chatIndex].message = message;
    responseJson(res, "ok");
});

function findIndexById(id) {
    return chat.findIndex(item => item.id === id);
}
function responseJson(response, result) {
    response.json({
        result
    });
}
app.listen(8000);