#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red('Your test grades according to your each subject marks.'));
const markSheet = await inquirer.prompt([
    {
        name: 'Subject',
        type: "list",
        message: "Select Subject?",
        choices: [
            'English',
            'Mathematics',
            'Biology',
            'Chemistry',
            'Physics',
            'Urdu',
            'Pakistan studies',
            'Islamiat'
        ]
    }
]);
//Now select the subject marks and grades for each subject. 
if (markSheet.Subject === 'English') {
    const eng = await inquirer.prompt([
        {
            name: 'engmarks',
            type: 'number',
            message: 'Write how many marks did you got in english outof 100?'
        }
    ]);
    if (eng.engmarks > 90) {
        console.log('You got A+ grade in english test.');
    }
    else if (eng.engmarks > 80) {
        console.log('You got A grade in english test.');
    }
    else if (eng.engmarks > 70) {
        console.log('You got B grade in english test.');
    }
    else if (eng.engmarks > 60) {
        console.log('You got C grade in english test.');
    }
    else if (eng.engmarks > 50) {
        console.log('You got D grade in english test.');
    }
    else {
        console.log('You are fail your marks is less than 50. Better luck next time.');
    }
}
else if (markSheet.Subject === 'Mathematics') {
    const math = await inquirer.prompt([
        {
            name: 'MathMarks',
            type: 'number',
            message: 'Write how many marks did you got in Maths outof 100?'
        }
    ]);
    if (math.MathMarks > 90) {
        console.log('You got A+ grade in math test.');
    }
    else if (math.MathMarks > 80) {
        console.log('You got A grade in math test.');
    }
    else if (math.MathMarks > 70) {
        console.log('You got B grade in math test.');
    }
    else if (math.MathMarks > 60) {
        console.log('You got C grade in math test.');
    }
    else if (math.MathMarks > 50) {
        console.log('You got D grade in math test.');
    }
    else {
        console.log('You are fail your marks is less than 50. Better luck next time.');
    }
}
else if (markSheet.Subject === 'Biology') {
    const bio = await inquirer.prompt([
        {
            name: 'biomarks',
            type: 'number',
            message: 'Write how many marks did you got in biology outof 100?'
        }
    ]);
    if (bio.biomarks > 90) {
        console.log('You got A+ grade in biology test.');
    }
    else if (bio.biomarks > 80) {
        console.log('You got A grade in biology test.');
    }
    else if (bio.biomarks > 70) {
        console.log('You got B grade in biology test.');
    }
    else if (bio.biomarks > 60) {
        console.log('You got C grade in biology test.');
    }
    else if (bio.biomarks > 50) {
        console.log('You got D grade in biology test.');
    }
    else {
        console.log('You are fail your marks is less than 50. Better luck next time.');
    }
}
else if (markSheet.Subject === 'Chemistry') {
    const chem = await inquirer.prompt([
        {
            name: 'chemMarks',
            type: 'number',
            message: 'Write how many marks did you got in chemistry outof 100?'
        }
    ]);
    if (chem.chemMarks > 90) {
        console.log('You got A+ grade in chemistry test.');
    }
    else if (chem.chemMarks > 80) {
        console.log('You got A grade in chemistry test.');
    }
    else if (chem.chemMarks > 70) {
        console.log('You got B grade in chemistry test.');
    }
    else if (chem.chemMarks > 60) {
        console.log('You got C grade in chemistry test.');
    }
    else if (chem.chemMarks > 50) {
        console.log('You got D grade in chemistry test.');
    }
    else {
        console.log('You are fail your marks is less than 50. Better luck next time.');
    }
}
else if (markSheet.Subject === 'Physics') {
    const phy = await inquirer.prompt([
        {
            name: 'phymarks',
            type: 'number',
            message: 'Write how many marks did you got in physics outof 100?'
        }
    ]);
    if (phy.phymarks > 90) {
        console.log('You got A+ grade in physics test.');
    }
    else if (phy.phymarks > 80) {
        console.log('You got A grade in physics test.');
    }
    else if (phy.phymarks > 70) {
        console.log('You got B grade in physics test.');
    }
    else if (phy.phymarks > 60) {
        console.log('You got C grade in physics test.');
    }
    else if (phy.phymarks > 50) {
        console.log('You got D grade in physics test.');
    }
    else {
        console.log('You are fail your marks is less than 50. Better luck next time.');
    }
}
else if (markSheet.Subject === 'Urdu') {
    const urdu = await inquirer.prompt([
        {
            name: 'urduMarks',
            type: 'number',
            message: 'Write how many marks did you got in urdu outof 100?'
        }
    ]);
    if (urdu.urduMarks > 90) {
        console.log('You got A+ grade in urdu test.');
    }
    else if (urdu.urduMarks > 80) {
        console.log('You got A grade in urdu test.');
    }
    else if (urdu.urduMarks > 70) {
        console.log('You got B grade in urdu test.');
    }
    else if (urdu.urduMarks > 60) {
        console.log('You got C grade in urdu test.');
    }
    else if (urdu.urduMarks > 50) {
        console.log('You got D grade in urdu test.');
    }
    else {
        console.log('You are fail your marks is less than 50. Better luck next time.');
    }
}
else if (markSheet.Subject === 'Pakistan studies') {
    const pst = await inquirer.prompt([
        {
            name: 'pstMarks',
            type: 'number',
            message: 'Write how many marks did you got in Pakistan studies outof 100?'
        }
    ]);
    if (pst.pstMarks > 90) {
        console.log('You got A+ grade in PST test.');
    }
    else if (pst.pstMarks > 80) {
        console.log('You got A grade in PST test.');
    }
    else if (pst.pstMarks > 70) {
        console.log('You got B grade in PST test.');
    }
    else if (pst.pstMarks > 60) {
        console.log('You got C grade in PST test.');
    }
    else if (pst.pstMarks > 50) {
        console.log('You got D grade in PST test.');
    }
    else {
        console.log('You are fail your marks is less than 50. Better luck next time.');
    }
}
else if (markSheet.Subject === 'Islamiat') {
    const isl = await inquirer.prompt([
        {
            name: 'islMarks',
            type: 'number',
            message: 'Write how many marks did you got in islamiat outof 100?'
        }
    ]);
    if (isl.islMarks > 90) {
        console.log('You got A+ grade in islamiat test.');
    }
    else if (isl.islMarks > 80) {
        console.log('You got A grade in islamiat test.');
    }
    else if (isl.islMarks > 70) {
        console.log('You got B grade in islamiat test.');
    }
    else if (isl.islMarks > 60) {
        console.log('You got C grade in islamiat test.');
    }
    else if (isl.islMarks > 50) {
        console.log('You got D grade in islamiat test.');
    }
    else {
        console.log('You are fail your marks is less than 50. Better luck next time.');
    }
}
else {
    console.log('You did not attend test you are fail. ');
}



