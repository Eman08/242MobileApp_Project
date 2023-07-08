var openDatabase = function() {
    // Make sure IndexedDB is supported before attempting to use it
    if (!window.indexedDB) {
    return false;
    }
    var request = window.indexedDB.open("Krosan", 1);
    request.onerror = function(event) {
    console.log("Database error: ", event.target.error);
    };
    request.onupgradeneeded = function(event) {
    var db = event.target.result;
    if (!db.objectStoreNames.contains("Krosan")) {
    db.createObjectStore("Krosan",
    { keyPath: "pid" }
    );
    }
    };
    return request;
    };
    var openObjectStore = function(storeName, successCallback, transactionMode) {
    var db = openDatabase();
    if (!db) {
    return false;
    }
    db.onsuccess = function(event) {
    var db = event.target.result;
    var objectStore = db
    .transaction(storeName, transactionMode)
    .objectStore(storeName);
    successCallback(objectStore);
    };
    return true;
    };
    var getReservations = function(successCallback) {
    var reservations = [];
    var db = openObjectStore("Krosan", function(objectStore) {
    objectStore.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
    reservations.push(cursor.value);
    cursor.continue();
    } else {
    if (reservations.length > 0) {
    successCallback(reservations);
    } else {
    $.getJSON("/reservations.json", function(reservations) {
    openObjectStore("Krosan", function(reservationsStore) {
    for (var i = 0; i < reservations.length; i++) {
    reservationsStore.add(reservations[i]);
    }
    successCallback(reservations);
    }, "readwrite");
    });
    }
    }
    };
    });
    if (!db) {
    $.getJSON("/reservations.json", successCallback);
    }
    };
    
    
    
    