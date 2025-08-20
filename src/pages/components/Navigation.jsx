import { NavLink } from "react-router";

export default function Navigation() {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <NavLink to="/" style={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={activeStyle}>
        About
      </NavLink>
      <NavLink to="/contact" style={activeStyle}>
        Contact
      </NavLink>
      <NavLink to="/products" style={activeStyle}>
        Products
      </NavLink>
    </nav>
  );
}
