// const question = document.querySelector('#question');
// const choices = Array.from(document.querySelectorAll('.choice-text'));
// const progressText = document.querySelector('#progressText');
// const scoreText = document.querySelector('#score');
// const progressBarFull = document.querySelector('#progressBarFull');

// let currentQuestion = {}
// let acceptAnsweres = true
// let score = 0 
// let questionCounter = 0 
// let availableQuestions = []

// let sports = [
//     {
//           question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, adipisci.',
//           choices: ['opt1', 'opt2', 'opt3', 'opt4'],
//       answer: 4,
//     },
//      {
//           question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, adipisci.',
//           choices: ['opt1', 'opt2', 'opt3', 'opt4'],
//       answer: 4,
//     },
//      {
//           question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, adipisci.',
//           choices: ['opt1', 'opt2', 'opt3', 'opt4'],
//       answer: 4,
//     },
//      {
//           question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, adipisci.',
//           choices: ['opt1', 'opt2', 'opt3', 'opt4'],
//       answer: 4,
//     },
   
// ],

// array, sports: []

// const SCORE_POINTS = 100 
// const MAX_QUESTIONS = 4

// startGame = () => {
//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [...questions]
//     getNewQuestions()
// }

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
//         localStorage.setItem('mostRecentScore',score)

//         return window.location.assign('/end.html')
//     }

//     questionCounter++
//     progressText.innerHTML = `Question ${questionCounter} of ${MAX_QUESTIONS}`
//     //progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) = 100}%`

//     const questionsIndex = Math.floor(Math.random() =availableQuestions.length)
//     currentQuestion = availableQuestions[questionsIndex]
//     question.innerText = currentQuestion.question

//     choices.forEach(choices => {
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion['choice' + number]
//     })

//     availableQuestions.splice(questionsIndex, 1)

//     acceptAnsweres = true
// }

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptAnsweres) return

//         acceptAnsweres = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset['number']

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
//         'incorrect'

//         if(classToApply === 'correct') {
//             incrementScore(SCORE_POINTS)
//         }

//         setTimeout(() => {
//         selectedChoice.parentElement.classList.remove(classToApply)
//         getNewQuestion()

//         }, 1000)
//     })
// })
// console.log(choices);

// incrementScore = num => {
//     score += num
//     scoreText.innerText = score
// }

// startGame()
// console.log("Hello");