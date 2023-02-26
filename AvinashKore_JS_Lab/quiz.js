function Question(questionText, choices, correctAnswer) {
  this.questionText = questionText
  this.choices = choices
  this.correctAnswer = correctAnswer
}

function Quiz(questions) {
  this.questions = questions
  this.score = 0
  this.questionIndex = 0
}

Quiz.prototype.GetQuestionByIndex = function () {
  return this.questions[this.questionIndex]
}

Quiz.prototype.CheckAnswer = function (userChoice) {
  if (userChoice === this.GetQuestionByIndex().correctAnswer) {
    this.score++
  }
  this.questionIndex++
}

Quiz.prototype.IsEnded = function () {
  return quiz.questionIndex === questions.length
}

Quiz.prototype.ShowProgress = function () {
  document.getElementById('progress').innerText = `Question ${
    quiz.questionIndex + 1
  } of ${questions.length}`
}

let questions = [
  new Question(
    'Javascript is an _______ language?',
    ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'],
    'Object-Based'
  ),
  new Question(
    'Which one of the following also known as Conditional Expression',
    ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if'],
    'immediate if'
  ),
  new Question(
    'Which language is used for styling web pages ?',
    ['HTML', 'JQuery', 'CSS', 'XML'],
    'CSS'
  ),
  new Question(
    'What is used for connecting to the database',
    ['PHP', 'HTML', 'JS', 'MySQL'],
    'MySQL'
  ),
  new Question(
    'The "function" and " var" are known as:',
    ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
    'Declaration statements'
  ),
]

let currentQuestion = 1
let quiz = new Quiz(questions)

function loadPage() {
  if (quiz.IsEnded()) {
    ShowScore()
  } else {
    let questionElement = document.getElementById('question')
    questionElement.innerHTML = quiz.GetQuestionByIndex().questionText

    let choices = quiz.GetQuestionByIndex().choices

    for (let i = 0; i < choices.length; i++) {
      document.getElementById('btn' + i).innerHTML = choices[i]
      handleOptionButton(choices[i], 'btn' + i)
    }

    quiz.ShowProgress()
  }
}

function handleOptionButton(choiceIndex, id) {
  let button = document.getElementById(id)

  button.onclick = function () {
    quiz.CheckAnswer(choiceIndex)
    loadPage()
  }
}

function ShowScore() {
  let percent = (quiz.score / 5) * 100
  let score = '<h1> Result </h1>'
  score +=
    '<h2> Your score is : ' +
    quiz.score +
    '/' +
    questions.length +
    ' , which is ' +
    percent +
    '%</h2>'
  document.getElementById('quiz').innerHTML = score
}

loadPage()
