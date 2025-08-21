import { NavLink } from "react-router";

export default function Navigation() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: "none",
      color: isActive ? "red" : "black",
      borderBottom: isActive ? "1px solid red" : "none",
      paddingBottom: "0.25rem",
    };
  };

  return (
    <div>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
        <li>
          <NavLink to="/" style={navLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={navLinkStyles}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={navLinkStyles}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" style={navLinkStyles}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/harsimran" style={navLinkStyles}>
            Harsimran
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
