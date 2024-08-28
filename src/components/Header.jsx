import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          to="/vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
