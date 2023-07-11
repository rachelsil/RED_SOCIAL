// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBnLurd3285lWvXowKeB9vUWjROOMTCLes",
  authDomain: "prueba-clase-8b44b.firebaseapp.com",
  databaseURL: "https://prueba-clase-8b44b-default-rtdb.firebaseio.com",
  projectId: "prueba-clase-8b44b",
  storageBucket: "prueba-clase-8b44b.appspot.com",
  messagingSenderId: "324306567408",
  appId: "1:324306567408:web:93a045474319e561cc8235"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


document.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";



function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location.replace("kwitter_page.html");

}



function getRoom() {
  firebase.database().ref("/").on('value', function (snapshot) 
  {
    document.getElementById("output").innerHTML = "";
     snapshot.forEach(function (childSnapshot) 
     {
      childKey = childSnapshot.key;
      Room_names = childKey;

      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" +
        Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;


    });
  });
}

//Cambiar Get Data por Get Room

getRoom();

function redirectToRoomName(Room_names) {
  console.log(Room_names);
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}

