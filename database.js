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
        case "sponsor":
            break;
        case "program":
            break;
        case "volunteering":
            break;
        default:
    }
}

exports.getAll = function(req, res) {
    res.send({ "status": 200, "data": "Not there yet."})
}

exports.update = function(req, res) {
    res.send({ "status": 200, "data": "Not there yet."})    
}
