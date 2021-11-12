import classNames from "classnames";
import { useState } from "react";

import Board from "../board";

import useStyles from "./style";

const GameLogic = () => {
  const classes = useStyles();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculaterWinner = (squares: any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculaterWinner(board);

  const handleClick = (index: number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) return;

    boardCopy[index] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className="start__btn"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Очистить поле
      </button>
    );
  };

  return (
    <div className={classNames(classes.root, "wrapper")}>
      {startNewGame()}
      <Board squares={board} handleClickOnButton={handleClick} />
      <p className="game__info">
        {board.findIndex((item) => item === null) === -1
          ? winner
            ? `Победитель ${winner}`
            : "Ничия"
          : winner
          ? `Победитель ${winner}`
          : `Сейчас ходит ${xIsNext ? "X" : "O"}`}
      </p>
    </div>
  );
};

export default GameLogic;
