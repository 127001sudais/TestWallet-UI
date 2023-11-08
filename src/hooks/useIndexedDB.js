import { useState, useEffect } from "react";

import authenticateUser from "./authenticateUser";

const openDatabase = () => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open("PAYRAIL", 3);

    openRequest.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("userData", { autoIncrement: true });
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
    // start a new transaction with readwrite access to the userData object store
    const transaction = db.transaction("userData", "readwrite");

    // Get a reference to the userData object store
    const store = transaction.objectStore("userData");

    const accountData = {
      ...data,
      balance: 1000,
      transactions: [],
    };

    // Add the data to the object store without a key
    const request = store.add(accountData);

    // If the transaction completes successfully, resolve the promise with the result
    transaction.oncomplete = (event) => {
      resolve(event.target.result);
    };

    // If the transaction fails, reject the promise with the error
    transaction.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

const getUserData = (db, id) => {
  return new Promise((resolve, reject) => {
    // start a new transaction with readonly access to the userData object store
    const transaction = db.transaction("userData", "readonly");

    // Get a reference to the userData object store
    const store = transaction.objectStore("userData");

    // Get the data for the user with the specified id
    const request = store.get(id);

    // If the transaction completes successfully, resolve the promise with the result
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    // If the transaction fails, reject the promise with the error
    request.onerror = (event) => {
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

  const fetchUserData = (id) => {
    if (db) {
      return getUserData(db, id);
    }
  };

  const loginUser = (userName, pin) => {
    if (db) {
      return authenticateUser(db, userName, pin);
    }
  };

  return { saveUserData, fetchUserData, loginUser };
};

export default useIndexedDB;
