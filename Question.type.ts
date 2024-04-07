import { answersType } from "./Answers.type.js";


export type questionType = {
  id: string;
  title: string;
  answers : answersType[]
};
