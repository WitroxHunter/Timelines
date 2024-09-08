import { doc, updateDoc, deleteField } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase";

export const addPointToFirestore = async (
  pointTitle,
  pointDate,
  pointDesc,
  pointColor,
  currentUser,
  timelineId,
) => {
  if (!pointTitle || !pointDate) {
    alert("Please fill in all fields.");
    return;
  }

  const uid = currentUser.uid;
  const pointId = `point_${Date.now()}`;

  const newPointData = {
    title: pointTitle,
    date: pointDate,
    description: pointDesc,
    color: pointColor,
  };

  try {
    const userDocRef = doc(firestore, "users", uid);
    await updateDoc(userDocRef, {
      [`timelines.${timelineId}.points.${pointId}`]: newPointData,
    });

    console.log("New point added successfully");

  } catch (error) {
    console.error("Error adding point: ", error);
  }
};


export const addPeriodToFirestore = async (
    periodTitle,
    startPeriodDate,
    endPeriodDate,
    periodDesc,
    periodColor,
    currentUser,
    timelineId,
  ) => {
    if (!periodTitle || !startPeriodDate || !endPeriodDate) {
      alert("Please fill in all fields.");
      return;
    }
  
    const uid = currentUser.uid;
    const periodId = `period_${Date.now()}`;
  
    const newPeriodData = {
      title: periodTitle,
      startDate: startPeriodDate,
      endDate: endPeriodDate,
      description: periodDesc,
      color: periodColor,
    };
  
    try {
      const userDocRef = doc(firestore, "users", uid);
      await updateDoc(userDocRef, {
        [`timelines.${timelineId}.periods.${periodId}`]: newPeriodData,
      });
  
      console.log("New period added successfully");
  
    } catch (error) {
      console.error("Error adding point: ", error);
    }
  };
  
export const changeNickname = async () => {

}

export const removePointFromFirestore = async (timelineId, pointKey, currentUser) => {
  if (!timelineId || !pointKey || !currentUser) {
    alert("Missing information to delete point.");
    return;
  }
  console.log(timelineId, pointKey)
  const uid = currentUser.uid;
  try {
    const userDocRef = doc(firestore, "users", uid);

    await updateDoc(userDocRef, {
      [`timelines.${timelineId}.points.${pointKey}`]: deleteField(),
    });

    console.log("Point deleted successfully");
  } catch (error) {
    console.error("Error removing point: ", error);
  }
};

export const removePeriodFromFirestore = async (timelineId, periodKey, currentUser) => {
  if (!timelineId || !periodKey || !currentUser) {
    alert("Missing information to delete period.");
    return;
  }
  console.log(timelineId, periodKey)
  const uid = currentUser.uid;

  try {
    const userDocRef = doc(firestore, "users", uid);

    await updateDoc(userDocRef, {
      [`timelines.${timelineId}.periods.${periodKey}`]: deleteField(),
    });

    console.log("Period deleted successfully");
  } catch (error) {
    console.error("Error removing period: ", error);
  }
}