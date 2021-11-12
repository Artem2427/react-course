import classNames from "classnames";
import { FC } from "react";

import useStyles from "./style";

interface NavigationProps {
  today: Date;
  daysOfMonth: number;
  handleChange: (date: Date) => void;
}

const Navigation: FC<NavigationProps> = ({ handleChange, today }) => {
  const classes = useStyles();

  const prevMonth = () => {
    if (today.getMonth() === 0) {
      handleChange(new Date(today.getFullYear() - 1, 11, 1));
    } else {
      handleChange(new Date(today.getFullYear(), today.getMonth() - 1, 1));
    }
  };

  const nextMonth = () => {
    if (today.getMonth() === 11) {
      handleChange(new Date(today.getFullYear() + 1, 0, 1));
    } else {
      handleChange(new Date(today.getFullYear(), today.getMonth() + 1, 1));
    }
  };

  const returnCurrentDate = () => {
    const newDate = new Date();
    handleChange(
      new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate())
    );
  };

  return (
    <div className={classNames(classes.root)}>
      <button onClick={prevMonth} className="nav-btn">
        Prev
      </button>
      <button onClick={nextMonth} className="nav-btn">
        Next
      </button>
      <button className="nav-btn btn-current" onClick={returnCurrentDate}>
        Current day
      </button>
    </div>
  );
};

export default Navigation;
