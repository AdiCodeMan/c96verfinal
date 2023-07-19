var firebaseConfig = {
  apiKey: "AIzaSyCXMbDIiWoNpw95jpQqMCPbsPuOBcgKWNo",
  authDomain: "kwitter-fe5c6.firebaseapp.com",
  databaseURL: "https://kwitter-fe5c6-default-rtdb.firebaseio.com",
  projectId: "kwitter-fe5c6",
  storageBucket: "kwitter-fe5c6.appspot.com",
  messagingSenderId: "91215990572",
  appId: "1:91215990572:web:6405d98fac194e888f2689"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

 function addRoom()
 {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  redirectToRoomName(room_name);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'> #"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{   console.log("Hello");
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
    
}

function labelInitialize()
{
  user_name=localStorage.getItem("user_name");
  document.getElementById("welcome").innerHTML = "Welcome "+ user_name;
}


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}
        