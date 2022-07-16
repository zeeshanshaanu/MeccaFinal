import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
export default function CardOne() {
  const navigate = useNavigate();
  const Data = [
    {
      text: "Users",
      quantity: 60,
      onClick: () => navigate("/AllUsers"),
    },
    {
      text: "Professionals",
      quantity: 23,
      onClick: () => navigate("/AllProfessionals"),
    },
    {
      text: "Gyms",
      quantity: 52,
      onClick: () => navigate("/AllProfessionals"),
    },
    {
      text: "Products",
      quantity: 32,
      onClick: () => navigate("/AllProfessionals"),
    },
  ];
  return (
    <div className="cards mb-3">
      {Data.map((item, index) => {
        const { text, quantity, onClick } = item;
        return (
          <div key={index} className="caradx">
            <div button key={index} onClick={onClick}>
              <Card className="carad">
                <CardContent>
                  <h2
                    sx={{ mb: 1.5 }}
                    className="cardcontentone fw-bolder mt-4"
                  >
                    {item.text}
                  </h2>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", color: "" }}
                    className=""
                  >
                    {item.quantity}K
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}
