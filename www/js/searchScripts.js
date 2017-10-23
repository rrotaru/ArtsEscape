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
                console.log(response);
                for (var data in response) {
                    searchResults.push(JSON.parse(data));
                }
            },
            error: function(error){
                console.log(error);
            }
        });

        

        for (var i = 0; i < searchResults.length; i++){
            var d = searchResults[i];
            $("#searchTableRows").append("<tr><td>"+d.first_name+"</td><td>"+d.last_name+"</td><td>"+d.email+"</td><td>"+d.phone+"</td><td>"+d.id+"</td></tr>");
        }
        //sessionStorage.setItem('label', 'value')

      });

});
