module.exports = {
    viewUsers: (req, res) => {
        let query = "select * from `user` where usertype='user'"; // query database to get all the users

        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('index.ejs', {
                title: 'Welcome to LearnHub | View Users'
                ,users: result
            });
        });
    },
};
