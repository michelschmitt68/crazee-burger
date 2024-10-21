import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { db } from "./firebase-config";


export const updateMenu = async (userId, newMenu) => {
    if (!userId) {
        console.error("userId est undefined ou null. Impossible de mettre à jour le menu.");
        return; 
    }
    try {
        const docRef = doc(db, "users", userId); 
        await setDoc(docRef, { menu: newMenu }, { merge: true });
        console.log("Menu mis à jour avec succès pour l'utilisateur :", userId);
    } catch (error) {
        console.error("Erreur lors de la mise à jour du menu :", error);
    }
}

export const getMenu = async (idUser) => {
    const docRef = doc(db, "users", idUser)
    const docSnapshot = await getDoc(docRef);

    if(docSnapshot.exists()){
        const menuReceived = docSnapshot.data().menu;
        console.log("menuReceived: ",menuReceived)
        return menuReceived;
    }
}