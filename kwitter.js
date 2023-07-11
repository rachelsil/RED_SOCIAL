
//1. Definan la función
function addUser() {

//2. Obtengan el nombre de usuario del campo de entrada y guárdenlo dentro de una variable.
  user_name = document.getElementById("user_name").value;

  //3. Luego almacenen el valor de la variable user_name en el almacenamiento local con la clave user_name.   
  localStorage.setItem("user_name", user_name);

   //4. Entonces redirigimos a kwitter_room.html.   
  window.location = "kwitter_room.html";
}