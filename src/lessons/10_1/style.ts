import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    "& .table": {
      borderCollapse: "collapse",
      width: "70%",
      "& thead": {
        "& td": {
          textAlign: "center",
        },
      },
      "& tbody": {
        "& td": {
          textAlign: "center",
          height: "40px",
          border: "1px solid #000",
        },
      },
    },
  },
});

export default useStyles;
