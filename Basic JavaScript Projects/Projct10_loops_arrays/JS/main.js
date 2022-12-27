// While Loop

function while_loop() {
    var countdown = "";
    var X = 100;
    while (X >= 1) {
        countdown += "<br>" + X;
        X--;
    } //loop will repeat until the variable 'X' equals 1
    document.getElementById("while").innerHTML = countdown;
}


// // Array

function my_pizza() {
    var Pizza_Toppings = [];
    Pizza_Toppings[0] = "pepperoni";
    Pizza_Toppings[1] = "mushrooms";
    Pizza_Toppings[2] = "onions";
    Pizza_Toppings[3] = "black olives";
    Pizza_Toppings[4] = "bacon";
    Pizza_Toppings[5] = "pineapple"; //assigning values to the array
    document.getElementById("array").innerHTML = "The best toppings on a pizza are " + Pizza_Toppings[0] + " and " + Pizza_Toppings[1] + ". The worst pizza topping is " + Pizza_Toppings[5] + ".";
}

// // For Loop

var toppings = ["Pepperoni", "Mushrooms", "Onions", "Black olives", "Pineapple", "Bacon"];
var content = "";
var Y;

function forLoop() {
    for (Y = 0; Y < toppings.length; Y++) {
        if (Y === 4) { continue; } // will skip the iteration when it gets to the element that has an index value of 4 "pineapple"
        content += toppings[Y] + " should be on a pizza." + "<br>";
    }
    document.getElementById("fLoop").innerHTML = content;
}




// // Let Keyword


let dinosaur = {
    name: "Tyrannosaurus rex",
    length: "40 feet",
    height: "12 feet",
    weight: "5.5 tons",
    information: function () {
        return "The " + this.name + " was " + this.length + " long and " + this.height + " tall, and weighed " + this.weight;
    } //object created using let with 4 properties and 1 method
};
document.getElementById("let").innerHTML = dinosaur.information();