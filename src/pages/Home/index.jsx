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
      title: "Title",
      text: "Text",
      svg: <FontAwesomeIcon icon="user" />,
      classColor: "card-red",
    },
    {
      title: "Title",
      text: "Text",
      svg: <FontAwesomeIcon icon="user" />,
      classColor: "card-blue",
    },
    {
      title: "Title",
      text: "Text",
      svg: <FontAwesomeIcon icon="user" />,
      classColor: "card-green",
    },
    {
      title: "Title",
      text: "Text",
      svg: <FontAwesomeIcon icon="user" />,
      classColor: "card-purple",
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
          <Table />
        </li>
        <li className="transaction-card">
          <TransCard />
        </li>
      </ul>
    </>
  );
}
