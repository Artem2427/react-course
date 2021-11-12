import classNames from "classnames";
import React, { FC, useState } from "react";

import useStyles from "./style";

interface Obj {
  id: number;
  text: string;
}

interface TaskProps {
  index: number;
  task: Obj;
  removeTask: () => void;
  handleChangeTask: (i: number, line: string) => void;
}

const Task: FC<TaskProps> = ({ task, removeTask, handleChangeTask, index }) => {
  const classes = useStyles();

  // const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { id, text } = task;

  const [isShow, setIsShow] = useState(true);
  const [isDone, setIsDone] = useState(false);

  const handleRemove = () => {
    removeTask();
  };

  const handleUpdate = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    handleChangeTask(index, e.target.value);
    setIsShow(!isShow);
    e.target.value = "";
  };

  // const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <li className={classes.root} key={id}>
      <p className={classNames({ done: isDone })}>
        <span>{`${id}) ${text}`}</span>
        <input
          type="checkbox"
          onChange={() => setIsDone(!isDone)}
          checked={isDone}
        />
      </p>
      <button onClick={handleRemove}>Удалить</button>
      <button
        onClick={() => setIsShow(!isShow)}
        className={classNames({ show: isShow }, { hide: !isShow })}
      >
        Редактировать
      </button>
      <textarea
        onBlur={handleUpdate}
        className={classNames({ show: !isShow }, { hide: isShow })}
      ></textarea>
    </li>
  );
};

export default Task;
