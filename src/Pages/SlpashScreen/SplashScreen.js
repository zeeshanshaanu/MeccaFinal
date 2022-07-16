import React, { useEffect } from "react";
import animationData from "../../Assets/Images/LottieFiles/splash.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

//
const SplashScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/Login");
    }, 5000);
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="Background__Img">
      {" "}
      <Lottie
        options={defaultOptions}
        width={900}
        height={900}
        backgroundColor={"grey"}
      />
    </div>
  );
};

export default SplashScreen;
