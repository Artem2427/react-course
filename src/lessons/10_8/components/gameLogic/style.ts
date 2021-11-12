import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "&.wrapper": {
      minHeight: "100vh",
      width: "100%",
      backgroundColor: "#222222",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },

    "& .start__btn": {
      width: "200px",
      height: "35px",
      backgroundColor: "#222222",
      marginBottom: "25px",
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
    "& .game__info": {
      fontSize: "36px",
      color: "#fff",
      marginTop: "25px",
    },
  },
});

export default useStyles;
