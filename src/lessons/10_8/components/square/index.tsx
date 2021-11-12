import { FC } from "react";

import classNames from "classnames";
import useStyles from "./style";

interface SquareProps {
  value: string;
  handleClickOnButton: () => void;
}

const Square: FC<SquareProps> = ({ value, handleClickOnButton }) => {
  const classes = useStyles();

  return (
    <button
      className={classNames(classes.root, "square")}
      onClick={handleClickOnButton}
    >
      {value}
    </button>
  );
};

export default Square;
