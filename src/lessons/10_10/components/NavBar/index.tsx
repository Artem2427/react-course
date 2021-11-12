import { NavLink } from "react-router-dom";

import useStyles from "./style";

const NavBar = () => {
  const style = useStyles();

  return (
    <div className={style.root}>
      <ul className="nav-panel">
        <li className="nav-panel__item">
          <NavLink to="/">
            <span className="nav-panel__link">Home</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_9_8">
            <span className="nav-panel__link">Lesson 9_8</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_10_1">
            <span className="nav-panel__link">Lesson 10_1</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_10_2">
            <span className="nav-panel__link">Lesson 10_2</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_10_3">
            <span className="nav-panel__link">Lesson 10_3</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_10_4">
            <span className="nav-panel__link">Lesson 10_4</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_10_5">
            <span className="nav-panel__link">Lesson 10_5</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_10_6">
            <span className="nav-panel__link">Lesson 10_6</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_10_7">
            <span className="nav-panel__link">Lesson 10_7</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_10_8">
            <span className="nav-panel__link">Lesson 10_8</span>
          </NavLink>
        </li>
        <li className="nav-panel__item">
          <NavLink to="/lesson_10_9">
            <span className="nav-panel__link">Lesson 10_9</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
