import { Link } from "react-router-dom";
import "./dashboard.css";
import Header from "../app-components/header";
function Dashboard() {
  return (
    <>
      <div className="main">
        <Header></Header>
        Wybierz timeline
        <div className="timelines-box">
          <button className="add-timeline-button">Dodaj timeline</button>
          <div className="timeline-button-box">
            <Link to={"timeline"}>
              <button className="timeline-button"></button>
            </Link>
            Timeline 1
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
