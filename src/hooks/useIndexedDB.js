import { useState, useEffect } from "react";

const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open("MyDatabase", 1);

    openRequest.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("userData");
    };

    openRequest.onsuccess = (event) => {
      resolve(event.target.result);
    };

    openRequest.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

const saveData = (db, data) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("userData", "readwrite");
    const store = transaction.objectStore("userData");
    const request = store.add(data);

    transaction.oncomplete = (event) => {
      resolve(event.target.result);
    };

    transaction.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

const useIndexedDB = () => {
  const [db, setDb] = useState(null);

  useEffect(() => {
    openDatabase().then(setDb).catch(console.error);
  }, []);

  const saveUserData = (data) => {
    if (db) {
      saveData(db, data).catch(console.error);
    }
  };

  return saveUserData;
};

export default useIndexedDB;
