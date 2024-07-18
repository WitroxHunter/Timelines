import { Link } from "react-router-dom";
function Dashboard() {
  return (
    <>
      <div className="main">
        Wybierz timeline
        <div className="timelines-box">
          <button className="add-timeline-button">Dodaj timeline</button>
          <Link to={"timeline"}>
            <button>Nawiguj do timeline testowego</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
