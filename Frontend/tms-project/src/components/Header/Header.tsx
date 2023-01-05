import "./Header.css";
import Logo from "../../assets/logo.gif";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <img
        src={Logo}
        alt="4-finance-logo"
        className="logo-img"
        onClick={() => navigate("/")}
      />

      <nav>
        <ul className="menu-ul">
          <li
            className="list-item"
            onClick={() => navigate("/teachers-management/")}
          >
            Teachers Management
          </li>
          <li
            className="list-item"
            onClick={() => navigate("/students-management/")}
          >
            Students Management
          </li>
          <li
            className="list-item"
            onClick={() => navigate("/courses-management/")}
          >
            Courses Management
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
