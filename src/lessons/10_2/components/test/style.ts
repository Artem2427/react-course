import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .hide": {
      display: "none",
    },
    "& .textGreen": {
      color: "green",
    },
    "& .textRed": {
      color: "red",
    },
  },
});

export default useStyles;
