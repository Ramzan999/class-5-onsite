#! /usr/bin/env node
import inquirer from "inquirer";
let zakat = 2.5;
let goldValueInTola = 234800;
let goldWeightInTolaReq = 7.5;
let silverValueInTola = 2604;
let silverWeightInTolaReq = 52.2;
let cashValueInCash = 100000;
let CashZakatReq = 1;
let zakatCalculator = await inquirer.prompt([
    {
        name: "calculator",
        message: "select zakat methods to calculate",
        type: "list",
        choices: ["Gold", "Silver", "Cash"]
    }
]);
let condition = true;
while (condition) {
    if (zakatCalculator.calculator === "Gold") {
        var answer = await inquirer.prompt([
            {
                name: "goldWeight",
                message: "Enter gold weight: ",
                type: "number"
            }
        ]);
        let goldWeight = answer.goldWeight;
        if (goldWeight >= goldWeightInTolaReq) {
            let calculatedzakat = (goldWeight * goldValueInTola) * (zakat / 100);
            console.log(`The calcuated value of gold weighing 
        ${goldWeight} tola is ${calculatedzakat}`);
        }
        else {
            console.log("Zakat not applicable");
            // break;
            condition = false;
        }
        ;
    }
    else if (zakatCalculator.calculator === "Silver") {
        var answer = await inquirer.prompt([
            {
                name: "silverWeight",
                message: "Enter silver weight: ",
                type: "number"
            }
        ]);
        let silverWeight = answer.silverWeight;
        if (silverWeight >= silverWeightInTolaReq) {
            let calculatedzakat = (silverWeight * silverValueInTola) * (zakat / 100);
            console.log(`The calcuated value of silver weighing 
        ${silverWeight} tola is ${calculatedzakat}`);
        }
        else {
            console.log("Zakat not applicable");
            // break;
            condition = false;
        }
        ;
    }
    else if (zakatCalculator.calculator === "Cash") {
        var answer = await inquirer.prompt([
            {
                name: "cashWeight",
                message: "Enter cash weight: ",
                type: "number"
            }
        ]);
        let cashWeight = answer.cashWeight;
        if (cashWeight >= CashZakatReq) {
            let calculatedzakat = (cashWeight * cashValueInCash) * (zakat / 100);
            console.log(`The calcuated value of cash 
        at ${cashWeight} Lacs zakat applicable is ${calculatedzakat}`);
        }
        else {
            console.log("Zakat not applicable");
            // break;
            condition = false;
        }
        ;
    }
    ;
}
;
