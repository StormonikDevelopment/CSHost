//make the page dark green
document.body.style.backgroundColor = "green";





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
//make title cursive
title.style.fontFamily = "cursive";




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
submit.innerHTML = "Enter";
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


//add event listener to button
submit.addEventListener("click", function(){




            //on click the button, see what the user typed in the input box
            var userName = input.value;
            //if the user typed in nothing
            if(userName == ""){
                //alert the user that they need to type in a name
                alert("Please enter a name.");
                //do not delete anything
                return;
            

                //if the user typed in something
            }else{
                


                    
                    //send username to console.log
                    console.log("usr =", userName);


   
                

            }

            //add an text box
            var textBox = document.createElement("input");
            //add text box to doc
            document.body.appendChild(textBox);
            //put text box on the right side of the page
            textBox.style.position = "absolute";
            textBox.style.right = "3%";
            textBox.style.bottom = "3%";
            //make text box
            


            //if the user entered the name "alex"
            if(userName == "alex"){
                //alert 
                alert("you are a bitch");
                //quit the program
                return;
            }

            //if user entered the name "zieven"
            if(userName == "zieven"){
                //take user to zieven.html
                window.location.href = "zieven.html";
                return;


            }


            //if user entered the name "chipper"
            if(userName == "chipper"){
                //take user to rickroll
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
                return;
                

            }


            //if user entered the name "faith"
            if(userName == "faith"){
                //take user to "https://www.youtube.com/watch?v=FAGDuC3LRuI"
                window.location.href = "https://www.youtube.com/watch?v=FAGDuC3LRuI";
                //return
                return;

            }

            
            
            if(userName == "tev"){
                //shwo the user bat.jpg
                window.location.href = "res/img/bat.jpg";
                return;

            }

            

            
        



        //remember name
        //delete everything on page
        document.body.innerHTML = "";

        localStorage.setItem("name", userName);
        //make background of page light blue
        document.body.style.backgroundColor = "black";

        //add a title
        var title = document.createElement("h1");
        //make title "Welcome " + name
        title.innerHTML = "Welcome " + userName+"!";
        //add title to doc
        document.body.appendChild(title);
        //make title bigger
        title.style.fontSize = "90px";
        //make title at the top of the page
        title.style.position = "absolute";
        title.style.top = "3%";
        title.style.left = "50%";
        title.style.transform = "translate(-50%, -50%)";
        //make title white
        title.style.color = "white";
        //put title in center
        title.style.textAlign = "center";
        //make title cursive
        title.style.fontFamily = "cursive";



        //make a paragraph on the right side of the page
        var paragraph = document.createElement("p");
        //make paragraph say "Welcome to Kateo Central! I hope you find everything here that you need!"
        paragraph.innerHTML = "Welcome to Kateo Central! I hope you find everything here that you need!";
        //add paragraph to doc
        document.body.appendChild(paragraph);
        //make paragraph bigger
        paragraph.style.fontSize = "30px";
        //make paragraph
        //make paragraph white
        paragraph.style.color = "white";
        //make paragraph at the bottom of the page
        paragraph.style.position = "absolute";
        paragraph.style.bottom = "3%";
        paragraph.style.left = "50%";
        paragraph.style.transform = "translate(-50%, -50%)";
        //make paragraph center
        paragraph.style.textAlign = "center";




        //make a fancy button
        var button = document.createElement("button");
        //add text to button
        button.innerHTML = "Discord";
        //add button to doc
        document.body.appendChild(button);
        //make button bigger
        button.style.fontSize = "30px";
        //make button at the bottom left of the page
        button.style.position = "absolute";
        button.style.bottom = "3%";
        button.style.left = "3%";

        //make button go to discord
        button.addEventListener("click", function(){
            //say "Discord is old at the moment, Updating soon!"
            alert("Discord is old at the moment, Updating soon!");
        
            //go to discord
            window.location.href = "https://discord.gg/749vwypapJ";
        });


        

        
        
        
        
        








        


}

);



