import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    marginTop: "10px",

    "& .block ": {
      display: "block",
    },
  },
});

export default useStyles;
