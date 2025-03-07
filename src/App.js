import React, { useEffect, useState } from 'react';
// import "./styles.scss";
import Header from "./Components/Header";
import Play from "./Components/Play";
import Game from "./Components/Game";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  const [myChoice, setmyChoice] = useState("");
  const [score, setScore] = useState(0);
  return (
    <div>
      <div className='container'>
        <Header score={score} />
        <Switch>
          <Route exact path="/">
            <Play setmyChoice={setmyChoice} />
          </Route>
          <Route path="/game">
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
