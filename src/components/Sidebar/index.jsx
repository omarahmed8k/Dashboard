import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={`menu-open ${open ? "show" : ""}`}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
      </button>
      <div className={`sidebar ${open ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-house" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-message" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-circle-check" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-file-invoice" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-file" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-user" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
