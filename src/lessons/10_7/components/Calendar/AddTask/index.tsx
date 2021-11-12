import classNames from "classnames";
import { FC, useState } from "react";

import useStyle from "./style";

interface AddTaskProps {
  currentDay: Date;
  listFutureTasks: ObjTask[];
  hendleAdd: (obj: ObjTask) => void;
}

const AddTask: FC<AddTaskProps> = ({
  currentDay,
  hendleAdd,
  listFutureTasks,
}) => {
  const classes = useStyle();

  const [textArea, setTextArea] = useState("");

  const newDate = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    currentDay.getDate()
  );

  const addNewTask = () => {
    const list = [...listFutureTasks];

    if (textArea) {
      if (list.find((item) => item.date.getTime() === newDate.getTime())) {
        const array = list.find(
          (item) => item.date.getTime() === newDate.getTime()
        )?.text;

        if (array) {
          array.push({ task: textArea, isChecked: false });
          hendleAdd({ date: newDate, text: array });
          setTextArea("");
        }
      } else {
        hendleAdd({
          date: newDate,
          text: [{ task: textArea, isChecked: false }],
        });

        setTextArea("");
      }
    }
  };

  const handleClickOnEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter") {
      e.preventDefault();
      addNewTask();
    }
  };

  return (
    <p className={classNames(classes.root)}>
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setTextArea(e.target.value)
        }
        onKeyDown={handleClickOnEnter}
        className="panel__text"
        value={textArea}
      />
      <button onClick={addNewTask} className="panel__btn">
        Добавить
      </button>
    </p>
  );
};

export default AddTask;
