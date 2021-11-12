import { FC } from "react";
import classNames from "classnames";

import Square from "../square";

import useStyles from "./style";

interface BoardProps {
  squares: string[];
  handleClickOnButton: (index: number) => void;
}

const Board: FC<BoardProps> = ({ squares, handleClickOnButton }) => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root, "board")}>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          handleClickOnButton={() => handleClickOnButton(i)}
        />
      ))}
    </div>
  );
};

export default Board;
