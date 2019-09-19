const 	express = require('express'),
	bodyParser = require('body-parser'),
	mysql = require('mysql'),
	path = require('path'),
	app = express(),
	methodOverride = require('method-override'),
	port = 80;

app.use(methodOverride('_method'));

const {viewUsers} = require('./query/viewUsers');
const {editUser} = require('./query/editUser');
const {deleteUser} = require('./query/deleteUser');
const {addUser} = require('./query/addUser');
const {viewUser} = require('./query/viewUser');

const db =  mysql.createConnection({
                host : 'localhost',
                user : 'userTemp',
                password : 'iR34llyD0NotC4r3',
                database : 'learnHub'
        });
/*
function connect() {
     db =  mysql.createConnection({
        	host : 'localhost',
        	user : 'userTemp',
        	password : 'iR34llyD0NotC4r3',
        	database : 'learnHub'
	});


db.connect((err) => {
    if (err) {
        console.log(err);
	setTimeout(connect, 2000);
	
    }
    console.log('Connected to database');
});

//handle timeouts
db.on('error', function(err){
	console.log('db error', err);
	if(err.code === 'PROTOCOL_CONNECTION_LOST')
		connect();
	else
		throw err;
});

}
*/

global.db = db;

app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

app.get("/", viewUsers);
app.get("/:ID/user/edit", viewUser);
app.delete("/:ID/user/delete", deleteUser);
app.post("/user/add", addUser);
app.get("/user/add",  function(req,res){res.render('addUser.ejs')});
app.put("/user/edit/:ID", editUser);

app.listen(port,function(){
console.log("Listening on port...");
});

