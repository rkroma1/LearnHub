module.exports = {
    editUser: (req, res) => {
	let query="";
   if(req.params.type === "user")
        {
	    query = "update user set name='" + req.body.userName + "', email='" + req.body.userEmail + "', password='" + req.body.password + "' where userID="+req.params.ID;
	}
	if(req.params.type === "course")
        {
		console.log("update course set courseName='" + req.body.courseName + "', year=" + req.body.year + ", semester='" + req.body.semester + "' where courseID="+req.params.ID);
            query = "update course set courseName='" + req.body.courseName + "', year=" + req.body.year + ", semester='" + req.body.semester + "' where courseID="+req.params.ID;
        }
  if(req.params.type === "grade")
        {
      		console.log("update grade set courseName='" + req.body);
                  query = "select 1";
        }
        db.query(query, (err, result) => {
            if (err) {
		res.redirect("/");
                console.log(err);
            }
            res.redirect('back');
	});
	},
};
