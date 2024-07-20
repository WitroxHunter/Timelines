import { Link } from "react-router-dom";
import "./dashboard.css";
import Header from "../app-components/header";

import plusIcon from "../../assets/icons/add_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg";

const TimelineButton = (props) => {
  return (
    <>
      <div className="timeline-button-box">
        <Link to={"timeline"}>
          <button className="timeline-button"></button>

          <div className="timeline-file-name">{props.fileName}</div>
          <div className="timeline-edited">Edited {props.edited} ago</div>
        </Link>
      </div>
    </>
  );
};

const TimelineButtonAdd = (props) => {
  return (
    <>
      <button className="add-timeline-button">
        <div className="add-timeline-icon">
          <img src={plusIcon} />
        </div>
        <div>Create a new file</div>
      </button>
      {/* <button className="add-timeline-button">Dodaj timeline</button> */}
    </>
  );
};

function Dashboard() {
  return (
    <>
      <div className="main">
        <Header>
          <div>
            Witaj <label className="username">eustachy@motyka.pl</label>
          </div>

          <button>Log Out</button>
          {/* onClick={handleLogout} */}
        </Header>
        <div className="dashboard-wrapper">
          <div className="dashboard-user">
            <h3>User panel</h3>
            <div style={{ textAlign: "justify" }}>
              Szambo lub dół chambeau (rzekomo od fr. nazwiska Chambeau) –
              podziemny zbiornik, zazwyczaj bezodpływowy, wykonany np. z betonu,
              do którego odprowadzane są ścieki z domowych urządzeń
              kanalizacyjnych. Szamba mogą być podłączone do systemu kanalizacji
              miejskiej, gdzie stanowią rodzaj zbiornika retencyjnego
              zapobiegającego zatykaniu się uzbrojenia podziemnego. W przypadku
              braku takiego połączenia budowane są pojemniejsze szamba
              bezodpływowe, z których nieczystości są wywożone przez tabor
              asenizacyjny bezpośrednio do punktów zlewnych. Zgodnie z
              rozporządzeniem Ministra Infrastruktury z 12 kwietnia 2002 r. w
              sprawie warunków technicznych, jakim powinny odpowiadać budynki i
              ich usytuowanie, zbiorniki bezodpływowe mogą być stosowane tylko
              na działkach budowlanych niemających możliwości przyłączenia do
              sieci kanalizacyjnej.
            </div>

            <img
              style={{ width: "100%" }}
              src="https://media.discordapp.net/attachments/1241105566856646656/1262902653533425755/zastrzel.gif?ex=669ce680&is=669b9500&hm=bdef14ade291c8bc7fb1fd85322be1f6691c4f4fc61cfd6adf9a175a283937ae&=&width=537&height=671"
            />
          </div>

          <div className="dashboard-timelines">
            <h1>My lifelines</h1>
            <div className="timelines-box">
              <TimelineButtonAdd />
              <TimelineButton fileName={"My timeline 1"} edited={"2 hours"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
