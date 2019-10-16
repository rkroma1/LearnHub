module.exports = {
    addUser: (req, res) => {
	let query;
	if(req.params.type === "user")
	{	
		query = "insert into user(name,email,password,usertype) values ('" + req.body.name + "','" + req.body.email +"','"+ req.body.password +"','"+ req.body.type +"')";
	}
	if(req.params.type === "grade")
	{	console.log(req.params);	
		query = "insert into grade(grade,enrolledID) values ('" + req.body.grade +"','"+ req.body.ID +"')";
	}
	if(req.params.type === "assn")
	{	
		query = "insert into assignment(courseID,assignmentName) values ('" + req.body.course +"','"+ req.body.name +"')";
	}
	if(req.params.type === "course")
	{
		let s = req.body.name;
		s=s.replace(/ /g,'');
		query="insert into course(courseName,year,semester,instructorID) values ('" + s + "','" + req.body.year +"','"+ req.body.semester +"','"+ req.body.prof +"')";	
	}
	if(req.params.type === "enroll")
	{
		query="insert into enrolled(userID,courseID) values ('" + req.body.user + "','" + req.body.course +"')";	
	}
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/enroll');
        });
    },
};


