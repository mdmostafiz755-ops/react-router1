import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#2563eb" : "#111827",
    fontWeight: isActive ? "600" : "400",
  });

  return (
    <header
      style={{
        padding: "15px 30px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>This is header</h2>

      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/mobiles" style={linkStyle}>
              Mobiles
            </NavLink>
          </li>
          <li>
            <NavLink to="/laptop" style={linkStyle}>
              Laptop
            </NavLink>
          </li>
          <li>
            <NavLink to="/user" style={linkStyle}>
              User
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo" style={linkStyle}>
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink to="/post" style={linkStyle}>
              posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;