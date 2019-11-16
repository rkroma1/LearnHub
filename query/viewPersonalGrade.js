module.exports = {
    viewPersonalGrade: (req, res) => {
	if(!req.user)
{
	res.redirect('/');
}
else{
        db.query("select u.name,g.grade, g.gradeID from grade g, enrolled e, user u where  u.userID=e.userID and u.userID=" + req.user.userID+ " and g.enrolledID=e.enrollmentID order by e.enrollmentID;select AVG(g.grade) 'avg' from grade g, enrolled e group by g.enrolledID;select a.assignmentName from assignment a, enrolled e where e.enrollmentID IN (SELECT enrolledID FROM grade) and e.courseID=a.courseID order by e.enrollmentID; SELECT AVG(GPA) gpa FROM (SELECT (AVG(g.grade)/100)*4 GPA, g.enrolledID FROM grade g, enrolled e where e.userID=" +  req.user.userID + " and g.enrolledID IN(SELECT enrollmentID from enrolled where userID=" + req.user.userID +" ) group by enrolledID) AS GPA;", (err, result) => {
            if (err) {
                res.redirect("/");
 return                console.log(err);
            }
        res.render('viewUserGrade.ejs', {
                title: 'Welcome to LearnHub |  Grades',
                grades: result[0],
                avg: result[1],
		assignmentName : result[2],
		gpa : result[3]
            });
        });

}
    },
};
