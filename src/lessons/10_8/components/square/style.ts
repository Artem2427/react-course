import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "&.square": {
      width: "100px",
      height: "100px",
      backgroundColor: "#fff",
      border: "1px solid #222222",
      cursor: "pointer",
      outline: "none",
      fontSize: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",

      "&:hover": {
        backgroundColor: "#f0f0f0",
        transition: ".3 all ease",
      },
    },
  },
});

export default useStyles;
