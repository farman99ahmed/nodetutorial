const mongoose = require('mongoose');
require('dotenv').config();

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        };
        await mongoose.connect(process.env.MONGO_URI, connectionParams);
        console.log("Connected to DB.");
    } catch (error) {
        console.log("DB connection failed: ", error);
    }
};
