import { auth, firestore } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (
  email,
  password,
  nickname
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  // Dodawanie użytkownika do Firestore
  await setDoc(
    doc(firestore, "users", user.uid),
    {
      email: user.email,
      nickname: nickname,
      timelines: {},
      createdAt: new Date(),
      preferences: {},
    },
    { merge: true }
  );

  return userCredential;
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const userDocRef = doc(firestore, "users", user.uid);
  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) {
    await setDoc(userDocRef, {
      email: user.email,
      nickname: user.displayName || user.email,
      createdAt: new Date(),
      timelines: {},
      preferences: {},
    });
  }

  return user;
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

export const getUserData = async (uid) => {
  try {
    const userDoc = doc(firestore, "users", uid);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return null;
  }
};
