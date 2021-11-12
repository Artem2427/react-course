import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./lessons/10_10/components/NavBar";

import Navigation from "./lessons/10_10";

function App() {
  return (
    <Router>
      <NavBar />
      <Navigation />
    </Router>
  );
}

export default App;
