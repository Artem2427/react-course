import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .nav-btn": {
      backgroundColor: "rgba(207, 175, 224, 0.8)",
      boxSizing: "border-box",
      border: "2px solid rgba(0,0,0,0.5)",
      marginRight: "20px",
      display: "inline-block",
      padding: "5px 10px",
      transition: "all 0.5s ease 0s",
      borderRadius: "5px",
      fontWeight: "700",
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "rgba(207, 175, 224, 1)",
        color: "#fff",
        // border: "0px",
      },
      "&:active": {
        border: "1px",
      },
    },
    "& .btn-current": {
      backgroundColor: "rgba(69, 23, 94, 0.5)",
      "&:hover": {
        backgroundColor: "rgba(69, 23, 94, 1)",
      },
    },
  },
});

export default useStyles;
