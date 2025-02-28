import React from "react";

const Header = () => {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link " href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Search
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Profile
          </a>
        </li>
      </ul>
    </>
  );
};

export default Header;
