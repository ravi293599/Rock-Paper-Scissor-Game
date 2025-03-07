import React, {useState} from 'react'
import Model from './Model';
import { Link } from 'react-router-dom';


const Footer = () => {
  const [model, SetModel] = useState(false);
  const toggle = () =>{
    SetModel(!model);
  }
  return (
    <>
      <footer className="footer">
        <div className='attribution'>
          Coded by <Link to="/">Ravi Sharma</Link>
        </div>
        <button className='rules' onClick={toggle}>Rules</button>
      </footer>
      {
        model?
        <Model toggle={toggle} />:null
      }
    </>
  )
}

export default Footer