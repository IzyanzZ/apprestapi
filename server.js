const express = require('express')
const app = express()
const bodyParser = require('body-parser')


// BodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Console Log (Port Nya 3000)
app.listen(3000, () => {
    console.log(`Server started on 300`);
});

// Setting Routes
const routes = require('./router')
routes(app)