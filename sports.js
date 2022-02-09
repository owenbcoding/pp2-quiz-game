const question = document.getElementById('question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.getElementById('progressiontText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

//initialized variables
let currentQuestion = {}
let acceptingAnswers = true
let score = 0 
let questionCounter = 0 
let availableQuestions = {}