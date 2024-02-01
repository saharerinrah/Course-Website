import React from 'react';
import SideBar from './sidebar.js';
import '../styling/App.css';
import { Link } from 'react-router-dom';

function Quiz () {

    return (
        <div className = "quiz">
            <SideBar/>
            <ul>
            <li><Link to="/topic0" style={{ color: 'black' }}>Topic 0 Quiz</Link></li>
            <li><Link to="/topic1" style={{ color: 'black' }}>Topic 1 Quiz</Link></li>
            </ul>            
      </div>
    )
}

export default Quiz
  
    

