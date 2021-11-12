import { useState } from "react";

import AddTask from "./components/addTask";
import Task from "./components/Task";

import useStyles from "./style";

interface Obj {
  id: number;
  text: string;
}

const Lesson10_6 = () => {
  const classes = useStyles();

  const [listMyTasks, setListMyTasks] = useState([
    { id: 1, text: "Доделать 6 и 7 таски за сегодня" },
    { id: 2, text: "Сдать успешно таблицу интегралов" },
  ]);

  const removeTask = (index: number) => {
    const newList = [...listMyTasks];
    newList.splice(index, 1);

    setListMyTasks(newList);
  };

  const handleChangeTask = (index: number, newText: string) => {
    const newList = [...listMyTasks];
    newList[index].text = newText;

    setListMyTasks(newList);
  };

  const handleAddTask = (task: Obj) => {
    const newList = [...listMyTasks, task];
    setListMyTasks(newList);
  };

  return (
    <div className={classes.root}>
      <div>
        <h1 className="title">TODO-лист</h1>
        <ul className="list">
          {listMyTasks.map((task, i) => (
            <Task
              index={i}
              task={task}
              removeTask={() => removeTask(i)}
              handleChangeTask={handleChangeTask}
            />
          ))}
        </ul>
      </div>

      <AddTask handleAddTask={handleAddTask} nextTask={listMyTasks.length} />
    </div>
  );
};

export default Lesson10_6;
