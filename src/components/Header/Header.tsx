import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="Header">
      <div className="menubar">
        <FontAwesomeIcon icon={faBars} />{" "}
      </div>
      <div className="title">
        <h1>Contacts App</h1>
      </div>
    </div>
  );
}

export default Header;
