#! /usr/bin/env node
//Importing inquirer or chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

//Print welcome message
console.log(chalk.bold.cyanBright("\n \t\t WELCOME TO WORD COUNTER \n"));
console.log("=".repeat(70));

//prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence"
    }
]);

//Trimming and splitting the sentence into words based on "spaces".
let words = answers.sentence.trim().split(" ");

//Analysis of user input sentence
console.log("=".repeat(70));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(70));
