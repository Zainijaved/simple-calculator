#! /usr/bin/env node
import inquirer from "inquirer";
const answere = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statement
if (answere.operator === "addition") {
    console.log(answere.firstnumber + answere.secondnumber);
}
else if (answere.operator === "subtraction") {
    console.log(answere.firstnumber - answere.secondnumber);
}
else if (answere.operator === "multiplication") {
    console.log(answere.firstnumber * answere.secondnumber);
}
else if (answere.operator === "division") {
    console.log(answere.firstnumber / answere.secondnumber);
}
else {
    console.log("please select valid operator");
}
