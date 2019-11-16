module.exports = {
    editUser: (req, res) => {
 if(!req.user) {
        res.redirect('/login');
        } else {
                if( req.user.usertype==="user") {
                        res.redirect('/');
                }

	else {

	let query="";
  if(req.params.type === "grade")
        {
                  query = "update grade set grade=" + req.body.grade + " where gradeID="+req.params.ID;
        }
	if(req.params.type === "assn")
        {
                  query = "update assignment set assignmentName='" + req.body.assnName + "' where assignmentID="+req.params.ID;
        }
   	if(req.user.usertype==="prof")
	{
		 db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
                return console.log(err);
            }
            res.redirect('/');
        });

		return;
	}
	if(req.params.type === "user")
        {
	    query = "update user set name='" + req.body.userName + "', email='" + req.body.userEmail + "', password='" + req.body.password + "' where userID="+req.params.ID;
	}
	if(req.params.type === "course")
        {
            query = "update course set courseName='" + req.body.courseName + "', year=" + req.body.year + ", semester='" + req.body.semester + "' where courseID="+req.params.ID;
        }
        db.query(query, (err, result) => {
            if (err) {
		res.redirect('/');
                return console.log(err);
            }
            res.redirect('/');
	});

	}
        }


	},
};
