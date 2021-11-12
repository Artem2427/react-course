import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    margin: "0 auto",
    width: "640px",
    fontSize: "18px",
    "& .title": {
      textAlign: "center",
      fontSize: "40px",
      fontWeight: "900",
    },
    "& .list": {
      listStyle: "none",
    },
  },
});

export default useStyles;
