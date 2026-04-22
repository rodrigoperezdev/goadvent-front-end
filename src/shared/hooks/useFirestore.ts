import { fetchFirestoreData } from "@/services/firestoreService";
import { useEffect, useState } from "react";

export const useFirestore = <T extends object>(collectionName: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const result = await fetchFirestoreData<T>(collectionName);
      setData(result);
      setLoading(false);
    };

    void loadData();
  }, [collectionName]);

  return { data, loading };
};
