import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#f5e203;",
    "&.wrap": {
      // width: "1024px",
      margin: "0 auto",
      padding: "20px",
      "& .game__title": {
        fontSize: "48px",
        fontWeight: "700",
        marginBottom: "30px",
        textAlign: "center",
      },
      "& .battlefield": {
        display: "flex",
        justifyContent: "space-between",
        width: "860px",
        position: "relative",
        margin: "0 auto",
      },
      "& .winner": {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%)",
        fontSize: "30px",
        textShadow: "2px 2px 4px #000",
      },
      "& .btn": {
        minWidth: "200px",
        height: "35px",
        backgroundColor: "#222222",
        marginBottom: "25px",
        cursor: "pointer",
        outline: "none",
        border: "1px solid #fff",
        color: "#fff",
        fontWeight: "700",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#222222",
          transition: ".3s all ease",
        },
      },
      "& .btn-restart": {
        display: "block",
        marginTop: "30px",
        margin: "0 auto",
      },
    },
  },
});

export default useStyles;
