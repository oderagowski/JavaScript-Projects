// concat() method

function Concat_Practice() {
    var verse1 = "Dashing through the snow, ";
    var verse2 = "In a one-hourse open sleigh, ";
    var verse3 = "O'er the fields we go, ";
    var verse4 = "Laughing all the way ";
    var jingle_bells = verse1.concat(verse2, verse3, verse4,);
    document.getElementById("concat").innerHTML = jingle_bells;
} //concatenates 4 strings and displays them on the webpage

// slice() method

function Slice_Practice() {
    var Rudolph = "Rudolph the Red-Nosed Reindeer had a very shiny nose";
    var shiny_nose = Rudolph.slice(42, 52); //indicates which characters in the string assigned to "Rudolph" will be extracted
    document.getElementById("slice").innerHTML = shiny_nose; // displays the extracted characters when the button is clicked
}

var mc = "merry christmas!!"; // assigning universal variable so I can use in multiple functions

function Upper_Case_Practice() {
    var UC_mc = mc.toUpperCase("UC"); //converts a string to upper case
    document.getElementById("UC").innerHTML = UC_mc;
}

function Search_Practice() {
    var c_pos = mc.search("c"); //searches for the position of the first letter "c" in the string assigned to the variable "mc"
    document.getElementById("search").innerHTML = c_pos;
}

function numberAsAString() {
    var num1 = 8000;
    var num1str = num1.toString(); //concerts a number to a string
    document.getElementById("toostring").innerHTML = num1str;
}



function precision_Method() {
    var pie = Math.PI; //JavaScript Math property
    document.getElementById("precise").innerHTML = pie.toPrecision(6); //displays the first 6 digits of the value of PI
}

function Fixed_Method() {
    var pie = Math.PI;
    document.getElementById("fixed").innerHTML = pie.toFixed(6); //convverts a number to string, and rounds the string to a specified number of decimal places
}

function Type_Of() {
    var num_array = [2, 4, 6, 8, 10];
    document.getElementById("v.o.").innerHTML = num_array.valueOf(); //returns the primitive value of an array
}