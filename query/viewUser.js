module.exports = {
    viewUser: (req, res) => {
        let query = "select name,email from `user` where userID="+req.params.ID;

        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('editUser.ejs', {
                users: result,
		ID: req.params.ID
            });
        });
    },
};

