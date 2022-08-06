import { useState } from "react";
import "./styles.scss";
import profile from "../../assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div className="header">
      <ul>
        <li>
          <a href="#a">Home</a>
        </li>
        <li>
          <a href="#a">Users</a>
        </li>
        <li>
          <a href="#a">Items</a>
        </li>
        <li>
          <a href="#a">Reports</a>
        </li>
        <li>
          <a href="#a">Todo</a>
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
          <a href="#a" onClick={() => setOpenDropdown(!openDropdown)}>
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            <span>5</span>
            <ul className={openDropdown ? "dropdown visible" : "dropdown"}>
              <li>
                <a href="#a">Home</a>
              </li>
              <li>
                <a href="#a">Users</a>
              </li>
              <li>
                <a href="#a">Items</a>
              </li>
              <li>
                <a href="#a">Reports</a>
              </li>
              <li>
                <a href="#a">Todo</a>
              </li>
            </ul>
          </a>
        </li>
        <li>
          <a href="#a">
            <img src={profile} alt="profile" />
          </a>
        </li>
      </ul>
    </div>
  );
}
