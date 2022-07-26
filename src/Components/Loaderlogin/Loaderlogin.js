import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import animationData from "../../Assets/Images/LottieFiles/loading.json";
import Lottie from "react-lottie";
export default function LoaderLog({ className }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box className="boxloader">
       <Lottie
        options={defaultOptions}
        width={100}
        height={100}
        backgroundColor={"grey"}
      />
    </Box>
  );
}
