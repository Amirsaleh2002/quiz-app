let $ = document;
const total = $.querySelector(".total");
const quizContainer = $.querySelector(".quiz-container");
// let isTrueAnswer = false;
let questions = [
    {
        id: "1",
        title: "who are you",
        answers: [
            {
                id: "11",
                text: "cior",
                isTrue: false,
            },
            {
                id: "12",
                text: "vmmervmrl",
                isTrue: true,
            },
            {
                id: "13",
                text: "wdecvr",
                isTrue: false,
            },
            {
                id: "14",
                text: "cecrver",
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
// console.log(questions);
questions.forEach((item, index) => quizContainer.insertAdjacentHTML("beforeend", `
      <h2 class="question-text"> ${index + 1} . ${item.title}</h2>

      <ul class="answers-list">
      ${item.answers
    .map((answer, index) => `<button onclick="answerQuestion(event , ${answer.isTrue})" class="answer-item" > 
              <span class="answer-num">${index + 1} . </span>
              <p class="answer-text"> ${answer.text} </p>
          </button>`)
    .join("")}
      </ul>`));
function answerQuestion(event, validation) {
    if (String(validation) === "true") {
        if (event.target.className === "answer-item") {
            event.target.classList.add("true");
        }
    }
    else {
        if (event.target.className === "answer-item") {
            event.target.classList.add("false");
        }
    }
}
window.answerQuestion = answerQuestion;
export {};
