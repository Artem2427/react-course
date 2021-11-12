import { FC } from "react";

import useStyles from "./style";

const Home: FC = () => {
  const style = useStyles();

  return (
    <div className={style.root}>
      <h2 className="main-title">Home page</h2>
    </div>
  );
};

export default Home;
