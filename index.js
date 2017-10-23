#!/usr/bin/env nodejs
var express    = require("express");
//var login = require('./login');
var database = require('./database');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static('www'));
var router = express.Router();
// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});
//route to handle user registration
//router.post('/register',login.register);
//router.post('/login',login.login);

router.post('/search',database.search);
router.post('/add',database.add);
router.post('/getall',database.getAll);
router.post('/update',database.update);

app.use('/api', router);
app.listen(5000, '0.0.0.0');
