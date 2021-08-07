const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticate = (req, res, next) => {
    try {
        const token = req.header('x-access-token');
        if (!token) {
            return res.status(403).json({
                error: "Access denied. Token is required."
            })
        } else {
            const decoded = jwt.verify(token, process.env.APP_KEY);
            req.user = decoded;
            next();
        }
    } catch (error) {
        res.status(401).json({
            error: error.message
        });
    }
}

module.exports = authenticate;