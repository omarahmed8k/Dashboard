import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export default function TransCard() {
  return (
    <div className="trans-card">
      <ul className="trans-header">
        <li>
          <h3>Transactions</h3>
        </li>
        <li>
          <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
        </li>
      </ul>
      {/* Rows */}
      <ul className="trans-body">
        <li className="trans-content">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-wallet" />
          </span>
          <div>
            <h4>Title</h4>
            <p>Text</p>
          </div>
        </li>
        <li className="trans-price down">-50$</li>
      </ul>
      <ul className="trans-body">
        <li className="trans-content">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-shield" />
          </span>
          <div>
            <h4>Title</h4>
            <p>Text</p>
          </div>
        </li>
        <li className="trans-price up">-50$</li>
      </ul>
      <ul className="trans-body">
        <li className="trans-content">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-key" />
          </span>
          <div>
            <h4>Title</h4>
            <p>Text</p>
          </div>
        </li>
        <li className="trans-price down">-50$</li>
      </ul>
      <ul className="trans-body">
        <li className="trans-content">
          <span>
            <FontAwesomeIcon icon="fa-solid fa-file" />
          </span>
          <div>
            <h4>Title</h4>
            <p>Text</p>
          </div>
        </li>
        <li className="trans-price up">-50$</li>
      </ul>
    </div>
  );
}
