let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer1": "Robbie Williams",
        "answer2": "Prince Charles",
        "answer3": "Tim Berners-Lee",
        "answer4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Wie viele Weihnachtsbäume werden in Deutschland pro Jahr verkauft?",
        "answer1": "1 Million",
        "answer2": "3 Millionen",
        "answer3": "10 Millionen",
        "answer4": "30 Millionen",
        "right_answer": 4
    },
    {
        "question": "Wie viele Liter Bier werden in Deutschland pro Kopf jährlich getrunken?",
        "answer1": "10 Liter",
        "answer2": "100 Liter",
        "answer3": "1000 Liter",
        "answer4": "10000 Liter",
        "right_answer": 2
    },
    {
        "question": "Wie lang ist der Begattungsapparat der 15 cm langen Bananenschnecke?",
        "answer1": "2 cm",
        "answer2": "8 cm",
        "answer3": "20 cm",
        "answer4": "80 cm",
        "right_answer": 4
    },
    {
        "question": "Wie viele Einkerbungen hat ein Golfball?",
        "answer1": "33",
        "answer2": "36",
        "answer3": "333",
        "answer4": "336",
        "right_answer": 4
    },
    {
        "question": "Wie viele Einkerbungen hat ein Golfball?",
        "answer1": "33",
        "answer2": "36",
        "answer3": "333",
        "answer4": "336",
        "right_answer": 4
    }

];

let currentQuestion = 2;

function init(){
       document.getElementById('counter').innerHTML=questions.length;
       showQuestion();
}

function showQuestion(){
let question = questions[currentQuestion];
document.getElementById('questionText').innerHTML = question['question'];
document.getElementById('answer1').innerHTML = question['answer1'];
document.getElementById('answer2').innerHTML = question['answer2'];
document.getElementById('answer3').innerHTML = question['answer3'];
document.getElementById('answer4').innerHTML = question['answer4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    console.log('selected answer is ', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('right answer is ', question['right_answer']);
    console.log('selected Question Number ', selectedQuestionNumber);
    if (selectedQuestionNumber == question['right_answer']) {
        console.log('geil!!!');        
    }
    else {
        console.log('fail'); 

    }
// if (selection === questions[currentQuestion] === [right_answer]) {
//     console.log('right answer ', selection);
    // document.getElementById(selection).classList.add("showgreen");
    
// }
// else
// {
    // document.getElementById(`likeicon-red${index}`).classList.add("showred");
// }
}