import "./style.scss";
export default function Cards({
  title = "",
  text = "",
  svg = "",
  classColor = "",
}) {
  return (
    <>
      <div className="card">
        <ul>
          <li className="card-content">
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
          <li className={`card-svg ${classColor}`}>{svg}</li>
        </ul>
      </div>
    </>
  );
}
