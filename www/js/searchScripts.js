var searchResults = [];

$(document).ready(function(){
    
    $("#searchSubmit").click(function() {
        searchResults = [];
        console.log('search started');

        var searchTerm = $('#searchLastName').text();

        $.ajax({
            url: "/api/search/"+searchTerm,
            type: "GET",
            dataType: "json",
            success: function(data) {
                for (var datam in data) {
                    searchResults.push(JSON.parse(datam));
                }
            }
        });

        console.log(searchResults);

        for (var i = 0; i < searchResults.length; i++){
            var d = searchResults[i];
            $("#searchTableRows").append("<tr><td>"+d.first_name+"</td><td>"+d.last_name+"</td><td>"+d.email+"</td><td>"+d.phone+"</td><td>"+d.id+"</td></tr>");
        }


      });

});
