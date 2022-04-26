const server = require('server');
const { get, post } = server.router;

server(
    { port: 3001, middle: false },
    get('/', ctx => 'Hello 世界'),
    post('/', ctx => {})
);

const express = require('express');
const app = express();
app.get('/', ctx => 'Hello 世界');
app.listen(2000);
