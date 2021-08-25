const express = require('express');
const app = express();
const connection = require('./database/config');
const cors = require('cors')
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(__dirname));
app.use(cors());



connection();

const routes = require('./routes/routes');


app.use('/', routes);


app.listen(PORT, () => {
    console.log(`App is running at port 5000`);
});