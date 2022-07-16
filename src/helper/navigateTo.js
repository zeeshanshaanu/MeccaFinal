import { useNavigate } from "react-router-dom";

export const navigateTo = (value) => {
  const navigate = useNavigate();

  return () => navigate(value);
};
