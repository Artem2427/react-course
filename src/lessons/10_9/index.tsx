import BattleField from "./components/battleFIeld";
import RandomButtonShips from "./components/randomButtonShips";

import classNames from "classnames";
import useStyles from "./style";
import { useState } from "react";

const getBattleField = () => {
  const emptyField: any = [];

  for (let i = 0; i < 10; i++) {
    emptyField[i] = [];
    for (let j = 0; j < 10; j++) {
      emptyField[i][j] = 0;
    }
  }
  return emptyField;
};

const Lesson10_9 = () => {
  const classes = useStyles();

  const [boardHuman, setBoardHuman] = useState(getBattleField());
  const [boardComputer, setBoardComputer] = useState(getBattleField());

  const [isStart, setIsStart] = useState(false);

  const [whoseMove, setWhoseMove] = useState(false);

  const [isShow, setIsShow] = useState(false);

  const startGame = () => {
    setIsStart(!isStart);
  };

  const showButton = () => {
    setIsShow(!isShow);
  };

  const SHIP_DATA = {
    fourdeck: [1, 4], //  первый элемент количество кораблей,  а второой кол. палуб
    tripledeck: [2, 3],
    doubledeck: [3, 2],
    singledeck: [4, 1],
  };

  const handleUpdateSQ = (nameBoard: string, x: number, y: number) => {
    if (nameBoard === "fieldComputer") {
      const copyBoardComputer = [...boardComputer];
      if (copyBoardComputer[x][y] === 0 || copyBoardComputer[x][y] === 1) {
        if (copyBoardComputer[x][y] === 1) {
          copyBoardComputer[x][y] = 3;
        } else {
          copyBoardComputer[x][y] = 2;
          setWhoseMove(!whoseMove);
        }
      }

      setBoardComputer(copyBoardComputer);
      return;
    }

    if (nameBoard === "fieldHuman") {
      const copyBoardHuman = [...boardHuman];

      if (copyBoardHuman[x][y] === 0 || copyBoardHuman[x][y] === 1) {
        if (copyBoardHuman[x][y] === 1) {
          copyBoardHuman[x][y] = 3;

          let computerWin = true;

          for (let i = 0; i < 10; i++) {
            if (boardHuman[i].findIndex((item: number) => item === 1) >= 0) {
              computerWin = false;
              break;
            }
          }
          if (computerWin) {
            setWhoseMove(!whoseMove);
            return;
          }
        } else {
          console.log(4);

          copyBoardHuman[x][y] = 2;
          setWhoseMove(!whoseMove);
        }
        setBoardHuman(copyBoardHuman);
      }
    }
  };

  const getRandom = (n: number) => Math.floor(Math.random() * (n + 1));

  const handleUpdateBoard = (board: number[][], classes: string) => {
    const copyBoard = [...board];

    if (classes === "fieldHuman") {
      setBoardHuman(copyBoard);
    } else {
      setBoardComputer(copyBoard);
    }
  };

  const randomCoordinates = () => {
    let x = getRandom(9);
    let y = getRandom(9);

    while (boardHuman[x][y] > 1) {
      x = getRandom(9);
      y = getRandom(9);
    }
    return { x, y };
  };

  const winner = () => {
    let computerWin = true;
    let personWin = true;

    for (let i = 0; i < 10; i++) {
      if (boardHuman[i].findIndex((item: number) => item === 1) >= 0) {
        computerWin = false;
        break;
      }
    }

    for (let i = 0; i < 10; i++) {
      if (boardComputer[i].findIndex((item: number) => item === 1) >= 0) {
        personWin = false;
        break;
      }
    }

    if (computerWin) {
      return `Computer win`;
    } else if (personWin) {
      return `You win`;
    } else {
      return "";
    }
  };

  if (whoseMove) {
    const { x, y } = randomCoordinates();
    handleUpdateSQ("fieldHuman", x, y);
  }

  const startNewGame = () => {
    setBoardHuman(getBattleField());
    setBoardComputer(getBattleField());

    setIsStart(false);
    setIsShow(false);
    setWhoseMove(false);
  };

  return (
    <div className={classNames(classes.root, "wrap")}>
      <div id="text_top" className="game__title">
        Морской бой
      </div>
      <div className="battlefield">
        <BattleField classes="fieldHuman" squares={boardHuman} />
        {isStart && (
          <BattleField
            classes="fieldComputer"
            squares={boardComputer}
            doNotStep={whoseMove}
            whoWin={isStart && winner() ? true : false}
            handleClickOnButton={handleUpdateSQ}
          />
        )}
        {isStart && winner() && <div className="winner">{winner()}</div>}
      </div>
      <RandomButtonShips
        handleUpdateBoard={handleUpdateBoard}
        startGame={startGame}
        squaresHuman={boardHuman}
        squaresComputer={boardComputer}
        allShip={SHIP_DATA}
        isStart={isStart}
        isShow={isShow}
        showButton={showButton}
      />

      {isStart && winner() && (
        <button
          className={classNames("btn", "btn-restart")}
          onClick={startNewGame}
        >
          Начать игру с начала
        </button>
      )}
    </div>
  );
};

export default Lesson10_9;

//  handleClickOnButton={() => handleClickOnButton(classes,i, j)}
