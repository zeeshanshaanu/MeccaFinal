//////

//////
// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAI9cCLX7Wl00AXRywSB8r5BME9cIvjIW0",
  authDomain: "mecca-of-fitness-f87de.firebaseapp.com",
  projectId: "mecca-of-fitness-f87de",
  storageBucket: "mecca-of-fitness-f87de.appspot.com",
  messagingSenderId: "206022373114",
  appId: "1:206022373114:web:86ee8d1d31662e53eaa343",
  measurementId: "G-6C3CRPLJ0N",
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/Logo1.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
