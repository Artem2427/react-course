import { ChangeEvent, FC } from "react";

interface Worker {
  name: string;
  surname: string;
  dayOfWork: number;
  wageRate: number;
}

interface WorkerProps {
  item: Worker;
  listChange: (i: number, a: number, b: number) => void;
  index: number;
}

const Worker: FC<WorkerProps> = ({ item, listChange, index }) => {
  const { name, surname, dayOfWork, wageRate } = item;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newArr = [dayOfWork, wageRate];
    if (name === "dayOfWork") {
      if (+value <= 31) {
        newArr[0] = Number(value.replace(/\D/g, "").substr(0, 2));
      }
    } else {
      newArr[1] = Number(value.replace(/\D/g, "").substr(0, 5));
    }

    listChange(index, newArr[0], newArr[1]);
  };

  return (
    <>
      <td>{name}</td>
      <td>{surname}</td>
      <td>
        <input
          name="dayOfWork"
          value={dayOfWork !== 0 ? dayOfWork : ""}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="wageRate"
          value={wageRate !== 0 ? wageRate : ""}
          onChange={handleChange}
        />
      </td>
      <td>{dayOfWork * wageRate}</td>
    </>
  );
};

export default Worker;
