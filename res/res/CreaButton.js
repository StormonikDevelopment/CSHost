

//make background of page md.jpg
document.body.style.backgroundImage = "url('res/img/md.jpg')";
//create button in doc
var btn = document.createElement("button");
//add text to button
btn.innerHTML = "Enter";
//add button to doc
document.body.appendChild(btn);
//make button bigger
btn.style.fontSize = "30px";
//make button in center 
btn.style.position = "absolute";
btn.style.top = "50%";
btn.style.left = "50%";
btn.style.transform = "translate(-50%, -50%)";
//make button round 
btn.style.borderRadius = "50%";
//make button 200px wide
btn.style.width = "200px";

//add event listener to button
btn.addEventListener("click", function(){
    //go to home.html
    window.location.href = "home.html";
});









