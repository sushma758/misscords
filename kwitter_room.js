
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
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome" + user_name + "!"; 

    function addRoom() 
    { 
          room_name = document.getElementById("room_name").value; 
    firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
    localStorage.setItem("room_name", room_name); 
    window.location = "kwitter_page.html"; 
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name) 
{ console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html"; 
} 
function logout() 
{ 
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name"); 
      window.location = "index.html"; 
}