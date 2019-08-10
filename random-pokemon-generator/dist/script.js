document.getElementById("fetchBtn").onclick = function(){
  myFunction();
}

function myFunction(){
  
  pokeID = Math.floor(Math.random() * 718) + 1;
  pokeID = pokeID.toString();
  console.log("Poke ID: " + pokeID);
  
  url = 'https://pokeapi.co/api/v2/pokemon/' + pokeID;
  
  fetch(url)
  .then(response => response.json())
  .then(json => otherFunction(json));
}

function otherFunction(json){
  
  console.log(json.types[1].type.name);
  info = "Name: " + json.name + "<br>Type: " + json.types[1].type.name;
  document.getElementById("info").innerHTML = info;
  
  imagesrc = json.sprites.front_default;
  console.log(imagesrc);
  photo = document.getElementById("photo");
  photo.src = imagesrc;
  photo.hidden = false;
}