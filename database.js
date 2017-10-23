var mysql = require('mysql');
var opts = require ('./options');
var connection = mysql.createConnection(opts.db);
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

exports.search = function(req, res) {
    var last_name = req.body.last_name.toUpperCase();
    connection.query('SELECT id, first_name, last_name, email, phone from Users where ? = UPPER(last_name)',last_name, function (error, results, fields) {
        if (error) {
            console.log("error",error);
            res.send({
            "status":400,
            "error": error
            })
        } else {
            console.log('Results', results, fields);
            res.send({
            "status":200,
            "data" : results
                });
        }
    });
};

exports.add = function(req, res) {
    var table = req.body.table;

    switch(table) {
        case "user":
            var userData = {
                "first_name" : req.body.first_name,
                "last_name" : req.body.last_name,
                "title" : req.body.title,
                "street_address" : req.body.street_address,
                "city" : req.body.city,
                "state" : req.body.state,
                "zip" : req.body.zip,
                "email" : req.body.email,
                "phone" : req.body.phone,
                "age" : req.body.age,
                "gender" : req.body.gender
            }

            connection.query("INSERT into Users SET ?", userData ,function(error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(results, fields);
                    res.send({
                        "status": 200,
                        "data": results
                    })
                }
            })
            break;
        case "donation":
            var donationData = {
                "date" : req.body.date,
                "type" : req.body.type,
                "amount" : req.body.amount,
                "user_id" : req.body.user_id,
            }

            connection.query("INSERT into Donations SET ?", donationData ,function(error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(results, fields);
                    res.send({
                        "status": 200,
                        "data": results
                    })
                }
            })
            break;
        case "sponsorship":
            var sponsorData = {
                "date" : req.body.date,
                "type" : req.body.type,
                "amount" : req.body.amount,
                "user_id" : req.body.user_id,
            }

            connection.query("INSERT into Sponsorships SET ?", sponsorData ,function(error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(results, fields);
                    res.send({
                        "status": 200,
                        "data": results
                    })
                }
            })
            break;
        case "program":
            var donationData = {
                "name" : req.body.name,
                "type" : req.body.type,
                "date" : req.body.date,
                "user_id" : req.body.user_id,
            }

            connection.query("INSERT into Programs SET ?", donationData ,function(error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(results, fields);
                    res.send({
                        "status": 200,
                        "data": results
                    })
                }
            })
            break;
        case "volunteering":
            var donationData = {
                "date" : req.body.date,
                "hours" : req.body.hours,
                "user_id" : req.body.user_id,
            }

            connection.query("INSERT into Volunteerings SET ?", donationData ,function(error, results, fields) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(results, fields);
                    res.send({
                        "status": 200,
                        "data": results
                    })
                }
            })
            break;
        default:
    }
}

exports.getAll = function(req, res) {
    var userId = req.body.user_id;
    connection.query("SELECT first_name, last_name, title, street_address, city, state, zip, email, phone, age, gender FROM Users WHERE id = ?; SELECT date, type, amount FROM Donations WHERE user_id = ?; SELECT date, type, amount FROM Sponsorships WHERE user_id = ?; SELECT name, type, date FROM Programs WHERE user_id = ?; SELECT date, hours FROM Volunteerings WHERE user_id = ?", [userId, userId, userId, userId, userId] ,function(error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            console.log(results, fields);
            var response = {donations: [], sponsorships: [], programs: [], volunteering: []};
            response.user = results[0][0];
            response.donations = results[1];
            response.sponsorships = results[2];
            response.programs = results[3];
            response.volunteerings = results[4];
            res.send({
                "status": 200,
                "data": response
            })
        }
    })
}

exports.update = function(req, res) {
    var userData = {
        "id" : req.body.id,
        "first_name" : req.body.first_name,
        "last_name" : req.body.last_name,
        "title" : req.body.title,
        "street_address" : req.body.street_address,
        "city" : req.body.city,
        "state" : req.body.state,
        "zip" : req.body.zip,
        "email" : req.body.email,
        "phone" : req.body.phone,
        "age" : req.body.age,
        "gender" : req.body.gender
    }

    connection.query("UPDATE Users SET ? WHERE id = ?", [userData, id],function(error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            console.log(results, fields);
            res.send({
                "status": 200,
                "data": results
            })
        }
    })}
