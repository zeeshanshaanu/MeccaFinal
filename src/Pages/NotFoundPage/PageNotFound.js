import React, { Container } from "react-bootstrap";
import Lottie from "react-lottie";
import animationData from "../../Assets/Images/LottieFiles/404notfoundone.json";
import { useNavigate } from "react-router-dom";
//////==========/////////////////////==============////==========
//////==========/////////////////////==============////==========
//////==========/////////////////////==============////==========
//////==========/////////////////////==============////==========
const PageNotFound = () => {
  const navigate = useNavigate();
  ///////////////==================///////////////////////================///////
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  ///////////////====================///////////////////////===========///////
  return (
    <div>
      <Container>
        <div className="LottieFile m-5">
          <Lottie
            options={defaultOptions}
            width={"100%"}
            height={700}
            backgroundColor={"transparent"}
          />
        </div>
        <div className="mb-5">
          <button
            className="button1 px-5 py-2 text-white fw-bolder float-right"
            type="submit"
            onClick={() => {
              navigate("/Dashboard");
            }}
          >
            {" "}
            Back to Home Page
          </button>
        </div>
      </Container>
    </div>
  );
};

export default PageNotFound;
