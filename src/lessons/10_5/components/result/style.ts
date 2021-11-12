import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .textGreen": {
      color: "green",
      display: "block",
    },
    "& .textRed": {
      color: "red",
      display: "block",
    },
    "& .hide": {
      display: "none",
    },
  },
});

export default useStyles;
