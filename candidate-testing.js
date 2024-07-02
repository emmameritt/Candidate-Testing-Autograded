const input = require('readline-sync');

let candidateName ="";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"; 
let candidateAnswer = ""; 
let questions = ["Who was the first American woman in space? ", 
"True or false: 5 kilometer == 5000 meters? ", 
"(5 + 3)/2 * 10 = ? ", 
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
"What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"]; 
let candidateAnswers = [];

function askForName() {
  candidateName = input.question('What is your name?');
  }


function askQuestions() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  };
return candidateAnswers; }


function gradeQuiz(candidateAnswers){
// let result = `q1 ${correctAnswers[0]} ${candidateAnswers[0]} 
//   q2 ${correctAnswers[1]} ${candidateAnswers[1]} 
//   q3 ${correctAnswers[2]} ${candidateAnswers[2]} 
//   q4 ${correctAnswers[3]} ${candidateAnswers[3]} 
//   q5 ${correctAnswers[4]} ${candidateAnswers[4]} `;
// console.log(result);
  
  




  let grade = 0;  //TODO 3.2 use this variable to calculate the candidates score.
  for (let i = 0; i < candidateAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
     grade = grade+20;
  } 
  };
  console.log(`Overall Grade ${grade}% (${grade/20} of ${questions.length})`);
  if (grade <= 79) {
   console.log("Status: FAILED") 
  } else {
    console.log("Status: PASSED")
  }
  


  return grade;

}


function runProgram() {
  askForName();
  console.log("Hello, " + candidateName + "!");;
  askQuestions();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};