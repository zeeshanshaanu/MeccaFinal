import React, { useState, useEffect } from "react";
import { getToken } from "../../firebaseInit";
const Notifications = (props) => {
  const [isTokenFound, setTokenFound] = useState(false);
  useEffect(() => {
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
export default Notifications;
