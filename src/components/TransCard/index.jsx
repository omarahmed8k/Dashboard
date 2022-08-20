import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Shirt } from "./../../assets/images/shirt.svg";
import { ReactComponent as TShirt } from "./../../assets/images/tshirt.svg";
import { ReactComponent as Jacket } from "./../../assets/images/jacket.svg";
import { ReactComponent as Shoes } from "./../../assets/images/shoes.svg";
import "./styles.scss";

export default function TransCard() {
  return (
    <div className="trans-card">
      <ul className="trans-header">
        <li>
          <h3>Today</h3>
        </li>
        <li>
          {/* Date */}
          <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
        </li>
      </ul>
      {/* Rows */}
      <div className="trans-container">
        <ul className="trans-body">
          <li className="trans-content">
            <span>
              <TShirt />
            </span>
            <div>
              <h4>TShirt - S</h4>
              <p>1 Unit</p>
            </div>
          </li>
          <li className="trans-price up">+30$</li>
        </ul>
        <ul className="trans-body">
          <li className="trans-content">
            <span>
              <Shirt />
            </span>
            <div>
              <h4>Shirt - L</h4>
              <p>5 Unit</p>
            </div>
          </li>
          <li className="trans-price up">+90$</li>
        </ul>
        <ul className="trans-body">
          <li className="trans-content">
            <span>
              <Jacket />
            </span>
            <div>
              <h4>Jacket - XL</h4>
              <p>2 Unit</p>
            </div>
          </li>
          <li className="trans-price up">+65$</li>
        </ul>
        <ul className="trans-body">
          <li className="trans-content">
            <span>
              <Shoes />
            </span>
            <div>
              <h4>Shoes - 45</h4>
              <p>1 Unit</p>
            </div>
          </li>
          <li className="trans-price up">+120$</li>
        </ul>
        <ul className="trans-body">
          <li className="trans-content">
            <span>
              <TShirt />
            </span>
            <div>
              <h4>TShirt - S</h4>
              <p>1 Unit</p>
            </div>
          </li>
          <li className="trans-price up">+30$</li>
        </ul>
        <ul className="trans-body">
          <li className="trans-content">
            <span>
              <Shirt />
            </span>
            <div>
              <h4>Shirt - L</h4>
              <p>5 Unit</p>
            </div>
          </li>
          <li className="trans-price up">+90$</li>
        </ul>
        <ul className="trans-body">
          <li className="trans-content">
            <span>
              <Jacket />
            </span>
            <div>
              <h4>Jacket - XL</h4>
              <p>2 Unit</p>
            </div>
          </li>
          <li className="trans-price up">+65$</li>
        </ul>
        <ul className="trans-body">
          <li className="trans-content">
            <span>
              <Shoes />
            </span>
            <div>
              <h4>Shoes - 45</h4>
              <p>1 Unit</p>
            </div>
          </li>
          <li className="trans-price up">+120$</li>
        </ul>
      </div>
    </div>
  );
}
