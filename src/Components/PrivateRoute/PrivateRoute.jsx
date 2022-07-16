import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/User";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const { isAuthenticated } = useContext(UserContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Login");
      return;
    }

    setIsLoaded(true);
  }, [isAuthenticated, navigate]);

  return isLoaded ? children : null;
};
