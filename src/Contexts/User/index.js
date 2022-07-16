import React, { useContext } from "react";

export const initialUserState = {
  email: "",
  password: "",
};
export const UserContext = React.createContext({ userState: initialUserState });
export function useUserContext() {
  return useContext(UserContext);
}
export { UserProvider as default } from "./UserProvider.jsx";
