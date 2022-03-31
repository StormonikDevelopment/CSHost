//make background purple
document.body.style.backgroundColor = "purple";
//make text white
document.body.style.color = "white";


//make a username and password input
var username = document.createElement("input");
var password = document.createElement("input");
//add username and password to doc
document.body.appendChild(username);
document.body.appendChild(password);
//make username bigger
username.style.fontSize = "30px";
//make password bigger
password.style.fontSize = "30px";
//make username in center
username.style.position = "absolute";
username.style.top = "50%";
username.style.left = "50%";
username.style.transform = "translate(-50%, -50%)";
//make password in center
password.style.position = "absolute";
password.style.top = "65%";
password.style.left = "50%";
password.style.transform = "translate(-50%, -50%)";


//add username label
var usernameLabel = document.createElement("label");
//add text to label
usernameLabel.innerHTML = "Username:";
//add label to doc
document.body.appendChild(usernameLabel);
//make label bigger
usernameLabel.style.fontSize = "30px";
//put label to the right of username
usernameLabel.style.position = "absolute";
usernameLabel.style.top = "50%";
usernameLabel.style.right = "75%";
usernameLabel.style.transform = "translate(-50%, -50%)";
usernameLabel.style.transform = "translate(50%, -50%)";
//make label white
usernameLabel.style.color = "white";

//add password label
var passwordLabel = document.createElement("label");
//add text to label
passwordLabel.innerHTML = "Password:";
//add label to doc
document.body.appendChild(passwordLabel);
//make label bigger
passwordLabel.style.fontSize = "30px";
//put label to the left of password
passwordLabel.style.position = "absolute";
passwordLabel.style.top = "65%";
passwordLabel.style.right = "75%";
passwordLabel.style.transform = "translate(-50%, -50%)";
passwordLabel.style.transform = "translate(50%, -50%)";
//make label white
passwordLabel.style.color = "white";





    
//username required
username.setAttribute("required", "");
//password required
password.setAttribute("required", "");
//username must be at least 6 characters
username.setAttribute("minlength", "6");
//password must be at least 6 characters
password.setAttribute("minlength", "8");
//username must be less than 20 characters
username.setAttribute("maxlength", "20");
//password must be less than 20 characters
password.setAttribute("maxlength", "20");

//create local storage
var storage = window.localStorage;
//save username and password to local storage
storage.setItem("username", username);
storage.setItem("password", password);
//create a button to submit username and password
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
//make the button have a shadow
submit.style.boxShadow = "0px 0px 10px black";
//when button is clicked
submit.addEventListener("click", function(){
   //save what the user put in the username box
    var username = storage.getItem("username");
    //save what the user put in the password box
    var password = storage.getItem("password");
    
    //if username is less than 6 characters
   //if username and password are in local storage
    if(storage.getItem("username") && storage.getItem("password")){
        //alert user that they have signed up
        alert("You have signed up!");
    }

    //send password to console.log
    console.log(password);
    

    
});


