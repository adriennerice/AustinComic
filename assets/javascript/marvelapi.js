//Marvel API callback functionality will execute once the page has fully loaded.
$(document).ready(function()
{
    // The API query to Marvel makes use of a concatenated url, which inludes:
    //1) The authorization URL.
    //2) The timestamp
    //3) The request type along with any filters
    //4) The developer's private API key.
    //5) The developer's public API key.

    var queryURL = "https://gateway.marvel.com/v1/public/creators/30/comics?ts=1&apikey=90b1e5ece9b3a617d39502d3d3e3870d&hash=609a2b36f1ef8abe0a89c228df7370bf";
    var footsy = document.getElementById("footer");
    
    var marvelContainer = $('#createdisplay');

    $.ajax(
      {
        url: queryURL,
        method: "GET"
      })
      .then(function(response) 
      {
        //Standard dump of results of the API call.
        console.log(response);
        //This loop sends the filtered contents of the results to a div on the speakers HTML page.
        for(var c = 0; c < 5; c++)
        {
          $("#createdisplay").append("<br/><hr><strong>"+response.data.results[0].creators.items[c].name+"</strong>'s top 5 Creator projects: (See Map Below) <br/>");
          for(var i = 0; i <5; i++)
          {
            $("<ul>");
            $("#createdisplay").append("<br/><li><strong>"+response.data.results[i].title+"</strong></li><br/>");
          }
        }        
        //Displays the attribution HTML as a sign that the api call succeeded
        footsy.innerHTML = response.attributionHTML;
        
      });
    });
