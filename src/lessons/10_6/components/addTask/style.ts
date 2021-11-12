import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    marginTop: "50px",
    textAlign: "center",
    "& .sub-title": {
      textAlign: "center",
    },
  },
});

export default useStyles;
