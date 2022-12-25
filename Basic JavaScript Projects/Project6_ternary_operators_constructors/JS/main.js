// TERNARY OPERATORS ASSIGNMENT

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age"). value;
    Can_vote = (Age < 18) ? "You are not old enough to":"You can"; //ternary operator
    document.getElementById("Vote").innerHTML = Can_vote + " vote!"; //displays a string based off of the user's input
}


// NEW/THIS ASSIGNMENT

function Dinosaur(Name, Diet, Size, Weight) {
    this.Dinosaur_commonName = Name;
    this.Dinosaur_Diet = Diet;
    this.Dinosaur_Size = Size;
    this.Dinosaur_Weight = Weight;
} //Constructor function

var trex = new Dinosaur("Tyrannosaurus rex", "Carnivore", "40 feet", "5.5 tons"); //New object

console.log(trex); //Testing to make sure data in new object is correct

// RESULTS OF THE CONSTRUCTOR FUNCTION

function dino_Function() {
    document.getElementById("p3").innerHTML = trex.Dinosaur_commonName + " was a " + trex.Dinosaur_Diet + " that was " + trex.Dinosaur_Size + " tall and weighed " + trex.Dinosaur_Weight; //displays values of the new "Dinosaur" object
}





// NESTED FUNCTION ASSIGNMENT

function subtraction_Function() { //function #1  
    document.getElementById("Math").innerHTML = Minus();
    function Minus() { //function #2 
        var beg = 100; //set a variable for the "Minus" function
        function Minus_one() { beg -= 1; } //Function #3
        Minus_one();
        return beg; //outputs the result of 100 - 1
    }
}





















// NEW/THIS PRACTICE

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Oliver = new Vehicle("Honda", "Accord", 2022, "Silver");


function car_Function() {
    document.getElementById("KAC").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function car2_Function() {
    document.getElementById("NAT").innerHTML = "Oliver drives a " + Oliver.Vehicle_Year + " " + Oliver.Vehicle_Color + " -colored " + Oliver.Vehicle_Make + " " +  Oliver.Vehicle_Model;
}

// var finally = "Finally!"
// console.log(finally);




























// function Ride_Function() {
//     var Height, Can_ride;
//     Height = document.getElementById("Height"). value;
//     Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
//     document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
// }