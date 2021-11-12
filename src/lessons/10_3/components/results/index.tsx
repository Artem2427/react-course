import { FC } from "react";

import useStyles from "./style";

interface ResultProps {
  listAnswer: Answer[];
  allTests: Question[];
}

const Result: FC<ResultProps> = ({ listAnswer, allTests }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default Result;
