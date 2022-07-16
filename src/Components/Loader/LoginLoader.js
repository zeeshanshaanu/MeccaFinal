import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import animationData from "../../Assets/Images/LottieFiles/loading.json";
import Lottie from "react-lottie";

import Box from "@mui/material/Box";
export default function CircularIndeterminate({ className }) {
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
        width={300}
        height={300}
        backgroundColor={"grey"}
      />

      {/* <CircularProgress size={22} className={className} color="primary" /> */}
    </Box>
  );
}
