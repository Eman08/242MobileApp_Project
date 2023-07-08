// if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.register("../homepage/serviceworker.js").then(function(registration) {
//       console.log("Service Worker registered with scope:", registration.scope);
//     }).catch(function(err) {
//       console.log("Service Worker registration failed:", err);
//     });
//   }
  

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js")
    .then(function(registration) {
    console.log("Service Worker registered with scope:", registration.scope);
    }).catch(function(err) {
    console.log("Service worker registration failed:", err);
    });
    }




  // if ("serviceWorker" in navigator) {
  //   $("#logout-button").click(function(event) {
  //     console.log("post")
  //     if (navigator.serviceWorker.controller) {
  //       event.preventDefault();
  //       navigator.serviceWorker.controller.postMessage(
  //         {action: "logout"}
  //       );
  //     }
  //   });
  // }

    