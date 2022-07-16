import React, { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import oops from "../../Assets/Images/oops.svg";
//////==========/////////////////////==============////==========
//////==========/////////////////////==============////==========

const LinkExpire = () => {
  ///////////////==================///////////////////////=============///////
  ///////////////====================///////////////////////===========///////
  return (
    <div>
      <Container className="p-5 text-center">
        <div>
          <h1 className="my-4 text-center fw-bolder colors">Link Expire</h1>
          <center>
            <p className="para w-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
              mi habitasse porttitor nisi, neque aliquet.
            </p>
          </center>
        </div>
        <div className="text-center h-75 mt-5">
          <img src={oops} alt="oops.svg" height={350} />
        </div>
      </Container>
    </div>
  );
};
export default LinkExpire;
