const 	express = require('express'),
	bodyParser = require('body-parser'),
	mysql = require('mysql'),
	path = require('path'),
	app = express(),
	port = 80;

const {getUsers} = require('./query/index');


const db =  mysql.createConnection({
        host : 'localhost',
        user : 'userTemp',
        password : 'iR34llyD0NotC4r3',
        database : 'learnHub'
});


db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

app.get("/", getUsers);


app.listen(port,function(){
console.log("Listening on port...");
});

