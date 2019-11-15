module.exports = {
    viewGrade: (req, res) => {
        db.query(`select u.name,g.grade, g.gradeID from grade g, enrolled e, user u where u.userID=e.userID and g.enrolledID=e.enrollmentID and e.enrollmentID=?;`,req.params.ID, (err, result) => {
            if (err) {
                res.redirect("/");
                console.log(err);
            }
        res.render('viewUserGrade.ejs', {
                title: 'Welcome to LearnHub |  Grades',
                grades: result,
            });
        });
    },
};
