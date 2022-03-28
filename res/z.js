//make background of the page zieven.jpg
var img = document.createElement("img");
img.src = "res/img/zieven.jpg";
img.style.width = "100%";
img.style.height = "100%";
document.body.appendChild(img);
//make image stretch to fit screen
img.style.position = "absolute";
img.style.top = "0";
img.style.left = "0";
img.style.transform = "scale(1.5)";
//make animation bigger
animation.style.fontSize = "30px";
//make animation in center
animation.style.position = "absolute";
animation.style.top = "50%";
animation.style.left = "50%";
animation.style.transform = "translate(-50%, -50%)";

