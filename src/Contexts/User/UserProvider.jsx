import React, { useEffect, useState, useCallback } from "react";
import { initialUserState, UserContext } from ".";
import axios from "axios";
export const UserProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [userState, setUserState] = useState(initialUserState);
  // TODO: create PlaidProvider after release
  const isAuthenticated = !!userState._id;
  const userId = userState._id;
  const login = useCallback(async ({ email, password }) => {
    const resp = await axios.post("/admin/login", {
      email,
      password,
    });
    axios.defaults.headers = {
      ...axios.defaults.headers,
      Authorization: resp.data.data.token,
    };
    console.log(resp);
    localStorage.setItem("token_id", resp.data.data.token);
    return resp.data.data.token;
  }, []);

  //////===========/////////Logout//////////////=================
  //////===========/////////Logout//////////////=================
  const logout = useCallback(() => {
    setUserState((prev) =>
      prev === initialUserState ? prev : initialUserState
    );
    window.appStorage.setItem("open", "true");
    localStorage.removeItem("token_id");
    window.appStorage.clear();
    global.userid = "";
    global.idz = "";
    const prevHeaders = axios.defaults.headers;
    delete prevHeaders["Authorization"];
    axios.defaults.headers = {
      ...prevHeaders,
    };
  }, []);

  const fetchCurrentUser = useCallback(async () => {
    const resp = await axios.post("/admin/login");

    window.appStorage.setItem("Email", resp.data.email);
    window.appStorage.setItem("password", resp.data.password);

    return resp.data;
  }, []);

  useEffect(() => {
    const token_id = localStorage.getItem("token_id");
    if (token_id) {
      axios.defaults.headers = {
        ...axios.defaults.headers,
        Authorization: token_id,
      };
      fetchCurrentUser()
        .then(setUserState)
        .catch(logout)
        .finally(() => {
          setIsLoaded(true);
        });
      return;
    }

    setIsLoaded(true);
  }, [fetchCurrentUser, logout]);

  return (
    <UserContext.Provider
      value={{
        fetchCurrentUser,
        isAuthenticated,
        login,
        logout,
        setUserState,
        userId,
        userState,
      }}
    >
      {isLoaded ? children : false}
    </UserContext.Provider>
  );
};
