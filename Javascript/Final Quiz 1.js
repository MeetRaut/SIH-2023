const quizData = [
    {
        question: "What does it mean to be a good friend?",
        A: "Always getting your way",
        B: " Being kind, supportive, and trustworthy",
        C: "Ignoring your friends' feelings",
        correct: "B",
    },
    {
        question: "What would you do if your friend is upset?",
        A: "YLaugh at them to cheer them up",
        B: " Ask them what's wrong and offer support",
        C: "Ignore them and go play with someone else ",
        correct: "B",
    },
    
    {
        question: "What is empathy?",
        A: " Not caring about others' feelings",
        B: " Understanding and sharing someone else's feelings",
        C: " Making fun of others",
        correct: "B",
    },
    {
        question: "Do you have a best friend?",
        A: "Yes",
        B: "No",
        C: "I don't know",
        correct: "B",
        
    },
    
    {
        question: "Do you enjoy hanging out with your friends?",
        A: "Sometimes",
        B: "Always",
        C: "Not really",
        
        correct: "B",
    },
    {
        question: "Do you get jealous if your friends have things that you don’t?",
        A: "Yes,sometimes",
        B: "I feel happy for them",
        C: "Yes,i get jealous",
        correct: "B",
    },
    {
        question: "How should you handle a situation when you and your friend have a disagreement?",
        A: " Shout and argue until someone gives in",
        B: " Talk calmly and listen to each other's feelings",
        C: " Ignore your friend and stop talking to them",

        correct: "B",
        
        
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('A_text')
const b_text = document.getElementById('B_text')
const c_text = document.getElementById('C_text')

const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    A_text.innerText = currentQuizData.A
    B_text.innerText = currentQuizData.B
    C_text.innerText = currentQuizData.C
  
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
           <h2>Congratulations on finishing your daily checkup. <br>Here is your reward! <br> Keep it up!</h2>
           <a href="Final Land.html"><button class="next" onclick="index.html">Proceed</button></a>
           `
       }
    }
})