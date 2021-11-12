import classNames from "classnames";
import { ChangeEvent, FC, useState } from "react";

import useStyles from "../../style";

interface TestProps {
  item: Question;
  // answering: Answer;
  postYourAnswer: (str: string, id: number, isOk: boolean) => void;
}
// answering;
const Test: FC<TestProps> = ({ item, postYourAnswer }) => {
  const classes = useStyles();
  const { question, answers, id } = item;

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div key={id} className={classes.root}>
      <p>{`${id}) ${question}`}</p>
      <p>
        {answers.map((answer, i) => (
          <span key={i} style={{ display: "block" }}>
            {answer}
          </span>
        ))}
      </p>
      <input placeholder="Ваш ответ" onChange={handleChange} />
      <button onClick={() => postYourAnswer(inputValue, id, true)}>
        Сдать тест
      </button>
    </div>
  );
};

export default Test;
