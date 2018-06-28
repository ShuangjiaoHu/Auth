const express = require('express');
const router = express.Router();
const User = require('../db/models/user-model');

router.post('/register', (req, res) => {
    const { email, password, username } = req.body;

    let newUser = new User({
        email,
        password,
        username,
    });

    newUser
        .save()
        .then((user) => {
            if(!user){
                return res.status(400).send();
            }
            return res.status(201).send(user);
        })
        .catch(err=>{
            if(err){
                return res.status(400).send({error:err});
            }
            return res.status(400).send();
        });
});

module.exports = router;