import classNames from "classnames";
import { FC } from "react";

import useStyles from "./style";

interface RandomButtonShipsProps {
  startGame: () => void;
  squaresHuman: number[][];
  squaresComputer: number[][];
  isStart: boolean;
  isShow: boolean;
  showButton: () => void;
  handleUpdateBoard: (board: number[][], classes: string) => void;
  allShip: {
    fourdeck: number[];
    tripledeck: number[];
    doubledeck: number[];
    singledeck: number[];
  };
}

const RandomButtonShips: FC<RandomButtonShipsProps> = ({
  startGame,
  squaresHuman,
  squaresComputer,
  allShip,
  isStart,
  isShow,
  showButton,
  handleUpdateBoard,
}) => {
  const style = useStyles();

  const getRandom = (n: number) => Math.floor(Math.random() * (n + 1));

  const randomArrangement = (board: any) => {
    const checkLocationShip = (ship: any, decks: number) => {
      let { x, y, kx, ky, fromX, toX, fromY, toY } = ship;

      fromX = x === 0 ? x : x - 1;

      if (x + kx * decks === 10 && kx === 1) toX = x + kx * decks;
      else if (x + kx * decks < 10 && kx === 1) toX = x + kx * decks + 1;
      else if (x === 9 && kx === 0) toX = x + 1;
      else if (x < 9 && kx === 0) toX = x + 2;

      fromY = y === 0 ? y : y - 1;
      if (y + ky * decks === 10 && ky === 1) toY = y + ky * decks;
      else if (y + ky * decks < 10 && ky === 1) toY = y + ky * decks + 1;
      else if (y === 9 && ky === 0) toY = y + 1;
      else if (y < 9 && ky === 0) toY = y + 2;

      if (toX === undefined || toY === undefined) return false;

      if (
        board
          .slice(fromX, toX)
          .filter((arr: any) => arr.slice(fromY, toY).includes(1)).length > 0
      ) {
        return false;
      }

      return true;
    };

    const getCoordsDecks: any = (decks: number) => {
      // kx == 0 и ky == 1 — корабль расположен горизонтально,
      // kx == 1 и ky == 0 - вертикально.

      let kx = getRandom(1),
        ky = kx === 0 ? 1 : 0,
        x,
        y;

      if (kx === 0) {
        x = getRandom(9);
        y = getRandom(10 - decks);
      } else {
        x = getRandom(10 - decks);
        y = getRandom(9);
      }

      const obj = { x, y, kx, ky };

      const result = checkLocationShip(obj, decks);

      if (!result) return getCoordsDecks(decks);

      return obj;
    };

    const boats = Object.entries(allShip);

    for (let i = 0; i < boats.length; i++) {
      let count = boats[i][1][0];
      let decks = boats[i][1][1];

      for (let j = 0; j < count; j++) {
        let options = getCoordsDecks(decks);
        const { x, y, kx, ky } = options;
        const createShip = (
          x: number,
          y: number,
          kx: number,
          ky: number,
          decks: number
        ) => {
          let k = 0;
          while (k < decks) {
            let i = x + k * kx,
              j = y + k * ky;

            board[i][j] = 1;
            k++;
          }
        };
        createShip(x, y, kx, ky, decks);
      }
    }
    return board;
  };

  const array = ["fieldHuman", "fieldComputer"];

  const placmentOfShip = (board: any) => {
    showButton();
    handleUpdateBoard(randomArrangement(board), array[0]);
  };

  const startingGame = (board: any) => {
    handleUpdateBoard(randomArrangement(board), array[1]);
    startGame();
  };

  return (
    <div id="instruction" className={classNames(style.root, "instruction")}>
      <button
        className={classNames(
          "link",
          { show: !isShow },
          { hide: isShow },
          "btn"
        )}
        onClick={() => placmentOfShip(squaresHuman)}
      >
        Раставить случайным образом корабли
      </button>
      <button
        className={classNames(
          "btn",

          "link",
          { show: isShow },
          { hide: isStart || !isShow }
        )}
        onClick={() => startingGame(squaresComputer)}
      >
        Играть
      </button>
    </div>
  );
};

export default RandomButtonShips;
