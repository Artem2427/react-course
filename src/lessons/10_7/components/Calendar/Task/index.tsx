import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";

import useStyles from "./style";

interface TaskProps {
  item: OneTask;
  deleteTask: (i: number, obj: ObjTask) => void;
  updateList: (index: number, obj: ObjTask, isDone: boolean) => void;
  handleChange: (index: number, newText: string, obj: ObjTask) => void;
  index: number;
  currentObj: ObjTask | undefined;
}

const Task: FC<TaskProps> = ({
  item,
  index,
  deleteTask,
  currentObj,
  updateList,
  handleChange,
}) => {
  const classes = useStyles();

  const removeItem = (i: number) => {
    if (currentObj) deleteTask(i, currentObj);
  };
  const [isDone, setIsDone] = useState(false);

  const taskIsDone = (i: number) => {
    setIsDone(!isDone);

    if (currentObj) updateList(i, currentObj, !currentObj.text[i].isChecked);
  };

  const [isShow, setIsShow] = useState(true);
  const [currentValue, setCurrentValue] = useState(
    currentObj?.text[index].task
  );

  useEffect(() => {
    setCurrentValue(currentObj?.text[index].task);
  }, [currentObj?.text[index].task]);

  const handleUpdate = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (currentObj && e.target.value)
      handleChange(index, e.target.value, currentObj);
    setIsShow(!isShow);
  };

  const textAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value) setCurrentValue(e.target.value);
  };
  console.log(currentObj?.text);

  return (
    <li key={index} className={classes.root}>
      <div>
        <p className={classNames({ done: item.isChecked }, "item__content")}>
          {index + 1})
          <input
            type="checkbox"
            onChange={() => taskIsDone(index)}
            checked={item.isChecked}
          />
          {item.task}
        </p>
        <div className={classNames({ ["wrapper"]: !isShow })}>
          <button
            onClick={() => {
              setIsShow(!isShow);
              const textArea = document.getElementById("test");
              textArea?.setAttribute("autoFocus", "autoFocus");
            }}
            className={classNames({ show: isShow }, { hide: !isShow })}
          >
            Редактировать
          </button>
          <textarea
            onBlur={handleUpdate}
            className={classNames(
              { show: !isShow },
              { hide: isShow },
              { ["btn-update"]: !isShow }
            )}
            defaultValue={currentValue}
            onChange={textAreaChange}
          ></textarea>
          <button onClick={() => removeItem(index)}>Удалить</button>
        </div>
      </div>
    </li>
  );
};

export default Task;
