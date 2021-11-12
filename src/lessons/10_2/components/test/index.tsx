import classNames from "classnames";
import { ChangeEvent, FC, useState } from "react";

import useStyles from "./style";

interface Question {
  question: string;
  answers: string[];
  right: number;
  id: number;
}

interface Answer {
  id: number;
  answer: string;
  isTrue: boolean;
}

interface TestProps {
  item: Question;
  answering: Answer;
  postYourAnswer: (str: string, id: number, isOk: boolean) => void;
}

const Test: FC<TestProps> = ({ item, postYourAnswer, answering }) => {
  const classes = useStyles();
  const { question, answers, right, id } = item;

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <li key={id} className={classes.root}>
      <p>{`${id}) ${question}`}</p>
      <p>
        {answers.map((answer, i) => (
          <span key={i} style={{ display: "block" }}>
            {answer}
          </span>
        ))}
      </p>
      {answering.isTrue && (
        <p>
          {inputValue === answers[right - 1] ? (
            <span className="textGreen">{inputValue} - правильно</span>
          ) : (
            <span className="textRed">
              Ваш ответ {inputValue}, не правильный, правильный ответ{" "}
              {answers[right - 1]}
            </span>
          )}
        </p>
      )}
      <input
        placeholder="Ваш ответ"
        onChange={handleChange}
        className={classNames({ hide: answering.isTrue })}
      />
      <button onClick={() => postYourAnswer(inputValue, id, true)}>
        Сдать тест
      </button>
    </li>
  );
};

export default Test;
