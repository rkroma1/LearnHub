module.exports = {
    addCourse: (req, res) => {
        let query1 = "select * from user where usertype='user'";
	let query2= "select * from course";
        db.query(`select *  from user where usertype='user'; select * from course;`, (err, result) => {
            if (err) {
                res.redirect("/");
                console.log(err);
            }
        res.render('enroll.ejs', {
                title: 'Welcome to LearnHub | Enroll in a course',
                users: result[0],
		courses: result[1]
            });
        });
    },
};

