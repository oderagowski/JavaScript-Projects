var globalVariable = "This is a global variable"; //This variable will be able to be used anywhere in the program

function local_variable_function() {
    var localVariable = "This is a local variable";
    console.log(localVariable); // This variable will only be able to be used by this function
}

local_variable_function(); //calling the function


function error_Function() {
    console.log(globalVariable + localVariable);
} //Returns an error message because "localVariable" is not part of this function


error_Function(); //calling the function, which will result in an error message

function greeting_by_hour() {
    if (new Date().getHours() < 12) {
        document.getElementById("mor").innerHTML = "Good morning!";
    } //Message will be displayed if the local time is earlier than 12PM
}

function century_function () {
    if (new Date().getFullYear() < 2100) {
        document.getElementById("cent").innerHTML = "It's the 21st century!";
    } // Message will be displayed if the current year is before the year 2100
}

// Else Statement 

function Rent_Function() {
    user_age = document.getElementById("Age").value; //sets the user's input to a variable
    if (user_age >= 25) {
        car_rental = "Congratulations! You can rent a car!";
    } //will display if user is 25 or older
    else {
        car_rental = "You are not old enough to rent a car!";
    } //will display if user is young than 25
    document.getElementById("car").innerHTML = car_rental;    
}

//Else If Statement

function Time_function() {
    var Time = new Date().getHours(); //gets the local time
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is the morning time!";
    }
    else if (Time >=12 == Time <18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
