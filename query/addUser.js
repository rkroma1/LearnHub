module.exports = {
    addUser: (req, res) => {
        let query = "insert into user(name,email,password) values ('" + req.body.name + "','" + req.body.email +"','"+ req.body.password +"')";

        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    },
};


