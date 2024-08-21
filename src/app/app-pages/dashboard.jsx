import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../contexts/authContext";
import { Navigate, Link } from "react-router-dom";
import "./dashboard.css";
import Header from "../app-components/header";
import logo from "../../assets/images/Logo.png";
import { useEffect, useState } from "react";
import { getUserData } from "../../firebase/auth";

import plusIcon from "../../assets/icons/plus.svg";

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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const data = await getUserData(currentUser.uid);
        setUserData(data);
      }
    };

    fetchUserData();
  }, [currentUser]);

  if (!currentUser) {
    return <Navigate to="/Timelines/login" />;
  }
  return (
    <>
      <div className="main">
        <Header>
          <div className="header-logo">
            <img src={logo} style={{ width: 24 }} />
            <div>Lifelines</div>
          </div>

          <button onClick={handleLogout}>Log Out</button>
        </Header>
        <div className="dashboard-wrapper">
          <div className="dashboard-user">
            <h3>User panel</h3>
            <h5>
              Welcome{" "}
              <label className="username">
                {userData
                  ? userData.nickname || currentUser.email
                  : currentUser.email}
              </label>
            </h5>
          </div>

          <div className="dashboard-timelines">
            <div className="dashboard-advertisement"></div>
            <h1>My Timelines</h1>
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
