import { ChangeEvent, FC, useState } from "react";

import useStyles from "./style";

interface TestProps {
  item: Question;
  myAnswer: Answer;
  postYourAnswer: (str: string, id: number, isOk: boolean) => void;
}

const Test: FC<TestProps> = ({ item, postYourAnswer, myAnswer }) => {
  const classes = useStyles();
  const { question, answers, id } = item;

  const [numberAnswer, setInputValue] = useState(0);
  // const [isTrue, setIsTrue] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setInputValue(index);
  };

  return (
    <div key={id} className={classes.root}>
      <p>{`${id}) ${question}`}</p>
      <p>
        {answers.map((answer, i) => (
          <span key={i} style={{ display: "block" }}>
            <input
              defaultChecked={myAnswer.answer === answer}
              name={String(id)}
              type="radio"
              onChange={(e) => handleChange(e, i)}
            />
            {answer}
          </span>
        ))}
      </p>
      <button onClick={() => postYourAnswer(answers[numberAnswer], id, true)}>
        Сдать тест
      </button>
    </div>
  );
};

export default Test;
