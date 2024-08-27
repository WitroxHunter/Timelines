import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../contexts/authContext";
import { Navigate, Link } from "react-router-dom";
import "./dashboard.css";
import Header from "../app-components/header";
import logo from "../../assets/images/Logo.png";
import { useEffect, useState } from "react";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import Modal from "../app-components/modal";
import plusIcon from "../../assets/icons/plus.svg";

const addTimelineToFirestore = async (
  newTimelineTitle,
  startDate,
  endDate,
  currentUser,
  toggleModal
) => {
  if (!newTimelineTitle || !startDate || !endDate) {
    alert("Please fill in all fields.");
    return;
  }

  const uid = currentUser.uid;
  const timelineId = `timeline_${Date.now()}`;

  const newTimelineData = {
    title: newTimelineTitle,
    startDate,
    endDate,
    periods: {},
    points: {},
  };

  try {
    const userDocRef = doc(firestore, "users", uid);
    await updateDoc(userDocRef, {
      [`timelines.${timelineId}`]: newTimelineData,
    });

    console.log("New timeline added successfully");

    toggleModal();
  } catch (error) {
    console.error("Error adding timeline: ", error);
  }
};

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

const TimelineButton = ({ fileName, timelineId, edited }) => {
  return (
    <div className="timeline-button-box">
      <Link to={`/Timelines/app/${timelineId}`}>
        <button className="timeline-button"></button>
        <div className="timeline-file-name">{fileName}</div>
        <div className="timeline-edited">Edited {edited} ago</div>
      </Link>
    </div>
  );
};

const TimelineButtonAdd = ({ onClick }) => {
  return (
    <button onClick={onClick} className="add-timeline-button">
      <div className="add-timeline-icon">
        <img src={plusIcon} alt="plus icon" />
      </div>
      <div>Create a new file</div>
    </button>
  );
};

function Dashboard() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [addTimelineScreen, setAddTimelineScreen] = useState(false);

  const [newTimelineTitle, setNewTimelineTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (currentUser) {
      const userDocRef = doc(firestore, "users", currentUser.uid);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          setUserData(doc.data());
        }
      });

      return () => unsubscribe();
    }
  }, [currentUser]);

  if (!currentUser) {
    return <Navigate to="/Timelines/login" />;
  }

  if (!userData) {
    return <div>Loading...</div>; // Dodać animacje ładowania
  }

  const toggleModal = () => {
    setAddTimelineScreen(!addTimelineScreen);
    if (!addTimelineScreen) {
      setNewTimelineTitle("");
      setStartDate("");
      setEndDate("");
    }
  };

  return (
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
            {Object.keys(userData.timelines || {}).map((timelineId) => (
              <TimelineButton
                key={timelineId}
                timelineId={timelineId}
                fileName={userData.timelines[timelineId].title}
                edited={"Just now"}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={addTimelineScreen} toggleModal={toggleModal}>
        <h2>New Timeline Settings</h2>
        <div>
          <label>Title:</label>
          <input
            className="modal-input"
            type="text"
            name="title"
            value={newTimelineTitle}
            onChange={(e) => setNewTimelineTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Starting date:</label>
          <input
            className="modal-input"
            type="date"
            name="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>Ending date:</label>
          <input
            className="modal-input"
            type="date"
            name="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button className="modal-button" onClick={toggleModal}>
          Cancel
        </button>
        <button
          className="modal-button float-right"
          onClick={() =>
            addTimelineToFirestore(
              newTimelineTitle,
              startDate,
              endDate,
              currentUser,
              toggleModal
            )
          }
        >
          Proceed
        </button>
      </Modal>
    </div>
  );
}

export default Dashboard;
