import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .hide": {
      display: "none",
    },
  },
});

export default useStyles;
