const { check, validationResult } = require('express-validator');

const validation = async (req, res, next) => {
    if (req.body.email) {
        await check('email', 'Invalid email format.').isEmail().run(req);
    }

    if (req.body.fullname) {
        await check('fullname', 'Fullname must be atleast 4 characters long.').isLength({
            min: 4
        }).run(req);
    }

    if (req.body.mobile) {
        await check('mobile', 'Mobile should start with 6, 7, 8 or 9 and must be 10 digits long.').isMobilePhone('en-IN').run(req);
    }

    if (req.body.password) {
        await check('password', 'Password should contain 1 uppercase, 1 lowercase, 1 number, 1 symbol and must be atleast 8 characters long.').isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        }).run(req);
    }

    if (req.body.old_password || req.body.new_password) {
        await check(['old_password', 'new_password'], 'Passwords should contain 1 uppercase, 1 lowercase, 1 number, 1 symbol and must be atleast 8 characters long.').isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        }).run(req);
        await check('new_password', 'Old password and new password cannot be same.').not().equals(req.body.old_password).run(req);
    }

    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({
            error: [...new Set(result.array().map(error => error.msg))]
        });
    }

    next();
}

module.exports = validation;