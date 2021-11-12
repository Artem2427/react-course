import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .link": {
      display: "inline-block",
      margin: "0 auto",
      marginTop: "50px",
      fontSize: "20px",
      fontStyle: "italic",
      cursor: "pointer",
    },
    "& .show": {
      display: "block",
    },
    "& .hide": {
      display: "none",
    },
    "& .btn": {
      minWidth: "200px",
      height: "35px",
      borderRadius: "10px",
      backgroundColor: "#222222",
      cursor: "pointer",
      outline: "none",
      border: "1px solid #fff",
      color: "#fff",
      fontWeight: "700",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#222222",
        transition: ".3s all ease",
      },
    },
  },
});

export default useStyles;
