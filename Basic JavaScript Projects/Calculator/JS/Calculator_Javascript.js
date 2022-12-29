//Objects keep track of values
const Calculator = {
    //Default display
    Display_Value: "0",
    //Holds the first operand for any expressions
    First_Operand: null,
    //Checks whether or not the second operand has been inputted by the user
    Wait_Second_Operand: false,
    //Holds the operator
    operator: null,
};

//Modifies the values each time a button is clicked on
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;

    //Checks if the Wait_Second_Operand is true and sets Display_Value to the key that was clciked on
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //Overwrites Display-Value if the current value is 0; otherwise it adds onto it

        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

//This function handles decimal points
function Input_Decimal(dot) {
    
    //Ensures accidential clicking of the decimal point doesn't cause bugs in the operation
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        
        //If the Display_Value does not contain a decimal point, a decimal point is added
        Calculator.Display_Value += dot;
    }
}

//This section handles operators
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;


    // When an operator key is pressed, the current number displayed on the screen is converted to a number and then the result is stored in the Calculator.First_Operand if it doesn't already exist
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an operator already exists and if Wait_Second_Operand is true, the operator is updated, and then exits from the function

    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { //checks if an operator already exists
        const Value_Now = First_Operand || 0;
        //If operator exists, property lookup is performed for the operatore in the Perform_Calculation object and the function that matches the operator is executed


        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);

        result = Number(result).toFixed(9);

        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = "0";    
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//Updates the calculator screen with the contents of Display_Value
function Update_Display() {


    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display();
//this section monitors button clicks
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {


    const { target } = event;

    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);        
        Update_Display();
        return
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //ensures that all input from the Calculator screen is cleared by the AC button
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})