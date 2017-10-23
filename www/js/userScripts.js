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
               
                $('#prefix').value(json.user.title);
                $('#firstname').value(json.user.first_name);
                $('#lastname').value(json.user.last_name);
                $('#address').value(json.user.street_address);
                $('#city').value(json.user.city);
                $('#state').value(json.user.state);
                $('#zip').value(json.user.zip);
                $('#email').value(json.user.email);
                $('#phone').value(json.user.phone);
                $('#age').value(json.user.age);
                $('#gender').value(json.user.gender);

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
                    $("#donationTableRows").append("<tr><td>"+d.date+"</td><td>"+d.typeEvent+"</td><td>"+d.amount+"</td></tr>");
                }
                for (var i = 0; i < sponsorshipResults.length; i++){
                    var s = sponsorshipResults[i];
                    $("#sponsorshipTableRows").append("<tr><td>"+s.date+"</td><td>"+s.typeEvent+"</td><td>"+s.amount+"</td></tr>");
                }
                for (var i = 0; i < programResults.length; i++){
                    var p = programResults[i];
                    $("#programTableRows").append("<tr><td>"+p.name+"</td><td>"+p.type+"</td><td>"+p.date+"</td></tr>");
                }
                for (var i = 0; i < volunteeringResults.length; i++){
                    var v = volunteeringResults[i];
                    $("#volunteeringTableRows").append("<tr><td>"+v.date+"</td><td>"+v.hours+"</td></tr>");
                }


            },
            error: function(error){
                console.log(error);
            }
        });


});