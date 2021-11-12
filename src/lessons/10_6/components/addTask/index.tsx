import { useState, FC } from "react";

import useStyles from "./style";

interface Obj {
  id: number;
  text: string;
}

interface AddTaskProps {
  nextTask: number;
  handleAddTask: (task: Obj) => void;
}

const AddTask: FC<AddTaskProps> = ({ handleAddTask, nextTask }) => {
  const classes = useStyles();

  const [textArea, setTextArea] = useState("");

  const handleAdd = () => {
    if (textArea) {
      const newObj = { id: nextTask + 1, text: textArea };
      handleAddTask(newObj);
    }

    setTextArea("");
  };

  return (
    <div className={classes.root}>
      <h2 className="sub-title">Добавить новую задачу</h2>
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setTextArea(e.target.value)
        }
        value={textArea}
      ></textarea>
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
};

export default AddTask;
