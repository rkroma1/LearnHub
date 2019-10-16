module.exports = {
    addGrade: (req, res) => {
        db.query("select * from enrolled e, assignment a where enrollmentID='"+req.params.ID+"' and e.courseID=a.courseID;", (err, result) => {
            if (err) {
                res.redirect("/");
                console.log(err);
            }
        res.render('addGrade.ejs', {
                title: 'Welcome to LearnHub | Add a grade',
                assns: result,
		ID: req.params.ID
            });
        });
    },
};

