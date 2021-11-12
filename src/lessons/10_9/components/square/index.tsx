import classNames from "classnames";
import { FC } from "react";

import useStyles from "./style";

interface SquareProps {
  cell: string | number;
  key: number;
  borderNone?: string;
  whoIs?: string;
  doNotStep?: boolean;
  whoWin?: boolean;
  handleClickOnButton?: () => void;
}

const Square: FC<SquareProps> = ({
  cell,
  key,
  borderNone,
  whoIs,
  whoWin,
  doNotStep,
  handleClickOnButton,
}) => {
  const style = useStyles();

  const whichCell = () => {
    if (cell === 0) {
      return "empty";
    } else if (cell === 1) {
      if (whoIs === "fieldComputer") return "empty";
      return "ship";
    } else if (cell === 2) {
      return "fire-cell";
    } else if (cell === 3) {
      return "hiting-ship";
    }
  };

  let isDisabled = doNotStep;

  if (whoWin) isDisabled = true;
  /*
	0 - пустое место
	1 - палуба корабля
	2 - клетка рядом с кораблём
	3 - попадание в палубу
	*/

  return (
    <button
      className={classNames(style.root, "square", borderNone, whichCell())}
      disabled={borderNone || isDisabled ? true : false}
      onClick={handleClickOnButton}
    >
      {borderNone && cell}
    </button>
  );
};

export default Square;
