module.exports = {
    viewUsers: (req, res) => {
        let query;
	  if(!req.user) {
	res.redirect('/login');
	return;
	}
	else{
		
	if( req.params.type === "user")
        {
		query = "select * from user where usertype='user'";
        	db.query(query, (err, result) => {
            		if (err) {
return                		console.log(err);
            		}
			res.render('viewUsers.ejs', {
                	title: 'Welcome to LearnHub | View Users'
                	,users: result
            		});
        	});
	}
	else if(req.user.usertype === "user" && req.params.type === "course")
        {
                query = "SELECT * FROM course WHERE courseID IN (select courseID from enrolled where userID="+req.user.userID+");";
       	 	db.query(query, (err, result) => {
            		if (err) {
                	return	console.log(err);
            			}
			res.render('viewCourses.ejs', {
                	title: 'Welcome to LearnHub | View Courses'
                	,users: result
            		});
        	});
        }
	else if(req.params.type === "course")
        {
                query = "select * from course";
       	 	db.query(query, (err, result) => {
            		if (err) {
                	return	console.log(err);
            			}
			res.render('viewCourses.ejs', {
                	title: 'Welcome to LearnHub | View Courses'
                	,users: result
            		});
        	});
        }
	else if(req.params.type === "assn")
        {
                query = "select * from assignment";
       	 	db.query(query, (err, result) => {
            		if (err) {
                	return	console.log(err);
            			}
			res.render('viewAssns.ejs', {
                	title: 'Welcome to LearnHub | View Assignment'
                	,users: result
            		});
        	});
        }
	else if(req.params.type === "enroll" || typeof req.params.type == 'undefined')
        {
		let courseID, year, semester;
		if(typeof req.body.course === 'undefined' || typeof req.body.year === 'undefined' ||typeof req.body.semester === 'undefined')
			{
				courseName="CS 2310";
				year=2019;
				semester="Fall";
			}
		else
			{
				courseName=req.body.course.toString();
				year=req.body.year;
				semester=req.body.semester.toString();
			}
		let query1="select * from course;select u.name,u.email,e.enrollmentID from user u,enrolled e,course c where c.courseName=?  and c.year=? and c.semester=? and u.userID=e.userID and c.courseID=e.courseID";
        	db.query(query1,[courseName,year, semester], (err, result) => {
            		if (err) {
                	return	console.log(err);
            		}
			res.render('viewEnrolled.ejs', {
                	title: 'Welcome to LearnHub | View Enrolled'
                	,users: result[1],
			               courses: result[0]
           	 	});
        	});
        }
	}

    },
};
