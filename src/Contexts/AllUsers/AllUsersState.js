import { useState } from "react";
import AllUserContext from "./AllUserContext";
const AllUsersState = (props) => {
  const [names, setnames] = useState("Saifullah");
  const [emails, setemails] = useState("");
  const [usertypes, setusertypes] = useState("");
  return (
    <AllUserContext.Provider
      value={{ names, setnames, emails, setemails, usertypes, setusertypes }}
    >
      {props.children}
    </AllUserContext.Provider>
  );
};

export default AllUsersState;
