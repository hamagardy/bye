import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

function Settings({ inventory }) {
  const user = auth.currentUser;

  const handleSaveData = async () => {
    if (!user) {
      alert("User not authenticated.");
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { inventory });
      alert("Data saved successfully! It will be available on all devices.");
    } catch (error) {
      console.error("Error saving data: ", error);
      alert("Failed to save data.");
    }
  };

  return (
    <div>
      <h2>Settings</h2>
      <button onClick={handleSaveData}>Save Data</button>
    </div>
  );
}

export default Settings;
