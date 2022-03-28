//make background 787.jpg
var img = document.createElement("img");
img.src = "res/img/787.jpg";
img.style.width = "100%";
img.style.height = "100%";
document.body.appendChild(img);
//make image fit screen ratio
img.style.position = "absolute";
img.style.top = "0";
img.style.left = "0";
img.style.transform = "scale(1.5)";




//make animation
var animation = document.createElement("div");
//add animation to doc
document.body.appendChild(animation);
//make animation bigger
animation.style.fontSize = "30px";
//make animation in center
animation.style.position = "absolute";
animation.style.top = "50%";
animation.style.left = "50%";
animation.style.transform = "translate(-50%, -50%)";
//make animation round
animation.style.borderRadius = "50%";
//make animation 200px wide
animation.style.width = "200px";


//make color of home.html background black  
document.body.style.backgroundColor = "black";



//add cursive to page that says "Welcome!" that is at the top of the page
var welcome = document.createElement("h1");
welcome.innerHTML = "Welcome! Please enter your name.";
welcome.style.fontFamily = "cursive";
welcome.style.color = "white";
welcome.style.fontSize = "50px";
welcome.style.position = "absolute";
welcome.style.top = "3%";
welcome.style.left = "50%";
welcome.style.transform = "translate(-50%, -50%)";
document.body.appendChild(welcome);
//discord link is "https://discord.gg/749vwypapJ"



//add a button
var btn = document.createElement("button");
//add text to button
//make text say "Enter Name please"
btn.innerHTML = "Enter Name";
//add button to doc
document.body.appendChild(btn);
//make button bigger
btn.style.fontSize = "30px";
//make button in center
btn.style.position = "absolute";
btn.style.top = "50%";
btn.style.left = "50%";
btn.style.transform = "translate(-50%, -50%)";

//when user clicks button
btn.addEventListener("click", function(){
    //take user to name.html
    window.location.href = "name.html";
});





