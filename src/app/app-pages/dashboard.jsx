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

const TimelineButtonAdd = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className="add-timeline-button">
        <div className="add-timeline-icon">
          <img src={plusIcon} alt="plus icon" />
        </div>
        <div>Create a new file</div>
      </button>
    </>
  );
};

function Dashboard() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [addTimelineScreen, setAddTimelineScreen] = useState(false);

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

  const toggleModal = () => {
    setAddTimelineScreen(!addTimelineScreen);
  };

  return (
    <>
      <div className="main">
        <Header>
          <div className="header-logo">
            <img src={logo} style={{ width: 24 }} alt="Logo" />
            <div>Timelines</div>
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
              <TimelineButtonAdd onClick={toggleModal} />
              <TimelineButton fileName={"My timeline 1"} edited={"2 hours"} />
            </div>
          </div>
        </div>
        {addTimelineScreen && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>New Timeline Settings</h2>
              <div>
                Title:
                <input className="modal-input" type="text" name="title" />
              </div>

              <div>
                <label>Starting date:</label>
                <input className="modal-input" type="date" name="start-date" />
              </div>

              <div>
                <label>Ending date:</label>
                <input className="modal-input" type="date" name="end-date" />
              </div>
              <button className="modal-button" onClick={toggleModal}>
                Cancel
              </button>
              <button
                className="modal-button float-right"
                onClick={toggleModal}
              >
                Proceed
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
