var showNewReservationNotification = function() {
    navigator.serviceWorker.ready.then(function(registration) {
    registration.showNotification("Payment Received", {
    body:
    "Thank you for purchasing at Krosan Furniture.\n"+
    "You will receive a notification if there are any changes to "+
    "the order.",
    icon: "/assets/appLogo.PNG",
    badge: "/assets/appLogo.PNG",
    tag: "new-order"
    });
    });
    };

var offerNotification = function() {
    if ("serviceWorker" in navigator) {
    Notification.requestPermission().then(function(permission){
    if (permission === "granted") {
        showNewReservationNotification();
    }
    });
    }
};

offerNotification();
    



    
// var showNewReservationNotification = function() {
//     navigator.serviceWorker.ready.then(function(registration) {
//     registration.showNotification("Payment Received", {
//     body:
//     "Thank you for purchasing at Krosan Furniture.\n"+
//     "You will receive a notification if there are any changes to "+
//     "the order.",
//     icon: "/assets/appLogo.PNG",
//     badge: "/assets/appLogo.PNG",
//     tag: "new-order",
//     actions: [
//         { action: "confirm1", title: "Yes", icon: "/img/icon-confirm.png" },
//         { action: "confirm2", title: "Sort of", icon: "/img/icon-cal.png" }
//     ]                       

//     });
//     });
//     };