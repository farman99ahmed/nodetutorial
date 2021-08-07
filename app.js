require('dotenv').config()
const config = process.env;

const express = require('express')
const app = express()
const port = config.APP_PORT
const connection = require('./database/config');
app.use(express.json())
app.use(express.urlencoded({extended: false}))
connection();

const routes = require('./routes/routes')

// Start DB Connection

app.use('/', routes);


app.listen(port, () => {
    console.log("App is running at port 3000");
})