module.exports = {
    addCourse: (req, res) => {
 if(!req.user) {
        res.redirect('/login');
        } else {
                if( req.user.name.usertype==="user" || req.user.name.usertype==="prof") {
                        res.redirect('/');
                }
		else{


        let query1 = "select * from user where usertype='user'";
	let query2= "select * from course";
        db.query(`select *  from user where usertype='user'; select * from course;`, (err, result) => {
            if (err) {
                res.redirect("/");
                return console.log(err);
            }
        res.render('enroll.ejs', {
                title: 'Welcome to LearnHub | Enroll in a course',
                users: result[0],
		courses: result[1]
            });
        });
		}
        }

    },
};

