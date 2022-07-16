import React, { useState, useEffect } from "react";
import { getToken } from "../../firebaseInit";
const Notifications = (props) => {
  const [isTokenFound, setTokenFound] = useState(false);

  // console.log("Token found", isTokenFound);

  // To load once
  useEffect(() => {
    //  global.data  = "";

    async function tokenFunc() {
      global.data = await getToken(setTokenFound);
      if (global.data) {
        console.log(global.data);
      }
      return global.data;
    }

    tokenFunc();
  }, [setTokenFound]);

  return <></>;
};

// Notifications.propTypes = {};

export default Notifications;
