import { useState } from "react";

import DateToday from "./components/DateToday";
import Navigation from "./components/Buttons";
import Calendar from "./components/Calendar";

const Lesson10_7 = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const days = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const [listFutureTasks, setListFutureTasks] = useState<ObjTask[]>([
    {
      date: new Date(2021, 10, 7),
      text: [{ task: "Закончить органайзер", isChecked: false }],
    },
    {
      date: new Date(2021, 10, 25),
      text: [
        { task: "Получить работу", isChecked: false },
        { task: "Поехать на отдых", isChecked: false },
      ],
    },
  ]);

  const handleAddNewTask = (obj: ObjTask) => {
    const list = [...listFutureTasks];

    const copyObj = list.find(
      (item) => item.date.getTime() === obj.date.getTime()
    );

    if (copyObj) {
      list.forEach(
        (item) =>
          item.date.getTime() === copyObj.date.getTime() && (item = copyObj)
      );
    } else {
      list.push(obj);
    }

    setListFutureTasks(list);
  };

  const removeTask = (index: number, obj: ObjTask) => {
    const newList = [...listFutureTasks];

    newList.forEach((item, i) => {
      if (item.text.length !== 0) {
        if (item.date.getDate() === obj.date.getDate()) {
          item.text.splice(index, 1);
        }
      }

      if (item.text.length === 0) {
        newList.splice(i, 1);
      }
    });

    setListFutureTasks(newList);
  };

  const handleUpdate = (index: number, obj: ObjTask, isDone: boolean) => {
    const newList = [...listFutureTasks];

    newList.forEach((item) => {
      if (item.date.getDate() === obj.date.getDate()) {
        item.text[index].isChecked = isDone;
      }
    });

    setListFutureTasks(newList);
  };

  const handleChangeTask = (index: number, newText: string, obj: ObjTask) => {
    const newList = [...listFutureTasks];

    newList.forEach((item) => {
      if (item.date.getDate() === obj.date.getDate()) {
        item.text[index].task = newText;
      }
    });

    setListFutureTasks(newList);
  };

  return (
    <>
      <DateToday today={currentDate} newDate={setCurrentDate} />
      <Navigation
        handleChange={setCurrentDate}
        today={currentDate}
        daysOfMonth={days}
      />
      <Calendar
        daysOfMonth={days}
        today={currentDate}
        addNewTask={handleAddNewTask}
        listFutureTasks={listFutureTasks}
        deleteTask={removeTask}
        updateList={handleUpdate}
        handleChange={handleChangeTask}
      />
    </>
  );
};

export default Lesson10_7;
