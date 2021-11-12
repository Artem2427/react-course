import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .nav-panel": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#bdabab",

      "&__item": {
        fontStyle: "italic",
        marginRight: "20px",
        pagging: "20px 0px",
        "&:last-child": {
          marginRight: "0px",
        },
      },

      "&__link": {
        color: "#fff",
        fontSize: "18px",
        fontWeight: "700",
      },
      "& .active": {
        display: "block",
        padding: "5px 10px",
        borderRadius: "5px",
        backgroundColor: "#123",
        "& .nav-panel__link": {
          color: "#fff",
        },
      },
    },
  },
});

export default useStyles;
