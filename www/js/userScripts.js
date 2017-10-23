var host = "http://104.236.36.134:5000"
var userid = sessionStorage.getItem('userid');
var donationResults = [];
var sponsorshipResults = [];
var programResults = [];
var volunteeringResults = [];

$(document).ready(function(){
    
    
        $.ajax({
            url: host+"/api/getall",
            data: {"userid":userid},
            contentType: "application/x-www-form-urlencoded",
            type: "POST",
            dataType: "text",
            success: function(response) {
                var json = JSON.parse(response);
                console.log(json);
               
                $('#prefix').value(json.user.prefix);
                $('#firstname').value(json.user.first_name);
                $('#lastname').value(json.user.last_name);
                $('#address').value(json.user.address);
                $('#city').value(json.user.city);
                $('#state').value(json.user.state);
                $('#zip').value(json.user.zip);
                $('#email').value(json.user.email);
                $('#phone').value(json.user.phone);
                $('#age').value(json.user.age);
                $('#gender').value(json.user.gender);

                for (var key in json.donation) {
                    console.log("a donation-->",json.donation[key])
                    donationResults.push(json.donation[key]);
                }

                for (var key in json.sponsorship) {
                    console.log("a sponsorship-->",json.sponsorship[key])
                    sponsorshipResults.push(json.sponsorship[key]);
                }

                for (var key in json.program) {
                    console.log("a program-->",json.program[key])
                    programResults.push(json.program[key]);
                }

                for (var key in json.volunteering) {
                    console.log("a volunteering-->",json.volunteering[key])
                    volunteeringResults.push(json.volunteering[key]);
                }

                for (var i = 0; i < donationResults.length; i++){
                    var d = donationResults[i];
                    $("#searchTableRows").append("<tr><td>"+d.date+"</td><td>"+d.typeEvent+"</td><td>"+d.amount+"</td></tr>");
                }
                for (var i = 0; i < sponsorshipResults.length; i++){
                    var s = sponsorshipResults[i];
                    $("#searchTableRows").append("<tr><td>"+s.date+"</td><td>"+s.typeEvent+"</td><td>"+s.amount+"</td></tr>");
                }
                for (var i = 0; i < programResults.length; i++){
                    var p = programResults[i];
                    $("#searchTableRows").append("<tr><td>"+p.name+"</td><td>"+p.type+"</td><td>"+p.date+"</td></tr>");
                }
                for (var i = 0; i < volunteeringResults.length; i++){
                    var v = volunteeringResults[i];
                    $("#searchTableRows").append("<tr><td>"+v.date+"</td><td>"+v.hours+"</td></tr>");
                }


            },
            error: function(error){
                console.log(error);
            }
        });


});