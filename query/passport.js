var LocalStrategy   = require('passport-local').Strategy;
var mysql = require('mysql');

module.exports = {
    local: (passport) => {
        passport.serializeUser(function(user,done){
        done(null,user);
        });

        passport.deserializeUser(function(user,done){
                done(null,user);
        });

passport.use('local', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true, // allows us to pass back the entire request to the callback
	userProperty: 'currentUser'
    },
    function(req, email, password, done) { 
	let query;
	query="SELECT * FROM user WHERE email = '" + email + "'";
         db.query(query,function(err,result){
                        if (err){
				console.log("Failed\n\n");
                		return done(err);
				}
                         if(!result.length)
				{
				console.log("Result length :" + result.length);
				req.flash("error", "test");
                		return done(null, false);
				}


            if (!( result[0].password == password))
                return done(null, false);

            return done(null, result[0]);

                });



    }));

}};
