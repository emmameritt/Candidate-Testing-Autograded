const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
 
let candidateName ="";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride"; 
let candidateAnswer = ""; 
// runProgram()

//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;

function askForName() {
candidateName = input.question('What is your name?');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  candidateAnswer = input.question(question);
  console.log(candidateAnswer , correctAnswer);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let result = "";
  if (candidateAnswer === correctAnswer) {
  result = "correct";

   } else {
    result= "incorrect";
  }
  console.log(result); 
  



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello, " + candidateName + "!");;
  askQuestion();
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