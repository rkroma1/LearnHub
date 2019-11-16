module.exports = {
    avgGrade: (req, res) => {

        db.query("SELECT AVG(grade) FROM grade where enrolledID="+req.params.ID, (err, result) => {
            if (err) {
                res.redirect("/");
		return                console.log(err);
            }
        res.render('addGrade.ejs', {
                title: 'Welcome to LearnHub | Add a grade',
                assns: result,
		ID: req.params.ID
            });
        });
    },
};
