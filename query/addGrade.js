module.exports = {
    addGrade: (req, res) => {
 if(!req.user) {
        res.redirect('/login');
        } else {
                if( req.user.name.usertype==="user") {
                        res.redirect('/');
                }
		else {


        db.query("select * from enrolled e, assignment a where enrollmentID='"+req.params.ID+"' and e.courseID=a.courseID;", (err, result) => {
            if (err) {
                res.redirect("/");
               return  console.log(err);
            }
        res.render('addGrade.ejs', {
                title: 'Welcome to LearnHub | Add a grade',
                assns: result,
		ID: req.params.ID
            });
        });
		}
        }


    },
};

