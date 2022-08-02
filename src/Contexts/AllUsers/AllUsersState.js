import { useState } from "react";
import AllUserContext from "./AllUserContext";
const AllUsersState = (props) => {
  const [names, setnames] = useState("");
  const [emails, setemails] = useState("");
  const [usertypes, setusertypes] = useState("");
  const [reload, setreload] = useState(false);
  const [searchid, setsearchid] = useState(false);
  return (
    <AllUserContext.Provider
      value={{
        names,
        setnames,
        emails,
        setemails,
        usertypes,
        setusertypes,
        reload,
        setreload,
        searchid,
        setsearchid,
      }}
    >
      {props.children}
    </AllUserContext.Provider>
  );
};

export default AllUsersState;
