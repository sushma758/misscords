
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC5bzAglxPBf7MpxwBhbcY9xhlON2tA4xk",
      authDomain: "kwitter-66a2e.firebaseapp.com",
      databaseURL: "https://kwitter-66a2e-default-rtdb.firebaseio.com",
      projectId: "kwitter-66a2e",
      storageBucket: "kwitter-66a2e.appspot.com",
      messagingSenderId: "34836920681",
      appId: "1:34836920681:web:3227611c3750e8a8c3e5f8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
 var user_name=localStorage.getItem("user_name");
 var room_name=localStorage.getItem("room_name");
 function send() 
 { 
       msg = document.getElementById("msg").value; 
 firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
  document.getElementById("msg").value = ""; 
}