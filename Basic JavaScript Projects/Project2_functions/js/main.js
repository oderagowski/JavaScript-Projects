// FUNCTIONS ASSIGNMENT


function My_First_Function() {
var str = "Your font is now green!"; //changes the text in the button
document.getElementById("Button_Text").innerHTML = str; //Assigning to the button's ID

var font = document.getElementById("my_paragraph"); //Assigning the <p> id to a variable
font.style.color = "green"; //Changes the color of the font in the paragraph
font.style.fontSize = "25px"; //Changes the font size in the paragraph
}

//OPERATOR ASSIGNMENT

function concatFunction() {
    var sentence = "This information "; // This is the first string that will be concatenated
    sentence += "is very important!"; //This string will be concatenated using the += operator 
    document.getElementById("my_paragraph_2").innerHTML = sentence; //Assigning the second <p> id to a variable
}

var ele = document.getElementsByTagName("p");
console.log(ele);