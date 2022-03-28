//make page black
document.body.style.backgroundColor = "black";

//add a title
var title = document.createElement("h1");
//make title "Enter Your Name"
title.innerHTML = "Enter Your Name";
//add title to doc
document.body.appendChild(title);
//make title bigger
title.style.fontSize = "50px";
//make title at the top of the page
title.style.position = "absolute";
title.style.top = "3%";
title.style.left = "50%";
title.style.transform = "translate(-50%, -50%)";
//make title white
title.style.color = "white";



//add input box
var input = document.createElement("input");
//add input box to doc
document.body.appendChild(input);
//make input box bigger
input.style.fontSize = "30px";
//make input box in center
input.style.position = "absolute";
input.style.top = "50%";
input.style.left = "50%";
input.style.transform = "translate(-50%, -50%)";

//make button to submit name
var submit = document.createElement("button");
//add text to button
submit.innerHTML = "Submit";
//add button to doc
document.body.appendChild(submit);
//make button bigger
submit.style.fontSize = "30px";
//make button on the bottom of the page
submit.style.position = "absolute";
submit.style.bottom = "3%";
submit.style.left = "50%";
submit.style.transform = "translate(-50%, -50%)";

//add event listener to button
submit.addEventListener("click", function(){
    //submit takes text from input box
    var name = input.value;
    //if name is "Alex"
    if(name == "alex"){
        //say "u a bitch"
        alert("u a bitch");
       //return to home.html
         window.location.href = "home.html";

         //if name is not "Alex"
    }else{
        //say "Hello " + name
        alert("Hello " + name);
        // take to discord
        window.location.href = "https://discord.gg/749vwypapJ";
        


        


}
});



