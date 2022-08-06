import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-house" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-message" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-circle-check" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-file-invoice" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-file" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-user" />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
          </a>
        </li>
      </ul>
    </div>
  );
}
