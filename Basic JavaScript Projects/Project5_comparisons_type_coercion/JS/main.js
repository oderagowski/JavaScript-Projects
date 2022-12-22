var intro = "Today is Thursday, December "; //This is a string

var date_num = 22; //This is a number 

document.write(typeof intro); //Displays the data type of the variable "intro"

document.write(intro + date_num); //type coercion allows concatenation of the variables "intro" a string and "date_num" a number


document.write(date_num / intro); // returns NaN because you can't divide a string

document.write(isNaN(intro)); //returns True because the variable "intro" is a string

document.write(isNaN(date_num)); // returns 'False' because the variable "date_num" is a number

function infinity_number() {
    var a = 5E800;
    document.getElementById("paragraph_1").innerHTML = a;
} // returns "Infinity" because the value of the variable "a" is too large for JavaScript to handle

function neg_infinity_number() {
    var b = -5E800;
    document.getElementById("paragraph_2").innerHTML = b;
} //returns "-Infinity" because the value of the variable "b" is too large for JavaScript to handle and is a negative number


document.write(100 > 75); //displays "True"

document.write(14 < 2); // displays "False"

console.log(10 + 8); //displays the answer in the console

console.log(32 > 50); //displays "False" in the console

document.write(5 == 5); //displays "True" on the webpage

document.write(5 == 4); //displays "False" on the webpage

console.log("apples" === "apples"); //returns "True" because boths values and data types are the same

console.log(5555 === "555"); //returns false because the data types and values are different

console.log(50 === "50"); //returns false because data types are different


console.log("chicken" == "cow"); //returns false because the values are different

console.log(2 > 1 && 5 < 10); // returns "True" because both comparisons are true

console.log(2 < 1 && 5 < 10); //returns "False" because only one of the comparisions is true

console.log(13 > 15 || 1 == 1); //returns true because, even though the first comparison is false, the second one is true

console.log(13 == 15 || 27 < 12); //returns false because both comparisons are false

console.log(5 != 5); //returns false because 5 DOES equal 5

console.log(!(10 > 50)); //returns true because 10 is not greater than 50 
