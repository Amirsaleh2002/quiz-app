import i18next from './i18n.js';
let $ = document;
const total = $.querySelector(".total");
const quizContainer = $.querySelector(".quiz-container");
let questionIndex = 0;
console.log(i18next.t('ns1:title'));
let questions = [
    {
        id: "1",
        title: "who are you",
        answers: [
            {
                id: "11",
                text: "saleh",
                isTrue: false,
            },
            {
                id: "12",
                text: "ali",
                isTrue: true,
            },
            {
                id: "13",
                text: "reza",
                isTrue: false,
            },
            {
                id: "14",
                text: "gholi",
                isTrue: false,
            },
        ],
        score: 10,
    },
    {
        id: "2",
        title: "How old Are you",
        answers: [
            {
                id: "21",
                text: "25",
                isTrue: false,
            },
            {
                id: "22",
                text: "45",
                isTrue: false,
            },
            {
                id: "23",
                text: "65",
                isTrue: false,
            },
            {
                id: "24",
                text: "30",
                isTrue: true,
            },
        ],
        score: 5,
    },
    {
        id: "3",
        title: "your ability",
        answers: [
            {
                id: "31",
                text: "game",
                isTrue: false,
            },
            {
                id: "32",
                text: "sleep",
                isTrue: false,
            },
            {
                id: "33",
                text: "go out",
                isTrue: true,
            },
            {
                id: "34",
                text: "driving",
                isTrue: false,
            },
        ],
        score: 8,
    },
];
function getQuestion() {
    quizContainer.innerHTML = "";
    quizContainer.insertAdjacentHTML("beforeend", `
  <h2 class="question-text"> ${questionIndex + 1} . ${questions[questionIndex].title}</h2>
  
    <ul class="answers-list">
  ${questions[questionIndex].answers
        .map((item, index) => `
              <button onclick="answerQuestion(event , ${item.isTrue} , ${questions[questionIndex].score})" class="answer-item" > 
                <span class="answer-num">${index + 1} . </span>
                <p class="answer-text"> ${item.text} </p>
            </button>`)
        .join("")}
            
            </ul>`);
}
let totalScore = 0;
function answerQuestion(event, validation, questionScore) {
    if (String(validation) === "true") {
        if (event.target.className === "answer-item") {
            event.target.classList.add("true");
        }
        totalScore = totalScore + questionScore;
    }
    else {
        if (event.target.className === "answer-item") {
            event.target.classList.add("false");
        }
    }
    $.querySelectorAll(".answer-item").forEach((item) => item.setAttribute("disabled", "true"));
    if (questionIndex === questions.length - 1) {
        quizContainer.innerHTML = `<h2 class="finish-quiz">Your score is :  ${totalScore.toLocaleString()}</h2>`;
    }
    else {
        setTimeout(() => {
            questionIndex += 1;
            getQuestion();
        }, 2000);
    }
    console.log(questions.length);
    console.log(questionIndex);
}
window.answerQuestion = answerQuestion;
window.addEventListener("load", getQuestion);
