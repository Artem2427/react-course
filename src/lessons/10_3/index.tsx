import { useEffect, useState } from "react";

import Test from "./components/test";
import Result from "./components/results";
import classNames from "classnames";

import useStyles from "./style";

const Lesson10_3 = () => {
  const classes = useStyles();
  const [yourAnswer, setYourAnswer] = useState([
    { id: 1, answer: "", isTrue: false },
    { id: 2, answer: "", isTrue: false },
  ]);

  const tests = [
    {
      question: "В каком году началась Вторамя мировая война?",
      answers: ["1941", "1937", "1940", "1939", "1938"],
      right: 4,
      id: 1,
    },
    {
      question:
        "Какая формула в физике используеться для нахождения силы тяжести?",
      answers: ["F = m*g", "F = m*a", "F = -k*x", "A = F*S", "N = A/t"],
      right: 1,
      id: 2,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerAllQuestion, setAnswerAllQuestion] = useState(false);

  useEffect(() => {
    let isNotEmpty = true;
    for (let i = 0; i < yourAnswer.length; i++) {
      if (!yourAnswer[i].answer) {
        isNotEmpty = false;
        break;
      }
    }

    setAnswerAllQuestion(isNotEmpty);
  }, [yourAnswer]);

  const handleChangeAnswer = (answer: string, id: number, isOk: boolean) => {
    if (currentQuestion < tests.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    const newArr = [...yourAnswer];
    newArr.forEach((item) => {
      if (item.id === id) {
        item.answer = answer;
        item.isTrue = isOk;
      }
    });
    setYourAnswer(newArr);
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < tests.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classNames({ hide: answerAllQuestion })}>
        <Test
          key={currentQuestion + 1}
          item={tests[currentQuestion]}
          postYourAnswer={handleChangeAnswer}
          // answering={yourAnswer[tests[currentQuestion].id]}
        />
        <button onClick={prevQuestion}>Назад</button>
        <button onClick={nextQuestion}>Вперед</button>
      </div>
      <div>
        {answerAllQuestion && (
          <Result listAnswer={yourAnswer} allTests={tests} />
        )}
      </div>
    </div>
  );
};

export default Lesson10_3;
