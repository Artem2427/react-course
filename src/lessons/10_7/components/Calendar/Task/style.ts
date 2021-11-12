import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .done": {
      textDecoration: "line-through",
    },
    "& .show": {
      display: "inline-block",
    },
    "& .btn-update": {
      // padding: "5px, 10px",
      display: "inline-block",
      height: "50px",
      width: "70%",
    },
    "& .wrapper": {
      display: "flex",
      justifyContent: "space-around",
    },
    "& .hide": {
      display: "none",
    },

    "& .item__content": {
      fontSize: "18px",
      wordBreak: "break-all",
    },
  },
});

export default useStyles;
