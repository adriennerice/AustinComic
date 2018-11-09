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
  
    alert("Thank you for signing-up!");
  
    // Clears all of the text-boxes
    $("#firstName").val("");
    $("#email").val("");
    $("zipCode").val("");
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