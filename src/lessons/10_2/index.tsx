import { useState } from "react";
import Test from "./components/test";

const Lesson10_2 = () => {
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

  const handleChangeAnswer = (answer: string, id: number, isOk: boolean) => {
    const newArr = [...yourAnswer];
    newArr.forEach((item) => {
      if (item.id === id) {
        item.answer = answer;
        item.isTrue = isOk;
      }
    });
    setYourAnswer(newArr);
  };

  console.log(yourAnswer);

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {tests.map((test, i) => (
          <Test
            key={i}
            item={test}
            postYourAnswer={handleChangeAnswer}
            answering={yourAnswer[i]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Lesson10_2;
