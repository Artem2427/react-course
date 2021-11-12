import { FC, useState } from "react";

import { Question, Answer } from "../../typings/common";

import useStyles from "./style";

interface TestProps {
  item: Question;
  myAnswer: Answer;
  postYourAnswer: (str: string[], id: number, isOk: boolean) => void;
}

const Test: FC<TestProps> = ({ item, postYourAnswer, myAnswer }) => {
  const classes = useStyles();
  const { question, answers, id } = item;

  const [userAnswer, setUserAnswer] = useState<string[]>([]);

  const handleChange = (index: number) => {
    const newArr = [...userAnswer, answers[index]];
    setUserAnswer(newArr);
  };

  return (
    <div key={id} className={classes.root}>
      <p>{`${id}) ${question}`}</p>
      <p>
        {answers.map((answer, i) => (
          <span key={i} style={{ display: "block" }}>
            <input
              defaultChecked={myAnswer.answer[i] === answer}
              type="checkbox"
              onChange={() => handleChange(i)}
            />
            {answer}
          </span>
        ))}
      </p>
      <button onClick={() => postYourAnswer(userAnswer, id, true)}>
        Сдать тест
      </button>
    </div>
  );
};

export default Test;
