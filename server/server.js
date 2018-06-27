const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const bcrypt = require('bcrypt');

let password = 'myPassword';

let salt = bcrypt.genSaltSync(12);

let hashedPassword = bcrypt.hashSync(password, salt);

console.log(hashedPassword);

let compare = bcrypt.compareSync('myFakeone', hashedPassword);

console.log(compare);

app.get('/', (req, res) => {
    res.send('welcome!');
});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
});