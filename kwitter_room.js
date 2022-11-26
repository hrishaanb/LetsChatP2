//Firebase links
var firebaseConfig = {
    apiKey: "AIzaSyCmO4o2NVoseagvgpvTmTG7YuFuXzgdDSc",
    authDomain: "lets-chat-43146.firebaseapp.com",
    projectId: "lets-chat-43146",
    storageBucket: "lets-chat-43146.appspot.com",
    messagingSenderId: "424536627566",
    appId: "1:424536627566:web:8ae8eca999f7644b97097f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();



//Code

room_name = document.getElementById("room_name").value;

function addRoom () {
    localStorage.setItem("room_name", room_name);
}