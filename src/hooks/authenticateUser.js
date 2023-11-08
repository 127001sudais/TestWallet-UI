const authenticateUser = (db, userName, pin) => {
  return new Promise((resolve, reject) => {
    // start a new transaction with readonly access to the userData object store
    const transaction = db.transaction("userData", "readonly");

    // Get a reference to the userData object store
    const store = transaction.objectStore("userData");

    // Open a cursor to iterate over the records in the object store
    const request = store.openCursor();

    // If the transaction completes successfully, resolve the promise with the result
    request.onsuccess = (event) => {
      const cursor = event.target.result;
      if (cursor) {
        // If the username and pin match the current record, resolve the promise with the record
        if (cursor.value.userName === userName && cursor.value.pin === pin) {
          resolve(cursor.value);
        }
        // Move to the next record
        cursor.continue();
      } else {
        // If no matching record is found, reject the promise
        reject(new Error("Invalid username or pin"));
      }
    };

    // If the transaction fails, reject the promise with the error
    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
};

export default authenticateUser;
