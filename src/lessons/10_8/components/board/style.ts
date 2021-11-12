import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "&.board": {
      width: "300px",
      height: "300px",
      backgroundColor: "red",
      display: "flex",
      flexWrap: "wrap",
    },
  },
});

export default useStyles;
