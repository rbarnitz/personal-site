import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const user1 = 'test';

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Richard Barnitz</h2>
      </Link>
      <div>
        <Link className="navLink" to="/user">
          Home
        </Link>

        <Link className="navLink" to="/portraits">
          Portraits
        </Link>

        <Link className="navLink" to="/postcards">
          Postcards
        </Link>

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
