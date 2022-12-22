function addition_Function() {
    var addition = 10 + 5; //does basic addition
    document.getElementById("Math").innerHTML = "10 + 5 = " + addition; //returns result to the webpage
}

function subtraction_Function() {
    var subtraction = 10 - 5; //does basic subtraction
    document.getElementById("Math2").innerHTML = "10 - 5 = " + subtraction; //returns result to the webpage
}

function multiplication_Function() {
    var multiplication = 10 * 5; //does basic multiplication
    document.getElementById("Math3").innerHTML = "10 * 5 = " + multiplication; //returns result to the webpage
}

function division_Function() {
    var division = 10 / 5; //does basic division
    document.getElementById("Math4").innerHTML = "10 / 5 = " + division; //returns result to the webpage
}

function multiple_Operators() {
    var multi_math = (10 / 2) + 5 * 100 - (20 / 4); // calculates the result using multiple operates
    document.getElementById("Math5").innerHTML = "10 divided by 2, plus 5 multiplied by 10, minus 20 divided by 4 = " + multi_math; //returns result to the webpage
}

function modulus_Function() {
    var modulus_Math = 10 % 4; // divides 10 by 4 and calculates the remainder
    document.getElementById("Math6").innerHTML = "When you divide 10 by 4, the remainder is: " + modulus_Math; //the result of the remainder is returned to the webpage
}

function negation_Operator() {
    var neg_op = 100; //returns the negative form of the number assigned to the variable
    document.getElementById("Math7").innerHTML = -neg_op; //returns result to the webpage

}

function increment_Function() {
    var incr = 10;
    incr++; //increases the value by 1
    document.getElementById("Math8").innerHTML = "When 10 is incremented by 1, the result is: " + incr; //returns result to the webpage
}

function decrement_Function() {
    var decr = 10;
    decr--; //decreases the value by 1
    document.getElementById("Math9").innerHTML = "When 10 is decremented by 1, the result is: " + decr; //returns result to the webpage
}

function random_number() {
    ran_num = (Math.random() * 100); // chooses a random number between 0 and 1, which is then multiplied by 100 in order to choose a number between 0 and 100
    document.getElementById("Math10").innerHTML = ran_num; // returns result to the webpage
}

function math_object_round() {
    pi_round = Math.round(Math.PI); //The Math method "round" will round the math property "PI" to the nearest integer 
    document.getElementById("Math11").innerHTML = pi_round; //returns result to the webpage
    }
