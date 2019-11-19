module.exports = {
    addAssn: (req, res) => {
 if(!req.user) {
	res.redirect('/login');
	} else { 
        	if( req.user.name.usertype==="user") { 
                	res.redirect('/');
        	} 
		else{

        db.query(`select * from course;`, (err, result) => {
            if (err) {
                res.redirect("/");
                return console.log(err);
            }
        res.render('addAssn.ejs', {
                title: 'Welcome to LearnHub | Add an Assignment',
                courses: result
            });
        });

		} 
        }  
    },
};

