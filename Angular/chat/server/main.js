const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const chat = [];

app.get('/', (req, res) => {

    res.send(chat);
});

app.post('/', (req, res) => {
    const id = req.query.id;
    const { username, message } = req.body;
    const obj = { id, message, username };
    chat.push(obj);
    res.send("post");
});

app.delete('/', (req, res) => {
    const id = req.query.id;
    const chatIndex = findIndexById(id);
    chat.splice(chatIndex, 1);
    res.send("deleted");
});

app.put('/', (req, res) => {
    res.send();
});

function findIndexById(id) {
    return chat.findIndex(item => item.id === id);
}
app.listen(8000);