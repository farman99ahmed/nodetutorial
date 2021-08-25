require('dotenv').config();
const config = process.env;

const express = require('express');
const app = express();
const port = config.APP_PORT;
const connection = require('./database/config');
const cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(express.static(__dirname));
app.use(cors());



connection();

const routes = require('./routes/routes');


app.use('/', routes);


app.listen(port, () => {
    console.log(`App is running at port ${port}`);
});