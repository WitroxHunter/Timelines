import { doc, updateDoc, deleteField } from "firebase/firestore";
import { firestore } from "../../../../firebase/firebase";

export const addPointToFirestore = async (
  pointTitle,
  pointDate,
  pointDesc,
  pointColor,
  currentUser,
  timelineId
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
    createdAt: Date.now(),
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
  timelineId
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
    createdAt: Date.now(),
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

export const bulkAddPointsToFirestore = async (
  points,
  currentUser,
  timelineId
) => {
  if (!Array.isArray(points) || points.length === 0) {
    alert("No points to add.");
    return;
  }

  const uid = currentUser.uid;
  const userDocRef = doc(firestore, "users", uid);

  const updates = {};
  const baseTimestamp = Date.now();

  points.forEach((point, index) => {
    if (!point.title || !point.date) return;

    const pointId = `point_${baseTimestamp}_${index}`;

    updates[`timelines.${timelineId}.points.${pointId}`] = {
      title: point.title,
      date: point.date,
      description: point.description || "",
      color: point.color || "#000000",
      createdAt: baseTimestamp,
    };
  });

  try {
    await updateDoc(userDocRef, updates);
    console.log("Bulk points added successfully");
  } catch (error) {
    console.error("Error bulk adding points:", error);
  }
};

export const bulkAddPeriodsToFirestore = async (
  periods,
  currentUser,
  timelineId
) => {
  if (!Array.isArray(periods) || periods.length === 0) {
    alert("No periods to add.");
    return;
  }

  const uid = currentUser.uid;
  const userDocRef = doc(firestore, "users", uid);

  const updates = {};
  const baseTimestamp = Date.now();

  periods.forEach((period, index) => {
    if (!period.title || !period.startDate || !period.endDate) return;

    const periodId = `period_${baseTimestamp}_${index}`;

    updates[`timelines.${timelineId}.periods.${periodId}`] = {
      title: period.title,
      startDate: period.startDate,
      endDate: period.endDate,
      description: period.description || "",
      color: period.color || "#000000",
      createdAt: baseTimestamp,
    };
  });

  try {
    await updateDoc(userDocRef, updates);
    console.log("Bulk periods added successfully");
  } catch (error) {
    console.error("Error bulk adding periods:", error);
  }
};

export const updateUserPreferences = async (
  currentUser,
  timelineId,
  preferenceKey,
  value
) => {
  const uid = currentUser.uid;

  try {
    const userDocRef = doc(firestore, "users", uid);
    await updateDoc(userDocRef, {
      [`timelines.${timelineId}.preferences.${preferenceKey}`]: value,
    });

    console.log(`Preference ${preferenceKey} updated successfully to ${value}`);
  } catch (error) {
    console.error("Error updating preference: ", error);
  }
};

export const changeTimelineName = async (nickname, currentUser, timelineId) => {
  if (!nickname) {
    alert("Enter a new name.");
    return;
  }

  const uid = currentUser.uid;

  try {
    const userDocRef = doc(firestore, "users", uid);
    await updateDoc(userDocRef, {
      [`timelines.${timelineId}.title`]: nickname,
    });

    console.log("Title changed succesfully!");
  } catch (error) {
    console.error("Error changing nickname: ", error);
  }
};

export const removePointFromFirestore = async (
  timelineId,
  pointKey,
  currentUser
) => {
  if (!timelineId || !pointKey || !currentUser) {
    alert("Missing information to delete point.");
    return;
  }
  console.log(timelineId, pointKey);
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

export const removePeriodFromFirestore = async (
  timelineId,
  periodKey,
  currentUser
) => {
  if (!timelineId || !periodKey || !currentUser) {
    alert("Missing information to delete period.");
    return;
  }
  console.log(timelineId, periodKey);
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
};
