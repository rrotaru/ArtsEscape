var searchResults = [];
var host = "http://104.236.36.134:5000"
$(document).ready(function(){
    
    $("#searchSubmit").click(function() {
        searchResults = [];
        console.log('search started');

        var searchTerm = $('#searchLastName').val();
        console.log(searchTerm);
        $.ajax({
            url: host+"/api/search",
            data: {"last_name": searchTerm},
            contentType: "application/x-www-form-urlencoded",
            type: "POST",
            dataType: "text",
            success: function(response) {
                var json = JSON.parse(response);
                console.log(response);
                for (var key in json.data) {
                    console.log("a person-->",json.data[key])
                    searchResults.push(json.data[key]);
                }

                for (var i = 0; i < searchResults.length; i++){
                    var d = searchResults[i];
                    $("#searchTableRows").append("<tr><td>"+d.first_name+"</td><td>"+d.last_name+"</td><td>"+d.email+"</td><td>"+d.phone+"</td><td><input type=\"button\" class=\"btn btn-primary\" value=\""+d.id+"\" ></td></tr>");
                }
            },
            error: function(error){
                console.log(error);
            }
        });

        


        

      });


      $('.btn-primary').click(function(){
        sessionStorage.setItem('label', this.value);
        window.location.href = "user.html";
      });

});
