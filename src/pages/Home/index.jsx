import "./styles.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import Cards from "../../components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TransCard from "../../components/TransCard";

export default function Home() {
  let cards = [
    {
      title: "Products",
      text: "67",
      svg: <FontAwesomeIcon icon="fa-solid fa-shopping-cart" />,
      classColor: "card-purple",
    },
    {
      title: "Transactions",
      text: "1276",
      svg: <FontAwesomeIcon icon="fa-solid fa-receipt" />,
      classColor: "card-blue",
    },
    {
      title: "Finance",
      text: "10,000 L.E",
      svg: <FontAwesomeIcon icon="chart-line" />,
      classColor: "card-red",
    },
    {
      title: "Customers",
      text: "745",
      svg: <FontAwesomeIcon icon="fa-solid fa-users" />,
      classColor: "card-green",
    },
  ];

  return (
    <>
      <Sidebar />
      <Header />
      <ul className="cards-ul">
        {cards.map((card, index) => {
          return (
            <li key={index}>
              <Cards
                title={card.title}
                text={card.text}
                svg={card.svg}
                classColor={card.classColor}
              />
            </li>
          );
        })}
      </ul>
      <ul className="table-ul">
        <li className="table-card">
          <h3 className="title">
            <FontAwesomeIcon icon="fa-solid fa-users" />
            Customers
          </h3>
          <Table />
        </li>
        <li className="transaction-card">
          <h3 className="title">
            <FontAwesomeIcon icon="fa-solid fa-receipt" />
            Transactions
          </h3>
          <TransCard />
        </li>
      </ul>
    </>
  );
}
