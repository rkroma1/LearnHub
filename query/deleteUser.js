module.exports = {
    deleteUser: (req, res) => {
 if(!req.user) {
        res.redirect('/login');
        } else {
                if( req.user.name.usertype==="user" || req.user.name.usertype==="prof") {
                        res.redirect('/');
                }

		else {

        let query;
        if(req.params.type === "user")
        {
         query = "delete from user where userID="+req.params.ID;
        }
        if(req.params.type === "course")
        {
         query = "delete from course where courseID="+req.params.ID;
        }
        if(req.params.type === "assn")
        {
         query = "delete from assignment where assignmentID="+req.params.ID;
        }

        if(req.params.type === "enroll")
        {
         query = "delete from grade where enrolledID="+req.params.ID +";delete from enrolled where enrollmentID="+req.params.ID;
        }
  if(req.params.type === "grade")
        {
         query = "delete from grade where gradeID="+req.params.ID;
        }


        db.query(query, (err, result) => {
            if (err) {
                return console.log(err);
            }
                 res.redirect("/");
        });

		}
        }


    },
};










