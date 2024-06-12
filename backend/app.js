const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const { route } = require('./routes/transactions');
require('dotenv').config();

const PORT = process.env.PORT || 3000; 

const app = express(); 

app.use(express.json());
app.use(cors());

readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('Listening to port:', PORT);
    });
};

server();
