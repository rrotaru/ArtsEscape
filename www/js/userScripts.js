var host = "http://104.236.36.134:5000"
var userid = sessionStorage.getItem('userid');
var donationResults = [];
var sponsorshipResults = [];
var programResults = [];
var volunteeringResults = [];

$(document).ready(function(){
    
    
        $.ajax({
            url: host+"/api/getall",
            data: {"user_id":userid},
            contentType: "application/x-www-form-urlencoded",
            type: "POST",
            dataType: "text",
            success: function(response) {
                var parsed = JSON.parse(response);
                var json = parsed.data;
                console.log(json);
               
                $('#prefix').val(json.user.title);
                $('#firstName').val(json.user.first_name);
                $('#lastName').val(json.user.last_name);
                $('#address').val(json.user.street_address);
                $('#city').val(json.user.city);
                $('#state').val(json.user.state);
                $('#zip').val(json.user.zip);
                $('#email').val(json.user.email);
                $('#phone').val(json.user.phone);
                $('#age').val(json.user.age);
                $('#gender').val(json.user.gender);

                for (var key in json.donations) {
                    console.log("a donation-->",json.donations[key])
                    donationResults.push(json.donations[key]);
                }

                for (var key in json.sponsorships) {
                    console.log("a sponsorship-->",json.sponsorships[key])
                    sponsorshipResults.push(json.sponsorships[key]);
                }

                for (var key in json.programs) {
                    console.log("a program-->",json.programs[key])
                    programResults.push(json.programs[key]);
                }

                for (var key in json.volunteerings) {
                    console.log("a volunteering-->",json.volunteerings[key])
                    volunteeringResults.push(json.volunteerings[key]);
                }

                for (var i = 0; i < donationResults.length; i++){
                    var d = donationResults[i];
                    $("#donationTableRows").append("<tr><td>"+new Date(d.date).toLocaleDateString()+"</td><td>"+d.type+"</td><td>"+d.amount+"</td></tr>");
                }
                for (var i = 0; i < sponsorshipResults.length; i++){
                    var s = sponsorshipResults[i];
                    $("#sponsorshipTableRows").append("<tr><td>"+new Date(s.date).toLocaleDateString()+"</td><td>"+s.type+"</td><td>"+s.amount+"</td></tr>");
                }
                for (var i = 0; i < programResults.length; i++){
                    var p = programResults[i];
                    $("#programTableRows").append("<tr><td>"+p.name+"</td><td>"+p.type+"</td><td>"+new Date(p.date).toLocaleDateString()+"</td></tr>");
                }
                for (var i = 0; i < volunteeringResults.length; i++){
                    var v = volunteeringResults[i];
                    $("#volunteeringTableRows").append("<tr><td>"+new Date(v.date).toLocaleDateString()+"</td><td>"+v.hours+"</td></tr>");
                }


            },
            error: function(error){
                console.log(error);
            }
        });


        $("#userUpdate").click(function() {
            var data = { id : sessionStorage.getItem("userid"),
             title : $('#prefix').val(),
             first_name : $('#firstName').val(),
             last_name : $('#lastName').val(),
             street_address : $('#address').val(),
             city : $('#city').val(),
             state : $('#state').val(),
             zip : $('#zip').val(),
             email : $('#email').val(),
             phone : $('#phone').val(),
             age : $('#age').val(),
             gender : $('#gender').val()
            }

            $.ajax({
                url: host+"/api/update",
                data: data,
                contentType: "application/x-www-form-urlencoded",
                type: "POST",
                dataType: "text",
                success: function(response) {
                    console.log(response);
                },
                error: function(error){
                    console.log(error);
                }
        });

    });

<<<<<<< HEAD
        $("#donationSubmit").click(function() {
            var data = {
                table: "donation",
                date: $('donationDate').val(),
                type: $('donationType').val(),
                amount: $('donationAmount').val()
            }

            $.ajax({
                url: host+"/api/add",
                data: data,
                contentType: "application/x-www-form-urlencoded",
                type: "POST",
                dataType: "text",
                success: function(response) {
                    console.log(response);
                },
                error: function(error){
                    console.log(error);
                }
            });
        });

        $("#sponsorshipSubmit").click(function() {
            var data = {
                table: "sponsorship",
                date: $('sponsorshipDate').val(),
                type: $('sponsorshipType').val(),
                amount: $('sponsorshipAmount').val()
            }

            $.ajax({
                url: host+"/api/add",
                data: data,
                contentType: "application/x-www-form-urlencoded",
                type: "POST",
                dataType: "text",
                success: function(response) {
                    console.log(response);
                },
                error: function(error){
                    console.log(error);
                }
            });
        });

        $("#programSubmit").click(function() {
            var data = {
                table: "program",
                date: $('programDate').val(),
                type: $('programType').val(),
                amount: $('programAmount').val()
            }

            $.ajax({
                url: host+"/api/add",
                data: data,
                contentType: "application/x-www-form-urlencoded",
                type: "POST",
                dataType: "text",
                success: function(response) {
                    console.log(response);
                },
                error: function(error){
                    console.log(error);
                }
            });
        });

        $("#volunteeringSubmit").click(function() {
            var data = {
                table: "volunteering",
                date: $('volunteeringDate').val(),
                type: $('volunteeringType').val(),
                amount: $('volunteeringAmount').val()
            }

            $.ajax({
                url: host+"/api/add",
                data: data,
                contentType: "application/x-www-form-urlencoded",
                type: "POST",
                dataType: "text",
                success: function(response) {
                    console.log(response);
                },
                error: function(error){
                    console.log(error);
                }
            });
        });


=======
>>>>>>> Fixed things
});