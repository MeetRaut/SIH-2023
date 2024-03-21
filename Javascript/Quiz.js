const quizData = [
    {
        question: " Little interest or pleasure in doing things",
        a: "Not at all",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly everyday",
        correct: "d",
    },
    {
        question: "Feeling down, depressed, or hopeless",
        a: "Not at all",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly everyday",
        correct: "d",
    },
    {
        question: "Trouble falling or staying asleep, or sleeping too much",
        a: "Not at all",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly everyday",
        correct: "d",
    },
    {
        question: "Feeling tired or having little energy",
        a: "Not at all",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly everyday",
        correct: "d",
    },
    {
        question: "Poor appetite or overeating",
        a: "Not at all",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly everyday",
        correct: "d",
    },
    {
        question: " Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
        a: "Not at all",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly everyday",
        correct: "d",
    },
    {
        question: "Trouble concentrating on things, such as reading the newspaper or watching television",
        a: "Not at all",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly everyday",
        correct: "d",
    },
    {
        question: "Moving or speaking so slowly that other people could have noticed",
        a: "Not at all",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly everyday",
        correct: "d",
    },
    {
        question: "Thoughts that you would be better off dead, or of hurting yourself",
        a: "Not at all",
        b: "Several days",
        c: "More than half the days",
        d: "Nearly everyday",
        correct: "d",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Congratulations on finishing the quiz. <br>Here is your reward! <br> Keep it up!</h2>
           <div class="next">
           <a href="Final Land.html"><button "onclick="index.html">Proceed</button></a>
           </div>
           `
       }
    }
})