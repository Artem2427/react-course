import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "&.empty": {
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#f0f0f0",
        transition: ".3 all ease",
      },
    },

    "&.ship": {
      backgroundColor: "#000",
    },
    "&.fire-cell": {
      background: "rgba(181, 173,  244,1)",
    },
    "&.hiting-ship": {
      backgroundColor: "red",
    },
    "&.square": {
      width: "30px",
      height: "30px",
      border: "0.5px solid #222222",
      boxSizing: "border-box",
      cursor: "pointer",
      outline: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "&.none-border-top": {
      borderTop: "none",
      cursor: "none",
      backgroundColor: "#fff",
      "&:hover": {
        backgroundColor: "#fff",
        cursor: "not-allowed",
      },
    },

    "&.none-border-left": {
      borderLeft: "none",
      backgroundColor: "#fff",
      cursor: "none",
      "&:first-child": {
        borderTop: "none",
      },
      "&:hover": {
        backgroundColor: "#fff",
        cursor: "not-allowed",
      },
    },
  },
});

export default useStyles;
