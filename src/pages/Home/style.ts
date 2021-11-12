import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    backgroundColor: "#000",
    position: "relative",
    width: "100%",
    height: "100vh",

    "& .main-title": {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%)",
      color: "#fff",
      fontWeight: "700",
      fontSize: "48px",
    },
  },
});

export default useStyles;
