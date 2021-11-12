import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .show": {
      display: "inline-block",
    },
    "& .hide": {
      display: "none",
    },
    "& .done": {
      textDecoration: "line-through",
    },
  },
});

export default useStyles;
