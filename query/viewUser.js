module.exports = {
    viewUser: (req, res) => {
       let query;
	 if( req.params.type === "user")
        {
		query = "select name,email from `user` where userID="+req.params.ID;
	}
	else if(req.params.type === "course")
        {
                query = "select courseName,semester,year from `course` where courseID="+req.params.ID;
        }
  else if(req.params.type === "grade")
        {
                      query ="select grade from grade where gradeID=" + req.params.ID;
        }
else if(req.params.type === "assn")
        {
                      query ="select assignmentName from assignment where assignmentID=" + req.params.ID;
        }


        db.query(query, (err, result) => {
            if (err) {
		res.redirect("/");
return		console.log(err);
            }
	 if(req.params.type === "user")
        {
            res.render('editUser.ejs', {
                users: result,
		ID: req.params.ID
            });
	}
	if(req.params.type === "course")
        {
		res.render('editCourse.ejs',{
			users: result,
			ID: req.params.ID
		});
	}
  if(req.params.type === "grade")
        {
		res.render('editGrade.ejs',{
			users: result,
			ID: req.params.ID
		});
	}
  if(req.params.type === "assn")
        {
		res.render('editAssns.ejs',{
			users: result,
			ID: req.params.ID
		});
	}
        });
    },
};
