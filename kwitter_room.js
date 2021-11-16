const firebaseConfig = {
    apiKey: "AIzaSyDeNv4-CBjQhfbXoesAKFYswI2gSZH0_tw",
    authDomain: "kwitter-3d8cf.firebaseapp.com",
    databaseURL: "https://kwitter-3d8cf-default-rtdb.firebaseio.com",
    projectId: "kwitter-3d8cf",
    storageBucket: "kwitter-3d8cf.appspot.com",
    messagingSenderId: "294895587171",
    appId: "1:294895587171:web:945744ce35f47d6ab70d56"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
function addRoom()
      {
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
          });
          localStorage.setItem("room_name",room_name);

          window.location="kwitter_page.html";
      }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    onsole.log("Room Name-"+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><br>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}