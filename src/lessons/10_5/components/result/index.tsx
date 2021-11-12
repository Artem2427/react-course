import classNames from "classnames";
import { FC } from "react";

import { Question, Answer } from "../../typings/common";

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
      {allTests.map((test, i) => (
        <p key={i}>
          <span style={{ display: "block" }}>{test.question}</span>
          {test.answers.map((ans, index) => {
            if (listAnswer[i].answer.includes(ans)) {
              if (test.right.includes(ans)) {
                return (
                  <span className="textGreen" key={index}>
                    "{ans}" - правильно
                  </span>
                );
              } else {
                return (
                  <span className="textRed">
                    Ваш ответ "{ans}", не правильный, правильные ответы "
                    {test.right.map((answer, i) => (
                      <li key={i} className="textGreen">
                        {answer}
                      </li>
                    ))}
                    "
                  </span>
                );
              }
            }
          })}
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
