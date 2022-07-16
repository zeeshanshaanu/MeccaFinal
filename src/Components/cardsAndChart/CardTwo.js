import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardTwo() {
  const Data = [
    {
      text: "Total Sales",
      quantity: 29,
    },
    {
      text: "Total Orders",
      quantity: 123,
    },
    {
      text: "Revenue",
      quantity: 52,
    },
    {
      text: "Blogs",
      quantity: 32,
    },
  ];

  return (
    <div className="cards">
      {Data.map((item, index) => {
        return (
          <div key={index} className="caradx">
            <Card className="carad mt-2">
              <CardContent>
                <h2 sx={{ mb: 1.5 }} className="cardcontentone fw-bolder mt-4">
                  {item.text}
                </h2>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bolder", color: "" }}
                  className=""
                >
                  ${item.quantity}K
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
