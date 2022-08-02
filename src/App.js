/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Routing from "./AllRouting/Routing";
import "./Components/FontawsomeIcons";
import AllUsersState from "./Contexts/AllUsers/AllUsersState";
//////////============///////////============/////////
//////////============///////////============/////////
//////////============///////////============/////////
//////////============///////////============/////////
function App() {
  return (
    <div className="">
      <AllUsersState>
        <Routing />
      </AllUsersState>
    </div>
  );
}

export default App;
