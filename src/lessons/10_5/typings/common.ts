export interface Question {
  question: string;
  answers: string[];
  right: string[];
  id: number;
}

export interface Answer {
  id: number;
  answer: string[];
  isTrue: boolean;
}
