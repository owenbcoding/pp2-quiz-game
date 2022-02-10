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
            question: 'What sport is described as the beautiful game?',
            choice1: 'Basketball',
            choice2: 'Football',
            choice3: 'Rugby',
            choice4: 'Hocky',
            answer: 2,
        },
        {
            question: ' How long is the total distance of a marathon?',
            choice1: '16.2 miles',
            choice2: '26.2 miles',
            choice3: '10.2 miles',
            choice4: '5.2 miles',
            answer: 2,
        },
        {
            question: 'How many gold medals has Usain Bolt won?',
            choice1: '4',
            choice2: '8',
            choice3: '12',
            choice4: '7',
            answer: 2,
        },
        {
            question: 'At which Olympics did Kelly Holmes win two gold medals?',
            choice1: '2000',
            choice2: '2004',
            choice3: '2002',
            choice4: '2001',
            answer: 2,
        },
    ],
    movies: [
        {
            question: 'In which movie does iron man die in?',
            choice1: 'Anvgers Asemble',
            choice2: 'Agevengers End Game',
            choice3: 'Age of ultron',
            choice4: 'Iron Man 3',
            answer: 2,
        },
        {
            question: 'What is the name of Harry potters owl?',
            choice1: 'Bob',
            choice2: 'Hedwick',
            choice3: 'Gerald',
            choice4: 'Henry',
            answer: 2,
        },
        {
            question: 'How many films have Kate Winslet and Leonardo DiCaprio starred in together?            ',
            choice1: 'Four',
            choice2: 'Two',
            choice3: 'Six',
            choice4: 'Eight',
            answer: 2,
        },
        {
            question: 'What is the name of the kid who plays in the home alone movies?',
            choice1: 'William',
            choice2: 'Kevin',
            choice3: 'Joe',
            choice4: 'Dan',
            answer: 2,
        },
    ],
    litrature: [
        {
            question: 'How many books has J.K. Rowling wrote altogether?',
            choice1: '10',
            choice2: '19',
            choice3: '25',
            choice4: '35',
            answer: 2,
        },
        {
            question: 'litrature question 2',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
        {
            question: 'litrature question 3',
            choice1: '1',
            choice2: '2',
            choice3: '3',
            choice4: '4',
            answer: 2,
        },
        {
            question: 'litrature question 4',
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