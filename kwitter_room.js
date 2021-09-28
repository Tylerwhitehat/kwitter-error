
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCo0WlaYBfYG7fS7-XUHHES2fvyZeWtcFA",
      authDomain: "kwitter-db992.firebaseapp.com",
      databaseURL: "https://kwitter-db992-default-rtdb.firebaseio.com",
      projectId: "kwitter-db992",
      storageBucket: "kwitter-db992.appspot.com",
      messagingSenderId: "725265776311",
      appId: "1:725265776311:web:2dff64ab0b327447b51732"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 

    user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
 });

localStorage.setItem("room_name",   room_name);

window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log("room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}
