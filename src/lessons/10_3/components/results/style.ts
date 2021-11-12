import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .textGreen": {
      color: "green",
    },
    "& .textRed": {
      color: "red",
    },
  },
});

export default useStyles;
