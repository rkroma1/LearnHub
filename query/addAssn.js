module.exports = {
    addAssn: (req, res) => {
        db.query(`select * from course;`, (err, result) => {
            if (err) {
                res.redirect("/");
                console.log(err);
            }
        res.render('addAssn.ejs', {
                title: 'Welcome to LearnHub | Add an Assignment',
                courses: result
            });
        });
    },
};

