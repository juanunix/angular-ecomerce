const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const prodAndCats = require('./backend/Routes/productAndCat')(router);
const port = process.env.PORT || 3000;
const database = require('./backend/database');

mongoose.Promise = global.Promise;

mongoose.connect(database.uri, {
    useMongoClient: true,
}, (err) => {
    if (err) {
        console.log('not connected ' + err)
    } else {
        console.log('MongoDb connected');
    }
});

app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/productApi', prodAndCats);
app.listen(port, () => {
    console.log('server at 3000...');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"))
})

// lsof -i tcp:3000
// kill -9
// $ git add .
// $ git commit -am "make it better"
// $ git push heroku master

