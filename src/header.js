import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const listName1 = ['Home', 'Skill'];
  const listName2 = ['Edu', 'Exp'];

  return (
    <div className="header">
      {listName1.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">
              <p>{name}</p>
            </div>
          </Link>
        );
      })}
      <div id="brand-name">
        <h1>Anandiwa</h1>
      </div>
      {listName2.map((name) => {
        return (
          <Link to={`/${name}`} key={name}>
            <div className="menu">
              <p>{name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
