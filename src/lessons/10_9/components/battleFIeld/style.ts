import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    boxShadow: "10px 10px 10px #000040",
    "& .field": {
      width: "300px",
      height: "330px",
      display: "flex",
      flexWrap: "wrap",
    },
    "& .fieldHuman": {
      position: "relitive",
      "& .left-side": {
        position: "absolute",
        left: "-30px",
      },
    },

    "& .fieldComputer": {
      position: "relitive",
      "& .left-side": {
        position: "absolute",
        left: "530px",
      },
    },
  },
});

export default useStyles;
