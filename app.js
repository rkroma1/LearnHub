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

global.db = db;

app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client


//User routes
app.get("/user/add",  function(req,res){res.render('addUser.ejs')});

//Course routes
app.get("/course/add",  function(req,res){res.render('addCourse.ejs')});

//Grade routes
app.get("/grade/add",  function(req,res){res.render('addGrade.ejs')});

//Enroll routes
app.get("/enroll/add",  function(req,res){res.render('enroll.ejs')});

//User+Course routes
app.get("/", function(req,res){res.redirect("/user")});
app.get("/:type/edit/:ID", viewUser);
app.get("/:type", viewUsers);
app.delete("/:type/delete/:ID", deleteUser);
app.post("/:type/add", addUser);
app.put("/:type/edit/:ID", editUser);

//404 route
app.get('*', function(req,res){
res.redirect("/");
});

app.listen(port,function(){
console.log("Listening on port...");
});

