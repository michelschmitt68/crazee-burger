import { doc, getDoc, setDoc } from "firebase/firestore/lite"
import { db } from "./firebase-config";
import { fakeMenu2 } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
    const docRef = doc(db, "users", idUser)
    const docSnapshot = await getDoc(docRef);

    if(docSnapshot.exists()){
        const userReceived = docSnapshot.data();
        return userReceived;
    }
}

export const createUser = (userId) => {
    const docRef = doc(db, "users", userId);
    const newDoc = {
        username: userId,
        menu: fakeMenu2
    }
    setDoc(docRef, newDoc);
}

export const authenticateUser = async (userId) => {
    const existingUser = await getUser(userId);
    if(!existingUser){
        createUser(userId);
    }
}


