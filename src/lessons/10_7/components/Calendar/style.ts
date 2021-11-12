import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    // '& .'
    display: "flex",
    flexDirection: "column",
    marginLeft: "50%",
    transform: "translateX(-50%)",
    boxSizing: "border-box",
    "& .organizer": {
      margin: "0 auto",
      " & td": {
        width: "40px",
        height: "40px",
      },
      "&__item": {
        fontWeight: "700",
      },
      "& .focus:hover": {
        boxSizing: "border-box",
        cursor: "pointer",
        borderRadius: "50%",
        backgroundColor: "lightblue",
      },

      "& .on_focus": {
        borderRadius: "50%",
        border: "2px solid blue",
        boxSizing: "border-box",
      },

      "& .active": {
        borderRadius: "50%",
        border: "2px solid blue",
        backgroundColor: "blue",
        boxSizing: "border-box",
        color: "#fff",
      },
    },
  },
});

export default useStyles;
