const 	express = require('express'),
	bodyParser = require('body-parser'),
	mysql = require('mysql'),
	path = require('path'),
	app = express(),
	methodOverride = require('method-override'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	session     = require('express-session'),
	flash = require('connect-flash'),
	port = 80;

app.use(methodOverride('_method'));
let db =  mysql.createConnection({
                host : 'localhost',
                user : 'userTemp',
                password : 'iR34llyD0NotC4r3',
                database : 'learnHub',
		multipleStatements: true
        });


//Handle mysql connection timeouts
setInterval(() => {
    db.query('SELECT 1', (err, rows) => {
        if (err) throw err;
    });
}, 60000);

global.db = db;

app.use(session({
	secret: "dfjdsjfhdjfkdhsjfhdskfjdhsfurefdnv",
        resave: false,
        saveUninitialized: false
}));

app.use(flash());

//Initialize passport
app.use(passport.initialize());
app.use(passport.session());
const {local} = require ('./query/passport');
local(passport);

app.use(function(req,res,next){
        res.locals.currentUser = req.user;
        next();
});

const {viewUsers} = require('./query/viewUsers');
const {editUser} = require('./query/editUser');
const {deleteUser} = require('./query/deleteUser');
const {addUser} = require('./query/addUser');
const {viewUser} = require('./query/viewUser');
const {viewProfs} = require('./query/viewProfs');
const {addCourse} = require('./query/addCourse');
const {addGrade} = require('./query/addGrade');
const {addAssn} = require('./query/addAssn');
const {viewGrade} = require('./query/viewGrade');



app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client


//User routes
app.get("/user/add",  function(req,res){res.render('addUser.ejs')});

//Course routes
app.get("/course/add",  viewProfs);

//Grade routes
app.get("/grade/add/:ID",  addGrade);
app.get("/grade/view/:ID", viewGrade);


//Assn routes
app.get("/assn/add",  addAssn);

//Enroll routes
app.get("/enroll/add",  addCourse);

//Login route
app.get("/login", function(req,res){
	res.render('login.ejs', {message: req.flash('info')});
});
app.post("/login",passport.authenticate('local', {successRedirect: "/", failureRedirect: "/login"}) ,function(req,res){
	currentUser:req.user;
	res.redirect("/");
});

//test

//Logout
app.get("/logout", function(req,res){
        req.logout();
	req.flash('info', 'flash');
	res.redirect("/");
});


//User+Course routes
app.get("/:type/edit/:ID", viewUser);
app.get("/:type", viewUsers);
app.delete("/:type/delete/:ID", deleteUser);
app.post("/:type/add", addUser);
app.post("/enroll",viewUsers);
app.put("/:type/edit/:ID", editUser);
 if(!req.user) {
app.get("/", function(req,res){res.redirect("/login")});
}
else{
	app.get("/", function(req,res){res.redirect("/course")});
}
//404 route
app.get('*', function(req,res){
res.redirect("/");
});

app.listen(port,function(){
console.log("Listening on port...");
});