// yes no cammand for total marks 
async function handleYesNocaommand() {
    const answer = await inquirer.prompt([
        {
            name:"Command",
            type:"list",
            message:"Do you want to calculate your marks!",
            choices:['Yes', 'No']
        }
    ]);
    if (answer.Command === "Yes"){
        executefunction()
    } else{
        console.log(chalk.redBright('You dont want to calculate marks of all subject.'))
    }
}
//Now executing the function
async function executefunction() {
    console.log('Now total your each subject marks.')
    const totalMarks = await inquirer.prompt([
    {
        name:"engM",
        type:"number",
        message:"Enter your english marks. "
    },
    {
        name:"mathM",
        type:"number",
        message:"Enter your math marks."
    },
    {
        name:"urduM",
        type:"number",
        message:"Enter your urdu marks."
    },
    {
        name:"bioM",
        type:"number",
        message:"Enter your biology marks."
    },
    {
        name:"chemM",
        type:"number",
        message:"Enter your chemistry marks."
    },
    {
        name:"islM",
        type:"number",
        message:"Enter your islamiat marks."
    },
    {
        name:"pstM",
        type:"number",
        message:'Enter your Pakistan studies marks.'
    }
])
 console.log(chalk.yellowBright('Your total marks of all subject out of 700/'))
 console.log(totalMarks.engM + totalMarks.mathM + totalMarks.urduM 
     + totalMarks.bioM + totalMarks.chemM + totalMarks.islM + totalMarks.pstM
)}
handleYesNocaommand()
