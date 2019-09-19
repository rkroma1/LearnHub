module.exports = {
    editUser: (req, res) => {
       let query = "update user set name='" + req.body.userName + "', email='" + req.body.userEmail + "', password='" + req.body.password + "' where userID="+req.params.ID;

        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
	});
	},
};

