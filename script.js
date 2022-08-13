const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.getElementById('question-display')

const questions = [
    {
        title: 'Question 1',
        image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        options: ['FAUX', 'FOX'],
        correct: 1
    },
    {
        title: 'Question 2',
        image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        options: ['BARE', 'BEAR'],
        correct: 1
    },
    {
        title: 'Question 3',
        image: 'https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2N0b3B1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
        options: ['OCTOPUS', 'OPTUHPUS'],
        correct: 0
    },
    {
        title: 'Question 4',
        image: 'https://images.unsplash.com/photo-1518796745738-41048802f99a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFiYml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        options: ['RABITT', 'RABBIT'],
        correct: 1
    },
    {
        title: 'Question 5',
        image: 'https://images.unsplash.com/photo-1581852017103-68ac65514cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlcGhhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
        options: ['ELEPHANT', 'EPHALENT'],
        correct: 0
    }
]

let score = 0
let clicked = []

scoreDisplay.textContent = score

function populateQuestions() {
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = '⍰  ' + question.title
        questionBox.append(logoDisplay)
         
        const hintImage = document.createElement('img')
        hintImage.src = question.image
        questionBox.append(hintImage)


        const answerButtons = document.createElement('div')
        answerButtons.classList.add('answer-buttons')
        questionBox.append(answerButtons)

        question.options.forEach((option, optionIndex) => {
            const answerButton = document.createElement('button')
            answerButton.classList.add('answer-button')
            answerButton.textContent = option

            answerButton.addEventListener('click', () => checkAnswer(questionBox, answerButton, option, optionIndex, question.correct))

            answerButtons.append(answerButton)
        })

        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')
        questionBox.append(answerDisplay)

        questionDisplay.append(questionBox)
    })
}

populateQuestions()

function checkAnswer(questionBox, answerButton, option, optionIndex, correctAnswer) {
    console.log('option', option)
    console.log(optionIndex)

    if(optionIndex === correctAnswer){
        score++
        scoreDisplay.textContent = score
        addResult(questionBox, 'Correct!', 'correct')
    } else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, 'Incorrect!', 'incorrect')
    }
    clicked.push(option)
    answerButton.disabled = clicked.includes(option)
}

function addResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer-display')
    answerDisplay.classList.remove('incorrect')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
}