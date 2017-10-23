var pass1="stag";

//Listener for text in at least the name field to prevent empty form submissions
$(document).ready(function(){
    $("#formSubmit").attr("disabled", "true");
    $("#firstName").blur(function(){
        if ($(this).val() != "") {
            $("#formSubmit").removeAttr("disabled");
        } else {
            $("#formSubmit").attr("disabled", "true");        
        }
    });
    $("#success-alert").hide();
});


//submitForm() runs when user clicks on the "Submit" button
function submitForm(){
	//Takes the values of each input, puts them in an array 
	var fname = document.getElementById('firstName').value;
	var lname = document.getElementById('lastName').value;
	var email = document.getElementById('email').value;
	var major = document.getElementById('major').value;
    var gpa = document.getElementById('gpa').value;
	var year = document.getElementById('gradYear').value;
	var track = document.getElementById('track').value;
    var date = getTimeStamp();

	
	//The form will reset the values without resetting the page
    var form = document.getElementById("StudentAdd");
	form.reset();

    $("#success-alert").alert();
    $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
        $("#success-alert").slideUp(500);
    });   
    document.getElementById("firstName").focus();

    $("#formSubmit").attr("disabled", "true");
	return false;
}

function getTimeStamp() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return  h + ":" + m + ":" + s;
}