import React ,{useState} from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Game = ({ score, myChoice, setScore }) => {

  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);

  const newHousePick =() =>{
    const choices = ["paper","scissors","rock"];
    setHouse(choices[Math.floor(Math.random()*3)]);
  }

  const Result = () =>{
    if(myChoice === "rock" && house === "scissors"){
      setPlayerWin("win");
      setScore(score+1);
    }
    else if(myChoice === "scissors" && house === "rock"){
      setPlayerWin("lose");
      setScore(score-1);
    }
    else if(myChoice === "scissors" && house === "paper"){
      setPlayerWin("win");
      setScore(score+1);
    }
    else if(myChoice === "paper" && house === "scissors"){
      setPlayerWin("lose");
      setScore(score-1);
    }
    else if(myChoice === "paper" && house === "rock"){
      setPlayerWin("win");
      setScore(score+1);
    }
    else if(myChoice === "rock" && house === "paper"){
      setPlayerWin("lose");
      setScore(score-1);
    }
    else{
      setPlayerWin("draw");
    }
  }

  useEffect(() => {
    const timer = counter>0 ? setInterval(()=> {
      setCounter(counter - 1);
    }, 1000): Result();
    return() =>{
      clearInterval(timer);
    };
  }, [counter, house, Result]);

  useEffect(() =>{
    newHousePick();
  }, []);
  return (
    <div className='game'>
      <div className='game__you'>
        <span className='text'>You Picked</span>
        <div className={`icon icon-${myChoice} ${playerWin === "win" ? `icon icon-${myChoice}--winner`:''}`}></div>
      </div>
      { (playerWin !== "") && <div className='game__play'>
      <span className='text'>{playerWin === "win" ? "You Win" :playerWin === "lose" ? "You Lose": "Its's a Draw"}</span>
      <Link to="/" className='play-again' onClick = { () => setHouse() }>Play Again</Link>
      </div>
      }
       
       <div className='game__house'>
        <span className='text'>House Picked</span>
        {
        counter === 0 ? <div
           className={`icon icon-${house} ${
            playerWin === "lose" ? `icon icon-${house}--winner`:""
        }`}
          ></div>: 
            <div className='counter'>{counter}</div>
          
        }
      </div>
    </div>
  )
}

export default Game
/*
My Choice : {myChoice} <br/>
      House Choice : {house} <br/>

      Result:
      { playerWin === "win" && <h2>You Win</h2> }
      { playerWin === "lose" && <h2>You Lose</h2> }
      { playerWin === "draw" && <h2>Draw</h2> }
      <Link to="/" onClick = { () => setHouse() }>Play Again</Link>
*/