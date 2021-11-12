import classNames from "classnames";
import { FC } from "react";

import useStyles from "./style";

interface ResultProps {
  listAnswer: Answer[];
  allTests: Question[];
  showQuestion: () => void;
}

const Result: FC<ResultProps> = ({ listAnswer, allTests, showQuestion }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root)}>
      {listAnswer.map((test, i) => (
        <p key={i}>
          <span style={{ display: "block" }} key={i}>
            {allTests[i].question}
          </span>
          {test.answer === allTests[i].answers[allTests[i].right - 1] ? (
            <span className="textGreen">"{test.answer}" - правильно</span>
          ) : (
            <span className="textRed">
              Ваш ответ "{test.answer}", не правильный, правильный ответ "
              {allTests[i].answers[allTests[i].right - 1]}"
            </span>
          )}
        </p>
      ))}
      <button
        onClick={() => {
          showQuestion();
        }}
      >
        Вернуться к вопросам
      </button>
    </div>
  );
};

export default Result;
// export moveToQuestion;
