module.exports = {
    viewProfs: (req, res) => {
        let query = "select * from user where usertype='prof'";

        db.query(query, (err, result) => {
            if (err) {
                res.redirect("/");
return                console.log(err);
            }
        res.render('addCourse.ejs', {
                title: 'Welcome to LearnHub | View Professors'
                ,users: result
            });
        });
    },
};

