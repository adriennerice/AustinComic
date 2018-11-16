  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAw4D_2T0j2tJoD0f9CHVi6Rw4Zai3y3fg",
    authDomain: "austincomic-311e9.firebaseapp.com",
    databaseURL: "https://austincomic-311e9.firebaseio.com",
    projectId: "austincomic-311e9",
    storageBucket: "austincomic-311e9.appspot.com",
    messagingSenderId: "820617852675"
  };

  var myConfig = config;

firebase.initializeApp(myConfig);

var database = firebase.database();


$("#submit").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var firstName = $("#firstName").val().trim();
    var email = $("#email").val().trim();
    var zipCode = $("#zipCode").val().trim();
  

    var signUp = {
      firstName: firstName,
      email: email,
      zipCode: zipCode
    };
  
    // Uploads employee data to the database
    database.ref().push(signUp);
  
    // Logs everything to console
    console.log(signUp.firstName);
    console.log(signUp.email);
    console.log(signUp.zipCode);
  
  
    // Clears all of the text-boxes
    $("#firstName").val("");
    $("#email").val("");
    $("#zipCode").val("");

    $(".feedback").css("visibility","visible");
  });
  
  // Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var firstName = childSnapshot.val().firstName;
    var email = childSnapshot.val().email;
    var zipCode = childSnapshot.val().zipCode;
    
  
    // Sign-up Info
    console.log(firstName);
    console.log(email);
    console.log(zipCode);

  
  });

  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//YELP
var businessIDs = [
"wArcCMVnrl_tc9MULW-0CQ",
"sH3UsolKjik01u0HlQ9_0Q",
"F1odkZWmcXGylij8HjRq6Q",
"WCqcYtJ4rUxA4bIzjOfzqg"
]

var businessNames = [
    "Heist Brewery",
    "Three Amigos Mexican Grill & Cantina",
    "VBGB",
    "Vapiano"
]
var j = 0;

for(var i = 0;i <businessIDs.length;i++){

    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/"+businessIDs[i]+"/reviews"

    $.ajax({
       url: myurl,
       headers: {
        'Authorization':'Bearer -luV8OwRPCzkvYevJh-qAVjTvRRmgvr1bQ2Ixiw5zFEt5BECSPvXHvwLg8rGoNAz-n5ErCARrMsGop6b-bwgnHcrutfn4cUnJDHqGUzIIoBafkWas21n78VAvw7nW3Yx',
    },
       method: 'GET',
       dataType: 'json',
      
    }).then(function(result) {
      
       
       
        var card = $("<div>").addClass("card-body");
        var busName = $("<h3>").text(businessNames[j]);
        var newList = $("<ul>");
        var rating = $("<li>").text("Rating: "+ result.reviews[0].rating);
        var text = $("<li>").text("Review: "+ result.reviews[0].text);
        var url = $("<li>").html("Url: <a href="+ result.reviews[0].url+ "> Go to Yelp Review</a>");
    
        $(newList).append(rating, text, url);

        $(card).append(busName, newList);

       if(j < 2) {
           $(".left").append(card)
       }
       else{
           $(".right").append(card)
       }

        console.log(result);
        console.log(businessNames[j-1]);
        console.log(result.reviews[0].rating);
        console.log(result.reviews[0].text);
        console.log(result.reviews[0].url);

        j = j + 1;
    }

    );  

}



 
  

