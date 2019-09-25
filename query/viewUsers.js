module.exports = {
    viewUsers: (req, res) => {
        let query;
	if(req.params.type === "user")
        {
		query = "select * from user where usertype='user'"; 
	}
	if(req.params.type === "course")
        {
                query = "select * from course";
        }

        db.query(query, (err, result) => {
            if (err) {
		res.redirect("/");
                console.log(err);
            }
	if(req.params.type === "course")
        {            
	res.render('viewCourses.ejs', {
                title: 'Welcome to LearnHub | View Courses'
                ,users: result
            });
	}
	if(req.params.type === "user")
        {
	 res.render('viewUsers.ejs', {
                title: 'Welcome to LearnHub | View Users'
                ,users: result
            });

	}
        });
    },
};


