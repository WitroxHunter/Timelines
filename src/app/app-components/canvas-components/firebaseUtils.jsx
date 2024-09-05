import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase";

export const addPointToFirestore = async (
  pointTitle,
  pointDate,
  pointDesc,
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


export const addLongEventToFirestore = async (
    periodTitle,
    startPeriodDate,
    endPeriodDate,
    periodDesc,
    currentUser,
    timelineId,
  ) => {
    if (!periodTitle || !startPeriodDate || endPeriodDate) {
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
  