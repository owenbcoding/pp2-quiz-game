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

//Setup questions Arry
let questions = {
    sports: [
        {
            question: 'Sports question 1',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
        {
            question: 'Sports question 2',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
        {
            question: 'Sports question 3',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
        {
            question: 'Sports question 4',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
    ],
    movies: [
        {
            question: 'movies question 1',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
        {
            question: 'movies question 2',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
        {
            question: 'movies question 3',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
        {
            question: 'movies question 4',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
    ]
}
console.log(questions.sports)

//Defining Constants
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

//Function starts the game when the page has loaded
let startGame = () => {
    questionCounter = 0
    score = 0
    if (game == 'sports'){
       availableQuestions = [...questions.sports]
    } else if (game == 'movies'){
        availableQuestions = [...questions.movies]
    } else {
        availableQuestions = [...questions.litrature]
    }
    getNewQuestion()
}
document.addEventListener('DOMContentLoaded', startGame);

//When A questions is answered gets new question
let getNewQuestion = () => {
    console.log(availableQuestions[0].question);
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        localStorage.setItem('lastGame', "sports")

        return window.location.assign('/end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    console.log(questionIndex);
    currentQuestion = availableQuestions[questionIndex]
    console.log(currentQuestion);
    question.innerText = currentQuestion.question
    console.log(currentQuestion.question);

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

//listens for correct answer
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const slectedAnswer = parseInt(selectedChoice.dataset['number']);
        console.log(slectedAnswer, currentQuestion.answer)

        let classToApply = slectedAnswer == currentQuestion.answer ? 'correct' :
            'incorrect'

        if (classToApply === 'correct') {
            score += SCORE_POINTS
            scoreText.innerText = score
            console.log(score)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})