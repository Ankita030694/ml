import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const FirestoreService = {
    getAll: async (collectionName: string) => {
        console.log(`Fetching all from ${collectionName}`);
        // Mock data for outlets
        if (collectionName === "Constraints") {
            return [
                {
                    id: "1",
                    outlet: "Masala Library BKC",
                    timeSlots: ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM"]
                }
            ];
        }

        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            return querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (e) {
            console.error("Error getting documents: ", e);
            return [];
        }
    },
    add: async (collectionName: string, data: any) => {
        console.log(`Adding to ${collectionName}:`, data);
        try {
            const docRef = await addDoc(collection(db, collectionName), data);
            console.log("Document written with ID: ", docRef.id);
            return { id: docRef.id, ...data };
        } catch (e) {
            console.error("Error adding document: ", e);
            throw e;
        }
    },
    delete: async (collectionName: string, id: string) => {
        console.log(`Deleting from ${collectionName}:`, id);
        try {
            await deleteDoc(doc(db, collectionName, id));
            return true;
        } catch (e) {
            console.error("Error deleting document: ", e);
            throw e;
        }
    }
};

export default FirestoreService;
