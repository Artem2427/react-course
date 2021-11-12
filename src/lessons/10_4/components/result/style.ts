import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .textGreen": {
      color: "green",
    },
    "& .textRed": {
      color: "red",
    },
    "& .hide": {
      display: "none",
    },
  },
});

export default useStyles;
