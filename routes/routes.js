require('dotenv').config();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authentication');
const validate = require('../middleware/validation');

router.post('/register', async (req, res) => {
    try {
        const { fullname, mobile, email, password } = req.body;

        if (!(fullname && mobile && email && password)){
            res.status(400).json({error: "All inputs are required."});
        }
        if (await User.findOne({ email })) {
            res.status(400).json({error: "This user already exists."})
        }
        const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT))
        const encrypted_password = await bcrypt.hash(password, salt)

        const user = await User.create({
            _id: uuid.v4(),
            username,
            fullname,
            mobile,
            email,
            password: encrypted_password
        });

        res.status(201).json(
            {
                message: "User created successfully",
                user
            }
        );

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)){
            res.status(400).json({
                error: "Email and password is required."
            })
        }

        else {
            const user = await User.findOne({ email });

            if (user && (await bcrypt.compare(password, user.password))) {
                const token = jwt.sign({
                    _id: user._id,
                    email
                },
                process.env.APP_KEY, {
                    expiresIn: "1h",
                }
            );
            res.status(200).json({
                email,
                token
            });
            }

            else {
                res.status(400).json({
                    error: "Email or password is incorrect"
                });
            }
        }
    }

    catch (error) {
        console.log(error);
        res.status(400).json({
            error: error.message
        });
    }
});

router.post('/hello', [validate, authenticate], async (req, res) => {
    res.status(200).json({
        message: "Validation passed"
    })
});

module.exports = router;