import { useEffect, useState } from "react";
import Worker from "./components/worker";

import useStyles from "./style";

const Lesson10_1 = () => {
  const classes = useStyles();

  const [workerList, setWorkerList] = useState([
    { name: "Вася", surname: "Пупкин", dayOfWork: 20, wageRate: 400 },
    { name: "Степа", surname: "Пупкин", dayOfWork: 30, wageRate: 350 },
    { name: "Сережа", surname: "Пупкин", dayOfWork: 15, wageRate: 300 },
    { name: "Илюха", surname: "Пупкин", dayOfWork: 18, wageRate: 270 },
    { name: "Петя", surname: "Пупкин", dayOfWork: 14, wageRate: 300 },
  ]);

  const [allSalary, setAllSalary] = useState(0);

  useEffect(() => {
    let allWorkerSalary = 0;
    workerList.forEach(
      (worker) => (allWorkerSalary += worker.dayOfWork * worker.wageRate)
    );
    setAllSalary(allWorkerSalary);
  }, [workerList]);

  const changeList = (index: number, dayOfWork: number, wageRate: number) => {
    const newList = [...workerList];

    newList[index].dayOfWork = dayOfWork;
    newList[index].wageRate = wageRate;

    setWorkerList(newList);
  };

  return (
    <div className={classes.root}>
      <table className="table">
        <thead>
          <tr>
            <td>Имя</td>
            <td>Фамилия</td>
            <td>Раб. дней</td>
            <td>Ставка за день</td>
            <td>Зарплата</td>
          </tr>
        </thead>
        <tbody>
          {workerList.map((worker, i) => (
            <tr key={i}>
              <Worker item={worker} listChange={changeList} index={i} />
            </tr>
          ))}
        </tbody>
      </table>
      {allSalary && <p>Зарплата всех сотрудников - {allSalary}</p>}
    </div>
  );
};

export default Lesson10_1;
