import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../contexts/authContext";
import { Navigate, Link } from "react-router-dom";
import "./dashboard.css";
import Header from "../app-components/header";
import logo from "../../assets/images/Logo.png";
import { useEffect, useState } from "react";
import {
  doc,
  updateDoc,
  onSnapshot,
  FieldValue,
  deleteDoc,
  deleteField,
} from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import Modal from "../app-components/modal";
import plusIcon from "../../assets/icons/plus.svg";
import calendarIcon from "../../assets/icons/calendar-event.svg";
import caretDownIcon from "../../assets/icons/caret-down.svg";
import settings2Icon from "../../assets/icons/settings-2.svg";
import trashIcon from "../../assets/icons/trash.svg";

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
    createdAt: Date.now(),
    periods: {},
    points: {},
    preferences: {
      datebox: "",
      tickmarks: "",
    },
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

const deleteTimeline = async (timelineId, currentUser, toggleDeleteModal) => {
  if (!timelineId || !currentUser) {
    alert("Missing information to delete timeline.");
    return;
  }

  const uid = currentUser.uid;

  try {
    const userDocRef = doc(firestore, "users", uid);
    await updateDoc(userDocRef, {
      [`timelines.${timelineId}`]: deleteField(),
    });

    console.log("Timeline deleted successfully");
    toggleDeleteModal(); // Close the modal after deleting
  } catch (error) {
    console.error("Error deleting timeline: ", error);
  }
};

const handleLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out: ", error);
  }
};

const TimelineButton = ({ fileName, timelineId, edited, currentUser }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };
  return (
    <div className="timeline-button-box">
      <Link to={`/Timelines/app/${timelineId}`}>
        <button className="timeline-button"></button>
      </Link>
      <div className="timeline-button-flex-wrapper">
        <Link to={`/Timelines/app/${timelineId}`}>
          <div className="timeline-file-name">{fileName}</div>
          <div className="timeline-edited">Edited {edited} ago</div>
        </Link>
        <div style={{ display: "flex", gap: 5 }}>
          <div className="timeline-button-subbutton settings-button">
            <img src={settings2Icon} />
          </div>
          <div
            className="timeline-button-subbutton trash-button"
            onClick={toggleDeleteModal}
          >
            <img src={trashIcon} />
          </div>
        </div>
      </div>
      <Modal isOpen={isDeleteModalOpen} toggleModal={toggleDeleteModal}>
        <h1>Delete Timeline?</h1>
        <div className="modal-grid">
          <div className="modal-input-box">
            <button className="modal-button" onClick={toggleDeleteModal}>
              Cancel
            </button>
            <button
              className="modal-button proceed-button"
              onClick={() =>
                deleteTimeline(timelineId, currentUser, toggleDeleteModal)
              }
            >
              Proceed
            </button>
          </div>
        </div>
      </Modal>
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
        <button className="button-header" onClick={handleLogout}>
          Log Out
        </button>
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
            {Object.entries(userData.timelines || {})
              .sort(([, a], [, b]) => (a.createdAt ?? 0) - (b.createdAt ?? 0))
              .map(([timelineId, timeline]) => (
                <TimelineButton
                  key={timelineId}
                  timelineId={timelineId}
                  fileName={timeline.title}
                  edited={"Just now"}
                  currentUser={currentUser}
                />
              ))}
          </div>
        </div>
      </div>
      <Modal isOpen={addTimelineScreen} toggleModal={toggleModal}>
        <h1>Add new timeline</h1>
        <div className="modal-grid">
          <div className="modal-input-box">
            <label>Title</label>
            <input
              className="modal-input"
              type="text"
              name="title"
              value={newTimelineTitle}
              onChange={(e) => setNewTimelineTitle(e.target.value)}
            />
          </div>
          <div className="modal-input-box">
            <label>Starting date</label>
            <div className="modal-input-container">
              <img src={calendarIcon} className="modal-input-image" />
              <input
                className="modal-input"
                type="date"
                name="start-date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-input-box">
            <label>Ending date</label>
            <div className="modal-input-container">
              <img src={calendarIcon} className="modal-input-image" />
              <input
                className="modal-input"
                type="date"
                name="end-date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-input-box">
            <label>Visibility</label>
            <div className="modal-input-container">
              <img src={caretDownIcon} className="modal-input-image" />
              <select className="modal-input" name="visibility">
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
          </div>
          <div className="modal-input-box">
            <label>Thumbnail</label>
            <input
              className="modal-input"
              type="file"
              name="thumbnail"
              // value={endDate}
              // onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="modal-input-box">
            <button className="modal-button" onClick={toggleModal}>
              Cancel
            </button>
            <button
              className="modal-button proceed-button"
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
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Dashboard;
