import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase";

export const addPointToFirestore = async (
  pointTitle,
  pointDate,
  pointDesc,
  currentUser,
  timelineId,
  setTimelineData
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
