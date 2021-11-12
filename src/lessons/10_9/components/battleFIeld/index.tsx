import { FC } from "react";
import classNames from "classnames";
import Square from "../square";

import useStyles from "./style";

interface BattleFieldProps {
  classes: string;
  squares: string[][];
  doNotStep?: boolean;
  whoWin?: boolean;
  handleClickOnButton?: (nameBoard: string, x: number, y: number) => void;
}

const BattleField: FC<BattleFieldProps> = ({
  classes,
  squares,
  doNotStep,
  whoWin,
  handleClickOnButton,
}) => {
  const style = useStyles();

  const numberOfField = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const lettersOfField = ["", "А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К"];

  return (
    <div className={style.root}>
      <div className={classNames(classes, "field")}>
        <div className="left-side">
          {lettersOfField.map((square, i) => (
            <Square cell={square} key={i} borderNone="none-border-left" />
          ))}
        </div>
        {numberOfField.map((square, i) => (
          <Square cell={square} key={i} borderNone="none-border-top" />
        ))}
        {squares.map((square: string[], i) => {
          return square.map((cell, j) => (
            <Square
              cell={cell}
              key={j}
              whoIs={classes}
              doNotStep={doNotStep}
              whoWin={whoWin}
              handleClickOnButton={() =>
                handleClickOnButton && handleClickOnButton(classes, i, j)
              }
            />
          ));
        })}
      </div>
    </div>
  );
};

export default BattleField;
