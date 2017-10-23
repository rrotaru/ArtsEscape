var host = "http://104.236.36.134:5000"
var userid = sessionStorage.getItem('userid');
$(document).ready(function(){
    
    
        $.ajax({
            url: host+"/api/getall",
            data: '{"userid": "'+userid+'"}',
            contentType: "application/x-www-form-urlencoded",
            type: "POST",
            dataType: "text",
            success: function(repsonse) {
                console.log(repsonse);
            },
            error: function(error){
                console.log(error);
            }
        });


});