const express = require('express');
const app = express();
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


app.listen(5000, () => {
    console.log(`App is running at port 5000`);
});