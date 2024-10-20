import { doc, setDoc } from "firebase/firestore/lite";
import { db } from "./firebase-config";


export const updateMenu = async(userId, newMenu) => {
    const docRef = doc(db, "users", userId);
    setDoc(docRef, { menu: newMenu }, { merge: true });
}