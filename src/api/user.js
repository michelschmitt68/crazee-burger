import { doc, getDoc, setDoc } from "firebase/firestore/lite"
import { db } from "./firebase-config";
import { fakeMenu1 } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser)
    const docSnapshot = await getDoc(docRef);

    if(docSnapshot.exists()){
        const userReceived = docSnapshot.data();
        console.log("user : ", userReceived)
    }
}

export const createUser = (userId) => {
    const docRef = doc(db, "users", userId);
    const newDoc = {
        username: userId,
        menu: fakeMenu1
    }
    setDoc(docRef, newDoc);
}

