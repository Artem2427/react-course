import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    "& .panel__text": {
      border: "1px solid #000",
      display: "inline-block",
      width: "70%",
    },
    "& .panel__btn:hover": {
      backgroundColor: "rgba(102, 132, 196, 1);",
    },
  },
});

export default useStyle;
