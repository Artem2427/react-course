import { Routes, Route } from "react-router-dom";
import React, { FC } from "react";
import Home from "../../pages/Home";

import Lesson9_8 from "../9_8/index";
import Lesson10_1 from "../10_1/index";
import Lesson10_2 from "../10_2/index";
import Lesson10_3 from "../10_3/index";
import Lesson10_4 from "../10_4/index";
import Lesson10_5 from "../10_5/index";
import Lesson10_6 from "../10_6/index";
import Lesson10_7 from "../10_7/index";
import Lesson10_8 from "../10_8/index";
import Lesson10_9 from "../10_9/index";

const Navigation: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/lesson_9_8" element={<Lesson9_8 />} />
    <Route path="/lesson_10_1" element={<Lesson10_1 />} />
    <Route path="/lesson_10_2" element={<Lesson10_2 />} />
    <Route path="/lesson_10_3" element={<Lesson10_3 />} />
    <Route path="/lesson_10_4" element={<Lesson10_4 />} />
    <Route path="/lesson_10_5" element={<Lesson10_5 />} />
    <Route path="/lesson_10_6" element={<Lesson10_6 />} />
    <Route path="/lesson_10_7" element={<Lesson10_7 />} />
    <Route path="/lesson_10_8" element={<Lesson10_8 />} />
    <Route path="/lesson_10_9" element={<Lesson10_9 />} />
  </Routes>
);

export default Navigation;
