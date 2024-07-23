import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../contexts/authContext";
import { Navigate, Link } from "react-router-dom";
import "./dashboard.css";
import Header from "../app-components/header";

import plusIcon from "../../assets/icons/add.svg";

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

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
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/Timelines/login" />;
  }
  return (
    <>
      <div className="main">
        <Header>
          <div>
            Witaj <label className="username">eustachy@motyka.pl</label>
          </div>

          <button onClick={handleLogout}>Log Out</button>
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
