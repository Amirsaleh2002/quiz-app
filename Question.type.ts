import { answersType } from "./Answers.type.js";


export interface questionType  {
  id: string;
  title: string;
  answers : answersType[],
  score:number
};
