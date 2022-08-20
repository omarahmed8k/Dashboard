import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

export default function Table() {
  let dataTable = [
    {
      id: 1,
      name: "Omar Abdelrahman",
      age: "22",
      type: "Male",
      city: "Alexandria",
      status: "Active",
    },
    {
      id: 2,
      name: "Steve Smith",
      age: "26",
      type: "Female",
      city: "Paris",
      status: "InActive",
    },
    {
      id: 3,
      name: "John Doe",
      age: "32",
      type: "Male",
      city: "New York",
      status: "Active",
    },
    {
      id: 4,
      name: "Steve Smith",
      age: "26",
      type: "Female",
      city: "Paris",
      status: "InActive",
    },
    {
      id: 6,
      name: "Omar Abdelrahman",
      age: "22",
      type: "Male",
      city: "Alexandria",
      status: "Active",
    },
    {
      id: 5,
      name: "John Doe",
      age: "32",
      type: "Female",
      city: "New York",
      status: "Active",
    },
  ];

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>N</th>
            <th>Name</th>
            <th>Age</th>
            <th>Type</th>
            <th>City</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.type}</td>
                <td>{item.city}</td>
                <td className={`status ${item.status}`}>
                  <span>{item.status}</span>
                </td>
                <td className="actions">
                  <span className="edit">
                    <FontAwesomeIcon icon="fa-solid fa-pen" />
                  </span>
                  <span className="delete">
                    <FontAwesomeIcon icon="fa-solid fa-trash" />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
