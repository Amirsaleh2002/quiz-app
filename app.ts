import { questionType } from "./Question.type.js";
import { answersType } from "./Answers.type.js";
let $ = document;
// window.answerQuestion = answerQuestion

const total = $.querySelector(".total") as HTMLSpanElement;
const quizContainer = $.querySelector(".quiz-container") as HTMLDivElement;

let isTrueAnswer: any = null;

let questions: questionType[] = [
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
console.log(questions);
questions.map((item, index) =>
  quizContainer.insertAdjacentHTML(
    "beforeend",
    `
      <h2 class="question-text"> ${index + 1} . ${item.title}</h2>

      <ul class="answers-list">
      ${item.answers
        .map(
          (answer, index) =>
            `<li class=${`answer-item ${
              answer.isTrue ? "true" : "false"
            }`} onclick="answerQuestion('${answer.isTrue}')" > 
              <span class="answer-num">${index + 1} . </span>
              <p class="answer-text"> ${answer.text} </p>
          </li>`
        )
        .join("")}
      </ul>`
  )
);

// function answerQuestion (answerValdiation: boolean): void {
//   console.log(answerValdiation);
//   // console.log(questionScore);
//   if (answerValdiation) {
//     isTrueAnswer = true;
//     console.log(isTrueAnswer);

//   } else {
//     isTrueAnswer = false;
//     console.log(isTrueAnswer);

//   }
//   isTrueAnswer = null
// };
