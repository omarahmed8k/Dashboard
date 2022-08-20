import { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/">Items</Link>
        </li>
        <li>
          <Link to="/">Reports</Link>
        </li>
        <li>
          <Link to="/">Todo</Link>
        </li>
      </ul>
      <ul>
        <li>
          <div className="input-control">
            <input
              placeholder="Search"
              className={openSearch ? "open-search" : null}
              type="text"
            />
            <FontAwesomeIcon
              onClick={() => setOpenSearch(!openSearch)}
              icon="fa-solid fa-magnifying-glass"
            />
          </div>
        </li>
        <li>
          <Link to="/" onClick={() => setOpenDropdown(!openDropdown)}>
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            <span>5</span>
            <ul className={openDropdown ? "dropdown visible" : "dropdown"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Users</Link>
              </li>
              <li>
                <Link to="/">Items</Link>
              </li>
              <li>
                <Link to="/">Reports</Link>
              </li>
              <li>
                <Link to="/">Todo</Link>
              </li>
            </ul>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src={profile} alt="profile" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
