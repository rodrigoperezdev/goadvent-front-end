import { collection, getDocs, type QueryDocumentSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase/firebaseConfig";

export const fetchFirestoreData = async <T extends object>(
  collectionName: string,
): Promise<T[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map(
      (doc: QueryDocumentSnapshot) => doc.data() as T,
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
