import React, { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EmailVrerifiedLogo from "../../Assets/Images/EmailVrerifiedLogo.png";
//////==========/////////////////////==============////==========
//////==========/////////////////////==============////==========
//////==========/////////////////////==============////==========
//////==========/////////////////////==============////==========
const EmailVerifySuccessful = () => {
  const navigate = useNavigate();
  ///////////////==================///////////////////////=============///////
  ///////////////====================///////////////////////===========///////
  return (
    <div>
      <Container className="p-5 text-center">
        <div>
          <h1 className="my-4 text-center fw-bolder colors">
            E-Mail Verification Successful
          </h1>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant mi
            habitasse porttitor nisi, neque aliquet.
            <br /> Pharetra, est, nunc, facilisis dignissim enim nec sem.
          </p>
        </div>
        <div className="text-center h-75 mt-5">
          <img
            src={EmailVrerifiedLogo}
            alt="EmailVrerifiedLogo.png"
            height={350}
          />
        </div>
      </Container>
    </div>
  );
};
export default EmailVerifySuccessful;
