var host = "http://104.236.36.134:5000"
$(document).ready(function(){
    
    $("#userAdd").click(function() {
        var data = {
            table : "user",
            first_name : $('#firstName').val(),
            last_name : $('#lastName').val(),
            title: "",
            street_address: "",
            city : "",
            state : "",
            zip : "",
            email : "",
            phone : "",
            age : "",
            gender : ""
        }

        $.ajax({
            url: host+"/api/add",
            data: data,
            contentType: "application/x-www-form-urlencoded",
            type: "POST",
            dataType: "text",
            success: function(response) {
                var json = JSON.parse(response);
                console.log(response);
                    sessionStorage.setItem('userid', json.data.insertId);
                    window.location.href = "user.html";
            },
            error: function(error){
                console.log(error);
            }
        });
      });
});
