// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/////

import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI9cCLX7Wl00AXRywSB8r5BME9cIvjIW0",
  authDomain: "mecca-of-fitness-f87de.firebaseapp.com",
  projectId: "mecca-of-fitness-f87de",
  storageBucket: "mecca-of-fitness-f87de.appspot.com",
  messagingSenderId: "206022373114",
  appId: "1:206022373114:web:86ee8d1d31662e53eaa343",
  measurementId: "G-6C3CRPLJ0N",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey =
  "BLs32fOaeiT6KVuxVPHrVBqQrIbcl1iS2-9aDAipq9PoFcdTQvhYbZOvvaVqFHGqS2NzZ8jmWeqPTVHYWPtEQT8";

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
