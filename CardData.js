var basicC = require("./BasicCard.js");
var clozeC = require("./ClozeCard.js");
var inquirer = require("inquirer");
var basicQ = require("./BasicQ.js").basicQ;
var clozeQ = require("./ClozeQ.js").ClozeQQ;

var basicA = [];
var clozeA = [];
var current = 0;

for (var i = 0; i < basicQ.length; i++) {

    var tempq = new basicC(basicQ[i].front, basicQ[i].back);
    basicA.push(tempq);
}
console.log(basicA);
for (var i = 0; i < clozeQ.length; i++) {

    var tempq = new clozeC (clozeQ[i].front, clozeQ[i].cloze);
    clozeA.push(tempq);
}

inquirer.prompt([
    {
    name: "choices",
    message: "What type of study quize would you like?",
    type: "list",
    choices: ["Basic", "Cloze"]
}
]).then(function(answer1){
         
         
        if (answer1.choices === "Basic"){
                askQB();

        }
                
                if (answer1.choices === "Cloze"){
                askQC();                   
                }
    
})

function askQB(){
    inquirer.prompt([
        {
        name: "AskQBasic",
        message: basicA[current].front,  
        type: "input",
        }
    ]).then(function(question1){
        if (question1.AskQBasic.toLowerCase() === basicA[current].back.toLowerCase()){
            console.log("Correct");
        }else console.log("Wrong");
    })
   }

function askQC(){
    inquirer.prompt([
        {
        name: "AskQCloze",
        message: clozeA[current].partial,  
        type: "input"
        }
    ]).then(function(question1){
        if (question1.AskQCloze.toLowerCase() === clozeA[current].cloze.toLowerCase()){
            console.log("Correct");
        }else console.log("Wrong");
        
    })
   }
