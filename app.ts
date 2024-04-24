import { questionType } from "./Question.type.js";
declare const window: any;
let $ = document;

const total = $.querySelector(".total") as HTMLSpanElement;
const quizContainer = $.querySelector(".quiz-container") as HTMLDivElement;

let questionIndex: number = 0;

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

function getQuestion() {
  quizContainer.innerHTML = "";
  quizContainer.insertAdjacentHTML(
    "beforeend",
    `
  <h2 class="question-text"> ${questionIndex + 1} . ${
      questions[questionIndex]?.title
    }</h2>
  
    <ul class="answers-list">
  ${questions[questionIndex].answers
    .map(
      (item, index) =>
        `
              <button onclick="answerQuestion(event , ${item.isTrue} , ${
          questions[questionIndex].score
        })" class="answer-item" > 
                <span class="answer-num">${index + 1} . </span>
                <p class="answer-text"> ${item.text} </p>
            </button>`
    )
    .join("")}
            
            </ul>`
  );
}

let totalScore: number = 0;
total.innerHTML = `Your score is : ${totalScore.toString()}`;

function answerQuestion(
  event: any,
  validation: boolean,
  questionScore: number
): void {
  questionIndex = questionIndex + 1;

  let getQuestionTime =  setTimeout(() => {
    getQuestion();
  }, 2000);
  if (questionIndex <= questions.length - 1) {
    if (String(validation) === "true") {
      if (event.target.className === "answer-item") {
        event.target.classList.add("true");
      }
      totalScore = totalScore + questionScore;
      total.innerHTML = `Your score is : ${totalScore.toString()}`;
    } else {
      if (event.target.className === "answer-item") {
        event.target.classList.add("false");
      }
    }
  } else {
    quizContainer.innerHTML = `<h2 class="finish-quiz">FINSIH</h2>`
    clearTimeout(getQuestionTime)
  }

  console.log(questions.length);
  console.log(questionIndex);


}

window.answerQuestion = answerQuestion;

window.addEventListener("load", getQuestion);
