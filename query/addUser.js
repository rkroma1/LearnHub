module.exports = {
    addUser: (req, res) => {
	let query;
	if(req.params.type === "user")
	{	
		query = "insert into user(name,email,password) values ('" + req.body.name + "','" + req.body.email +"','"+ req.body.password +"')";
	}
	if(req.params.type === "course")
	{
		query="insert into course(courseName,year,semester) values ('" + req.body.name + "','" + req.body.year +"','"+ req.body.semester +"')";	
	}
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    },
};


