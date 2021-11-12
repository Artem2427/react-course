import classNames from "classnames";
import { FC, useState } from "react";

import Task from "./Task";
import AddTask from "./AddTask";

import useStyles from "./style";
import { addZero } from "../../../../utils/common";

interface CaledarProps {
  today: Date;
  daysOfMonth: number;
  listFutureTasks: ObjTask[];
  addNewTask: (obj: ObjTask) => void;
  deleteTask: (i: number, obj: ObjTask) => void;
  updateList: (index: number, obj: ObjTask, isDone: boolean) => void;
  handleChange: (index: number, newText: string, obj: ObjTask) => void;
}

const Calendar: FC<CaledarProps> = ({
  daysOfMonth,
  today,
  listFutureTasks,
  addNewTask,
  deleteTask,
  updateList,
  handleChange,
}) => {
  const classes = useStyles();

  let formatter = new Intl.DateTimeFormat("ru", {
    weekday: "short",
  });

  const days = () => {
    const daysOfTheWeek = [];
    let day = new Date(2021, 10, 7);
    let i = 1;
    while (i <= 7) {
      daysOfTheWeek.push(formatter.format(day));
      day = new Date(day.getTime() + 86400 * 1000);
      i++;
    }
    return daysOfTheWeek;
  };

  const arrayDays: number[] = [];

  for (let i = 1; i <= daysOfMonth; i++) {
    arrayDays.push(i);
  }

  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

  const lastDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    daysOfMonth
  ).getDay();

  const rightOder = () => {
    const arr: any = [];

    let allWeek = 0;
    let days1 = daysOfMonth;

    let next = 7;
    let prev = 0;
    if (firstDay === 0) {
      if (lastDay === 6) {
        allWeek = 4;
      } else {
        allWeek = 5;
        next = next - (days1 % 7);
      }
    } else {
      days1 = days1 - 7 - firstDay;
      prev = firstDay;
      if (days1 / 7 === 4 || days1 / 7 < 4) {
        allWeek = 5;
      } else {
        next = next - (days1 % 7);
        allWeek = 6;
      }
    }
    let currentDate = new Date(today);
    const days = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();

    let nextIndex = 1;
    let index = 0;
    let ind = prev - 1;
    let dayIndex = 0;

    for (let i = 0; i < allWeek; i++) {
      arr[i] = [];
      let j = 0;
      while (j < 7) {
        if (firstDay === 0) {
          if (arrayDays.length !== dayIndex) {
            arr[i][j] = new Date(
              today.getFullYear(),
              today.getMonth(),
              arrayDays[dayIndex]
            );
            dayIndex++;
          } else {
            arr[i][j] = new Date(
              today.getFullYear(),
              today.getMonth() + 1,
              nextIndex
            );
            nextIndex++;
          }
        } else {
          if (index < prev && prev !== 0) {
            arr[i][j] = new Date(
              today.getFullYear(),
              today.getMonth() - 1,
              days - ind
            );
            index++;
            ind--;
          } else {
            if (arrayDays.length !== dayIndex) {
              arr[i][j] = new Date(
                today.getFullYear(),
                today.getMonth(),
                arrayDays[dayIndex]
              );

              dayIndex++;
            } else {
              arr[i][j] = new Date(
                today.getFullYear(),
                today.getMonth() + 1,
                nextIndex
              );
              nextIndex++;
            }
          }
        }
        j++;
      }
    }
    return arr;
  };

  const [isShow, setIsShow] = useState(false);
  const [currentDay, setCurrentDay] = useState(
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
  );

  const showTasks = () => {
    return (
      <div className="block-to-do">
        <h1>
          Список дел на
          <span>
            {` ${addZero(currentDay.getDate())}
            :${addZero(currentDay.getMonth() + 1)}
            :${currentDay.getFullYear()} `}
            число
          </span>
        </h1>
        {listFutureTasks.find(
          (item: ObjTask) => item.date.getTime() === currentDay.getTime()
        ) && (
          <ul style={{ listStyle: "none" }}>
            {listFutureTasks
              .find(
                (item: ObjTask) => item.date.getTime() === currentDay.getTime()
              )
              ?.text.map((item, i) => (
                <Task
                  key={i}
                  item={item}
                  index={i}
                  updateList={updateList}
                  deleteTask={deleteTask}
                  handleChange={handleChange}
                  currentObj={listFutureTasks.find(
                    (item: ObjTask) =>
                      item.date.getTime() === currentDay.getTime()
                  )}
                />
              ))}
          </ul>
        )}
        <AddTask
          currentDay={currentDay}
          hendleAdd={addNewTask}
          listFutureTasks={listFutureTasks}
        />
      </div>
    );
  };

  const handleClickOnDay = (day: Date) => {
    setCurrentDay(day);

    if (isShow === false) setIsShow(true);
  };

  const checkTask = (day: any) =>
    listFutureTasks.find(
      (item: ObjTask) => item.date.getTime() === day.getTime()
    );

  return (
    <div className={classes.root}>
      <div>
        <table className="organizer">
          <thead>
            <tr>
              {days().map((day, i) => (
                <td className="organizer__item" key={i}>
                  {day}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {rightOder().map((item: Date[], i: number) => (
              <tr key={i}>
                {item.map((day: Date, i: number) => (
                  <td
                    key={i}
                    className={classNames({ active: checkTask(day) }, "focus", {
                      ["on_focus"]: currentDay.getTime() === day.getTime(),
                    })}
                    onClick={() => handleClickOnDay(day)}
                  >
                    {day.getDate()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isShow && showTasks()}
    </div>
  );
};

export default Calendar;
