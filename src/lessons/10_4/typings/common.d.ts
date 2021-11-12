interface Answer {
  id: number;
  answer: string;
  isTrue: boolean;
}

interface Question {
  question: string;
  answers: string[];
  right: number;
  id: number;
}
