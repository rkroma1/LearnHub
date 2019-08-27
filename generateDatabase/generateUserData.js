const 	faker = require('faker'),
	mysql = require('mysql'),
	fs=require('fs');

const connection = mysql.createConnection({
	host : 'localhost',
	user : 'userTemp',
	password : 'iR34llyD0NotC4r3',
	database : 'learnHub' 
});

//connect to database
connection.connect(function(err)
{
	if(err)
	{
		console.error('error connecting: ' + err.stack);
		return ;
	}

//create user admin
connection.query('INSERT INTO user (name, email, password, usertype) VALUES (?,?,?,?)',
                        ["admin", faker.internet.email(), "adminpassword", "admin"],
                        function(error,results,fields)
                        {
                                if(error)
                                        console.log(error);
                        })


//create random user
for(let i=0;i<40; i++){
	connection.query('INSERT INTO user (name,email,password) VALUES  (? , ? , ?)', 
			[faker.name.findName(), faker.internet.email(), faker.internet.password()],	
			function(error,results,fields)
			{
				if(error)
					console.log(error);
			})}
});



console.log('done');
