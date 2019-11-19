module.exports = {
    viewGrade: (req, res) => {
        db.query("select u.name,g.grade, g.gradeID from grade g, enrolled e, user u where  u.userID=e.userID and g.enrolledID=e.enrollmentID and e.enrollmentID="+req.params.ID +" order by e.enrollmentID;select AVG(g.grade) 'avg' from grade g, enrolled e group by g.enrolledID="+req.params.ID+";select a.assignmentName from assignment a, enrolled e where e.enrollmentID IN (SELECT enrolledID FROM grade) and e.courseID=a.courseID and e.enrollmentID="+req.params.ID+" order by e.enrollmentID", (err, result) => {
            if (err) {
                res.redirect("/");
            return  console.log(err);
            }
        res.render('viewUserGrade.ejs', {

		title: 'Welcome to LearnHub |  Grades',
                grades: result[0],
                avg: result[1],
		assignmentName : result[2],
		gpa : result[1]
            });
        });
    },
};
