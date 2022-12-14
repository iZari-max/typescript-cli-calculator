#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,2000)
    })
}

async function welcome() {
    let title = chalkAnimation.rainbow(`|||     Calculator    |||`);
    await sleep();
    title.stop()
    console.log(chalk.redBright(`     _____________________
    |  _________________  |
    | | JJO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `))
}
await welcome()
async function questions(){
    const answers = await inquirer
    .prompt([
      {
        "type": "list",
        "name": "operator",
        "message": chalk.blueBright(`what operator do you want to perform? \n`),
        "choices": ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
      },
      {
        "type": "number",
        "name": "number1",
        "message": "Enter Number 1: "
      },
      {
        "type": "number",
        "name": "number2",
        "message": "Enter Number 2: "
      }
    ]);
    
        if(answers.operator=="Addition"){
            console.log(chalk.green(`${answers.operator} of ${answers.number1} and ${answers.number2} = ${answers.number1 + answers.number2}`))
        }
        else if(answers.operator=="Subtraction"){
            console.log(chalk.green(`${answers.operator} of ${answers.number1} and ${answers.number2} = ${answers.number1 - answers.number2}`))
        }
        else if(answers.operator=="Multiplication"){
            console.log(chalk.green(`${answers.operator} of ${answers.number1} and ${answers.number2} = ${answers.number1 * answers.number2}`))
        }
        else if(answers.operator=="Division"){
            console.log(chalk.green(`${answers.operator} of ${answers.number1} and ${answers.number2} = ${answers.number1 + answers.number2}`))
        }
        else if(answers.operator=="Modulus"){
            console.log(chalk.green(`${answers.operator} of ${answers.number1} and ${answers.number2} = ${answers.number1 % answers.number2}`))
        }
}

async function again(){
    do{
        await questions();
        var restart  = await inquirer
        .prompt({
            "type": "input",
            "name": "re",
            "message": chalk.redBright(`Do you want to calculate more?  [Y/N] : `)
        })
    }
    while( restart.re =="Y" || restart.re  =="y" || restart.re =="yes" || restart.re  =="YES" );
    
}
again();
