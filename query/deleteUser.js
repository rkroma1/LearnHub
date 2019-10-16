module.exports = {
    deleteUser: (req, res) => {
	let query;
	if(req.params.type === "user")
        {
	 query = "delete from user where userID="+req.params.ID;
	}
	if(req.params.type === "course")
        {
         query = "delete from course where courseID="+req.params.ID;
        }
	if(req.params.type === "enroll")
        {
         query = "delete from enrolled where enrollmentID="+req.params.ID;
	}

        
	db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
		 res.redirect("/");
        });
    },
};

