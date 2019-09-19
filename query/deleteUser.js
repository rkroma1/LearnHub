module.exports = {
    deleteUser: (req, res) => {
        let query = "delete from user where userID="+req.params.ID;
        // execute query
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
		 res.redirect("/");
        });
    },
};

