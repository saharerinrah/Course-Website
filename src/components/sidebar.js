import React from 'react';
import '../styling/sidebar.css';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="sidebar bg-dark">
      <ul className="list-unstyled components">
        <li className="active">
          <Link to="/info">Course Information</Link>
        </li>
        <li>
          <Link to="/content">Course Content</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
        <li>
          <Link to="/lab">Laboratory</Link>
        </li>
        <li>
          <Link to="/discussion">Discussion</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
